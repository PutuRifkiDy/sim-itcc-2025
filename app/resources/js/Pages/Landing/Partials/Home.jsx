import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCircleIcon, SideRightCrossIcon, SideRightDotIcon, SideRightSquareIndexOne, SideRightSquareIndexThree, SideRightSquareIndexTwo } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { motion } from 'framer-motion';

export default function Home() {
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
    return (
        <>

            <img
                src="assets/images/bg_ornament.png"
                alt="banner"
                className="absolute z-0 w-auto object-center rounded-none h-[800px] object-cover hidden md:block top-0 opacity-50 dark:opacity-0"
            />
            <section className="px-12 md:px-24 md:pb-24 mb-18 md:mt-44 mt-24">
                <div className="flex flex-row justify-center md:justify-between">
                    {/* side left */}
                    <div className="w-full flex flex-col">

                        <div className="relative flex md:flex-row flex-col items-center md:gap-0 gap-2 md:items-start">
                            <div className="absolute left-0 md:-top-50 -top-10" data-aos="fade-up" data-aos-delay="50">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="w-full h-full"
                                >
                                    <SideLeftCrookedCrossIcon />
                                </motion.div>
                            </div>
                            <div className="flex justify-center items-center md:block" data-aos="fade-up">
                                <img src="assets/images/landing/ITCCMascot.png" className="md:w-[156.09px] w-full h-auto md:h-[151.77px]" alt="" />
                            </div>
                            <h1 className="font-extrabold text-[80px] tracking-[0.05em] leading-[1.2em] text-[#0F114C] [text-shadow:_6px_4px_9px_rgb(0_0_0_/_0.54)] md:absolute flex justify-center items-center top-8 left-40" data-aos="fade-up" data-aos-delay="100">
                                ITCC
                            </h1>
                            <div className="flex flex-row justify-center items-center bg-gradient-to-l from-indigo-950 to-sky-800 px-4 md:w-16 md:h-40 w-full h-20 m md:absolute left-40 top-32 rounded-[10px] z-40" data-aos="fade-up" data-aos-delay="200">
                                <h1 className="md:-rotate-90 rotate-0 font-extrabold text-[48px] tracking-[0.05em] leading-[1.2em] text-white ">
                                    2025
                                </h1>
                            </div>
                            <p className="font-semibold text-[21px] leading-[35px] text-[#3A3A3A] md:absolute md:text-start text-center top-32 left-60 flex md:w-[273px] w-full h-[140px] dark:text-white" data-aos="fade-up" data-aos-delay="300">
                                Innovation of Technology to Build the Digital Capabilities of Indonesia's Generation
                            </p>
                            <div className="md:absolute flex top-72 left-60" data-aos="fade-up" data-aos-delay="400">
                                <SideLeftArrowLeftIcon />
                            </div>

                            <div className="md:absolute -bottom-72 left-60 flex justify-center items-center md:mt-0 pt-12" data-aos="fade-up" data-aos-delay="500">
                                <a href="#competition" className="flex flex-row gap-2 items-center text-gray-600 dark:text-white">
                                    Scroll down to Explore more
                                    <ArrowDownIcon className="w-6 h-6 animate-bounce" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* side right */}
                    <div className="w-full md:block hidden">
                        <div className="relative">
                            <div className="flex flex-row justify-end" data-aos="fade-up" data-aos-delay="100">
                                <SideRightCrossIcon />
                            </div>
                            <div className="absolute top-0 right-32 z-30">
                                <SideRightSquareIndexThree />
                            </div>
                            <div className="absolute top-36 right-60 z-20">
                                <SideRightSquareIndexTwo />
                            </div>
                            <div className="absolute top-48 right-16 z-10">
                                <SideRightSquareIndexOne />
                            </div>
                            <div className="absolute top-40 right-64 z-40">
                                <SideRightDotIcon />
                            </div>
                            <div className="absolute top-12 right-0 z-40" data-aos="fade-up" data-aos-delay="100">
                                <img src="assets/images/landing/right-side-index-3.png" className="w-[290.2px] h-[324.48px]" alt="" />
                            </div>
                            <div className="absolute top-12 right-[19rem] z-40" data-aos="fade-up" data-aos-delay="200">
                                <img src="assets/images/landing/right-side-index-2.png" className="w-[268.24px] h-[150.95px]" alt="" />
                            </div>
                            <div className="absolute top-52 right-[19rem] z-40" data-aos="fade-up" data-aos-delay="300">
                                <img src="assets/images/landing/right-side-index-1.png" className="w-[193.09px] h-[262.78px]" alt="" />
                            </div>
                            <div className="absolute top-96 right-16 z-40" data-aos="fade-up" data-aos-delay="400">
                                <SideRightCircleIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
