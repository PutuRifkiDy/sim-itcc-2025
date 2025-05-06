// import GuestLayout from '@/Layouts/GuestLayout';

import GuestLayout from "@/Layouts/GuestLayout";
import Home from "./Partials/Home";
import About from "./Partials/About";
import Sponsor from "./Partials/Sponsor";
import Competition from "./Partials/Competition";
import Merch from "./Partials/Merch";

export default function Welcome() {
    return (
        <>
            <Home />
            <About />
            <Sponsor />
            <Competition />
            <Merch />
        </>
    );
}

Welcome.layout = (page) => <GuestLayout children={page} title="Welcome" />;
