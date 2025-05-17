import GuestLayout from "@/Layouts/GuestLayout";
import Home from "./Partials/Home";
import About from "./Partials/About";
import Sponsor from "./Partials/Sponsor";
import Competition from "./Partials/Competition";
import Merch from "./Partials/Merch";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import { Button } from "@/Components/ui/button";
import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCrossIcon, WhiteBlueDotMerchIcon } from "@/Components/IconGuest";
import { motion } from 'framer-motion';
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Welcome() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    useEffect(() => {
        setIsPopupOpen(true);

        const timer = setTimeout(() => {
            setIsPopupOpen(false);
        }, 5000);

    }, []);

    const closeModal = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <Modal show={isPopupOpen} onClose={closeModal} className="px-12 py-12 bg-gradient-to-b from-[#0F114C] to-[#00658F] border-white border-2 relative flex flex-row justify-evenly" maxWidth="4xl">
                <Button onClick={closeModal} variant="none" className="absolute top-4 right-4 group">
                    <XMarkIcon className="text-white w-6 h-6 font-bold focus-group:font-extrabold"/>
                </Button>
                <div className="absolute top-12 left-12 text-white">
                    <SideRightCrossIcon />
                </div>
                <div className="absolute bottom-12 left-96 text-white">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="w-full h-full text-white"
                    >
                        <SideLeftCrookedCrossIcon />
                    </motion.div>
                </div>
                <div className="absolute bottom-12 right-12 text-white opacity-70">
                    <WhiteBlueDotMerchIcon />
                </div>
                <div className="flex justify-center items-center">
                    <img src="assets/images/merch_bundle.png" className="w-[268.88px] h-[301px] object-contain" alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white leading-[1.2em] text-[32px] tracking-[0.016em] uppercase font-bold">
                        MERCHANDISE bundle
                    </p>
                    <p className="text-[18px] tracking-[0.02em] leading-[1.8em] max-w-[380px] text-center mt-5 text-white font-light">
                        Get your Exclusive Merchandise Bundle at a special price — limited time only!
                    </p>
                    <p className="text-[23px] font-medium text-center mt-24 text-[#0F114C] line-through decoration-2">
                        Rp. 199.000
                    </p>
                    <p className="text-[29px] font-medium text-center text-white">
                        Only Rp. 100.000
                    </p>
                    <Button variant="blue" asChild size="lg" className="mt-5">
                        <a href="#">Buy Bundle</a>
                    </Button>
                </div>
            </Modal>
            <Home />
            <About />
            <Sponsor />
            <Competition />
            <Merch />
        </>
    );
}

Welcome.layout = (page) => <GuestLayout children={page} title="Welcome" />;
