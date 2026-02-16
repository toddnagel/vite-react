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
  // Debug endpoint to check environment variables (remove in production)
  const debugParam = Array.isArray(req.query.debug) ? req.query.debug[0] : req.query.debug;
  const testParam = Array.isArray(req.query.test) ? req.query.test[0] : req.query.test;
  
  if (req.method === 'GET' && debugParam === 'env') {
    return res.json({
      hasDB_HOST: !!process.env.DB_HOST,
      hasDB_PORT: !!process.env.DB_PORT,
      hasDB_NAME: !!process.env.DB_NAME,
      hasDB_USER: !!process.env.DB_USER,
      hasDB_PASSWORD: !!process.env.DB_PASSWORD,
      DB_HOST: process.env.DB_HOST ? `${process.env.DB_HOST.substring(0, 3)}***` : 'missing',
      DB_PORT: process.env.DB_PORT || 'missing',
      DB_NAME: process.env.DB_NAME ? '***set***' : 'missing',
      DB_USER: process.env.DB_USER ? '***set***' : 'missing',
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      queryParams: req.query // Debug: show all query params
    });
  }

  // Test database connection endpoint
  if (req.method === 'GET' && testParam === 'connection') {
    try {
      const pool = getPool();
      await pool.execute('SELECT 1 as test');
      return res.json({ 
        success: true, 
        message: 'Database connection successful',
        config: {
          host: process.env.DB_HOST ? `${process.env.DB_HOST.substring(0, 3)}***` : 'missing',
          port: process.env.DB_PORT || 'missing',
          database: process.env.DB_NAME ? '***set***' : 'missing',
          user: process.env.DB_USER ? '***set***' : 'missing'
        }
      });
    } catch (error: any) {
      console.error('Connection test error:', error);
      return res.status(500).json({ 
        success: false,
        error: 'Connection failed', 
        details: error.message,
        code: error.code,
        errno: error.errno
      });
    }
  }

  // Get user profile
  if (req.method === 'GET') {
    try {
      // Authorization is optional for local development
      const authHeader = req.headers.authorization;
      // Note: In production, you should verify the Auth0 token here
      
      const auth0Id = req.query.auth0_id as string;
      if (!auth0Id) {
        return res.status(400).json({ error: 'Missing auth0_id', query: req.query });
      }
      
      console.log('API: Getting profile for auth0_id:', auth0Id);

      const pool = getPool();
      const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '3308',
        database: process.env.DB_NAME || 'donovan_db',
        user: process.env.DB_USER || 'donovan_user',
        hasPassword: !!process.env.DB_PASSWORD,
        nodeEnv: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV
      };
      console.log('API: Connecting to database:', dbConfig);
      console.log('API: Environment check:', {
        hasDB_HOST: !!process.env.DB_HOST,
        hasDB_PORT: !!process.env.DB_PORT,
        hasDB_NAME: !!process.env.DB_NAME,
        hasDB_USER: !!process.env.DB_USER,
        hasDB_PASSWORD: !!process.env.DB_PASSWORD
      });

      try {
        const [result] = await pool.execute(
          `SELECT u.*, up.bio, up.wallet_address, up.wallet_type, up.preferences
           FROM users u
           LEFT JOIN user_profiles up ON u.id = up.user_id
           WHERE u.auth0_id = ?`,
          [auth0Id]
        ) as [any[], any];

        console.log('API: Query result:', { found: Array.isArray(result) && result.length > 0, count: Array.isArray(result) ? result.length : 0 });

        if (!Array.isArray(result) || result.length === 0) {
          console.log('API: User not found in database');
          return res.status(404).json({ error: 'User not found' });
        }

        console.log('API: Returning user data');
        return res.status(200).json({ success: true, user: result[0] });
      } catch (dbError: any) {
        console.error('API: Database error:', dbError);
        console.error('API: Database error details:', {
          message: dbError.message,
          code: dbError.code,
          errno: dbError.errno,
          sqlState: dbError.sqlState,
          sqlMessage: dbError.sqlMessage,
          stack: dbError.stack
        });
        console.error('API: Database config at error time:', {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          hasPassword: !!process.env.DB_PASSWORD
        });
        return res.status(500).json({ 
          error: 'Database error', 
          details: dbError.message,
          code: dbError.code,
          // Only include sensitive info in development
          ...(process.env.NODE_ENV !== 'production' && {
            config: {
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              database: process.env.DB_NAME,
              user: process.env.DB_USER
            }
          })
        });
      }
    } catch (error: any) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  // Update user profile
  if (req.method === 'PUT') {
    try {
      // Authorization is optional for local development
      const authHeader = req.headers.authorization;
      // Note: In production, you should verify the Auth0 token here
      
      const { auth0_id, bio } = req.body;
      console.log('API: Updating profile for auth0_id:', auth0_id);

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
