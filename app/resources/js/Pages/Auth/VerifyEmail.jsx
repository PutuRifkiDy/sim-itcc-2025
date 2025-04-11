import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            {/* template verify email */}
            <div className="flex flex-row items-center justify-center mt-24">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] p-5 border-[1px] shadow md:mx-36">
                        <div className="hidden gap-5 rounded-[28px] bg-[#4880FF] px-10 py-10 md:flex md:flex-col">
                            <p className="w-[500px] text-[32px] font-bold text-[#FFFFFF]">
                                Very good events are waiting for you
                            </p>
                            <img src="/assets/images/image_for_auth.png" alt="" className="h-[379px] w-[354px]" />
                        </div>

                        <div className="w-full">
                            <Card className="flex flex-col border-none py-24 shadow-none">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[25px] font-bold leading-relaxed tracking-tighter text-[#4880FF]"
                                    >
                                        Verify Email
                                    </Link>
                                    <h2 className="text-md w-[400px] text-center font-medium leading-relaxed tracking-tight text-muted-foreground">
                                        Thanks for signing up! Before getting started, could you verify your email
                                        address by clicking on the link we just emailed to you? If you didn't receive
                                        the email, we will gladly send you another.
                                    </h2>
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
                                                    className="w-full border-2 border-[#4880FF] bg-white text-[#4880FF] transition-all duration-500 ease-in-out hover:bg-[#4880FF] hover:text-white"
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
