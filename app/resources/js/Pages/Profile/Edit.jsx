import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { ClockIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export default function Edit({ mustVerifyEmail, status, status_students }) {
    const user = usePage().props.auth.user;

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic',
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <>
            <div className="py-5">
                <div className="mx-auto w-full space-y-6">
                    <div className="bg-white dark:bg-[#0F114C] p-4 shadow sm:rounded-lg sm:p-8" data-aos="zoom-in">
                        {user.already_filled == false && (
                            <div className="flex flex-row gap-2 px-4 py-2 border-2 border-l-[#4880FF] bg-[#4880FF]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#4880FF]" />
                                <p className='text-[#4880FF] font-medium text-[12px] leading-[16px]'>Fill your personal information before join a competition or semnas</p>
                            </div>
                        )}
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            status_students={status_students}
                            className="w-full"
                        />
                    </div>

                    <div className="bg-white dark:bg-[#0F114C] p-4 shadow sm:rounded-lg sm:p-8" data-aos="zoom-in">
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
