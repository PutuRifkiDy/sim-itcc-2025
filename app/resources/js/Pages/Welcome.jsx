import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome() {
    return (
        <>
            <p>Ini adalah halaman welcome</p>
        </>
    );
}

Welcome.layout = (page) => <GuestLayout children={page} title="Welcome" />;
