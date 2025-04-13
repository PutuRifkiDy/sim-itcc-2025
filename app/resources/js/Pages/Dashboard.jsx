import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <DashboardLayout children={page} title="Dashboard" header="Dashboard" />;
