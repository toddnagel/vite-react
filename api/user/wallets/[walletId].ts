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
  // walletId may be passed via query or as part of path; VercelRequest sometimes puts params in query
  let walletId = req.query.walletId as string;
  if (!walletId) {
    // try to extract from URL manually
    const match = req.url?.match(/\/wallets\/([^\/]+)/);
    if (match) walletId = match[1];
  }

  // Connect a wallet (set as active)
  if (req.url?.includes('/connect') && req.method === 'PUT') {
    try {
      const { auth0_id } = req.body;
      console.log(
        'CONNECT HANDLER: walletId param:',
        walletId,
        'body auth0_id:',
        auth0_id
      );
      if (!auth0_id) {
        return res.status(400).json({ error: 'Missing auth0_id' });
      }

      // Get user ID
      const [userResult] = (await pool.execute(
        'SELECT id FROM users WHERE auth0_id = ?',
        [auth0_id]
      )) as [any[], any];

      console.log('CONNECT HANDLER: userResult:', userResult);

      if (!Array.isArray(userResult) || userResult.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userId = userResult[0].id;

      console.log('CONNECT HANDLER: resolved userId:', userId);

      // Verify wallet belongs to user
      const [wallet] = (await pool.execute(
        'SELECT id FROM user_wallets WHERE id = ? AND user_id = ?',
        [walletId, userId]
      )) as [any[], any];

      console.log('CONNECT HANDLER: wallet lookup result:', wallet);

      if (!Array.isArray(wallet) || wallet.length === 0) {
        return res.status(404).json({ error: 'Wallet not found' });
      }

      // First, disconnect all wallets for this user
      await pool.execute(
        'UPDATE user_wallets SET is_connected = false WHERE user_id = ?',
        [userId]
      );

      // Then connect the selected wallet
      await pool.execute(
        'UPDATE user_wallets SET is_connected = true WHERE id = ? AND user_id = ?',
        [walletId, userId]
      );

      // Get updated wallet
      const [updatedWallet] = (await pool.execute(
        'SELECT * FROM user_wallets WHERE id = ?',
        [walletId]
      )) as [any[], any];

      return res.status(200).json({
        success: true,
        wallet:
          Array.isArray(updatedWallet) && updatedWallet.length > 0
            ? updatedWallet[0]
            : null,
        message: 'Wallet connected',
      });
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      return res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  }

  // Delete a wallet
  if (req.method === 'DELETE') {
    try {
      const { auth0_id } = req.body;
      if (!auth0_id) {
        return res.status(400).json({ error: 'Missing auth0_id' });
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

      // Delete wallet (verify it belongs to user)
      const [result] = (await pool.execute(
        'DELETE FROM user_wallets WHERE id = ? AND user_id = ?',
        [walletId, userId]
      )) as [any, any];

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Wallet not found' });
      }

      return res.status(200).json({
        success: true,
        message: 'Wallet deleted successfully',
      });
    } catch (error: any) {
      console.error('Error deleting wallet:', error);
      return res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
