#!/bin/bash
set -e

echo "==> Starting entrypoint script..."

# Create log directory for supervisor
mkdir -p /var/log/supervisor

# Generate app key if not set
if [ -z "$APP_KEY" ]; then
    echo "==> Generating APP_KEY..."
    php artisan key:generate --force
fi

# Cache config & routes for production
echo "==> Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run database migrations
echo "==> Running migrations..."
php artisan migrate --force

# Link storage
echo "==> Linking storage..."
php artisan storage:link || true

# Fix permissions
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

echo "==> Starting supervisord..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
