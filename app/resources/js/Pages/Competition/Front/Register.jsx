import { SideLeftArrowLeftIcon, SideRightBlueDotIcon, SideRightCircleIcon, SideRightCrossIcon, SideRightSmallCircle } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, usePage } from "@inertiajs/react";

function Register() {
    const slug = usePage().props.slug;
    const name_competition = usePage().props.name_competition;
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center relative w-full md:mt-36 mt-20">
                <div className="w-full max-w-[600px] h-[700px] relative items-center">
                    <div className="hidden md:flex md:absolute md:-top-20 md:right-10 lg:-top-14 lg:-right-96 md:z-30">
                        {/* <SideRightSmallCircle /> */}
                    </div>
                    <div className="hidden md:flex md:absolute md:top-[-40] lg:-top-24 md:-left-20 md:z-10 md:lg:w-32 md:flex-shrink-0 md:rotate-90">
                        {/* <SideRightBlueDotIcon /> */}
                    </div>
                    <div className="bg-white shadow-[0_0_10px_#E6E6E6] border-2 border-[E6E6E6] rounded-[20px] p-8 w-[90%] lg:w-[600px] z-20 relative mx-auto">
                        <div className="flex flex-col items-center gap-2    ">
                            <img
                                src={`${window.location.origin}/assets/images/competition/ideBisnisLogo.png`}
                                alt="Seminar Nasional"
                                className="w-32 h-32 lg:w-44 lg:h-44"
                            />
                            <h2 className="text-[#0F114C] text-[25px] font-bold">{name_competition}</h2>
                            <p className="text-black font-medium leading-[120%]">Registration</p>

                            <div className="flex flex-col items-center gap-4 w-full mt-6">
                                <Button variant="blue" asChild className="w-full rounded-lg py-6" size="lg">
                                    <Link
                                        href={route('register.competition.team.show', { competition: slug })}
                                        className="text-white text-[18px]"
                                    >
                                        Create Team
                                    </Link>
                                </Button>
                                <div className="w-full flex flex-col items-center">
                                    <p className="text-[13px] text-[#121212] text-start leading-[120%]">Or</p>
                                </div>
                                <Button variant="none" asChild className="w-full rounded-lg py-6 bg-white hover:bg-[#0F114C] border-2 border-[#0F114C] transition-all duration-300 ease-in-out" size="lg">
                                    <Link
                                        href={route('register.competition.join-team.show', { competition: slug })}
                                        className="hover:text-white text-[#0F114C] text-[18px]"
                                    >
                                        Join a Team
                                    </Link>
                                </Button>
                            </div>
                            <div className="w-full">
                                <p className="md:text-[14px] text-[10px] text-[#4E4E4E] mt-4 text-start">*Only the team leader creates the team.</p>
                            </div>
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
