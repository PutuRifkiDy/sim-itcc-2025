import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const sponsors = [
    {
        name: "Aston Kuta",
        src: "/assets/images/landing/sponsor_aston_kuta.jpeg",
        sizeMobile: 24,
        sizeDekstop: 28,
    },
    {
        name: "Tokopedia",
        src: "/assets/images/landing/sponsor_BFT.jpg",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "Shopee",
        src: "/assets/images/landing/sponsor_bunda_cookies.png",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "Lazada",
        src: "/assets/images/landing/sponsor_esge_technic.png",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_hirania_glowskin.jpg",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_koding_bean.png",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_LAC.jpg",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_sirup_kurnia.jpg",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_timedoor.svg",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_toko_kita.jpg",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
    {
        name: "CompanyX",
        src: "/assets/images/landing/sponsor_upadana_dupa.png",
        sizeMobile: 24,
        sizeDekstop: 32,
    },
];

const Sponsor = () => {
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
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 640px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 20 },
            },
        },
    });

    useEffect(() => {
        if (!slider) return;
        const interval = setInterval(() => {
            slider.current?.next();
        }, 1000);

        return () => clearInterval(interval);
    }, [slider]);

    return (
        <section className="flex flex-col justify-center items-center gap-6 w-full py-16 sm:py-20 md:py-24 text-center px-4 sm:px-6 md:px-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-[#0F114C] font-rubik font-bold leading-[120%] tracking-[0.36em] uppercase dark:text-white" data-aos="fade-up">
                Our Sponsors
            </h2>

            <p className="text-[#5E5E5E] font-rubik text-sm sm:text-base md:text-lg font-normal leading-[160%] tracking-[0.02em] w-[90%] sm:w-[80%] md:w-[653px] max-w-full dark:text-gray-500" data-aos="fade-up" data-aos-delay="100">
                As a sponsor, we’re promising reach to thousands of people who are
                interested in your brand. What better way to get your brand in front of
                people.
            </p>

            <a
                href="https://wa.me/6281938215645"
                className="flex flex-row items-center gap-2 text-[#0F114C] font-rubik text-sm sm:text-base md:text-lg font-normal leading-[120%] tracking-[0.02em] underline decoration-solid decoration-[#0F114C] decoration-1 underline-offset-[2px] dark:text-gray-400"
                data-aos="fade-up" data-aos-delay="200"
                target="_blank"
            >
                Contact us to become a sponsor <ArrowRightIcon className="w-6 h-6 dark:text-gray-500" />
            </a>

            {/* Sponsor Slider */}
            <div ref={sliderRef} className="keen-slider mt-8 sm:mt-10 md:mt-12" data-aos="fade-up" data-aos-delay="250">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide border rounded-lg p-4 sm:p-6 md:p-8 flex items-center justify-center dark:bg-[#100961]/50 shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={sponsor.src}
                            alt={sponsor.name}
                            className={`max-h-${sponsor.sizeMobile} sm:max-h-32 md:max-h-${sponsor.sizeDekstop} object-contain`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sponsor;
