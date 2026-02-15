# Hostinger Database Setup Guide

## Step 1: Access Your Hostinger Database

### Option A: Via phpMyAdmin (Easiest)

1. Log into **Hostinger Control Panel** (hpanel.hostinger.com)
2. Go to **Databases** → **phpMyAdmin**
3. Click on your database: **u800797523_xolo_dojo**
4. Click on the **SQL** tab at the top
5. Copy and paste the contents of `database/hostinger_setup.sql`
6. Click **Go** to execute

### Option B: Via MySQL Command Line

If you have SSH access:
```bash
mysql -h srv1630.hstgr.io -u u800797523_xolodojo -p u800797523_xolo_dojo < database/hostinger_setup.sql
```

### Option C: Via MySQL Workbench or DBeaver

1. Connect to your Hostinger database:
   - Host: `srv1630.hstgr.io`
   - Port: `3306`
   - Database: `u800797523_xolo_dojo`
   - User: `u800797523_xolodojo`
   - Password: `XoloDojo2026`

2. Open the SQL script: `database/hostinger_setup.sql`
3. Execute it

## Step 2: Verify Tables Were Created

After running the script, verify with:

```sql
SHOW TABLES;
```

You should see:
- `users`
- `user_profiles`

## Step 3: Check Table Structure

```sql
DESCRIBE users;
DESCRIBE user_profiles;
```

## What These Tables Do

### `users` Table
- Stores basic user information from Auth0
- Links Auth0 user ID (`auth0_id`) to your database
- Contains: email, name, picture URL
- Auto-updates `updated_at` timestamp

### `user_profiles` Table
- Stores extended user data
- Contains: bio, wallet address, wallet type, preferences (JSON)
- Linked to `users` table via `user_id`
- One profile per user (enforced by UNIQUE constraint)

## Troubleshooting

### Error: "Table already exists"
- This is fine! The script uses `CREATE TABLE IF NOT EXISTS`
- Your tables are already set up

### Error: "Access denied"
- Check your database username and password
- Make sure you're using the correct database name

### Error: "Foreign key constraint fails"
- Make sure `users` table is created first
- The `user_profiles` table references `users`

## Next Steps

After creating the tables:
1. Test locally first (with Docker MySQL)
2. Deploy to Vercel
3. Test on production (should connect to Hostinger database)
