import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            {/* template verify email */}
            <div className='flex flex-row justify-center items-center'>

                <div className='min-w-full min-h-full'>

                    <div className='flex flex-row p-5 border-[3px] border-[#E6E6E6] shadow rounded-[28px] md:mx-36'>

                        <div className='md:flex-col gap-5 bg-[#4880FF] rounded-[28px] px-10 py-10 md:flex hidden'>
                            <p className='text-[32px] font-bold text-[#FFFFFF] w-[500px]'>
                                Very good events are
                                waiting for you
                            </p>
                            <img src="/assets/images/image_for_auth.png" alt="" className='w-[354px] h-[379px]' />
                        </div>

                        <div className="w-full">
                            <Card className='border-none shadow-none flex flex-col py-24'>
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link href="#" className="text-[25px] text-[#4880FF] font-bold leading-relaxed tracking-tighter">
                                        Verify Email
                                    </Link>
                                    <h2 className=" text-md font-medium leading-relaxed tracking-tight text-center text-muted-foreground w-[400px]">
                                        Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                                        link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">

                                        {status === 'verification-link-sent' && (
                                            <div className="mb-4 text-sm font-medium text-green-600">
                                                A new verification link has been sent to the email address you provided during registration.
                                            </div>
                                        )}

                                        <form onSubmit={submit}>
                                            <div className="flex flex-col gap-5 items-center justify-between">
                                                <Button disabled={processing} className='w-full bg-white border-2 border-[#4880FF] hover:bg-[#4880FF] text-[#4880FF] hover:text-white transition-all duration-500 ease-in-out'>Resend Verification Email</Button>

                                                <Button variant="red" className='w-full' asChild>
                                                    <Link
                                                        href={route('logout')}
                                                        method="post"
                                                        as="button"
                                                        className="rounded-md text-sm hover:text-[#F7F7F7] transition-all duration-200 ease-in-out"
                                                    >
                                                        Log Out
                                                    </Link>
                                                </Button>
                                            </div>
                                        </form>
                                        {/*  */}

                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

VerifyEmail.layout = (page) => <GuestLayout children={page} title="Email Verification" />;
