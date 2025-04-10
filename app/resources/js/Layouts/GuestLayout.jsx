import { Head, usePage } from '@inertiajs/react';
import Footer from './Partials/Footer';
import Navbar from './Partials/Navbar';

export default function GuestLayout({ children, title }) {
    const auth = usePage().props.auth.user;
    const competitions = usePage().props.competitions;

    return (
        <>
            <Head title={title} />
            <Navbar auth={auth} competitions={competitions}/>
                {children}
            <Footer />
        </>
    );
}
