# Vercel Environment Variables Checklist

## Required Environment Variables for Production

Set these in your Vercel project settings (Settings → Environment Variables):

### Database Connection
```
DB_HOST=srv1630.hstgr.io
DB_PORT=3306
DB_NAME=u800797523_xolo_dojo
DB_USER=your_hostinger_db_user
DB_PASSWORD=your_hostinger_db_password
```

### Auth0 (Already Set)
```
VITE_AUTH0_DOMAIN=dev-ag8wzxltpwlcit7q.us.auth0.com
VITE_AUTH0_CLIENT_ID=IlD14gWW1LWL0EIRb8MQlhPHz7YoGawJ
```

### Mapbox (Already Set)
```
VITE_MAPBOX_ACCESS_TOKEN=your_token
VITE_MAPBOX_USERNAME=your_username
VITE_MAPBOX_STYLE_ID=your_style_id
```

## Important Notes

1. **DB_HOST**: Use `srv1630.hstgr.io` (the hostname) - this is preferred over the IP address
2. **DB_PORT**: `3306` is the standard MySQL port
3. **DB_NAME**: `u800797523_xolo_dojo` (from your Hostinger database)
4. **DB_USER**: Your Hostinger database username (usually starts with `u800797523_`)
5. **DB_PASSWORD**: Your Hostinger database password

## After Setting Variables

1. **Redeploy** your Vercel application for changes to take effect
2. Test the connection by logging in and editing your profile
3. Check Vercel function logs if you encounter any connection issues

## Testing Connection

Once deployed, test by:
1. Logging in → should create user in database
2. Editing profile bio → should save to database
3. Check Vercel function logs for any database errors
