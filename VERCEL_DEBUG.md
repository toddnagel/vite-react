# Vercel Debugging Guide

## Database Error Troubleshooting

If you're getting "Database error" in Vercel but it works locally, follow these steps:

### 1. Check Vercel Environment Variables

Go to your Vercel project → Settings → Environment Variables

**Required variables:**
- `DB_HOST` - Your Hostinger MySQL host (e.g., `mysql.hostinger.com` or IP address)
- `DB_PORT` - Usually `3306` for MySQL (NOT `3308` - that's only for local Docker)
- `DB_NAME` - Your database name from Hostinger
- `DB_USER` - Your database username from Hostinger
- `DB_PASSWORD` - Your database password from Hostinger

**Important:** 
- These should NOT have `VITE_` prefix (those are only for frontend)
- Make sure they're set for **Production** environment (or All environments)

### 2. Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project → **Deployments**
2. Click on the latest deployment
3. Click **Functions** tab
4. Click on `/api/user/profile` or `/api/user/sync`
5. Check the **Logs** tab for error messages

Look for:
- Connection errors (ECONNREFUSED, ETIMEDOUT)
- Authentication errors (Access denied)
- Database not found errors
- SSL/TLS errors

### 3. Common Issues

#### Issue: "ECONNREFUSED" or "ETIMEDOUT"
**Cause:** Database host/port is wrong or database is not accessible from Vercel

**Fix:**
- Verify `DB_HOST` is correct (check Hostinger cPanel)
- Check if Hostinger allows external connections (some hosts block external MySQL)
- Verify `DB_PORT` is `3306` (not `3308`)

#### Issue: "Access denied for user"
**Cause:** Wrong username/password

**Fix:**
- Double-check `DB_USER` and `DB_PASSWORD` in Vercel
- Make sure there are no extra spaces or quotes
- Verify credentials in Hostinger cPanel

#### Issue: "Unknown database"
**Cause:** Database name is wrong

**Fix:**
- Check exact database name in Hostinger cPanel
- Make sure `DB_NAME` matches exactly (case-sensitive)

#### Issue: SSL/TLS errors
**Cause:** Hostinger might require SSL connections

**Fix:**
- The code already sets `ssl: { rejectUnauthorized: false }` in production
- If still failing, check Hostinger's SSL requirements

### 4. Test Database Connection

You can test the connection by temporarily adding a test endpoint:

```typescript
// Add to api/user/profile.ts temporarily
if (req.method === 'GET' && req.query.test === 'connection') {
  try {
    const pool = getPool();
    await pool.execute('SELECT 1');
    return res.json({ success: true, message: 'Database connection successful' });
  } catch (error: any) {
    return res.status(500).json({ 
      error: 'Connection failed', 
      details: error.message,
      code: error.code 
    });
  }
}
```

Then visit: `https://your-app.vercel.app/api/user/profile?test=connection`

### 5. Check Browser Console

In your Vercel app, open browser DevTools → Console and look for:
- The detailed error message from `profileService.ts`
- Network tab → Check the `/api/user/profile` request → Response tab

The error response should include:
- `error`: "Database error"
- `details`: The actual MySQL error message
- `code`: MySQL error code (helps identify the issue)

### 6. Verify Database Tables Exist

Make sure you've run the schema on your Hostinger database:

```sql
-- Connect to Hostinger MySQL via phpMyAdmin or MySQL client
-- Run the contents of database/schema.sql
```

### 7. Network/Firewall Issues

Some hosting providers block external MySQL connections. Check:
- Hostinger cPanel → Remote MySQL → Add Vercel's IP ranges
- Or use Hostinger's allowed hosts feature
- Contact Hostinger support if needed

### 8. Quick Debug Endpoint

Add this temporarily to see what environment variables are being used:

```typescript
// In api/user/profile.ts, add before the GET handler:
if (req.method === 'GET' && req.query.debug === 'env') {
  return res.json({
    hasDB_HOST: !!process.env.DB_HOST,
    hasDB_PORT: !!process.env.DB_PORT,
    hasDB_NAME: !!process.env.DB_NAME,
    hasDB_USER: !!process.env.DB_USER,
    hasDB_PASSWORD: !!process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST ? '***set***' : 'missing',
    DB_PORT: process.env.DB_PORT || 'missing',
    DB_NAME: process.env.DB_NAME ? '***set***' : 'missing',
    DB_USER: process.env.DB_USER ? '***set***' : 'missing',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV
  });
}
```

Visit: `https://your-app.vercel.app/api/user/profile?debug=env`

## Next Steps

1. Check Vercel logs first (most important!)
2. Verify all environment variables are set
3. Test database connection from Hostinger cPanel
4. Check if Hostinger allows external MySQL connections
