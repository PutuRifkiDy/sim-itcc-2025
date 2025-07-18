import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { route } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) => {
    globalThis.Ziggy = page.props.ziggy;

    return createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
            return pages[`./Pages/${name}.jsx`];
        },
        setup: ({App, props}) => {
            const Ziggy = {
                ...props.initialPage.props.ziggy,
                location: new URL(props.initialPage.props.ziggy.url),
            };

            global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);

            return <App {...props} />

        },
        progress: {
            color: '#4B5563',
        },
    });
});
