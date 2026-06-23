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

echo "==> Seeding database if empty..."
COMPETITION_COUNT=$(php artisan tinker --execute="echo \App\Models\Competitions::count();" 2>/dev/null | tail -1)
if [ "$COMPETITION_COUNT" = "0" ] || [ -z "$COMPETITION_COUNT" ]; then
    echo "==> Database kosong, menjalankan seeder..."
    php artisan db:seed --force
else
    echo "==> Data sudah ada ($COMPETITION_COUNT competitions), skip seeding."
fi

echo "==> Linking storage..."
php artisan storage:link || true

chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

echo "==> App running on port $PORT"

# Queue worker di background
php artisan queue:work --sleep=3 --tries=3 --daemon &

# SSR disabled — banyak komponen menggunakan window langsung, tidak kompatibel SSR

# Start PHP-FPM sebagai daemon
php-fpm -D

# Start nginx di foreground (proses utama)
exec nginx -g 'daemon off;'
