import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './Components/ThemeProvider';

import Loading from './Components/Loading';
import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import DisableInspect from './Components/DisableInspect';

const appName = import.meta.env.VITE_APP_NAME || 'ITCC-2025';


const AppWrapper = ({ App, props }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const removeStart = router.on('start', () => setIsLoading(true));
        const removeFinish = router.on('finish', () => setIsLoading(false));

        return () => {
            removeStart();
            removeFinish();
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="light" storageKey="current-theme">
            {/* <DisableInspect /> */}
            {isLoading && <Loading />}
            <App {...props} />
        </ThemeProvider>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),


    setup({ el, App, props }) {
        createRoot(el).render(<AppWrapper App={App} props={props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
