# Wallet Routines Setup (Teammate Handoff)

This file is the handoff for the new wallet connect/disconnect routines.

## Who should use this

- Anyone pulling the latest `wallet` branch changes
- Anyone who already has the app/database running but needs the new wallet tables

## 1) Pull code and install dependencies

```bash
git pull
npm install
```

`npm install` is required because wallet-related package updates may be included.

## 2) Ensure local DB container is running

```bash
docker-compose up -d
```

## 3) Apply wallet table migration (local)

This migration is safe to re-run.

```bash
docker exec -i donovan-db mysql -udonovan_user -pdonovan_password donovan_db < database/migrations/wallet_routines_local.sql
```

## 4) Verify the DB changes

```bash
docker exec -it donovan-db mysql -udonovan_user -pdonovan_password donovan_db
```

Then run:

```sql
SHOW TABLES LIKE 'user_wallets';
SHOW COLUMNS FROM user_profiles LIKE 'connected_wallet_id';
```

## 5) Start app

```bash
npm run dev:full
```

## Optional: apply full schema from scratch

If this is a brand-new local DB, you can run full schema first:

```bash
docker exec -i donovan-db mysql -udonovan_user -pdonovan_password donovan_db < database/schema.sql
```

## Optional live server migration (not required yet)

When ready, use:

- `database/migrations/wallet_routines_hostinger.sql`

Run it via Hostinger phpMyAdmin/SQL console.

## Note for AI handoff

If you ask Copilot/AI to continue setup work, tell it to read:

- `WALLET_SETUP.md`
- `database/migrations/wallet_routines_local.sql`
- `database/migrations/wallet_routines_hostinger.sql`
