# Local Development Setup

## The Problem

The API routes (`/api/user/sync` and `/api/user/profile`) are Vercel serverless functions that don't work with Vite's dev server. You'll get 404 errors when trying to use them locally.

## Solution: Use Vercel CLI for Local Development

### Option 1: Use Vercel Dev (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -D vercel
   ```

2. **Run with Vercel Dev**:
   ```bash
   npm run dev:vercel
   ```
   
   This will:
   - Start Vite dev server on port 5173
   - Start Vercel serverless functions on port 3000
   - Proxy API requests automatically

3. **Access your app**: http://localhost:3000

### Option 2: Run Both Servers Separately

1. **Terminal 1** - Start Vite:
   ```bash
   npm run dev
   ```

2. **Terminal 2** - Start Vercel functions:
   ```bash
   npx vercel dev
   ```

3. **Update API base URL** in `.env.local`:
   ```
   VITE_API_BASE_URL=http://localhost:3000
   ```

## Environment Variables for Local Development

Create `.env.local`:
```env
# Database (Local MySQL Docker)
DB_HOST=localhost
DB_PORT=3308
DB_NAME=donovan_db
DB_USER=donovan_user
DB_PASSWORD=donovan_password

# API Base URL (for Vercel dev)
VITE_API_BASE_URL=http://localhost:3000
```

## Quick Start

1. Start MySQL database:
   ```bash
   docker-compose up -d
   ```

2. Start Vercel dev server:
   ```bash
   npm run dev:vercel
   ```

3. Open http://localhost:3000

## Troubleshooting

- **404 errors on `/api/*`**: Make sure you're using `vercel dev`, not just `vite`
- **Database connection errors**: Make sure MySQL container is running (`docker ps`)
- **Port conflicts**: Vercel dev uses port 3000 by default, Vite uses 5173
