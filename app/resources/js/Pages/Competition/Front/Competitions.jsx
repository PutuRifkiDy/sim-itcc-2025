import { Accordion } from '@/Components/Accordion';
import { LineIcon, WhatsappIcon } from '@/Components/IconAdmin';
import {
    IconContactInCompetition,
    SideLeftArrowLeftIcon,
    SideLeftCrookedCrossIcon,
    SideRightBlueDotIcon,
    SideRightCircleIcon,
    SideRightCrossIcon,
    SideRightDotIcon,
    SideRightSquareIndexOne,
    SideRightSquareIndexThree,
    SideRightSquareIndexTwo,
    StarRightITCC,
} from '@/Components/IconGuest';
import { Button } from '@/Components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/Components/ui/dropdown-menu';

function Competitions({ ...props }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const competitions = usePage().props.competition;
    const current_batch = usePage().props.current_batch;
    const current_periode = usePage().props.current_periode;
    const count_days = usePage().props.count_days;
    const remaining_time = usePage().props.remaining_time;

    const [time, setTime] = useState(remaining_time);


    useEffect(() => {
        if (time.status !== 'active') return;

        const interval = setInterval(() => {
            setTime(prev => {
                let totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;

                if (totalSeconds <= 0) {
                    clearInterval(interval);
                    return {
                        status: 'expired',
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                    };
                }

                return {
                    status: 'active',
                    hours: Math.floor(totalSeconds / 3600),
                    minutes: Math.floor((totalSeconds % 3600) / 60),
                    seconds: totalSeconds % 60,
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [time.status]);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const { flash_message } = usePage().props;
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        slug: competitions.slug ?? '',
        _method: 'POST',
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('register.competition.store', data.slug), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const formatDateInTimeLine = (tanggal) => {
        return new Intl.DateTimeFormat('id', {
            day: '2-digit',
            month: 'long',
        }).format(new Date(tanggal));
    };

    const formatMoney = (nominal) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(new Number(nominal));
    };

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

    const landing_image = [
        {
            id: 1,
            image1: '/assets/images/competition/idbis_landing1.png',
            image2: '/assets/images/competition/idbis_landing2.png',
            image3: '/assets/images/competition/idbis_landing3.png',
        },
        {
            id: 3,
            image1: '/assets/images/competition/webd_sma_landing1.png',
            image2: '/assets/images/competition/webd_sma_landing2.png',
            image3: '/assets/images/competition/webd_sma_landing3.png',
        },
        {
            id: 4,
            image1: '/assets/images/competition/webd_mhs_landing1.png',
            image2: '/assets/images/competition/webd_mhs_landing2.png',
            image3: '/assets/images/competition/webd_mhs_landing3.png',
        },
        {
            id: 5,
            image1: '/assets/images/competition/cp_landing1.png',
            image2: '/assets/images/competition/cp_landing2.png',
            image3: '/assets/images/competition/cp_landing3.png',
        },
        {
            id: 6,
            image1: '/assets/images/competition/cp_landing1.png',
            image2: '/assets/images/competition/cp_landing2.png',
            image3: '/assets/images/competition/cp_landing3.png',
        },
        {
            id: 7,
            image1: '/assets/images/competition/lcc_landing1.png',
            image2: '/assets/images/competition/lcc_landing2.png',
            image3: '/assets/images/competition/lcc_landing3.png',
        },
        {
            id: 8,
            image1: '/assets/images/competition/uiux_mhs_landing1.png',
            image2: '/assets/images/competition/uiux_mhs_landing2.png',
            image3: '/assets/images/competition/uiux_mhs_landing3.png',
        },
        {
            id: 9,
            image1: '/assets/images/competition/uiux_sma_landing1.png',
            image2: '/assets/images/competition/uiux_sma_landing2.png',
            image3: '/assets/images/competition/uiux_sma_landing3.png',
        },
        {
            id: 10,
            image1: '/assets/images/competition/cp_landing1.png',
            image2: '/assets/images/competition/cp_landing2.png',
            image3: '/assets/images/competition/cp_landing3.png',
        },
        {
            id: 11,
            image1: '/assets/images/competition/cp_landing1.png',
            image2: '/assets/images/competition/cp_landing2.png',
            image3: '/assets/images/competition/cp_landing3.png',
        }
    ]

    const selectedImage = landing_image.find((item) => item.id === competitions.id);
    return (
        <>
            <img
                src={`${window.location.origin}/assets/images/bg_ornament.png`}
                alt="banner"
                className="absolute z-0 w-auto object-center rounded-none h-[800px] object-cover hidden md:block top-0"
            />
            {/* start home */}
            <section className="px-4 md:px-8 lg:px-16 pt-28 md:pt-32">
                <div className="flex flex-col justify-center gap-6 md:flex-row md:justify-between">
                    <div className="flex w-full flex-col mt-5">
                        <div className="relative flex flex-col items-start">
                            <div className="flex items-center gap-2" data-aos="fade-up">
                                <div className="h-[30px] w-[30px] flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        className="text-[#0F114C] dark:text-white"
                                    >
                                        <path
                                            d="M7.0451 22.9569C6.00042 21.9122 5.17174 20.672 4.60637 19.3071C4.04099 17.9422 3.75 16.4793 3.75 15.0019C3.75 13.5245 4.04099 12.0616 4.60637 10.6967C5.17174 9.33173 6.00042 8.09154 7.0451 7.04688M22.9551 7.04688C23.9998 8.09154 24.8285 9.33173 25.3938 10.6967C25.9592 12.0616 26.2502 13.5245 26.2502 15.0019C26.2502 16.4793 25.9592 17.9422 25.3938 19.3071C24.8285 20.672 23.9998 21.9122 22.9551 22.9569M10.5801 19.4206C9.4084 18.2486 8.75018 16.6592 8.75018 15.0019C8.75018 13.3446 9.4084 11.7552 10.5801 10.5831M19.4201 10.5831C20.5918 11.7552 21.25 13.3446 21.25 15.0019C21.25 16.6592 20.5918 18.2486 19.4201 19.4206M16.2501 15.0019C16.2501 15.3334 16.1184 15.6513 15.884 15.8858C15.6496 16.1202 15.3316 16.2519 15.0001 16.2519C14.6686 16.2519 14.3506 16.1202 14.1162 15.8858C13.8818 15.6513 13.7501 15.3334 13.7501 15.0019C13.7501 14.6704 13.8818 14.3524 14.1162 14.118C14.3506 13.8836 14.6686 13.7519 15.0001 13.7519C15.3316 13.7519 15.6496 13.8836 15.884 14.118C16.1184 14.3524 16.2501 14.6704 16.2501 15.0019Z"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="font-regular text-[16px] uppercase tracking-[0.03em] text-black dark:text-white">
                                    {competitions.competition_content[0].location}
                                </span>

                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute left-[40rem] top-0 hidden -translate-y-1/2 md:block"
                                >
                                    <SideLeftCrookedCrossIcon />
                                </motion.div>

                            </div>


                            <span
                                className="text-2xl font-bold uppercase leading-[120%] tracking-[3px] text-[#0F114C] dark:text-gray-300 md:text-[36px] md:tracking-[5.76px]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                {competitions.name}
                            </span>
                            {current_batch != null ? (
                                <p className='text-[20px] mb-8'
                                    data-aos="fade-up"
                                    data-aos-delay="100">
                                    Registration Fee <span className='font-bold'>{formatMoney(current_batch.price)}</span>
                                </p>
                            ) : (
                                <p className='text-[20px] mb-8'
                                    data-aos="fade-up"
                                    data-aos-delay="100">
                                    Registration has closed
                                </p>

                            )}

                            <div
                                className="flex md:flex-row flex-col w-full items-center justify-between rounded-[10px] bg-gradient-to-r from-[#0F114C] to-[#00658F] px-4 py-6 md:w-10/12 gap-5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="flex flex-col gap-2 items-start">
                                    <span className="text-[18px] font-bold uppercase tracking-[16%] text-white">
                                        {current_periode?.title ?? 'Coming Soon'}
                                    </span>
                                    <span className="text-[12px] font-bold uppercase tracking-[16%] text-[#E6E6E6]">
                                        {current_periode?.date_range ?? 'Coming Soon'}
                                    </span>
                                </div>

                                <div className="flex flex-row items-end gap-2">
                                    <span className="text-white">
                                        {time.status === 'active' ? (
                                            <div className='flex flex-row gap-5'>
                                                <div className='flex flex-col'>
                                                    <p className='font-medium text-[28px]'>{time.hours}</p>
                                                    <p className='text-[16px] font-bold'>Hours</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-medium text-[28px]'>{time.minutes}</p>
                                                    <p className='text-[16px] font-medium opacity-80'>Minutes</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-medium text-[28px]'>{time.seconds}</p>
                                                    <p className='text-[16px] font-medium opacity-50'>Seconds</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-[24px] font-medium">Coming Soon</p>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="h-12" />

                            <div
                                className={`flex flex-col-reverse items-start gap-4 md:flex-col md:gap-10 w-full
                                    ${competitions.is_team == false && ["kids-game-programming-beginner", "kids-game-programming-intermediate"].includes(competitions.slug) ? "md:gap-2" : ""}`}
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                {competitions.is_team == false && ["kids-game-programming-beginner", "kids-game-programming-intermediate"].includes(competitions.slug) ? (
                                    <div className='flex flex-col gap-2 w-full md:w-1/2'>
                                        <p className='font-bold text-[23px] tracking-[0.03em] text-[#0F114C]'>
                                            Register Now
                                        </p>
                                        <div className='flex md:flex-row flex-col gap-2'>
                                            <Button type="submit" variant="blue" size="lg" className="rounded-lg text-[18px] py-6 px-5 md:min-w-fit w-full hover:scale-[101%] transition-all duration-200 ease-in-out bg-[#495190]" asChild>
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcQgsj-vF_c6MCyh_vjk-hXqz2TRly4IzgY3CE4fzbsy98RQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                                                    On Google Form
                                                </a>
                                            </Button>

                                            <Button type="submit" variant="blue" className="rounded-lg text-[18px] py-6 px-5 md:min-w-fit w-full hover:scale-[101%] transition-all duration-200 ease-in-out" onClick={onHandleSubmit}>
                                                On Website
                                            </Button>
                                        </div>
                                    </div>
                                ) : competitions.is_team == false ? (
                                    <Button type="submit" variant="blue" size="lg" className="rounded-lg text-[18px] py-6 px-5 md:w-1/3 w-full hover:scale-[101%] transition-all duration-200 ease-in-out" onClick={onHandleSubmit}>
                                        Register
                                    </Button>
                                ) : (
                                    <Button asChild variant="blue" size="lg" className="rounded-lg text-[18px] md:w-1/3 w-full hover:scale-[101%] transition-all duration-200 ease-in-out">
                                        <Link href={route('register.competition.show', competitions.slug)} className="py-6 px-5">
                                            Register Team
                                        </Link>
                                    </Button>
                                )}

                                <div className={`md:gap-10  w-full gap-5 flex md:flex-row flex-col-reverse ${competitions.is_team == false && ["kids-game-programming-beginner", "kids-game-programming-intermediate"].includes(competitions.slug) ? "md:mt-7" : ""}`}>
                                    <Button variant="none" size="lg" className="md:w-1/2 w-full rounded-lg py-6 px-5 text-[18px] border-2 border-[#0F114C] bg-white dark:bg-[#040529]" asChild data-aos="fade-up" data-aos-delay="400">
                                        <a
                                            href={competitions.competition_content[0].guidebook_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-[#0F114C] dark:text-white"
                                        >
                                            Guidebook
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="text-[#0F114C] dark:text-white"
                                            >
                                                <path
                                                    d="M8.33325 3.33334H4.99992C4.55789 3.33334 4.13397 3.50893 3.82141 3.82149C3.50885 4.13405 3.33325 4.55798 3.33325 5V15C3.33325 15.442 3.50885 15.866 3.82141 16.1785C4.13397 16.4911 4.55789 16.6667 4.99992 16.6667H14.9999C15.4419 16.6667 15.8659 16.4911 16.1784 16.1785C16.491 15.866 16.6666 15.442 16.6666 15V11.6667M9.99992 10L16.6666 3.33334M16.6666 3.33334V7.5M16.6666 3.33334H12.4999"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </Button>
                                    <Dialog>
                                        <DialogTrigger className="flex flex-row items-center gap-2 md:min-w-fit w-0" data-aos="fade-up" data-aos-delay="500">
                                            <button
                                                className="flex h-[60px] w-[60px] shrink-0 cursor-pointer items-center justify-center rounded-[500px] border-none bg-[#00658F] shadow-[0_10px_10px_#C8DBFF] dark:shadow-none"
                                                onClick={openModal}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M6 4L15 10L6 16V4Z" />
                                                </svg>
                                            </button>
                                            <span className="flex-shrink-0 flex-grow text-[16px] font-semibold tracking-wide text-[#3A3A3A] dark:text-white">
                                                How to Join
                                            </span>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl">
                                            <DialogTitle>How to Join</DialogTitle>
                                            <iframe
                                                src={competitions.competition_content[0].how_to_join_link}
                                                title="How to Join Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="h-96 w-full rounded-lg shadow-lg"
                                            ></iframe>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>


                            <div className="relative flex flex-col items-center gap-2 md:flex-row md:items-start">
                                <div
                                    className='left-160 md:top-20 top-40 hidden items-center gap-3 md:absolute md:inline-flex'
                                >
                                    <SideLeftArrowLeftIcon />
                                </div>
                            </div >
                        </div >
                    </div >

                    {/* side right */}
                    < div className="hidden w-full md:block md:mt-12" >
                        <div className="relative">
                            <div
                                className="flex flex-row justify-end text-[#0F114C]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <SideRightCrossIcon />
                            </div>
                            <div className="absolute right-32 top-0 z-30">
                                <SideRightSquareIndexThree />
                            </div>
                            <div className="absolute right-60 top-36 z-20">
                                <SideRightSquareIndexTwo />
                            </div>
                            <div className="absolute right-16 top-48 z-10">
                                <SideRightSquareIndexOne />
                            </div>
                            <div className="absolute right-64 top-40 z-40">
                                <SideRightDotIcon />
                            </div>

                            <div className="absolute right-0 top-12 z-40" data-aos="fade-up" data-aos-delay="100">
                                <img
                                    src={`${window.location.origin}${selectedImage.image1}`}
                                    className="h-[324.48px] w-[290.2px]"
                                    alt="" />
                            </div>
                            <div className="absolute right-[19rem] top-12 z-40" data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={`${window.location.origin}${selectedImage.image2}`} className="h-[150.95px] w-[268.24px]"
                                    alt="" />
                            </div>
                            <div className="absolute right-[19rem] top-52 z-40" data-aos="fade-up" data-aos-delay="300">
                                <img
                                    src={`${window.location.origin}${selectedImage.image3}`} className="h-[262.78px] w-[193.09px]"
                                    alt="" />
                            </div>
                            <div className="absolute right-16 top-96 z-40" data-aos="fade-up" data-aos-delay="400">
                                <SideRightCircleIcon />
                            </div>
                        </div>
                    </div >
                </div >
            </section >
            {/* end home */}

            {/* start about */}
            <section className="relative mt-24 min-h-[500px] w-full overflow-hidden bg-gradient-to-r from-[#0F114C] to-[#00658F] dark:from-[#100961] md:mt-48">
                <img
                    className="absolute left-0 top-0 w-40 md:w-80"
                    src={`${window.location.origin}/assets/images/about/leftEdge.png`}
                />
                <div className="absolute right-0 top-0 flex w-full flex-col items-end">
                    <div className="mt-2 h-[2px] w-20 bg-white md:w-96"></div>
                    <div className="h-[2px] w-20 bg-[#00658C] md:w-96"></div>
                    <div className="mt-4 h-[2px] w-10 bg-[#00658C] md:w-48"></div>
                    <div className="h-[6px] w-10 bg-white md:w-48"></div>
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 pb-24 pt-10 md:flex-row md:justify-evenly md:pt-32">
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
                    <div className="relative md:w-[600px]">
                        <h2
                            className="font-rubik text-xl font-bold uppercase tracking-[5px] text-[#A5CBD0] md:text-2xl"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            What is <span className="">{competitions.name}</span>?
                        </h2>
                        {/* <img
                            className="absolute -right-10 top-0 w-6 md:w-10"
                            src={`${window.location.origin}/assets/images/about/bluePlus.png`}
                            alt=""
                            data-aos="fade-up"
                            data-aos-delay="100"
                        /> */}
                        {/* <div
                            className="absolute -right-10 top-0 w-6 md:w-10"
                        >
                            <SideLeftCrookedCrossIcon />
                        </div> */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute left-[40rem] top-0 hidden -translate-y-1/2 md:block"
                        >
                            <SideLeftCrookedCrossIcon />
                        </motion.div>
                        <p
                            className="font-rubik my-6 text-justify text-base font-light text-white md:text-lg z-40"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {competitions.description}
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
                        </div >
                    </div >
                </div >
                <img
                    className="absolute bottom-0 right-0 w-40 lg:w-52 xl:w-60 z-10"
                    src={`${window.location.origin}/assets/images/about/rightEdge.png`}
                />
                <img
                    className="absolute bottom-0 left-0 z-10 w-40 translate-y-5 md:w-80 md:translate-y-10"
                    src={`${window.location.origin}/assets/images/about/leftLine.png`}
                    alt=""
                />
                <div
                    className="absolute bottom-0 left-5 z-20 hidden text-white md:block"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <SideRightBlueDotIcon />
                </div>
            </section >
            {/* end about */}

            {/* start prize */}
            <section className="relative mt-20 flex min-h-[500px] flex-col items-center py-20 md:mt-36">

                <div className="absolute left-[-70px] top-32 hidden w-1/2 rotate-90 md:left-12 md:block md:w-0">
                    <SideRightCrossIcon />
                </div>
                <h2
                    className="text-2xl font-bold uppercase tracking-[5px] text-[#0F114C] dark:text-white lg:text-4xl lg:tracking-[10px]"
                    data-aos="fade-up"
                >
                    PRIZE CATEGORY
                </h2>
                <p
                    className="font-rubik mx-4 mb-10 mt-4 w-3/4 text-center text-sm font-normal tracking-[0.02em] text-[#5E5E5E] dark:text-gray-500 sm:text-base lg:w-2/5 lg:text-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    We’ve prepared exciting rewards for the best! Explore the prize categories and see what’s waiting
                    for the winners of each competition track.
                </p>
                <div
                    className="absolute right-10 top-4 hidden -translate-y-1/2 text-[#0F114C] md:right-20 md:top-52 md:block">
                    <SideLeftCrookedCrossIcon />
                </div>
                <div className="flex h-full w-full items-end px-4 pb-10">
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
                        {competitions.competition_content.map((content, i) =>
                            content.competition_content_prizes.map((prize, i) => (
                                <div
                                    className="mt-auto flex flex-col items-center"
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    {prize.rank == 1 ? (
                                        <img
                                            src={`${window.location.origin}/assets/images/competition/goldTrophy.png`}
                                            alt="First Place Trophy"
                                            className="mb-4 h-24 w-24 md:h-[189px] md:w-[189px]"
                                        />
                                    ) : prize.rank == 2 ? (
                                        <img
                                            src={`${window.location.origin}/assets/images/competition/silverTrophy.png`}
                                            alt="Second Place Trophy"
                                            className="mb-4 h-24 w-24 md:h-[189px] md:w-[189px]"
                                        />
                                    ) : prize.rank == 3 ? (
                                        <img
                                            src={`${window.location.origin}/assets/images/competition/bronzeTrophy.png`}
                                            alt="Third Place Trophy"
                                            className="mb-4 h-24 w-24 md:h-[189px] md:w-[189px]"
                                        />
                                    ) : (
                                        <img
                                            src={`${window.location.origin}/assets/images/competition/bronzeTrophy.png`}
                                            alt="Third Place Trophy"
                                            className="mb-4 h-24 w-24 md:h-[189px] md:w-[189px]"
                                        />
                                    )}
                                    <p className="mb-2 text-[24px] font-bold leading-[120%] tracking-[16%] md:text-[32px]">
                                        {formatMoney(prize.money)}
                                    </p>
                                    <div
                                        className={`${prize.rank == 1 ? 'h-96 md:h-[500px]' : prize.rank == 2 ? 'h-48 md:h-[400px]' : prize.rank == 3 ? 'h-24 md:h-[300px]' : 'h-12 md:h-[200px]'} relative rounded-t-[25px] border-b-2 border-gray-400 bg-gradient-to-b from-[#0F114C] to-[#00658F] px-24 md:px-12`}
                                    >
                                        <div
                                            className={`mx-auto mt-8 w-fit rounded-[10px] px-2 py-1 text-[18px] font-medium md:px-12 md:text-sm ${prize.rank == 1 ? 'bg-[#FFC300]/30 text-[#FFC300]' : prize.rank == 2 ? 'bg-white text-[#0F114C]' : prize.rank == 3 ? 'bg-[#FF9377] text-[#CB3B28]' : 'bg-white text-[#0F114C]'}`}
                                        >
                                            Juara {prize.rank == 4 ? 'Favorit' : prize.rank}
                                        </div>
                                    </div>
                                </div>
                            )),
                        )}

                        <div
                            className="mb-4 hidden md:absolute md:bottom-0 md:left-12 md:flex">
                            <SideLeftArrowLeftIcon />
                        </div>
                    </div >
                </div >
            </section >
            {/* end prize */}

            {/* start timeline */}
            <section className="mx-auto mt-20 w-full max-w-[1200px] flex-shrink-0 px-4 sm:px-8 md:mt-36">
                <h1
                    className="font-rubik text-center text-3xl font-bold uppercase leading-[120%] tracking-[5.76px] text-[var(--Blue-Primary,#0F114C)] dark:text-white sm:text-4xl"
                    data-aos="fade-up"
                >
                    TIMELINE
                </h1>
                <p
                    className="font-rubik mx-auto mt-4 max-w-[653px] text-center text-base font-normal leading-[180%] tracking-[0.32px] text-[#5E5E5E] dark:text-gray-500"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Stay on track with our event schedule. From registration to the final announcement, here’s
                    everything you need to know about important dates.
                </p>
                <div className="h-16" />

                <div className="relative mt-12 flex min-h-fit flex-col items-center" style={{ gap: '96px' }}>
                    {/* Vertical blue line */}
                    <div className="absolute bottom-0 left-[32%] top-0 z-0 flex -translate-x-1/2 items-center sm:left-[22%]">
                        <div className="h-full w-2 rounded-full bg-[var(--Blue-Primary,#0F114C)]" />
                    </div>

                    {/* Timeline items */}
                    {competitions.competition_content.map((content, idx) =>
                        content.competition_content_timeline.map((timeline, i) => (
                            <div
                                className="relative z-10 flex w-full max-w-[900px] items-center"
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className={`relative h-max flex-1 flex-shrink-0 rounded-[10px] border border-[var(--Blue-Primary,#0F114C)] bg-white py-4 dark:bg-[#0F114C]`}>
                                    {/* Status Label */}
                                    <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-md px-3 py-1 shadow-sm
                                        ${timeline.title == current_periode?.title ? 'bg-[#00D238]/20 text-[#00D238]'
                                            : 'bg-[#E82323]/20 text-[#E82323]'}`}
                                    >
                                        <div className={`h-3 w-3 rounded-full ${timeline.title == current_periode?.title ? 'bg-[#00D238]' : 'bg-[#E82323]'}`} />
                                        <span className={`font-rubik text-xs font-medium ${timeline.title == current_periode?.title ? 'text-[#00D238]' : 'text-[#E82323]'}`}>
                                            {timeline.title == current_periode?.title ? 'Available' : 'Not Available'}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <div className='flex justify-center items-center'>
                                        <p className="font-rubik xs:text-sm px-6 pt-10 text-center text-lg font-semibold capitalize leading-[120%] tracking-[1px] text-[var(--Blue-Primary,#0F114C)] dark:text-white sm:px-4 sm:pt-6 sm:text-lg md:text-lg md:tracking-[2px] lg:text-xl md:w-[600px] max-w-none">
                                            {timeline.title}
                                        </p>
                                    </div>

                                    {/* Gap */}
                                    <div className="xs:mt-[300px] mt-6 sm:mt-10" />

                                    {/* Description */}
                                    <p className="font-rubik xs:text-sm mt-4 px-6 pt-6 text-center text-sm font-normal leading-[150%] tracking-[0.32px] text-[#000000] dark:text-white sm:mt-4 sm:px-4 sm:pt-2 sm:text-sm md:text-base lg:text-lg">
                                        {`Timeline dimulai pada tanggal ${formatDateInTimeLine(timeline.start_date)} hingga ${formatDateInTimeLine(timeline.end_date)}`}
                                    </p>
                                    <p className="font-rubik text-md text-center font-normal leading-[150%] tracking-[0.32px] text-[#5E5E5E] dark:text-gray-500">
                                        Melalui website resmi{' '}
                                        <a href='https://itcc.hmtiudayana.id/' className="text-[#0F114C] dark:text-[#00658F]">
                                            https://itcc.hmtiudayana.id/
                                        </a>
                                    </p>
                                </div>

                                {/* Icon lingkaran biru*/}
                                <div className="absolute -top-6 left-20 rounded-[500px] bg-gradient-to-b from-[#0F114C] to-[#00658F] p-4 sm:left-24">
                                    <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-primary"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="39"
                                        height="39"
                                        viewBox="0 0 39 39"
                                        fill="none"
                                        x="26.5"
                                        y="26.5"
                                    >
                                        <path
                                            d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>

                                {/* Icon kalender */}
                                <div className="left-18 absolute left-24 top-[55%] hidden -translate-y-1/2 sm:absolute sm:block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="55"
                                        height="55"
                                        viewBox="0 0 55 55"
                                        fill="none"
                                    >
                                        <path
                                            d="M16.0423 6.8763V2.29297H20.6257V6.8763H34.3757V2.29297H38.959V6.8763H48.1257C49.3913 6.8763 50.4173 7.90233 50.4173 9.16797V20.6263H45.834V11.4596H38.959V16.043H34.3757V11.4596H20.6257V16.043H16.0423V11.4596H9.16732V43.543H22.9173V48.1263H6.87565C5.61001 48.1263 4.58398 47.1003 4.58398 45.8346V9.16797C4.58398 7.90233 5.61001 6.8763 6.87565 6.8763H16.0423ZM38.959 27.5013C33.8965 27.5013 29.7923 31.6054 29.7923 36.668C29.7923 41.7305 33.8965 45.8346 38.959 45.8346C44.0215 45.8346 48.1257 41.7305 48.1257 36.668C48.1257 31.6054 44.0215 27.5013 38.959 27.5013ZM25.209 36.668C25.209 29.0741 31.3651 22.918 38.959 22.918C46.5529 22.918 52.709 29.0741 52.709 36.668C52.709 44.2619 46.5529 50.418 38.959 50.418C31.3651 50.418 25.209 44.2619 25.209 36.668ZM36.6673 29.793V37.6172L41.9219 42.8717L45.1628 39.6309L41.2507 35.7188V29.793H36.6673Z"
                                            fill="#ACACAC"
                                        />
                                    </svg>
                                </div>

                                {/* Horizontal line pemisah */}
                                <div className="absolute left-12 right-8 top-1/2 h-[2px] -translate-y-1/2 transform bg-[var(--Blue-Primary,#3a3a3a)] sm:left-[200px] sm:right-16" />
                            </div>
                        )),
                    )}
                </div>
            </section>
            {/* end timeline */}

            {/* start faq */}
            <section className="relative mx-auto mt-20 w-full max-w-[1440px] flex-shrink-0 bg-white px-4 dark:bg-[#040529] sm:px-8 md:mt-36">
                <div
                    className="absolute left-4 top-4 hidden sm:left-10 sm:top-10 lg:block">
                    <SideLeftCrookedCrossIcon />
                </div>

                <h1
                    className="font-rubik mt-4 text-center text-[24px] font-bold uppercase leading-[120%] tracking-[3px] text-[color:var(--Blue-Primary,#0F114C)] dark:text-white sm:mt-8 sm:text-[36px] sm:tracking-[5.76px]"
                    data-aos="fade-up"
                >
                    FAQ
                </h1>
                <p
                    className="font-rubik mx-auto mt-2 w-full max-w-[653px] px-2 text-center text-[14px] font-normal leading-[180%] tracking-[0.32px] text-[#5E5E5E] dark:text-gray-500 sm:mt-4 sm:text-[16px]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Got questions? We’ve got answers. Browse through our frequently asked questions to find quick
                    solutions and helpful information.
                </p>
                <div
                    className="relative mx-auto mt-6 flex max-w-[1200px] flex-col items-center lg:flex-row lg:items-start lg:justify-between"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <img
                        src={`${window.location.origin}/assets/images/competition/bannerFaq.png`}
                        className="w-full md:w-[450px]"
                        alt=""
                    />
                    <div className="mt-6 flex w-full flex-col gap-4 lg:ml-8 lg:mt-8 lg:w-auto">
                        {competitions.competition_content.map((content, idx) =>
                            content.competition_content_faq.map((item, i) => (
                                <Accordion
                                    heading={item.question}
                                    description={item.answer}
                                    isOpen={openIndex === i}
                                    onClick={() => handleAccordionClick(i)}
                                    key={i}
                                />
                            )),
                        )}
                    </div>
                    <div className="absolute bottom-4 right-4 hidden sm:bottom-10 sm:right-10 lg:top-24">
                        <SideRightCrossIcon />
                    </div>
                </div>
            </section >
            {/* end faq */}

            {/* start contact */}
            <section className="relative mb-5 mt-20 flex flex-col items-center px-5 md:mb-10 md:mt-36 md:px-24">
                <div
                    className="absolute bottom-0 right-24 hidden text-[#0F114C] md:block">
                    <SideRightBlueDotIcon />
                </div>
                <div className="absolute bottom-12 left-24 hidden rotate-90 transform text-[#0F114C] md:block">
                    <SideRightCrossIcon />
                </div>
                <div
                    className="absolute right-24 top-24 hidden transform text-[#0F114C] md:block">
                    <SideLeftArrowLeftIcon />
                </div>
                <div
                    className="absolute left-24 top-12 hidden transform text-[#0F114C] md:block">
                    <SideRightCircleIcon />
                </div>
                <h2
                    className="text-2xl font-bold uppercase tracking-[5px] text-[#0F114C] dark:text-white lg:text-4xl lg:tracking-[10px] text-center"
                    data-aos="fade-up"
                >
                    CONTACT PERSON
                </h2>
                <p
                    className="font-rubik mt-4 max-w-[700px] text-center text-sm font-normal tracking-[0.02em] text-[#5E5E5E] dark:text-gray-500 sm:text-base lg:text-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Need more help or want to reach out directly? Connect with our contact person for personalized
                    support and assistance.
                </p>
                {
                    competitions.competition_content.map((content, idx) => (
                        <div key={idx} className="mt-10 grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-3">
                            {content.competition_content_contact.map((contact, i) => (
                                <div
                                    className="flex md:flex-row flex-col items-center gap-10 rounded-[10px] border-[1px] border-[#ACACAC] px-10 py-5"
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-delay={200 + i * 100}
                                >
                                    <IconContactInCompetition className="shrink-0" />
                                    <div className="flex flex-col gap-3">
                                        <p className="text-[18px] font-bold leading-[180%] text-[#000000] dark:text-white">
                                            {contact.name ?? ''}
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <a href={`https://line.me/ti/p/${contact.id_line}`} className="flex flex-row items-center gap-2 text-[16px] text-[#0F114C] dark:text-gray-400" target='_blank'>
                                                <LineIcon />
                                                {contact.id_line ?? ''}
                                            </a>
                                            <a href={`https://wa.me/${contact.wa_number}`} className="flex flex-row items-center gap-2 text-[16px] text-[#0F114C] dark:text-gray-400" target='_blank'>
                                                <WhatsappIcon />
                                                {contact.wa_number ?? ''}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
                <img
                    src={`${window.location.origin}/assets/images/competition/bannerContact.png`}
                    className="mt-10 h-auto w-full md:h-[471px] md:w-[471px]"
                    alt=""
                    data-aos="fade-up"
                />
            </section >
            {/* end contact */}
        </>
    );
}

Competitions.layout = (page) => <GuestLayout children={page} title="Competition Page" />;
export default Competitions;
