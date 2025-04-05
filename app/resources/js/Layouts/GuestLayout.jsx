import { Head, Link } from '@inertiajs/react';
import Navbar from './Partials/Navbar';
import Footer  from './Partials/Footer';

export default function GuestLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
                {children}
            <Footer />
        </>
    );
}
