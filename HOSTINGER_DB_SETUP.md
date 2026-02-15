# Finding Your Hostinger PostgreSQL Database Connection Details

## Step-by-Step Guide

### 1. Log into Hostinger Control Panel
- Go to: https://hpanel.hostinger.com
- Log in with your Hostinger account

### 2. Navigate to Databases
- In the left sidebar, click on **"Databases"**
- Or go to: **"Advanced"** → **"Databases"**

### 3. Find PostgreSQL Database
- Look for **"PostgreSQL Databases"** section
- If you don't have one yet, you may need to create it first
- Click on your PostgreSQL database name

### 4. View Connection Details
You should see:
- **Host/Hostname**: Usually something like:
  - `postgres.hostinger.com`
  - `postgresql.hostinger.com`
  - Or a specific hostname like `postgres123456.hostinger.com`
- **Port**: Usually `5432` for PostgreSQL
- **Database Name**: Your database name
- **Username**: Your database username
- **Password**: Your database password (you may need to reset it if you don't know it)

## Alternative: Check via phpPgAdmin or Database Manager

1. In Hostinger control panel, look for **"phpPgAdmin"** or **"Database Manager"**
2. Click on it to open the database management interface
3. The connection details are usually shown in the interface or in the URL

## Common Hostinger PostgreSQL Hostnames

- `postgres.hostinger.com`
- `postgresql.hostinger.com`
- `localhost` (if database is on same server as your website)

## If You Can't Find PostgreSQL

If you only see MySQL databases:
1. You may need to **upgrade your Hostinger plan** (PostgreSQL is available on Business and higher plans)
2. Or you may need to **create a PostgreSQL database** first
3. Check your Hostinger plan features to see if PostgreSQL is included

## Example Connection Details Format

For your Hostinger MySQL database:
```
DB_HOST=srv1630.hstgr.io
DB_PORT=3306
DB_NAME=u800797523_xolo_dojo
DB_USER=your_hostinger_db_user
DB_PASSWORD=your_hostinger_db_password
```

**Note**: Your MySQL server hostname is `srv1630.hstgr.io` (or IP: `153.92.15.30`)

## For Your Domain (xolodojo.io)

Since your domain is `xolodojo.io`, your database details might be:
- Database name might contain: `xolodojo` or your account ID
- Username might be: `u[account_id]_[username]`
- Host might be: `postgres.hostinger.com` or similar

## Still Can't Find It?

1. **Contact Hostinger Support** - They can provide your exact PostgreSQL connection details
2. **Check Hostinger Documentation** - Look for "PostgreSQL" or "Database" in their help center
3. **Check Your Hosting Plan** - Make sure PostgreSQL is available on your plan

## Quick Test

Once you have the details, you can test the connection locally:
```bash
psql -h [DB_HOST] -p [DB_PORT] -U [DB_USER] -d [DB_NAME]
```

Or use a PostgreSQL client like pgAdmin, DBeaver, or TablePlus.
