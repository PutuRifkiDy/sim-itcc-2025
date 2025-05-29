import { SideLeftCrookedCrossIcon } from "@/Components/IconGuest";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";
import * as AOS from 'aos';
import 'aos/dist/aos.css';

function RegisterJoinTeam() {
    const slug = usePage().props.slug;



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

    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        token: '',
        _method: 'POST',
    });

    const onHandleSubmit = (e) => {

        e.preventDefault();

        if (!data.token) {
            toast.error("Please enter a token.");
            return;
        }

        post(route('register.competition.join-team.store', slug.slug), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const iconLomba = () => {
        switch (slug.slug) {
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


            <div className="min-h-screen flex flex-col items-center justify-center relative w-full md:mt-24 mt-5">
                <div className="w-full max-w-[600px] h-700px relative items-center">
                    <div className="hidden md:flex md:absolute md:-top-20 md:right-10 lg:-top-14 lg:-right-96 md:z-30">
                        {/* <SideRightSmallCircle /> */}
                    </div>
                    <img
                        src="/image/blueDots.svg"
                        className="hidden md:flex md:absolute md:top-[-40] lg:-top-44 md:-left-20 md:z-10 md:lg:w-32 md:flex-shrink-0 md:rotate-90"
                        alt=""
                    />
                    <div className="relative">
                        <div className="hidden md:flex flex-col absolute md:-bottom-28 md:left-0 z-3">
                            <SideLeftCrookedCrossIcon />
                        </div>
                        <img src={`${window.location.origin}/assets/images/competition/bannerRegisCompeLeft.png`} className="absolute -left-11 -top-11 z-0 w-[301px] h-[157px] md:block hidden" alt="" />
                        <div className="bg-white dark:bg-[#040529] outline outline-[3px] outline-[#E6E6E6] rounded-lg shadow-lg p-8 w-[90%] lg:w-[600px] z-20 relative mx-auto" data-aos="zoom-in">
                            <div className="flex flex-col items-center gap-4">
                                {iconLomba()}
                                <h2 className="text-[#0F114C] text-2xl font-bold dark:text-white">{slug.name}</h2>
                                <p className="text-black font-medium dark:text-gray-500">Insert Team Token</p>
                                <form onSubmit={(e) => onHandleSubmit(e)} className="w-full">

                                    <div className="">

                                        <TextInput
                                            id="token"
                                            type="token"
                                            name="token"
                                            value={data.token}
                                            onChange={(e) => setData('token', e.target.value)}
                                            className="mt-1 block w-3/4 dark:bg-[#040529]"
                                            isFocused
                                            placeholder="Insert Team Token"
                                            onErrors={errors.token && <InputError message={errors.token} className='mt-2' />}
                                        />

                                    </div>

                                    <div className="flex flex-row gap-5 mt-5">
                                        <Button className="w-1/2 py-3 text-[16px]" variant="blue" size="lg" type="submit" disabled={processing}>
                                            Join
                                        </Button>
                                        <Button variant="none" asChild className="w-1/2 rounded-lg py-3 bg-white hover:bg-[#0F114C] border-2 border-[#0F114C] transition-all duration-300 ease-in-out text-[16px] dark:bg-[#040529]" size="lg">
                                            <Link
                                                href={route('register.competition.show', slug.slug)}
                                                className="hover:text-white text-[#0F114C] text-[18px] dark:text-white"
                                            >
                                                Back
                                            </Link>
                                        </Button>
                                    </div>
                                </form>
                                <div className="w-full">
                                    <p className="md:text-[14px] text-[10px] text-black mt-4 text-start dark:text-white">*Only the team leader creates the team.</p>
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
                    <div className="hidden md:flex md:w-full md:mt-10">
                        {/* <SideLeftArrowLeftIcon /> */}
                    </div>
                </div>
                <div className="hidden md:flex flex-col absolute -bottom-32 left-20 z-3">
                    {/* <SideRightCircleIcon />
                    <SideRightCircleIcon />
                    <SideRightCircleIcon />
                    <SideRightCircleIcon /> */}
                </div>
                <div className="hidden md:flex flex-col absolute md:-bottom-32 md:right-20 z-3">
                    {/* <SideRightCrossIcon /> */}
                </div>
            </div>
        </>
    );
}

export default RegisterJoinTeam;
RegisterJoinTeam.layout = (page) => <GuestLayout children={page} title="Register Join Team" />;


