import type { VercelRequest, VercelResponse } from '@vercel/node';
import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3308'),
      database: process.env.DB_NAME || 'donovan_db',
      user: process.env.DB_USER || 'donovan_user',
      password: process.env.DB_PASSWORD || 'donovan_password',
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : undefined,
      waitForConnections: true,
      connectionLimit: 1,
      queueLimit: 0,
    });
  }
  return pool;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const pool = getPool();

  // Get all wallets for a user
  if (req.method === 'GET') {
    try {
      const auth0Id = Array.isArray(req.query.auth0_id)
        ? req.query.auth0_id[0]
        : req.query.auth0_id;
      if (!auth0Id) {
        return res.status(400).json({ error: 'Missing auth0_id' });
      }

      const [result] = (await pool.execute(
        `SELECT uw.* FROM user_wallets uw
         JOIN users u ON uw.user_id = u.id
         WHERE u.auth0_id = ?
         ORDER BY uw.updated_at DESC`,
        [auth0Id]
      )) as [any[], any];

      return res.status(200).json({
        success: true,
        wallets: Array.isArray(result) ? result : [],
      });
    } catch (error: any) {
      console.error('Error fetching wallets:', error);
      return res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  }

  // Add a new wallet
  if (req.method === 'POST') {
    try {
      const { auth0_id, wallet_address, wallet_type } = req.body;
      if (!auth0_id || !wallet_address || !wallet_type) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Get user ID
      const [userResult] = (await pool.execute(
        'SELECT id FROM users WHERE auth0_id = ?',
        [auth0_id]
      )) as [any[], any];

      if (!Array.isArray(userResult) || userResult.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userId = userResult[0].id;

      // Check if wallet already exists
      const [existingWallet] = (await pool.execute(
        'SELECT id FROM user_wallets WHERE user_id = ? AND wallet_address = ?',
        [userId, wallet_address]
      )) as [any[], any];

      if (Array.isArray(existingWallet) && existingWallet.length > 0) {
        return res
          .status(409)
          .json({ error: 'Wallet already exists for this user' });
      }

      // Insert new wallet (default: is_connected = false)
      const [insertResult] = (await pool.execute(
        `INSERT INTO user_wallets (user_id, wallet_address, wallet_type, is_connected)
         VALUES (?, ?, ?, false)`,
        [userId, wallet_address, wallet_type]
      )) as [any, any];

      // Get the inserted wallet
      const [newWallet] = (await pool.execute(
        'SELECT * FROM user_wallets WHERE id = ?',
        [insertResult.insertId]
      )) as [any[], any];

      return res.status(201).json({
        success: true,
        wallet:
          Array.isArray(newWallet) && newWallet.length > 0
            ? newWallet[0]
            : null,
        message: 'Wallet added successfully',
      });
    } catch (error: any) {
      console.error('Error adding wallet:', error);
      return res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
