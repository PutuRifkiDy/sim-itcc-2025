import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCircleIcon, SideRightCrossIcon } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Link, usePage } from "@inertiajs/react";
import { motion } from 'framer-motion';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Merchandise({ ...props }) {
    const merchandise = usePage().props.merchandise;

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

    const formatMoney = (nominal) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(new Number(nominal));
    };

    const formatDateInTimeLine = (tanggal) => {
        return new Intl.DateTimeFormat('id', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(new Date(tanggal));
    };
    return (
        <>
            <img
                src="assets/images/bg_ornament.png"
                alt="banner"
                className="absolute z-0 w-auto object-center rounded-none h-screen object-cover hidden md:block top-0 opacity-60 dark:opacity-0"
            />
            <img
                src="assets/images/bg_circle_ornament.png"
                alt="banner"
                className="absolute z-0 rounded-none w-screen h-[800px] object-cover dark:hidden md:block top-0"
            />
            <img
                src="assets/images/bg_circle_ornamen_white.png"
                alt="banner"
                className="absolute z-0 rounded-none w-screen h-[800px] object-cover hidden md:block top-0 opacity-60"
            />
            <div className="isolate min-h-screen md:mt-24">
                <div className="relative md:px-24 px-10">
                    <div
                        className="absolute inset-x-0 overflow-hidden -top-80 -z-10 transform-gpu blur-3xl sm:-top-24"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0F114C]/50 to-[#0F114C]/20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>

                    <div className="w-24 h-24 md:mt-0 mt-12 pointer-events-none">
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

                    <div className="absolute top-12 right-48 md:block hidden text-[#0F114C]">
                        <SideRightCrossIcon />

                    </div>

                    <div className="absolute md:bottom-0 -bottom-12 left-24">
                        <SideLeftArrowLeftIcon />
                    </div>

                    <div className="flex md:flex-row flex-col justify-around">
                        <img src="assets/images/merch_bundle.png" alt="" className="md:w-[446px] md:h-[468px] w-full h-auto object-contain " data-aos="fade-up" data-aos-delay="100" />
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[#0F114C] dark:text-[#0886BB] leading-[1.2em] text-[50px] tracking-[0.016em] uppercase font-bold text-center" data-aos="fade-up" data-aos-delay="100">
                                MERCHANDISE bundle
                            </p>
                            <p className="text-[18px] tracking-[0.02em] leading-[1.8em] md:w-[380px] w-full text-center mt-5 text-[#000000] font-light dark:text-white" data-aos="fade-up" data-aos-delay="200">
                                Get your Exclusive Merchandise Bundle at a special price — limited time only!
                            </p>
                            <p className="text-[23px] font-medium text-center mt-10 text-[#0886BB] line-through decoration-2" data-aos="fade-up" data-aos-delay="300">
                                Rp. 199.000
                            </p>
                            <p className="text-[29px] font-medium text-center text-[#495190]" data-aos="fade-up" data-aos-delay="300">
                                Only Rp. 100.000
                            </p>
                            <Button variant="blue" asChild size="lg" className="mt-5" data-aos="fade-up" data-aos-delay="300">
                                <a href="#">Buy Bundle</a>
                            </Button>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0F114C]/50 to-[#0F114C]/20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>

                {/* Competition Section */}
                <section className="relative overflow-hidden py-16 md:py-24">
                    <div className="text-center md:mb-10 mb-10  flex flex-col justify-center items-center">
                        <h2 className="uppercase md:text-4xl text-2xl font-bold text-[#0F114C] md:tracking-[10px] tracking-[5px] dark:text-white" data-aos="fade-up">
                            Our Merchandise
                        </h2>
                        <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base md:text-lg font-normal tracking-[0.02em] dark:text-gray-400 md:w-[600px] w-full" data-aos="fade-up" data-aos-delay="100">
                            Support us and show your pride by getting our official merchandise.
                            High-quality, stylish, and made just for you — wear it and be part of
                            the community!
                        </p>
                    </div>
                    {/* Content Container */}
                    <div className="relative z-10 max-w-[1350px] mx-auto px-4 md:px-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                            {merchandise.map((merch, i) => (
                                <div
                                    key={i}
                                    className="group relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-[#040529] shadow-lg transition-all duration-500 hover:shadow-2xl border-2 border-[#0F114C]/50 hover:border-[#0F114C] p-3 h-[500px]"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >

                                    {/* Background Game Image */}
                                    <div
                                        className="absolute inset-0 m-3 rounded-xl bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Static Dark Overlay for Mobile View Only */}
                                    <div className="absolute inset-0 rounded-xl bg-black/60 block md:hidden" />

                                    {/* Dark Overlay (only on desktop hover) */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0F114C]/90 via-[#0F114C]/80 to-transparent opacity-0 transition-opacity duration-500 hidden md:block group-hover:opacity-100" />

                                    {/* Content Container */}
                                    <div className="relative h-full w-full flex flex-col items-center justify-center">

                                        {/* Game Logo */}
                                        <div className="absolute z-20 -top-1 left-1/2 -translate-x-1/2 md:top-[26rem] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                                            <div className="flex justify-center items-center rounded-full p-8 transition-all duration-500 md:group-hover:-translate-y-[260%]">
                                                <img
                                                    src="assets/images/about/ITCCLogo.png"
                                                    alt="text1"
                                                    className="h-42 w-auto object-contain transition-all duration-500 md:group-hover:scale-75  dark:block hidden"
                                                />
                                                <img
                                                    src="assets/images/image_for_icon_logo_itcc.png"
                                                    alt="text2"
                                                    className="h-42 w-auto object-contain transition-all duration-500 md:group-hover:scale-75 dark:hidden"
                                                />
                                            </div>
                                        </div>

                                        {/* merchandise path gambar */}
                                        <div className="absolute z-10 -top-1 left-1/2 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                                            <div className="flex justify-center items-center rounded-full transition-all duration-500">
                                                <img
                                                    src="assets/images/merchandise/merchItcc.png"
                                                    alt="text"
                                                    className="transition-all duration-500 md:group-hover:scale-140"
                                                />
                                            </div>
                                        </div>

                                        {/* Content (shown on mobile and on hover in desktop) */}
                                        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center p-5 my-5 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0 z-30">
                                            <h3 className="text-center text-2xl font-bold mb-4 text-white">
                                                {merch.name}
                                                <div className="w-64 h-0.5 mt-2 bg-[#0F114C] mx-auto rounded-full"></div>
                                            </h3>
                                            <div className="flex flex-col gap-5 mb-2 items-center">
                                                <div className="flex flex-col gap-1 items-center mb-10">
                                                    <p className="text-[16px] font-medium text-white">{merch.batch_name}</p>
                                                    <p className="text-[12px] font-normal text-white">{formatDateInTimeLine(merch.start_date)} - {formatDateInTimeLine(merch.end_date)}</p>
                                                </div>
                                                <div className="flex flex-col gap-1 items-center max-w-[300px] text-center">
                                                    <p className="text-[16px] font-medium text-white">Pick-up Offline</p>
                                                    <p className="text-[12px] font-normal text-white">
                                                        Gedung Teknologi Informasi, Universitas Udayana, Jimbaran, Bali
                                                    </p>
                                                </div>
                                                <p className="text-[16px] font-medium text-white">{formatMoney(merch.price)}</p>
                                            </div>
                                            <Button variant="blue" size="lg">
                                                <Link
                                                    href={route('register')}
                                                    className=""
                                                >
                                                    Register Now
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Merchandise;
Merchandise.layout = (page) => <GuestLayout children={page} title="Merchandise" />;
