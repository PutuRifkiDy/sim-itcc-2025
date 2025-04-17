import { IconBerandaSideBar, IconProfileSideBar, IconSidebarSemnas } from '@/Components/IconAdmin';
import { Head } from '@inertiajs/react';
import Sidebar from './Partials/Sidebar';
import { Toaster } from '@/Components/ui/sonner';

export default function DashboardLayout({ children, title, header }) {
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
        {
            icon: <IconSidebarSemnas />,
            text: 'Seminar Nasional',
            link: route('dashboard.semnas.index'),
        },
        {
            icon: <IconSidebarSemnas />,
            text: 'Seminar Nasional',
            link: route('dashboard.semnas.admin-kesekre.index'),
        }
    ];

    return (
        <>
            <Head title={title} />
            <Toaster position="top-center" richColors />
            <Sidebar navigations={route_sidebar} header={header}>
                {children}
            </Sidebar>
        </>
    );
}
