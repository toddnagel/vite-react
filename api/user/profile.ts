import type { VercelRequest, VercelResponse } from '@vercel/node';
import mysql from 'mysql2/promise';

// Reuse the same pool function from sync.ts
let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3308'),
      database: process.env.DB_NAME || 'donovan_db',
      user: process.env.DB_USER || 'donovan_user',
      password: process.env.DB_PASSWORD || 'donovan_password',
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
      waitForConnections: true,
      connectionLimit: 1,
      queueLimit: 0,
    });
  }
  return pool;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Get user profile
  if (req.method === 'GET') {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const auth0Id = req.query.auth0_id as string;
      if (!auth0Id) {
        return res.status(400).json({ error: 'Missing auth0_id' });
      }

      const pool = getPool();

      try {
        const [result] = await pool.execute(
          `SELECT u.*, up.bio, up.wallet_address, up.wallet_type, up.preferences
           FROM users u
           LEFT JOIN user_profiles up ON u.id = up.user_id
           WHERE u.auth0_id = ?`,
          [auth0Id]
        ) as [any[], any];

        if (!Array.isArray(result) || result.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json({ success: true, user: result[0] });
      } catch (dbError: any) {
        console.error('Database error:', dbError);
        return res.status(500).json({ error: 'Database error', details: dbError.message });
      }
    } catch (error: any) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  // Update user profile
  if (req.method === 'PUT') {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { auth0_id, bio } = req.body;

      if (!auth0_id) {
        return res.status(400).json({ error: 'Missing auth0_id' });
      }

      const pool = getPool();

      try {
        // First get the user ID
        const [userResult] = await pool.execute(
          'SELECT id FROM users WHERE auth0_id = ?',
          [auth0_id]
        ) as [any[], any];

        if (!Array.isArray(userResult) || userResult.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }

        const userId = userResult[0].id;

        // Update or insert user profile
        await pool.execute(
          `INSERT INTO user_profiles (user_id, bio, updated_at)
           VALUES (?, ?, CURRENT_TIMESTAMP)
           ON DUPLICATE KEY UPDATE bio = ?, updated_at = CURRENT_TIMESTAMP`,
          [userId, bio || null, bio || null]
        );

        // Get updated profile
        const [result] = await pool.execute(
          `SELECT u.*, up.bio, up.wallet_address, up.wallet_type, up.preferences
           FROM users u
           LEFT JOIN user_profiles up ON u.id = up.user_id
           WHERE u.id = ?`,
          [userId]
        ) as [any[], any];

        return res.status(200).json({ success: true, user: Array.isArray(result) && result.length > 0 ? result[0] : null });
      } catch (dbError: any) {
        console.error('Database error:', dbError);
        return res.status(500).json({ error: 'Database error', details: dbError.message });
      }
    } catch (error: any) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
