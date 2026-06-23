#!/bin/sh
set -e

echo "==> Starting entrypoint script..."

export PORT=${PORT:-8080}

# Generate nginx config dari template
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/http.d/default.conf

cd /var/www/html

if [ -z "$APP_KEY" ]; then
    echo "==> Generating APP_KEY..."
    php artisan key:generate --force
fi

echo "==> Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "==> Running migrations..."
php artisan migrate --force

echo "==> Linking storage..."
php artisan storage:link || true

chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

echo "==> App running on port $PORT"

# Queue worker di background
php artisan queue:work --sleep=3 --tries=3 --daemon &

# SSR server di background jika ada
if [ -f "/var/www/html/bootstrap/ssr/ssr.js" ]; then
    node /var/www/html/bootstrap/ssr/ssr.js &
fi

# Start PHP-FPM sebagai daemon
php-fpm -D

# Start nginx di foreground (proses utama)
exec nginx -g 'daemon off;'
