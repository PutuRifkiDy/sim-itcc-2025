import { Head, usePage } from '@inertiajs/react';
import Footer from './Partials/Footer';
import Navbar from './Partials/Navbar';
import { Toaster } from '@/Components/ui/sonner';

export default function GuestLayout({ children, title }) {
    const auth = usePage().props.auth.user;
    const competitions = usePage().props.competitions;
    const events = usePage().props.events;

    return (
        <>
            <Head title={title} />
            <Toaster position="top-center" richColors />
            <Navbar auth={auth} competitions={competitions} events={events} />
            <div className='flex flex-col py-32'>
                {children}
            </div>
            <Footer />
        </>
    );
}
