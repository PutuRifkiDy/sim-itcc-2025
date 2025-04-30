import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArchiveBoxXMarkIcon, BanknotesIcon, BuildingLibraryIcon, CheckBadgeIcon, ClockIcon, PaperAirplaneIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { usePage } from "@inertiajs/react";

function Overview() {
    const count_participant_semnas = usePage().props.count_participant_semnas;
    const count_participant_competition = usePage().props.count_participant_competition;
    const sum_total_payment_semnas = usePage().props.sum_total_payment_semnas;
    const sum_total_payment_competition = usePage().props.sum_total_payment_competition;
    const count_institution = usePage().props.count_institution;

    return (
        <div className="py-5">
            <div className="bg-white p-4 shadow rounded-lg sm:p-8 gap-5">
                <div className="gap-5 grid md:grid-cols-3 grid-cols-1">
                    {/* ada 3 div untuk count requested, pending, sama rejected*/}
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#718EBF]/40">
                            <UserGroupIcon className="text-[#718EBF] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[14px] font-medium">Participant Semnas</p>
                            <p className="font-bold text-[24px] text-[#232323]">{count_participant_semnas}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#FFC300]/20">
                            <UserGroupIcon className="text-[#FFC300] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[14px] font-medium">Participant Competition</p>
                            <p className="font-bold text-[24px] text-[#232323]">{count_participant_competition}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#396AFF]/20">
                            <BuildingLibraryIcon className="text-[#396AFF] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[14px] font-medium">Total Institution</p>
                            <p className="font-bold text-[24px] text-[#232323]">{count_institution}</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/20">
                            <BanknotesIcon className="text-[#4DE45C] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[14px] font-medium">Total Semnas Income</p>
                            <p className="font-bold text-[24px] text-[#232323]">{sum_total_payment_semnas}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/20">
                            <BanknotesIcon className="text-[#4DE45C] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[14px] font-medium">Total Competition Income</p>
                            <p className="font-bold text-[24px] text-[#232323]">{sum_total_payment_competition}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
Overview.layout = (page) => <DashboardLayout children={page} title="Overview" header="Overview" />;
