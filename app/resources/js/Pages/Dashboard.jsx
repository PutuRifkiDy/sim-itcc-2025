import DashboardLayout from '@/Layouts/DashboardLayout';
import { usePage } from '@inertiajs/react';


export default function Dashboard() {
    const competitions = usePage().props.competitions;
    return (
        <div className="py-12">
            <div className="mx-auto w-full">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <DashboardLayout children={page} title="Dashboard" header="Dashboard" description="Join now to compete, showcase your talents, and win exciting prizes!" />;
