# Fix Local Development Issues

## Problem
- Can't save profile field locally
- API routes returning 404
- Environment variables might be wrong

## Solution

### Step 1: Fix Environment Variables

Your `.env.local` is now set up for **local development** with:
- Local Docker MySQL database (port 3308)
- Correct Auth0 and Mapbox credentials

### Step 2: Start Local MySQL Database

```bash
docker-compose up -d
```

Verify it's running:
```bash
docker ps | grep donovan-db
```

### Step 3: Create Local Database Tables

```bash
docker exec -i donovan-db mysql -u donovan_user -pdonovan_password donovan_db < database/schema.sql
```

Verify tables:
```bash
docker exec donovan-db mysql -u donovan_user -pdonovan_password donovan_db -e "SHOW TABLES;"
```

### Step 4: Start Development Server with Vercel

**IMPORTANT**: You must use `vercel dev` to run API routes locally!

```bash
npm run dev:vercel
```

This will:
- Start Vite on port 5173
- Start Vercel serverless functions
- Proxy everything through port 3000

**Access your app at**: http://localhost:3000

### Step 5: Test

1. Open http://localhost:3000
2. Log in with Auth0
3. Go to Profile page
4. Edit bio field
5. Click Save

## Why This Works

- **Vercel Dev** runs both Vite and serverless functions
- **Local MySQL** (Docker) handles database requests
- **Environment variables** point to local database
- **API routes** (`/api/user/*`) work through Vercel dev

## Common Issues

### "404 on /api/user/sync"
- Make sure you're using `npm run dev:vercel`, not `npm run dev`
- Check that Vercel CLI is installed: `npm list vercel`

### "Database connection error"
- Make sure MySQL container is running: `docker ps`
- Check `.env.local` has correct local DB credentials
- Verify tables exist: `docker exec donovan-db mysql -u donovan_user -pdonovan_password donovan_db -e "SHOW TABLES;"`

### "Can't connect to database"
- Restart MySQL: `docker-compose restart`
- Check port 3308 is not in use: `lsof -i :3308`

## Quick Checklist

- [ ] MySQL container running (`docker ps`)
- [ ] Database tables created (`SHOW TABLES`)
- [ ] `.env.local` has local DB credentials
- [ ] Running `npm run dev:vercel` (not `npm run dev`)
- [ ] Accessing app at http://localhost:3000
