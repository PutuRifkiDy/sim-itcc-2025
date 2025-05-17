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
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export default function Welcome() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    useEffect(() => {
        setIsPopupOpen(true);

        const timer = setTimeout(() => {
            setIsPopupOpen(false);
        }, 5000);

    }, []);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic',
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    const closeModal = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <Modal show={isPopupOpen} onClose={closeModal} className="md:px-12 px-2 md:py-12 py-5 dark:border-white dark:border-2 border-2 relative flex md:flex-row flex-col justify-evenly dark:bg-gradient-to-b dark:from-[#040529] dark:to-[#0F114C]/90" maxWidth="4xl">
                <img
                    src="assets/images/bg_ornament.png"
                    alt="banner"
                    className="absolute z-0 w-auto object-center rounded-none h-[800px] object-cover hidden md:block top-0"
                />
                <img
                    src="assets/images/bg_circle_ornamen_side_left.png"
                    alt="banner"
                    className="absolute z-0 rounded-none w-1/2 h-auto object-cover hidden md:block top-0 left-0 opacity-40"
                />
                <img
                    src="assets/images/bg_circle_ornamen_darkmode_sideleft.png"
                    alt="banner"
                    className="absolute z-0 rounded-none w-1/2 h-auto object-cover hidden md:block top-0 left-0 opacity-100 dark:hidden"
                />
                <Button onClick={closeModal} variant="none" className="absolute top-4 right-4 group">
                    <XMarkIcon className="dark:text-white text-[#0F114C] w-6 h-6 font-bold focus-group:font-extrabold" />
                </Button>
                <div className="absolute md:block hidden top-12 left-12 dark:text-white text-[#0F114C]">
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
                <div className="absolute md:block hidden bottom-12 right-12 dark:text-white text-[#0F114C]">
                    <WhiteBlueDotMerchIcon />
                </div>
                <div className="flex justify-center items-center">
                    <img src="assets/images/merch_bundle.png" className="w-[268.88px] h-[301px] object-contain" alt="" data-aos="fade-up" data-aos-delay="100" />
                </div>
                <div className="flex flex-col items-center">
                    <p className="dark:text-white text-[#0F114C] leading-[1.2em] text-[32px] tracking-[0.016em] uppercase font-bold md:text-start text-center" data-aos="fade-up" data-aos-delay="100">
                        MERCHANDISE bundle
                    </p>
                    <p className="text-[18px] tracking-[0.02em] leading-[1.8em] max-w-[380px] text-center md:mt-5 mt-0 text-[#5E5E5E] font-light dark:text-white" data-aos="fade-up" data-aos-delay="100">
                        Get your Exclusive Merchandise Bundle at a special price — limited time only!
                    </p>
                    <p className="text-[23px] font-medium text-center md:mt-24 mt-0 text-[#0886BB] line-through decoration-2" data-aos="fade-up" data-aos-delay="200">
                        Rp. 199.000
                    </p>
                    <p className="text-[29px] font-medium text-center dark:text-white text-[#0F114C]" data-aos="fade-up" data-aos-delay="300">
                        Only Rp. 100.000
                    </p>
                    <Button variant="blue" asChild size="lg" className="mt-5 tracking-[0.03em]" data-aos="fade-up" data-aos-delay="300">
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
