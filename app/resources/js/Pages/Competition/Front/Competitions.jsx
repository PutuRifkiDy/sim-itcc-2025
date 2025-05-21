import { IconContactInCompetition, IconFaq, SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCircleIcon, SideRightCrossIcon, SideRightDotIcon, SideRightSquareIndexOne, SideRightSquareIndexThree, SideRightSquareIndexTwo } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { flashMessage } from "@/lib/utils";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LineIcon, WhatsappIcon } from "@/Components/IconAdmin";
import { Accordion } from "@/Components/Accordion";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";

function Competitions({ ...props }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const competitions = usePage().props.competition;
    const current_batch = usePage().props.current_batch;

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    console.log(competitions);
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
    }

    const formatMoney = (nominal) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(new Number(nominal));
    }

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
            {/* start home */}
            <section className="px-5 md:px-24 md:pb-24 mb-18 md:mt-44 mt-28">
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6">
                    <div className="w-full flex flex-col">
                        <div className="flex flex-col items-start relative">
                            <div className="flex items-center gap-2" data-aos="fade-up">
                                <div className="w-[30px] h-[30px] flex-shrink-0" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        className="dark:text-white text-[#0F114C]"
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
                                <span className="text-black dark:text-white text-[16px] font-regular tracking-[0.03em] uppercase">
                                    {competitions.competition_content[0].location}
                                </span>
                                <div className="absolute left-96 top-0 -translate-y-1/2 md:block hidden">
                                    <SideLeftCrookedCrossIcon />
                                </div>
                            </div>

                            <div className="h-2" />

                            <span className="text-[#0F114C] text-2xl md:text-[36px] font-bold leading-[120%] tracking-[3px] md:tracking-[5.76px] uppercase dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
                                {competitions.name}
                            </span>
                            <div className="h-4" />

                            <div
                                className="py-2 px-4 md:w-[400px] w-full rounded-[10px] flex justify-between items-center bg-gradient-to-r from-[#0F114C] to-[#00658F]"
                                data-aos="fade-up" data-aos-delay="200"
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-white uppercase text-[13px] font-bold tracking-[16%]">
                                        CLOSING GELOMBANG 1
                                    </span>
                                    <span className="text-[#E6E6E6] text-[11px] font-bold uppercase tracking-[16%]">
                                        01 MEI - 02 JUNI
                                    </span>
                                </div>

                                <div className="flex flex-row items-end gap-2">
                                    <span className="text-white text-[46px] font-extrabold">
                                        10
                                    </span>
                                    <div className="flex flex-col gap-0 py-1">
                                        <span className="text-white text-[19px] font-semibold font-[Roboto]">
                                            Days
                                        </span>
                                        <span className="text-white text-[19px] font-semibold font-[Roboto]">
                                            Left
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-10" />

                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10" data-aos="fade-up" data-aos-delay="300">

                                <Button variant="blue" className="text-[20px] font-medium md:px-7 px-12 py-6 rounded-[10px]" size="lg">
                                    Register
                                </Button>

                                <Dialog>
                                    <DialogTrigger className="flex items-center gap-2">
                                        <button
                                            className="flex justify-center items-center cursor-pointer w-[60px] h-[60px] rounded-[500px] bg-[#00658F] shadow-[0_10px_10px_#C8DBFF] dark:shadow-none shrink-0 border-none"

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
                                        <span className="text-[16px] font-semibold tracking-wide flex-grow flex-shrink-0 text-[#3A3A3A] dark:text-white">
                                            How to Join
                                        </span>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl">
                                        <DialogTitle>
                                            How to Join
                                        </DialogTitle>
                                        <iframe
                                            src="https://www.youtube.com/embed/xvFZjo5PgG0?si=Uq1_-POS0iBEixB2"
                                            title="How to Join Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="rounded-lg shadow-lg w-full h-96"
                                        ></iframe>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="flex items-center gap-2 mt-10" data-aos="fade-up" data-aos-delay="400">
                                <a
                                    href={competitions.competition_content[0].guidebook_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[23px] text-[#0F114C] dark:text-white"
                                >
                                    Guidebook
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="dark:text-white text-[#0F114C]"
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
                            </div>

                            <div className="relative flex md:flex-row flex-col items-center gap-2 md:items-start">
                                <div className="hidden md:inline-flex md:absolute top-40 left-160 items-center gap-3">
                                    <SideLeftArrowLeftIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* side right */}
                    <div className="w-full md:block hidden">
                        <div className="relative">
                            <div className="flex flex-row justify-end text-[#0F114C]" data-aos="fade-up" data-aos-delay="100">
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
                                <img src={`${window.location.origin}/assets/images/landing/right-side-index-3.png`} className="w-[290.2px] h-[324.48px]" alt="" />
                            </div>
                            <div className="absolute top-12 right-[19rem] z-40" data-aos="fade-up" data-aos-delay="200">
                                <img src={`${window.location.origin}/assets/images/landing/right-side-index-2.png`} className="w-[268.24px] h-[150.95px]" alt="" />
                            </div>
                            <div className="absolute top-52 right-[19rem] z-40" data-aos="fade-up" data-aos-delay="300">
                                <img src={`${window.location.origin}/assets/images/landing/right-side-index-1.png`} className="w-[193.09px] h-[262.78px]" alt="" />
                            </div>
                            <div className="absolute top-96 right-16 z-40" data-aos="fade-up" data-aos-delay="400">
                                <SideRightCircleIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end home */}

            {/* start about */}
            <section className="w-full min-h-[500px] relative bg-gradient-to-r from-[#0F114C] dark:from-[#100961] to-[#00658F] overflow-hidden md:mt-48 mt-24">
                <img className="md:w-80 w-40 top-0 left-0 absolute" src={`${window.location.origin}/assets/images/about/leftEdge.png`} />
                <div className="absolute top-0 right-0 flex flex-col items-end w-full">
                    <div className="md:w-96 w-20 h-[2px] bg-white mt-2"></div>
                    <div className="md:w-96 w-20 h-[2px] bg-[#00658C]"></div>
                    <div className="md:w-48 w-10 h-[2px] mt-4 bg-[#00658C]"></div>
                    <div className="md:w-48 w-10 h-[6px] bg-white"></div>
                </div>
                <div className="md:flex-row flex-col flex items-center md:justify-evenly justify-center container mx-auto px-4 md:pt-32 pt-10 gap-8 pb-24">
                    <img className="md:w-96 w-60" src={`${window.location.origin}/assets/images/about/ITCCLogo.png`} alt="ITCC 2025 Logo" data-aos="fade-up" />
                    <div className="md:w-[600px] relative">
                        <h2 className="text-[#A5CBD0] text-xl md:text-2xl font-rubik font-bold tracking-[5px] uppercase" data-aos="fade-up" data-aos-delay="100">What is <span className="">{competitions.name}</span>?</h2>
                        <img className="absolute top-0 -right-10 md:w-10 w-6" src={`${window.location.origin}/assets/images/about/bluePlus.png`} alt="" data-aos="fade-up" data-aos-delay="100" />
                        <p className="font-rubik text-white font-light my-6 md:text-lg text-base text-justify" data-aos="fade-up" data-aos-delay="200">
                            {competitions.description}
                        </p>
                        <div className="flex flex-row gap-x-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                        </div>
                    </div>
                </div>
                <img className="lg:w-52 xl:w-60 w-40 bottom-0 right-0 absolute" src={`${window.location.origin}/assets/images/about/rightEdge.png`} />
                <img className="bottom-0 left-0 md:w-80 w-40 absolute md:translate-y-10 translate-y-5 z-10" src={`${window.location.origin}/assets/images/about/leftLine.png`} alt="" />
                <img className="bottom-0 left-0 md:w-20 w-10 absolute" src={`${window.location.origin}/image/about/leftDots.png`} alt="" />
                <div className="absolute md:block hidden bottom-0 left-5 z-20 text-white" data-aos="fade-up" data-aos-delay="400">
                    <SideRightBlueDotIcon />
                </div>
            </section>
            {/* end about */}

            {/* start prize */}
            <section className="flex flex-col items-center py-20 md:mt-36 mt-20 relative min-h-[500px]">
                <div className="absolute md:left-12 left-[-70px] top-32 rotate-90 md:w-0 w-1/2 md:block hidden">
                    <SideRightCrossIcon />
                </div>
                <h2 className="uppercase lg:text-4xl text-2xl font-bold text-[#0F114C] dark:text-white lg:tracking-[10px] tracking-[5px]" data-aos="fade-up">
                    PRIZE CATEGORY
                </h2>
                <p className="mt-4 text-[#5E5E5E] dark:text-gray-500 font-rubik text-sm sm:text-base lg:text-lg font-normal tracking-[0.02em] text-center mx-4 lg:w-2/5 w-3/4 mb-10" data-aos="fade-up" data-aos-delay="100">
                    We’ve prepared exciting rewards for the best! Explore the prize categories and see what’s waiting for the winners of each competition track.
                </p>
                <div className="absolute md:right-20 right-10 top-4 md:top-52 -translate-y-1/2 text-[#0F114C] md:block hidden">
                    <SideLeftCrookedCrossIcon />
                </div>
                <div className="h-full w-full px-4 flex items-end pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 w-full">
                        {competitions.competition_content.map((content, i) => (
                            content.competition_content_prizes.map((prize, i) => (
                                <div className="flex flex-col items-center mt-auto" key={i} data-aos="fade-up" data-aos-delay="200">
                                    {prize.rank == 1 ?
                                        <img src={`${window.location.origin}/assets/images/competition/goldTrophy.png`} alt="First Place Trophy" className="md:w-[189px] md:h-[189px] w-24 h-24 mb-4" />
                                        : prize.rank == 2 ?
                                            <img src={`${window.location.origin}/assets/images/competition/silverTrophy.png`} alt="Second Place Trophy" className="md:w-[189px] md:h-[189px] w-24 h-24 mb-4" />
                                            : prize.rank == 3 ?
                                                <img src={`${window.location.origin}/assets/images/competition/bronzeTrophy.png`} alt="Third Place Trophy" className="md:w-[189px] md:h-[189px] w-24 h-24 mb-4" />
                                                : <img src={`${window.location.origin}/assets/images/competition/bronzeTrophy.png`} alt="Third Place Trophy" className="md:w-[189px] md:h-[189px] w-24 h-24 mb-4" />}
                                    <p className="md:text-[32px] text-[24px] font-bold mb-2 leading-[120%] tracking-[16%]">
                                        {formatMoney(prize.money)}
                                    </p>
                                    <div className={`${prize.rank == 1 ? "md:h-[500px] h-96" : prize.rank == 2 ? "md:h-[400px] h-48" : prize.rank == 3 ? "md:h-[300px] h-24" : "md:h-[200px] h-12"} md:px-12 px-24 bg-gradient-to-b from-[#0F114C] to-[#00658F] rounded-t-[25px] border-b-2 border-gray-400 relative`}>
                                        <div className={`px-2 md:px-12 py-1 rounded-[10px] md:text-sm text-[18px] font-medium w-fit mx-auto mt-8 ${prize.rank == 1 ? "bg-[#FFC300]/30 text-[#FFC300]" : prize.rank == 2 ? "bg-white text-[#0F114C]" : prize.rank == 3 ? "text-[#CB3B28] bg-[#FF9377]" : "bg-white text-[#0F114C]"}`}>
                                            Juara{" "}{prize.rank == 4 ? "Favorit" : prize.rank}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ))}
                        <div className="md:absolute md:flex md:bottom-0 md:left-12 mb-4 hidden">
                            <SideLeftArrowLeftIcon />
                        </div>
                    </div>
                </div>
            </section>
            {/* end prize */}

            {/* start timeline */}
            <section className="w-full max-w-[1200px] flex-shrink-0 mx-auto px-4 sm:px-8 md:mt-36 mt-20">
                <h1 className="text-center text-[var(--Blue-Primary,#0F114C)] font-rubik text-3xl sm:text-4xl font-bold leading-[120%] tracking-[5.76px] uppercase dark:text-white" data-aos="fade-up">
                    TIMELINE
                </h1>
                <p className="mx-auto mt-4 text-center text-[#5E5E5E] font-rubik text-base font-normal leading-[180%] tracking-[0.32px] max-w-[653px] dark:text-gray-500" data-aos="fade-up" data-aos-delay="100">
                    Stay on track with our event schedule. From registration to the final
                    announcement, here’s everything you need to know about important dates.
                </p>
                <div className="h-16" />

                <div
                    className="relative flex flex-col items-center mt-12 min-h-fit"
                    style={{ gap: "96px" }}
                >
                    {/* Vertical blue line */}
                    <div className="absolute left-[26%] sm:left-[22%] -translate-x-1/2 top-0 bottom-0 flex items-center z-0">
                        <div className="w-2 bg-[var(--Blue-Primary,#0F114C)] h-full rounded-full" />
                    </div>

                    {/* Timeline items */}
                    {competitions.competition_content.map((content, idx) => (
                        content.competition_content_timeline.map((timeline, i) => (
                            <div
                                className="relative z-10 flex items-center w-full max-w-[900px]"
                                key={i}
                                data-aos="fade-up" data-aos-delay={idx * 100}
                            >
                                <div className="relative flex-1 h-max rounded-[10px] border border-[var(--Blue-Primary,#0F114C)] bg-white dark:bg-[#0F114C] flex-shrink-0 py-4">
                                    {/* Status Label */}
                                    <div
                                        className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1 rounded-md shadow-sm bg-green-100 text-green-700"
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full bg-green-500"
                                        />
                                        <span className="text-xs font-medium text-gray-600 font-rubik">
                                            available
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <p className="text-[var(--Blue-Primary,#0F114C)] dark:text-white text-center font-rubik font-semibold leading-[120%] md:tracking-[4.48px] tracking-[1px] capitalize text-sm sm:text-lg md:text-xl lg:text-2xl pt-10 sm:pt-6 px-6 sm:px-4 xs:text-sm">
                                        {timeline.title}
                                    </p>

                                    {/* Gap */}
                                    <div className="mt-6 sm:mt-10 xs:mt-[300px]" />

                                    {/* Description */}
                                    <p className="text-[#000000] dark:text-white text-center font-rubik font-normal leading-[150%] tracking-[0.32px] text-sm sm:text-sm md:text-base lg:text-lg px-6 sm:px-4 mt-4 sm:mt-4 xs:text-sm pt-6 sm:pt-2">
                                        {`Timeline dimulai pada tanggal ${formatDateInTimeLine(timeline.start_date)} hingga ${formatDateInTimeLine(timeline.end_date)}`}
                                    </p>
                                    <p className="text-[#5E5E5E] dark:text-gray-500 text-center font-rubik font-normal leading-[150%] tracking-[0.32px] text-md">
                                        Melalui website resmi <span className="text-[#0F114C] dark:text-[#00658F]">https://itcc.hmtiudayana.id/</span>
                                    </p>
                                </div>

                                {/* Icon lingkaran biru*/}
                                <div className="bg-gradient-to-b from-[#0F114C] to-[#00658F] rounded-[500px] p-4 absolute -top-6 left-20 sm:left-24">
                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping z-0 w-full h-full"></div>
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
                                <div className="absolute left-18 sm:absolute left-24 top-[55%] -translate-y-1/2 hidden sm:block">
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
                                <div className="absolute top-1/2 left-12 sm:left-[200px] right-8 sm:right-16 h-[2px] bg-[var(--Blue-Primary,#3a3a3a)] transform -translate-y-1/2" />
                            </div>
                        ))

                    ))}
                </div>
            </section>
            {/* end timeline */}

            {/* start faq */}
            <section className="relative max-w-[1440px] w-full flex-shrink-0 bg-white dark:bg-[#040529] mx-auto px-4 sm:px-8 md:mt-36 mt-20">
                <div className="absolute top-4 left-4 sm:top-10 sm:left-10 hidden lg:block">
                    <SideLeftCrookedCrossIcon />
                </div>

                <h1 className="text-[24px] sm:text-[36px] leading-[120%] font-bold font-rubik text-center uppercase tracking-[3px] sm:tracking-[5.76px] text-[color:var(--Blue-Primary,#0F114C)] mt-4 sm:mt-8 dark:text-white" data-aos="fade-up">
                    FAQ
                </h1>
                <p className="text-[#5E5E5E] text-center font-rubik text-[14px] sm:text-[16px] font-normal leading-[180%] tracking-[0.32px] mt-2 sm:mt-4 px-2 mx-auto max-w-[653px] w-full dark:text-gray-500" data-aos="fade-up" data-aos-delay="100">
                    Got questions? We’ve got answers. Browse through our frequently asked
                    questions to find quick solutions and helpful information.
                </p>
                <div className="flex flex-col lg:flex-row mt-6 mx-auto max-w-[1200px] items-center lg:items-start relative lg:justify-between" data-aos="fade-up" data-aos-delay="200">
                    <img src={`${window.location.origin}/assets/images/competition/bannerFaq.png`} className="md:w-[450px] w-full" alt="" />
                    <div className="flex flex-col gap-4 lg:ml-8 mt-6 lg:mt-8 w-full lg:w-auto">
                        {competitions.competition_content.map((content, idx) => (
                            content.competition_content_faq.map((item, i) => (
                                <Accordion
                                    heading={item.answer}
                                    description={item.question}
                                    isOpen={openIndex === i}
                                    onClick={() => handleAccordionClick(i)}
                                />
                            ))
                        ))}
                    </div>
                    <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 hidden lg:block">
                        <SideRightCrossIcon />
                    </div>
                </div>
            </section>
            {/* end faq */}

            {/* start contact */}
            <section className="md:mt-36 md:mb-10 mb-5 mt-20 md:px-24 px-5 flex flex-col items-center relative">
                <div className="absolute right-24 bottom-0 text-[#0F114C] md:block hidden">
                    <SideRightBlueDotIcon />
                </div>
                <div className="absolute left-24 bottom-12 text-[#0F114C] transform rotate-90 md:block hidden">
                    <SideRightCrossIcon />
                </div>
                <div className="absolute right-24 top-24 text-[#0F114C] transform md:block hidden">
                    <SideLeftArrowLeftIcon />
                </div>
                <div className="absolute left-24 top-12 text-[#0F114C] transform md:block hidden">
                    <SideRightCircleIcon />
                </div>
                <h2 className="uppercase lg:text-4xl text-2xl font-bold text-[#0F114C] lg:tracking-[10px] tracking-[5px] dark:text-white" data-aos="fade-up">
                    CONTACT PERSON
                </h2>
                <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base lg:text-lg font-normal tracking-[0.02em] text-center max-w-[700px] dark:text-gray-500" data-aos="fade-up" data-aos-delay="100">
                    Need more help or want to reach out directly? Connect with our contact person for personalized support and assistance.
                </p>
                {competitions.competition_content.map((content, idx) => (
                    <div key={idx} className="mt-10 grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-12">
                        {content.competition_content_contact.map((contact, i) => (
                            <div className="border-[1px] border-[#ACACAC] flex flex-row gap-10 rounded-[10px] items-center px-10 py-5" key={i} data-aos="fade-up" data-aos-delay={200 + i * 100}>
                                <IconContactInCompetition />
                                <div className="flex flex-col gap-3">
                                    <p className="font-bold text-[18px] leading-[180%] text-[#000000] dark:text-white">{contact.name ?? ''}</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-2 text-[#0F114C] text-[16px] dark:text-gray-400">
                                            <LineIcon />
                                            {contact.id_line ?? ''}
                                        </div>
                                        <div className="flex flex-row items-center gap-2 text-[#0F114C] text-[16px] dark:text-gray-400">
                                            <WhatsappIcon />
                                            {contact.wa_number ?? ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <img src={`${window.location.origin}/assets/images/competition/bannerContact.png`} className="md:w-[471px] md:h-[471px] mt-10 w-full h-auto" alt="" data-aos="fade-up" />
            </section>
            {/* end contact */}
        </>
    );
}

Competitions.layout = (page) => <GuestLayout children={page} title="Competition Page" />;
export default Competitions;
