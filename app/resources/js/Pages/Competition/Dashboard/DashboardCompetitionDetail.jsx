import DashboardLayout from "@/Layouts/DashboardLayout";
import About from "./Partials/About";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";
import Payment from "./Partials/Payment";
import Submission from "./Partials/Submission";

function DashboardCompetitionDetail() {
    const user_competition_registrations = usePage().props.user_competition_registrations;
    const payment_methods = usePage().props.payment_methods;
    const competitions = usePage().props.competitions;
    const show_reject_reason_submission = usePage().props.show_reject_reason_submission;

    const status_submission = usePage().props.status_submission;
    const [tabs, setTabs] = useState("about");
    return (
        <>
            <div className="py-5">
                <Link
                    href={route('dashboard.competition.index')}
                    className="flex flex-row gap-2 items-center text-[#5E5E5E] hover:text-[#000000] hover:transition-all duration-500 ease-in-out mb-5 font-bold w-fit"
                >
                        <ChevronLeftIcon className="w-5 h-5" />
                    Back
                </Link>
                <div className="bg-white p-4 shadow rounded-lg sm:p-8">
                    <div className="flex flex-row md:gap-10 gap-5">
                        <Button variant="none" asChild onClick={() => setTabs("about")}>
                            <p className={`cursor-pointer ${tabs == "about" ? "text-[#0F114C] font-bold border-[#0F114C] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`}>About</p>
                        </Button>
                        <Button variant="none" asChild onClick={() => setTabs("payment")}>
                            <p className={`cursor-pointer ${tabs == "payment" ? "text-[#0F114C] font-bold border-[#0F114C] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Payment</p>
                        </Button>
                        <Button variant="none" asChild onClick={() => setTabs("submission")}>
                            <p className={`cursor-pointer ${tabs == "submission" ? "text-[#0F114C] font-bold border-[#0F114C] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Submission</p>
                        </Button>
                    </div>

                    {tabs == "about" && user_competition_registrations && (
                        <About className="w-full mt-5" user_competition_registrations={user_competition_registrations} />
                    )}
                    {tabs == "payment" && user_competition_registrations && (
                        <Payment className="w-full mt-5" user_competition_registrations={user_competition_registrations} payment_methods={payment_methods} />
                    )}
                    {tabs == "submission" && user_competition_registrations && (
                        <Submission className="w-full mt-5" user_competition_registrations={user_competition_registrations} competitions={competitions} status_submission={status_submission} show_reject_reason_submission={show_reject_reason_submission} />
                    )}
                </div>
            </div>
        </>
    );
}

export default DashboardCompetitionDetail;
DashboardCompetitionDetail.layout = (page) => <DashboardLayout children={page} title="Competition Detail" header="Competition Detail" description="Manage your payment and submission in this page"/>;
