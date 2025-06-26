import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});
    const auth = usePage().props.auth;

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };


    return (
        <>
            {/* template verify email */}
            <div className="flex flex-row items-center justify-center md:mt-32 mt-12 mb-12">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] p-5 border-[1px] shadow md:mx-36">
                        <div className="relative hidden gap-5 rounded-l-[28px] bg-gradient-to-r from-[#0F114C] to-[#00658F] px-10 py-10 md:flex md:flex-col w-full dark:border-r-[1px] border-gray-100 dark:bg-none">
                            <p className="md:w-[330px] text-[32px] font-bold text-[#FFFFFF]">
                                Very good events are waiting for you Register Now
                            </p>
                            <div className='absolute top-24'>
                                <SideRightDotIcon />
                            </div>
                            <div className='absolute rotate-90 right-0 top-24'>
                                <SideRightCrossIcon />
                            </div>
                            <div className='absolute bottom-10 right-0'>
                                <LineOrnamenIcon />
                            </div>
                            <img
                                src="assets/images/landing/icon-maskot-itcc-with-shield.png"
                                alt=""
                                className="absolute bottom-12 left-24 h-auto md:w-[420px]"
                            />
                        </div>

                        <div className="w-full">
                            <Card className="shadow-none border-none rounded-r-[28px] dark:bg-[#040529] min-h-[600px] flex flex-col justify-center">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[25px] font-bold leading-relaxed tracking-tighter text-[#0F114C] dark:text-white"
                                    >
                                        Verify Email
                                    </Link>
                                    <h2 className="text-md w-[400px] text-center font-medium leading-relaxed tracking-tight text-muted-foreground">
                                        Thanks for signing up! Before getting started, could you verify your email
                                        address by clicking on the link we just emailed to you? If you didn't receive
                                        the email, we will gladly send you another.
                                    </h2>
                                    <h4 className="text-md w-[400px] text-center font-medium leading-relaxed tracking-tight dark:text-[#F7F7F7] text-[#0F114C]">
                                        The verification email has been send to {auth?.user?.email}, please check your inbox or spam folder.
                                    </h4>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                        {status === 'verification-link-sent' && (
                                            <div className="mb-4 text-sm font-medium text-green-600">
                                                A new verification link has been sent to the email address you provided
                                                during registration.
                                            </div>
                                        )}

                                        <form onSubmit={submit}>
                                            <div className="flex flex-col items-center justify-between gap-5">
                                                <Button
                                                    disabled={processing}
                                                    className="w-full border-2 border-[#0F114C] bg-white text-[#0F114C] transition-all duration-500 ease-in-out hover:bg-[#0F114C] hover:text-white dark:bg-[#0F114C] dark:text-white"
                                                >
                                                    Resend Verification Email
                                                </Button>

                                                <Button variant="red" className="w-full" asChild>
                                                    <Link
                                                        href={route('logout')}
                                                        method="post"
                                                        as="button"
                                                        className="rounded-md text-sm transition-all duration-200 ease-in-out hover:text-[#F7F7F7]"
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
