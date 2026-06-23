#!/bin/bash
set -e

echo "==> Starting entrypoint script..."

# Railway/Render inject PORT — default 8080
export PORT=${PORT:-8080}

# Generate nginx config dari template (substitute $PORT)
mkdir -p /etc/nginx/sites-enabled
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/sites-enabled/default

cd /var/www/html

# Generate app key jika belum ada
if [ -z "$APP_KEY" ]; then
    echo "==> Generating APP_KEY..."
    php artisan key:generate --force
fi

# Cache untuk production
echo "==> Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations
echo "==> Running migrations..."
php artisan migrate --force

# Storage link
echo "==> Linking storage..."
php artisan storage:link || true

# Fix permissions
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

echo "==> App running on port $PORT"

# Jalankan queue worker di background
php artisan queue:work --sleep=3 --tries=3 --daemon &

# Jalankan SSR server di background jika ada
if [ -f "/var/www/html/bootstrap/ssr/ssr.js" ]; then
    node /var/www/html/bootstrap/ssr/ssr.js &
fi

# Start PHP-FPM + Nginx via supervisord bawaan image
exec /init
