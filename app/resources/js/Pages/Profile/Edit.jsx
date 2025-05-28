import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { ClockIcon } from '@heroicons/react/24/solid';

export default function Edit({ mustVerifyEmail, status, status_students }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <div className="py-5">
                <div className="mx-auto w-full space-y-6">
                    <div className="bg-white dark:bg-[#040529] p-4 shadow sm:rounded-lg sm:p-8">
                        {user.already_filled == false && (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#0F114C] dark:border-l-[#55b1d7] bg-[#0F114C]/20 dark:bg-[#55b1d7]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#0F114C] dark:text-white" />
                                <p className='text-[#0F114C] font-medium text-[12px] leading-[16px] dark:text-white'>Fill your personal information before join a competition or semnas</p>
                            </div>
                        )}
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            status_students={status_students}
                            className="w-full"
                        />
                    </div>

                    <div className="bg-white dark:bg-[#040529] p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="w-full" />
                    </div>

                    {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </>
    );
}

Edit.layout = (page) => <DashboardLayout children={page} title="Profile" header="Profile" description="Manage your profile in this page"/>;
