import DashboardLayout from '@/Layouts/DashboardLayout';
import { BanknotesIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { usePage } from '@inertiajs/react';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { toast } from 'sonner';

function Overview() {
    ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, BarElement);

    const count_participant_semnas = usePage().props.count_participant_semnas;
    const count_participant_competition = usePage().props.count_participant_competition;
    const sum_total_payment_semnas = usePage().props.sum_total_payment_semnas;
    const sum_total_payment_competition = usePage().props.sum_total_payment_competition;
    const count_institution = usePage().props.count_institution;
    const monthly_sales_chart = usePage().props.monthly_sales_chart;
    const monthly_registrations_chart = usePage().props.monthly_registrations_chart;
    const user = usePage().props.auth.user;


    const { flash_message } = usePage().props;

    const data = {
        labels: monthly_sales_chart.labels,
        datasets: monthly_sales_chart.datasets.map((ds) => ({
            ...ds,
            fill: false,
            tension: 0,
            pointRadius: 4,
            borderWidth: 2,
        })),
    };

    const dataRegistrations = {
        labels: monthly_registrations_chart.labels,
        datasets: monthly_registrations_chart.datasets.map((ds) => ({
            ...ds,
            fill: false,
            tension: 0,
            pointRadius: 4,
            borderWidth: 2,
        })),
    };

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);

    return (
        <div className="py-5">
            <div className="gap-5 rounded-lg bg-white p-4 shadow dark:bg-[#040529] sm:p-8">
                {user.is_admin == true && user.name == 'Admin Kesekre' && (
                    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="flex flex-row items-center gap-5 rounded-xl border-2 border-[#E4F0F8] px-5 py-5">
                            {/* start icon */}
                            <div className="flex items-center justify-center rounded-2xl bg-[#4DE45C]/20 p-4">
                                <BanknotesIcon className="h-8 w-8 text-[#4DE45C]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] font-medium text-[#3A3A3A]/90 dark:text-white">
                                    Total Semnas Income
                                </p>
                                <p className="text-[24px] font-bold text-[#232323] dark:text-white">
                                    {sum_total_payment_semnas}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 rounded-xl border-2 border-[#E4F0F8] px-5 py-5">
                            {/* start icon */}
                            <div className="flex items-center justify-center rounded-2xl bg-[#4DE45C]/20 p-4">
                                <BanknotesIcon className="h-8 w-8 text-[#4DE45C]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] font-medium text-[#3A3A3A]/90 dark:text-white">
                                    Total Competition Income
                                </p>
                                <p className="text-[24px] font-bold text-[#232323] dark:text-white">
                                    {sum_total_payment_competition}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 rounded-xl border-2 border-[#E4F0F8] px-5 py-5">
                            {/* start icon */}
                            <div className="flex items-center justify-center rounded-2xl bg-[#718EBF]/40 p-4">
                                <UserGroupIcon className="h-8 w-8 text-[#718EBF]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] font-medium text-[#3A3A3A]/90 dark:text-white">
                                    Participant Semnas
                                </p>
                                <p className="text-[24px] font-bold text-[#232323] dark:text-white">
                                    {count_participant_semnas}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 rounded-xl border-2 border-[#E4F0F8] px-5 py-5">
                            {/* start icon */}
                            <div className="flex items-center justify-center rounded-2xl bg-[#FFC300]/20 p-4">
                                <UserGroupIcon className="h-8 w-8 text-[#FFC300]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] font-medium text-[#3A3A3A]/90 dark:text-white">
                                    Participant Competition
                                </p>
                                <p className="text-[24px] font-bold text-[#232323] dark:text-white">
                                    {count_participant_competition}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {user.is_admin == true && user.name == 'Kesekre Member' && (
                    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="flex flex-row items-center gap-5 rounded-xl border-2 border-[#E4F0F8] px-5 py-5">
                            {/* start icon */}
                            <div className="flex items-center justify-center rounded-2xl bg-[#718EBF]/40 p-4">
                                <UserGroupIcon className="h-8 w-8 text-[#718EBF]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] font-medium text-[#3A3A3A]/90 dark:text-white">
                                    Participant Semnas
                                </p>
                                <p className="text-[24px] font-bold text-[#232323] dark:text-white">
                                    {count_participant_semnas}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 rounded-xl border-2 border-[#E4F0F8] px-5 py-5">
                            {/* start icon */}
                            <div className="flex items-center justify-center rounded-2xl bg-[#FFC300]/20 p-4">
                                <UserGroupIcon className="h-8 w-8 text-[#FFC300]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] font-medium text-[#3A3A3A]/90 dark:text-white">
                                    Participant Competition
                                </p>
                                <p className="text-[24px] font-bold text-[#232323] dark:text-white">
                                    {count_participant_competition}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8 flex flex-col gap-5 rounded-lg border-2 bg-white px-4 pb-6 pt-5 dark:border-[#E4F0F8] dark:bg-[#040529] sm:px-6 sm:pt-6 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-xl font-medium">Monthly Sales Chart</h1>
                        <p className="mb-5 text-[14px] text-gray-500">Monthly sales over previous 6 months</p>
                        <Line data={data} />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-xl font-medium">Monthly Registrations Chart</h1>
                        <p className="mb-5 text-[14px] text-gray-500">Monthly registrations over previous 6 months</p>
                        <Bar data={dataRegistrations} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
Overview.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Overview"
        header="Overview"
        description="All reports of progress in this page"
    />
);
