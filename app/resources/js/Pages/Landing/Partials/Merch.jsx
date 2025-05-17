import { ArrowRightIcon } from "@/Components/IconGuest";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

export default function Merch() {
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

            <section className="flex flex-col items-center md:pl-12 pl-0 md:py-10 py-5 mt-24">
                <div className="text-center md:mb-0 mb-10 md:w-[600px] w-full">
                    <h2 className="uppercase md:text-4xl text-2xl font-bold text-[#0F114C] md:tracking-[10px] tracking-[5px]" data-aos="fade-up">
                        Our Merchandise
                    </h2>
                    <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base md:text-lg font-normal tracking-[0.02em] dark:text-white" data-aos="fade-up" data-aos-delay="100">
                        Support us and show your pride by getting our official merchandise.
                        High-quality, stylish, and made just for you — wear it and be part of
                        the community!
                    </p>
                </div>

                <div className="flex md:flex-row flex-col-reverse justify-between md:mt-24 mt-4 md:px-12 px-6">
                    <div className="relative flex flex-col justify-center gap-8 w-full">
                        <h1 className="font-bold text-[33px] leading-[1.2em] tracking-[0.16em] text-[#000000] uppercase md:text-start text-center dark:text-white" data-aos="fade-up">
                            ITCC 2025 Merchandise
                        </h1>
                        <p className="font-reguler text-[17px] tracking-[0.04em] leading-[1.5em] text-[#121212] md:w-[427px] max-w-[700px] md:text-start text-center dark:text-white" data-aos="fade-up" data-aos-delay="100">
                            Lorem ipsum dolor sit amet consectetur. Enim sagittis ac quam nunc viverra maecenas semper ullamcorper quis. Facilisi diam tortor bibendum porta.
                        </p>
                        <div className="flex md:flex-row flex-col md:gap-7 gap-5 justify-center md:justify-start mt-10" data-aos="fade-up" data-aos-delay="100">
                            <Button className="bg-[#0F114C] text-white px-6 py-2 rounded-[10px] font-semibold flex items-center group focus:ring-2 focus:ring-[#0F114C]/80 hover:bg-[#0F114C]/80 focus:transition-all focus:duration-400 focus:ease-in-out" size="lg">
                                Buy Now
                                <img src="assets/images/landing/arrow.png" className="inline ml-1 w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" alt="" />
                            </Button>
                            <Button asChild variant="none" size="lg">
                                <Link className="border border-[#0F114C] px-6 py-2 rounded-[10px] text-[#0F114C] font-semibold dark:text-white focus:ring-2 focus:ring-[#0F114C]/80 dark:hover:bg-[#0F114C]/40 focus:transition-all focus:duration-400 focus:ease-in-out"
                                    href="/merchandise">
                                    Get to know
                                </Link>
                            </Button>
                        </div>
                        <img
                            src="assets/images/about/bluePlus.png"
                            className="absolute bottom-0 left-0 md:w-10 w-6 rotate-30 hidden md:inline"
                            alt=""
                        />
                        <div className="md:absolute flex bottom-24 left-48">
                            <ArrowRightIcon />
                        </div>
                    </div>

                    <div className="relative">
                        <img src="assets/images/landing/merchBackground.png" alt="" className="w-full h-auto dark:hidden" />
                        <img src="assets/images/landing/merchBackgroundDarkmode.png" alt="" className="w-full h-auto hidden dark:block" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="assets/images/landing/ITCCmerch.png"
                                className="relative md:w-[556px] w-full md:ml-32 md:mr-16 mr-0 ml-6"
                                alt="ITCC 2025 Merch"
                                data-aos="fade-up" data-aos-delay="100"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
