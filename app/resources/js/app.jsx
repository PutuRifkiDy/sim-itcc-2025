import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from './Components/ThemeProvider';

const appName = import.meta.env.VITE_APP_NAME || 'ITCC-2025';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const Root = (
            <ThemeProvider defaultTheme="light" storageKey="current-theme">
                <App {...props} />
            </ThemeProvider>
        );

        if (import.meta.env.DEV) {
            createRoot(el).render(Root);
            return;
        }

        hydrateRoot(
            el,
            <ThemeProvider defaultTheme='light' storageKey='current-theme'>
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
