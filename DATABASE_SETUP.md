# Database Setup Guide

## Overview

This project uses **Auth0 for authentication** and a **custom database for user profiles and application data**.

### Architecture
- **Auth0**: Handles user authentication (login, signup, logout)
- **Your Database**: Stores user profiles, preferences, wallet connections, and other app-specific data
- **Link**: Use Auth0's `user.sub` (user ID) as the primary key in your database

---

## Database Options

### Recommended: PostgreSQL
- Works well with Hostinger
- Great for complex queries
- Good performance
- Supports JSON columns for flexible data

### Alternative: MySQL
- Also supported by Hostinger
- Simpler for basic needs
- Good performance

---

## Local Development Setup

### Option 1: Docker (Recommended)

Create a `docker-compose.yml` file to run PostgreSQL locally:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    container_name: donovan-db
    environment:
      POSTGRES_USER: donovan_user
      POSTGRES_PASSWORD: donovan_password
      POSTGRES_DB: donovan_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Start database:**
```bash
docker-compose up -d
```

**Stop database:**
```bash
docker-compose down
```

### Option 2: Local PostgreSQL Installation

1. Install PostgreSQL on your machine
2. Create a database:
```sql
CREATE DATABASE donovan_db;
CREATE USER donovan_user WITH PASSWORD 'donovan_password';
GRANT ALL PRIVILEGES ON DATABASE donovan_db TO donovan_user;
```

---

## Database Schema Example

### Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth0_id VARCHAR(255) UNIQUE NOT NULL,  -- Auth0 user.sub
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  picture_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_auth0_id ON users(auth0_id);
```

### User Profiles Table (Extended)

```sql
CREATE TABLE user_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  wallet_address VARCHAR(255),
  wallet_type VARCHAR(50),  -- 'metamask', 'coinbase', etc.
  preferences JSONB,  -- Store flexible preferences
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_id ON user_profiles(user_id);
```

---

## Environment Variables

### Local Development (.env.local)

```env
# Database (Local)
VITE_DB_HOST=localhost
VITE_DB_PORT=5432
VITE_DB_NAME=donovan_db
VITE_DB_USER=donovan_user
VITE_DB_PASSWORD=donovan_password

# Database (Production - Hostinger)
# VITE_DB_HOST=your-hostinger-db-host
# VITE_DB_PORT=3306  # or 5432 for PostgreSQL
# VITE_DB_NAME=your_db_name
# VITE_DB_USER=your_db_user
# VITE_DB_PASSWORD=your_db_password
```

### Vercel Environment Variables

Add these in Vercel dashboard:
- `VITE_DB_HOST` - Your Hostinger database host
- `VITE_DB_PORT` - Database port (3306 for MySQL, 5432 for PostgreSQL)
- `VITE_DB_NAME` - Database name
- `VITE_DB_USER` - Database username
- `VITE_DB_PASSWORD` - Database password

**Note**: For security, database connections should be made from a **backend API**, not directly from the frontend. See "Backend API Setup" below.

---

## Backend API Setup

Since this is a React frontend, you'll need a **backend API** to connect to your database. Options:

### Option 1: Node.js/Express API (Recommended)

Create a separate backend project or add API routes:

**Example API structure:**
```
backend/
  ├── server.js
  ├── routes/
  │   ├── users.js
  │   └── profile.js
  ├── db/
  │   └── connection.js
  └── middleware/
      └── auth.js
```

**Example API endpoint:**
```javascript
// GET /api/user/profile
// Requires Auth0 token in header
app.get('/api/user/profile', authenticateToken, async (req, res) => {
  const auth0Id = req.user.sub; // From Auth0 token
  const user = await db.query(
    'SELECT * FROM users WHERE auth0_id = $1',
    [auth0Id]
  );
  res.json(user);
});
```

### Option 2: Vercel Serverless Functions

Create API routes in your Vite project:

```
src/
  └── api/
      ├── user/
      │   └── profile.ts
      └── db/
          └── client.ts
```

### Option 3: Hostinger Backend

Deploy your backend API on Hostinger alongside your database.

---

## Connecting to Hostinger Database

### From Local Development

1. Get your Hostinger database credentials from Hostinger control panel
2. Update `.env.local` with Hostinger connection details
3. Use a VPN or allow your IP in Hostinger database settings (if required)

### From Vercel

1. Add Hostinger database credentials to Vercel environment variables
2. Your backend API (deployed on Vercel or Hostinger) will connect using these credentials

---

## Database Migration Strategy

### Development → Production

1. **Local**: Develop and test with Docker/local database
2. **Staging**: Use a separate Hostinger database for testing
3. **Production**: Use your main Hostinger database

### Migration Tools

- **PostgreSQL**: Use `pg_dump` and `psql` for migrations
- **MySQL**: Use `mysqldump` and `mysql` for migrations
- **ORM Tools**: Consider Prisma, TypeORM, or Sequelize for easier migrations

---

## Next Steps

1. **Choose your database** (PostgreSQL recommended)
2. **Set up local database** (Docker recommended)
3. **Create database schema** (use examples above)
4. **Set up backend API** (Node.js/Express or Vercel functions)
5. **Create API endpoints** for user profile CRUD operations
6. **Update frontend** to call API endpoints instead of using Auth0 data directly

---

## Security Notes

⚠️ **Important**: Never expose database credentials in frontend code!

- Database connections should only be made from backend APIs
- Use environment variables for all database credentials
- Validate Auth0 tokens on backend before database operations
- Use parameterized queries to prevent SQL injection
- Enable SSL/TLS for database connections in production

---

## Resources

- [Auth0 User Metadata](https://auth0.com/docs/manage-users/user-accounts/metadata)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [Hostinger Database Setup](https://www.hostinger.com/tutorials/how-to-create-mysql-database)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
