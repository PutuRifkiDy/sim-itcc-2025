import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArchiveBoxXMarkIcon, BanknotesIcon, BuildingLibraryIcon, CheckBadgeIcon, ClockIcon, PaperAirplaneIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

function Overview() {
    ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, BarElement);

    const count_participant_semnas = usePage().props.count_participant_semnas;
    const count_participant_competition = usePage().props.count_participant_competition;
    const sum_total_payment_semnas = usePage().props.sum_total_payment_semnas;
    const sum_total_payment_competition = usePage().props.sum_total_payment_competition;
    const count_institution = usePage().props.count_institution;
    const monthly_sales_chart = usePage().props.monthly_sales_chart;
    const monthly_registrations_chart = usePage().props.monthly_registrations_chart;

    const { flash_message } = usePage().props;

    const data = {
        labels: monthly_sales_chart.labels,
        datasets: monthly_sales_chart.datasets.map(ds => ({
            ...ds,
            fill: false,
            tension: 0,
            pointRadius: 4,
            borderWidth: 2,
        })),
    };

    const dataRegistrations = {
        labels: monthly_registrations_chart.labels,
        datasets: monthly_registrations_chart.datasets.map(ds => ({
            ...ds,
            fill: false,
            tension: 0,
            pointRadius: 4,
            borderWidth: 2,
        }))
    }

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);

    return (
        <div className="py-5">
            <div className="bg-white dark:bg-[#0F114C] p-4 shadow rounded-lg sm:p-8 gap-5">
                <div className="gap-5 grid md:grid-cols-3 grid-cols-1 bg-white dark:bg-[#0F114C]">
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#718EBF]/40">
                            <UserGroupIcon className="text-[#718EBF] w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Participant Semnas</p>
                            <p className="font-bold text-[24px] text-[#232323] dark:text-white">{count_participant_semnas}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#FFC300]/20">
                            <UserGroupIcon className="text-[#FFC300] w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Participant Competition</p>
                            <p className="font-bold text-[24px] text-[#232323] dark:text-white">{count_participant_competition}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#396AFF]/20">
                            <BuildingLibraryIcon className="text-[#396AFF] w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Total Institution</p>
                            <p className="font-bold text-[24px] text-[#232323] dark:text-white">{count_institution}</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/20">
                            <BanknotesIcon className="text-[#4DE45C] w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Total Semnas Income</p>
                            <p className="font-bold text-[24px] text-[#232323] dark:text-white">{sum_total_payment_semnas}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex items-center flex-row gap-10 py-5 px-5 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/20">
                            <BanknotesIcon className="text-[#4DE45C] w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#3A3A3A]/90 text-[16px] font-medium dark:text-white">Total Competition Income</p>
                            <p className="font-bold text-[24px] text-[#232323] dark:text-white">{sum_total_payment_competition}</p>
                        </div>
                    </div>
                </div>

                <div className='px-4 pt-5 pb-6 mt-8 bg-white border-2 rounded-lg sm:px-6 sm:pt-6 flex md:flex-row flex-col gap-5 dark:bg-[#0F114C] dark:border-[#E4F0F8]'>
                    <div className="md:w-1/2 w-full ">
                        <h1 className="text-xl font-medium">
                            Monthly Sales Chart
                        </h1>
                        <p className="text-gray-500 text-[14px] mb-5">
                            Monthly sales over previous 6 months
                        </p>
                        <Line data={data} />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h1 className="text-xl font-medium">
                            Monthly Registrations Chart
                        </h1>
                        <p className="text-gray-500 text-[14px] mb-5">
                            Monthly registrations over previous 6 months
                        </p>
                        <Bar data={dataRegistrations} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
Overview.layout = (page) => <DashboardLayout children={page} title="Overview" header="Overview" description="All reports of progress in this page"/>;
