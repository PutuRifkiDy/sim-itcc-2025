import DashboardLayout from "@/Layouts/DashboardLayout";
import { CheckBadgeIcon, ClockIcon, PaperAirplaneIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import { usePage } from "@inertiajs/react";

function DashboardKesekreSemnas ()
{
    const event_registrations_semnas = usePage().props.event_registrations_semnas;
    const count_verified = usePage().props.count_verified;
    const count_pending = usePage().props.count_pending;
    const count_rejected = usePage().props.count_rejected;
    const count_requested = usePage().props.count_requested;

    // const { data: users, meta, links } = props.users;
    // const [params, setParams] = useState(props.state);
    // console.log('Cek isi user', users);

    // useFilter({
    //     route: route('users.index'),
    //     values: params,
    //     only: ['users'],
    // });

    // const onSortable = (field) => {
    //     setParams({
    //         ...params,
    //         field: field,
    //         direction: params.direction === 'asc' ? 'desc' : 'asc',
    //     });
    // };
    return (
        <>
            <div className="py-5">
                <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex md:flex-row flex-col gap-5 justify-between">
                    {/* ada 3 div untuk count requested, pending, sama rejected*/}
                    <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#718EBF]/40">
                            <PaperAirplaneIcon className="text-[#718EBF] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#718EBF] text-[14px] font-normal">Requested</p>
                            <p className="font-semibold text-[24px] text-[#232323]">{count_requested}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#FFC300]/40">
                            <ClockIcon className="text-[#FFC300] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#718EBF] text-[14px] font-normal">Pending</p>
                            <p className="font-semibold text-[24px] text-[#232323]">{count_pending}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#4DE45C]/40">
                            <CheckBadgeIcon className="text-[#4DE45C] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#718EBF] text-[14px] font-normal">Verified</p>
                            <p className="font-semibold text-[24px] text-[#232323]">{count_verified}</p>
                        </div>

                    </div>
                    <div className="border-2 border-[#E4F0F8] flex justify-center items-center flex-row gap-5 py-4 px-10 rounded-xl">
                        {/* start icon */}
                        <div className="flex justify-center items-center p-4 rounded-2xl bg-[#E82323]/40">
                            <ArchiveBoxXMarkIcon className="text-[#E82323] w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#718EBF] text-[14px] font-normal">Rejected</p>
                            <p className="font-semibold text-[24px] text-[#232323]">{count_rejected}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardKesekreSemnas;

DashboardKesekreSemnas.layout = (page) => <DashboardLayout children={page} title="Seminar Confirmation Payment" header="Seminar Confirmation Payment" />;
