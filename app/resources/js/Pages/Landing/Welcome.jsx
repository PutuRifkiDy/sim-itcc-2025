import GuestLayout from "@/Layouts/GuestLayout";
import Home from "./Partials/Home";
import Sponsor from "./Partials/Sponsor";
import Competition from "./Partials/Competition";
import Merch from "./Partials/Merch";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import { Button } from "@/Components/ui/button";
import { BackGroundCircle, BackGroundCircleDarkMode, SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCrossIcon, StarRightITCC, WhiteBlueDotMerchIcon } from "@/Components/IconGuest";
import { motion } from 'framer-motion';
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { usePage } from "@inertiajs/react";

export default function Welcome() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const merchandise = usePage().props.merchandise;

    useEffect(() => {
        setIsPopupOpen(true);

        const timer = setTimeout(() => {
            setIsPopupOpen(false);
        }, 10000);

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
                {/* <img
                    src="assets/images/bg_circle_ornamen_side_left.png"
                    alt="banner"
                    className="absolute z-0 rounded-none w-1/2 h-auto object-cover hidden md:block top-0 left-0 opacity-40"
                /> */}
                <div className="absolute z-0 rounded-none w-1/2 h-auto object-cover hidden md:block top-0 left-0 opacity-40">
                    <BackGroundCircleDarkMode/>
                </div>
                <div className="absolute z-0 rounded-none w-1/2 h-auto object-cover hidden md:block top-0 left-0 opacity-100 dark:hidden">
                    <BackGroundCircle/>
                </div>
                {/* <img
                    src="assets/images/bg_circle_ornamen_darkmode_sideleft.png"
                    alt="banner"
                    className="absolute z-0 rounded-none w-1/2 h-auto object-cover hidden md:block top-0 left-0 opacity-100 dark:hidden"
                /> */}
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
            <section className="w-full min-h-[500px] relative bg-gradient-to-r from-[#0F114C] dark:from-[#100961] to-[#00658F] overflow-hidden md:mt-72 mt-24">
                <img className="md:w-80 w-40 top-0 left-0 absolute" src="assets/images/about/leftEdge.png" />
                <div className="absolute top-0 right-0 flex flex-col items-end w-full">
                    <div className="md:w-96 w-20 h-[2px] bg-white mt-2"></div>
                    <div className="md:w-96 w-20 h-[2px] bg-[#00658C]"></div>
                    <div className="md:w-48 w-10 h-[2px] mt-4 bg-[#00658C]"></div>
                    <div className="md:w-48 w-10 h-[6px] bg-white"></div>
                </div>
                <div className="md:flex-row flex-col flex items-center md:justify-evenly justify-center container mx-auto px-4 md:pt-32 pt-10 gap-8 pb-24 relative">
                    <motion.div className=""
                    animate={{
                        y: [0, -40, 0],

                    }}
                    transition={
                        {
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }
                    >
                        <img
                            className="w-60 md:w-96"
                            src={`${window.location.origin}/assets/images/about/ITCCLogo.png`}
                            alt="ITCC 2025 Logo"
                            data-aos="fade-up"
                        />
                    </motion.div>
                    <div className="md:w-[600px] relative">
                        <h2 className="text-[#A5CBD0] text-xl md:text-2xl font-rubik font-bold tracking-[5px] uppercase" data-aos="fade-up" data-aos-delay="100">What is ITCC?</h2>
                        {/* <img className="" src="assets/images/about/bluePlus.png" alt="" data-aos="fade-up" data-aos-delay="100" /> */}
                        <div
                        className="absolute top-0 right-0 md:w-10 w-6"
                        >
                            <SideLeftCrookedCrossIcon />
                        </div>
                        {/* <div className="absolute top-0 right-0 md:w-10 w-6">
                            <StarRightITCC/>
                        </div> */}
                        <p className="font-rubik text-white font-light my-6 md:text-lg text-base text-justify" data-aos="fade-up" data-aos-delay="200">
                            <span className='font-bold'>Information Technology Creative Competition (ITCC)</span>{" "}
                            is the largest competition in the field of Information Technology in Bali, which is organized by the Information Technology Student Association (HMTI) of Udayana University. From year to year, ITCC always raises interesting topics in the world of technology.
                        </p>
                        <div className="flex flex-row gap-x-3" data-aos="fade-up" data-aos-delay="300">
                            <div
                            className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div
                                className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div
                                className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div
                            className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                        </div>
                    </div>
                </div>
                <img className="lg:w-52 xl:w-60 w-40 bottom-0 right-0 absolute" src="assets/images/about/rightEdge.png" />
                <img className="bottom-0 left-0 md:w-80 w-40 absolute md:translate-y-10 translate-y-5 z-10" src="assets/images/about/leftLine.png" alt="" />
                <img className="bottom-0 left-0 md:w-20 w-10 absolute" src="image/about/leftDots.png" alt="" />
                <div className="md:absolute bottom-0 left-5 z-20 text-white" data-aos="fade-up" data-aos-delay="400">
                    <SideRightBlueDotIcon />
                </div>
            </section>
            <Sponsor />
            <Competition />
            <Merch />
        </>
    );
}

Welcome.layout = (page) => <GuestLayout children={page} title="Welcome" />;
