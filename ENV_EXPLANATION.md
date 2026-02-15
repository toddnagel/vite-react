# Environment Variables Explanation

## The Problem

You have **Hostinger database credentials** in `.env.local`, but for **LOCAL development**, you need to use your **local Docker MySQL** database.

## Two Different Setups

### 1. LOCAL Development (.env.local)
Use **Docker MySQL** database:
```env
DB_HOST=localhost
DB_PORT=3308
DB_NAME=donovan_db          # ← Local Docker database
DB_USER=donovan_user        # ← Local Docker user
DB_PASSWORD=donovan_password # ← Local Docker password
```

### 2. PRODUCTION (Vercel Dashboard)
Use **Hostinger MySQL** database:
```env
DB_HOST=srv1630.hstgr.io
DB_PORT=3306
DB_NAME=u800797523_xolo_dojo  # ← Hostinger database
DB_USER=u800797523_xolodojo   # ← Hostinger user
DB_PASSWORD=XoloDojo2026      # ← Hostinger password
```

## Why This Matters

- **Local**: Your code runs on your computer → needs local Docker database
- **Production**: Your code runs on Vercel → needs Hostinger database
- **Vercel automatically uses** environment variables from Vercel dashboard (not .env.local)

## What To Do

### For Local Development:
1. Update `.env.local` to use **local Docker** credentials (see above)
2. Make sure Docker MySQL is running: `docker-compose up -d`
3. Run: `npm run dev:vercel`

### For Production:
1. Set Hostinger DB credentials in **Vercel Dashboard** (Settings → Environment Variables)
2. Deploy to Vercel
3. Vercel will use those credentials automatically

## Quick Fix for .env.local

Replace the DB_* lines in `.env.local` with:
```env
DB_HOST=localhost
DB_PORT=3308
DB_NAME=donovan_db
DB_USER=donovan_user
DB_PASSWORD=donovan_password
```

Then restart: `npm run dev:vercel`
