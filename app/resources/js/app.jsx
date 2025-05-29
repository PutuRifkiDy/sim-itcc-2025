import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from './Components/ThemeProvider';

import Loading from './Components/Loading';
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const appName = import.meta.env.VITE_APP_NAME || 'ITCC-2025';


const AppWrapper = ({ App, props }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const start = () => setIsLoading(true);
        const finish = () => setIsLoading(false);

        Inertia.on('start', start);
        Inertia.on('finish', finish);

        return () => {
            Inertia.off('start', start);
            Inertia.off('finish', finish);
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="light" storageKey="current-theme">
            {isLoading && <Loading />}
            <App {...props} />
        </ThemeProvider>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),

    setup({ el, App, props }) {
        const Root = <AppWrapper App={App} props={props} />;

        if (import.meta.env.DEV) {
            createRoot(el).render(Root);
            return;
        }

        hydrateRoot(el, Root);
    },
    progress: {
        color: '#4B5563',
    },
});
