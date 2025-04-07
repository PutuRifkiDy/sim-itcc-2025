import { Head } from '@inertiajs/react';
import Footer from './Partials/Footer';
import Navbar from './Partials/Navbar';

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
