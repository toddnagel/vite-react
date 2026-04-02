# XoloGlobe Test Markers Seed

This seeds 15 shared test markers into the DB so everyone sees the same pins on XoloGlobe.

## Files

- SQL seed: `database/migrations/seed_xologlobe_test_pins.sql`

## What it does

- Creates/updates a seed user: `seed|xologlobe-test-markers`
- Writes 15 pinned markers across global coordinates, each with a short multi-line `pin_note` (globe popup description)
- Uses these image URLs from `public/`:
  - `/03c.jpg`
  - `/03a.jpg`
  - `/03b.jpg`
  - `/03.jpg`
  - `/01.jpg`
  - `/02a.jpg`
  - `/image.png`

## Run locally (Docker MySQL)

From repo root:

```bash
docker compose exec -T mysql mysql -udonovan_user -pdonovan_password donovan_db < database/migrations/seed_xologlobe_test_pins.sql
```

You should see `seeded_pin_count` return `15`.

## Verify in app

1. Run app/API (`npm run dev:full`)
2. Open XoloGlobe page
3. Confirm the 15 pins render

## Re-run behavior

- Safe to rerun.
- It overwrites only the seed user's `preferences.pinned_nfts` with the same 15 markers.

## Production / Vercel (same DB as local)

Deploying the app to Vercel does **not** run this SQL automatically. The API only reads what is already in `user_profiles.preferences`. After you verify locally:

1. Deploy as usual (frontend + serverless env vars unchanged).
2. Run the **same** seed file against the **production** MySQL instance (Hostinger, RDS, etc.):  
   - Use your host’s SQL console, or `mysql` from a trusted machine with the prod connection string (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, port — same variables Vercel uses).
3. Example (adjust user, host, and DB name):

   `mysql -h YOUR_HOST -u YOUR_USER -p YOUR_DB < database/migrations/seed_xologlobe_test_pins.sql`

No new tables or columns are required: `pin_note` is just another key inside the existing JSON array for each pin.

Before your real launch, remove test data (see below) or replace `pinned_nfts` for that seed user.

## Remove the seed markers

```bash
docker compose exec -T mysql mysql -udonovan_user -pdonovan_password donovan_db -e "DELETE up FROM user_profiles up JOIN users u ON u.id = up.user_id WHERE u.auth0_id = 'seed|xologlobe-test-markers'; DELETE FROM users WHERE auth0_id = 'seed|xologlobe-test-markers';"
```
