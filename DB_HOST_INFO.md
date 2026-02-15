# DB_HOST Information

## What is DB_HOST?

`DB_HOST` is the **hostname or IP address** of your database server. This tells your application where to find the database.

## For Hostinger:

1. **Log into your Hostinger control panel** (hpanel.hostinger.com)
2. Go to **Databases** → **MySQL Databases** (or PostgreSQL if you're using that)
3. Find your database in the list
4. Look for the **Host** or **Server** field - this is your `DB_HOST`

Common Hostinger database hostnames:
- `localhost` (if database is on same server)
- `mysql.hostinger.com` (for MySQL)
- `postgres.hostinger.com` (for PostgreSQL)
- Or a specific hostname like `db123456.hostinger.com`

## Example:

If your Hostinger database host is `mysql.hostinger.com`, then:
```
DB_HOST=mysql.hostinger.com
```

## Complete Example for Vercel:

```
DB_HOST=mysql.hostinger.com
DB_PORT=3306
DB_NAME=u123456789_mydb
DB_USER=u123456789_dbuser
DB_PASSWORD=your_secure_password
```

**Note**: Make sure to use the exact hostname/IP provided by Hostinger in your database settings.
