import { IconBerandaSideBar, IconProfileSideBar } from '@/Components/IconAdmin';
import { Head } from '@inertiajs/react';
import Sidebar from './Partials/Sidebar';

export default function DashboardLayout({ children, title }) {
    const route_sidebar = [
        {
            icon: <IconBerandaSideBar />,
            text: 'Dashboard',
            link: route('dashboard'),
        },
        {
            icon: <IconProfileSideBar />,
            text: 'Profile',
            link: route('profile.edit'),
        },
    ];

    return (
        <>
            <Head title={title} />
            <Sidebar navigations={route_sidebar}>{children}</Sidebar>
        </>
    );
}
