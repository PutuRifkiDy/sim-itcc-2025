import { Button } from "@/Components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

function DashboardCompetition() {
    const show_registration_competitions = usePage().props.show_registration_competitions;
    const competitions = usePage().props.competitions;
    // const { flash_message } = usePage().props;

    // useEffect(() => {
    //     if (flash_message?.message) {
    //         toast[flash_message.type || 'success'](flash_message.message);
    //     }
    // }, [flash_message]);
    console.log("cek isi", show_registration_competitions);
    return (
        <>
            <div className="py-5">
                {show_registration_competitions != '' ? (
                    <div className="bg-white p-4 shadow rounded-lg sm:p-8">
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mb-10">
                            {show_registration_competitions.map((competition_registration, index) => (
                                <Link
                                    href={route('dashboard.competition.show', { id: competition_registration.id })}
                                    className="rounded-xl shadow-[#0190DC]/50 shadow-xl flex flex-col p-5 gap-3 transition ease-in-out duration-200 hover:shadow-[#0190DC]/90 hover:shadow-2xl"
                                    key={index}
                                >
                                    <div className="flex justify-center items-center">
                                        <img src={`${window.location.origin}/assets/images/image_temporary_competition.png`} className="w-[200px] h-[195px]" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#5E5E5E] font-normal text-[14px] tracking-[0.03em] text-start">Competition</p>
                                        <p className="font-bold text-[20px] text-[#000000] line-clamp-1">{competition_registration.competitions.name}</p>
                                    </div>
                                    {competition_registration.payment_status == "Requested" && (
                                        <div className="flex flex-row gap-2 items-center bg-[#4880FF]/20 py-1 px-2 rounded-lg text-[#4880FF] w-fit">
                                            <div className="bg-[#4880FF] rounded-full w-[10px] h-[10px]"></div>
                                            <p className="text-[14px] font-semibold text-[#4880FF]">{competition_registration.payment_status}</p>
                                        </div>
                                    )}
                                    {competition_registration.payment_status == "Pending" && (
                                        <div className="flex flex-row gap-2 items-center bg-[#FFC300]/20 py-1 px-2 rounded-lg text-[#FFC300] w-fit">
                                            <div className="bg-[#FFC300] rounded-full w-[10px] h-[10px]"></div>
                                            <p className="text-[14px] font-semibold text-[#FFC300]">{competition_registration.payment_status}</p>
                                        </div>
                                    )}
                                    {competition_registration.payment_status == "Verified" && (
                                        <div className="flex flex-row gap-2 items-center bg-[#00D238]/20 py-1 px-2 rounded-lg text-[#00D238] w-fit">
                                            <div className="bg-[#00D238] rounded-full w-[10px] h-[10px]"></div>
                                            <p className="text-[14px] font-semibold text-[#00D238]">{competition_registration.payment_status}</p>
                                        </div>
                                    )}
                                    {competition_registration.payment_status == "Rejected" && (
                                        <div className="flex flex-row gap-2 items-center bg-[#E82323]/20 py-1 px-2 rounded-lg text-[#E82323] w-fit">
                                            <div className="bg-[#E82323] rounded-full w-[10px] h-[10px]"></div>
                                            <p className="text-[14px] font-semibold text-[#E82323]">{competition_registration.payment_status}</p>
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="rounded-xl shadow-[#0190DC]/50 shadow-lg flex flex-col p-5 gap-10 transition ease-in-out duration-200 hover:shadow-[#0190DC]/50 hover:shadow-xl justify-center items-center cursor-pointer">
                                        <div className="flex justify-center items-center">
                                            <img src={`${window.location.origin}/assets/images/image_for_join_another_in_dashboard.png`} alt="" className="w-[150px] h-[150px]" />
                                        </div>
                                        <p className="font-bold text-[#000000] text-[20px] tracking-[0.03em]">Join Another</p>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 flex flex-col px-4 gap-3 py-2 outline-none">
                                    {competitions
                                        .filter((competition) => competition.is_open_regis == true)
                                        .map((competition) => (
                                            <Link
                                                key={competition.id}
                                                href={route('competition.front.show', [competition.slug])}
                                                className="truncate"
                                            >
                                                {competition.name}
                                            </Link>
                                        ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 flex flex-col gap-2 justify-center items-center">
                        {/* {`${window.location.origin} */}
                        <img src={`${window.location.origin}/assets/images/image_for_dashboard_semnas.png`} alt="waw" className="w-[344px] h-[312px]" />
                        <div className="flex flex-col gap-2 justify-center items-center mb-5">
                            <p className="font-semibold text-[22px] text-[#5E5E5E]">
                                Not Registered for Any Competitions
                            </p>
                            <p className="font-regular text-[16px] text-[#5E5E5E] w-[400px] text-center">
                                Join now to compete, showcase your talents, and win exciting prizes!
                            </p>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <p className='cursor-pointer flex flex-row gap-2 justify-center items-center'>
                                    <Button variant="blue" className="px-14 shadow-xl">
                                        Register
                                    </Button>
                                </p>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-3 py-3 outline-none" >
                                {competitions
                                    .filter((competition) => competition.is_open_regis == true)
                                    .map((competition) => (
                                        <Link
                                            key={competition.id}
                                            href={route('competition.front.show', [competition.slug])}
                                            className="truncate"
                                        >
                                            {competition.name}
                                        </Link>
                                    ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )}
            </div>
        </>
    );
}

export default DashboardCompetition;
DashboardCompetition.layout = (page) => <DashboardLayout children={page} title="Competition" />
