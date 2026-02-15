# Database Credentials - Where They Go

## ❌ NO - Don't Use Hostinger Credentials Locally

The Hostinger credentials you showed:
```
DB_NAME=u800797523_xolo_dojo
DB_USER=u800797523_xolodojo
DB_PASSWORD=XoloDojo2026
```

These are for **PRODUCTION ONLY** (Vercel).

## ✅ Correct Setup

### 1. LOCAL Development (.env.local)

Use **Docker MySQL** credentials:
```env
DB_HOST=localhost
DB_PORT=3308
DB_NAME=donovan_db
DB_USER=donovan_user
DB_PASSWORD=donovan_password
```

**Why?** Because you're running a local Docker MySQL container, not connecting to Hostinger.

### 2. PRODUCTION (Vercel Dashboard)

Use **Hostinger MySQL** credentials:
```env
DB_HOST=srv1630.hstgr.io
DB_PORT=3306
DB_NAME=u800797523_xolo_dojo
DB_USER=u800797523_xolodojo
DB_PASSWORD=XoloDojo2026
```

**Where?** Vercel Dashboard → Settings → Environment Variables

**Why?** Because Vercel servers need to connect to your Hostinger database.

## Summary

| Location | Database | Credentials |
|----------|----------|-------------|
| `.env.local` | Docker MySQL (local) | `donovan_db`, `donovan_user`, `donovan_password` |
| Vercel Dashboard | Hostinger MySQL (production) | `u800797523_xolo_dojo`, `u800797523_xolodojo`, `XoloDojo2026` |

## What To Do Now

1. **Update `.env.local`** → Use Docker credentials (see above)
2. **Add to Vercel Dashboard** → Use Hostinger credentials (see above)
3. **Restart dev server**: `npm run dev:vercel`
