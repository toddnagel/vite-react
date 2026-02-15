# Database Setup

## Quick Start

### 1. Start Local Database (Docker)

```bash
docker-compose up -d
```

### 2. Create Database Schema

```bash
# Connect to database
docker exec -it donovan-db psql -U donovan_user -d donovan_db

# Or run the schema file
docker exec -i donovan-db psql -U donovan_user -d donovan_db < database/schema.sql
```

### 3. Verify Database

```bash
# Connect to database
docker exec -it donovan-db psql -U donovan_user -d donovan_db

# List tables
\dt

# Exit
\q
```

## Database Connection

**Local Development:**
- Host: `localhost`
- Port: `5433` (Note: Changed from 5432 to avoid conflict with other PostgreSQL instances)
- Database: `donovan_db`
- User: `donovan_user`
- Password: `donovan_password`

**Production (Hostinger):**
- Update environment variables with Hostinger credentials
- Use backend API to connect (never connect directly from frontend)

## Useful Commands

```bash
# View database logs
docker logs donovan-db

# Stop database
docker-compose down

# Stop and remove data
docker-compose down -v

# Restart database
docker-compose restart
```
