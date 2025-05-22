import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCircleIcon, SideRightCrossIcon, SideRightSmallCircle } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, usePage } from "@inertiajs/react";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Register() {
    const slug = usePage().props.slug;
    const name_competition = usePage().props.name_competition;


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

    const iconLomba = () => {
        switch (slug) {
            case "ide-bisnis":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/ideBisnisLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "web-design-smasmk":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/webDesignLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "web-design-mahasiswa":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/webDesignLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "pemrograman":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/pemrogramanLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "kids-game-programming":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/kgpLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "cerdas-cermat":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/lccLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "uiux-mahasiswa":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/UIUXLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "uiux-smasmk":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/UIUXLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "kids-game-programming-beginner":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/kgpLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
            case "kids-game-programming-intermediate":
                return (
                    <img
                        src={`${window.location.origin}/assets/images/competition/kgpLogo.png`}
                        alt="Seminar Nasional"
                        className="w-32 h-32 lg:w-44 lg:h-44"
                    />
                );
        }
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center relative w-full md:mt-40 mt-20">
                <div className="w-full max-w-[600px] h-[700px] relative items-center">
                    <div className="relative">
                        <div className="hidden md:flex flex-col absolute md:-bottom-28 md:left-0 z-3">
                            <SideLeftCrookedCrossIcon />
                        </div>
                        <img src={`${window.location.origin}/assets/images/competition/bannerRegisCompeLeft.png`} className="absolute -left-11 -top-11 z-0 w-[301px] h-[157px] md:block hidden" alt="" />
                        <div className="bg-white dark:bg-[#040529] border-2 border-[E6E6E6] dark:border-white rounded-[20px] p-8 w-[90%] lg:w-[600px] z-20 relative mx-auto" data-aos="zoom-in">
                            <div className="flex flex-col items-center gap-2">
                                {iconLomba()}
                                <h2 className="text-[#0F114C] text-[25px] font-bold dark:text-white">{name_competition}</h2>
                                <p className="text-black font-medium leading-[120%] dark:text-gray-500">Registration</p>

                                <div className="flex flex-col items-center gap-3 w-full mt-3">
                                    <Button variant="blue" asChild className="w-full rounded-lg py-6 text-[16px]" size="lg">
                                        <Link
                                            href={route('register.competition.team.show', { competition: slug })}
                                            className="text-white"
                                        >
                                            Create Team
                                        </Link>
                                    </Button>
                                    <div className="w-full flex flex-col items-center">
                                        <p className="text-[13px] text-[#121212] text-start leading-[120%] dark:text-white">Or</p>
                                    </div>
                                    <Button variant="none" asChild className="w-full rounded-lg py-6 bg-white hover:bg-[#0F114C] border-2 border-[#0F114C] transition-all duration-300 ease-in-out text-[16px] dark:bg-[#040529]" size="lg">
                                        <Link
                                            href={route('register.competition.join-team.show', { competition: slug })}
                                            className="hover:text-white text-[#0F114C] dark:text-white"
                                        >
                                            Join a Team
                                        </Link>
                                    </Button>
                                </div>
                                <div className="w-full">
                                    <p className="md:text-[14px] text-[10px] text-[#4E4E4E] mt-4 text-start dark:text-white">*Only the team leader creates the team.</p>
                                </div>
                            </div>
                        </div>
                        <img src={`${window.location.origin}/assets/images/competition/bannerRegisCompeRight.png`} className="absolute -right-11 -bottom-11 z-0 w-[301px] h-[157px] md:block hidden" alt="" />
                        <div className="hidden md:flex flex-col absolute md:-top-20 md:right-0 z-3">
                            <SideLeftCrookedCrossIcon />
                        </div>
                    </div>
                    <img
                        src="/image/blueDots.svg"
                        className="hidden md:flex md:absolute md:right-10 md:-bottom-20 md:z-10 md:w-32 md:flex-shrink-0"
                        alt=""
                    />
                    {/* <div className="hidden md:flex md:w-full md:mt-10">
                        <SideLeftArrowLeftIcon />
                    </div> */}
                </div>
                {/* <div className=" flex-col absolute bottom-32 left-20 z-3">
                    <SideRightCircleIcon />
                    <SideRightCircleIcon />
                    <SideRightCircleIcon />
                    <SideRightCircleIcon />
                </div> */}
                {/* <div className="hidden md:flex flex-col absolute md:-bottom-32 md:right-20 z-3">
                    <SideRightCrossIcon />
                </div>
                <div className="hidden md:flex md:absolute bottom-12 right-96 md:flex-shrink-0 md:rotate-180">
                    <SideRightBlueDotIcon />
                </div> */}
            </div>
        </>
    );
}

export default Register;
Register.layout = (page) => <GuestLayout children={page} title="Register Competition" />;
