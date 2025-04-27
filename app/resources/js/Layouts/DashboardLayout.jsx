import { IconBerandaSideBar, IconCompetitionSidebar, IconProfileSideBar, IconSidebarSemnas } from '@/Components/IconAdmin';
import { Head } from '@inertiajs/react';
import Sidebar from './Partials/Sidebar';
import { Toaster } from '@/Components/ui/sonner';
import { DocumentTextIcon } from "@heroicons/react/24/outline";


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
        },
        {
            icon: <IconCompetitionSidebar />,
            text: 'Competition',
            link: route('dashboard.competition.index'),
        },
        {
            icon: <IconCompetitionSidebar />,
            text: 'Competition',
            link: route('dashboard.competition.admin-kesekre.index'),
        },
        {
            icon: <IconCompetitionSidebar />,
            text: 'Competition',
            link: route('dashboard.competition.admin-lomba.index'),
        },
        {
            icon: <DocumentTextIcon className='w-6 h-6 text-current'/>,
            text: 'Submission',
            link: route('dashboard.competition.admin-lomba.submission'),
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
