import DashboardLayout from "@/Layouts/DashboardLayout";
import About from "./Partials/About";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";
import Payment from "./Partials/Payment";

function DashboardCompetition() {
    const competition_registrations = usePage().props.competition_registrations;
    const payment_methods = usePage().props.payment_methods;
    const competitions = usePage().props.competitions;
    const [tabs, setTabs] = useState("about");
    const { flash_message } = usePage().props;

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);
    return (
        <>
            <div className="py-5">
                {competition_registrations != null ? (
                    <div className="bg-white p-4 shadow rounded-lg sm:p-8">
                        <div className="flex flex-row md:gap-10 gap-5">
                            <Button variant="none" asChild onClick={() => setTabs("about")}>
                                <p className={`cursor-pointer ${tabs == "about" ? "text-[#4880FF] font-bold border-[#4880FF] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`}>About</p>
                            </Button>
                            <Button variant="none" asChild onClick={() => setTabs("payment")}>
                                <p className={`cursor-pointer ${tabs == "payment" ? "text-[#4880FF] font-bold border-[#4880FF] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Payment</p>
                            </Button>
                            <Button variant="none" asChild onClick={() => setTabs("submission")}>
                                <p className={`cursor-pointer ${tabs == "ticket" ? "text-[#4880FF] font-bold border-[#4880FF] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Submission</p>
                            </Button>
                        </div>

                        {tabs == "about" && <About className="w-full mt-5" competition_registrations={competition_registrations} />}
                        {tabs == "payment" && <Payment className="w-full mt-5" competition_registrations={competition_registrations} payment_methods={payment_methods} />}

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
DashboardCompetition.layout = (page) => <DashboardLayout children={page} title="Competition" />;
