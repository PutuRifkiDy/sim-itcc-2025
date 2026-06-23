#!/bin/bash
set -e

echo "==> Starting entrypoint script..."

# Railway injects PORT env var — default to 8080 if not set
export PORT=${PORT:-8080}

# Create log directory for supervisor
mkdir -p /var/log/supervisor

# Generate nginx config from template (substitutes $PORT)
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/sites-enabled/default

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

echo "==> App running on port $PORT"
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
