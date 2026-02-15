# MySQL Setup Complete

## What Changed

We've switched from PostgreSQL to MySQL to match your Hostinger production database.

## Local Development

### Database Connection (Local)
- **Host**: `localhost`
- **Port**: `3308` (external, container uses 3306 internally)
- **Database**: `donovan_db`
- **User**: `donovan_user`
- **Password**: `donovan_password`

### Start Local Database
```bash
docker-compose up -d
```

### Create Schema
```bash
docker exec -i donovan-db mysql -u donovan_user -pdonovan_password donovan_db < database/schema.sql
```

Or connect manually:
```bash
docker exec -it donovan-db mysql -u donovan_user -pdonovan_password donovan_db
```

## Production (Hostinger)

### Database Connection (Production)
Based on your Hostinger setup:
- **Host**: `srv1630.hstgr.io` (or IP: `153.92.15.30`)
- **Port**: `3306`
- **Database**: `u800797523_xolo_dojo`
- **User**: Your Hostinger database username
- **Password**: Your Hostinger database password

### Vercel Environment Variables
Set these in Vercel:
```
DB_HOST=srv1630.hstgr.io
DB_PORT=3306
DB_NAME=u800797523_xolo_dojo
DB_USER=your_hostinger_db_user
DB_PASSWORD=your_hostinger_db_password
```

**Note**: Use the hostname `srv1630.hstgr.io` (preferred) or the IP `153.92.15.30` if needed.

## Key Differences from PostgreSQL

1. **Parameter Placeholders**: Changed from `$1, $2` to `?` (MySQL style)
2. **Auto Increment**: Changed from `SERIAL` to `AUTO_INCREMENT`
3. **ON CONFLICT**: Changed from `ON CONFLICT ... DO UPDATE` to `ON DUPLICATE KEY UPDATE`
4. **JSON**: MySQL uses `JSON` type (similar to PostgreSQL's `JSONB`)
5. **Connection**: Using `mysql2` package instead of `pg`

## Testing

1. Start local MySQL: `docker-compose up -d`
2. Create schema: `docker exec -i donovan-db mysql -u donovan_user -pdonovan_password donovan_db < database/schema.sql`
3. Test login → should create user in database
4. Test profile edit → should save bio to database

## Notes

- Local database uses port **3308** externally (to avoid conflicts)
- Production uses port **3306** (standard MySQL port)
- All API endpoints now use MySQL syntax
- Schema is compatible with both local and production MySQL
