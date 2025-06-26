import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            {/* Template Login */}
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
                                className="absolute bottom-12 left-24 h-auto md:w-[440px]"
                            />
                        </div>

                        <div className="w-full">
                            <Card className="shadow-none border-none rounded-r-[28px] dark:bg-[#040529] min-h-[600px] flex flex-col justify-center">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[25px] font-bold leading-relaxed tracking-tighter text-[#0F114C] dark:text-white"
                                    >
                                        Forgot Password
                                    </Link>
                                    <h2 className="text-md w-[400px] text-center font-medium leading-relaxed tracking-tight text-muted-foreground">
                                        Forgot your password? No problem. Just let us know your email address and we
                                        will email you a password reset link that will allow you to choose a new one.
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                        {status && (
                                            <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
                                        )}

                                        <form onSubmit={submit}>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529] dark:text-white"
                                                placeholder="Insert your email address"
                                                autoComplete="email"
                                                isFocused={true}
                                                onChange={(e) => setData('email', e.target.value)}
                                                onErrors={
                                                    errors.email && (
                                                        <InputError message={errors.email} className="mt-2" />
                                                    )
                                                }
                                            />

                                            <div className="mt-4 flex flex-col items-center justify-end gap-5">
                                                <Button
                                                    asChild
                                                    className="w-full border-2 border-[#0F114C] bg-white text-[#0F114C] transition-all duration-500 ease-in-out hover:bg-[#0F114C] hover:text-white dark:bg-[#040529] dark:text-white"
                                                >
                                                    <Link href={route('login')} className="">
                                                        Back
                                                    </Link>
                                                </Button>

                                                <Button
                                                    className="w-full transition-all duration-500 ease-in-out"
                                                    variant="blue"
                                                    disabled={processing}
                                                >
                                                    Email Password Reset Link
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

ForgotPassword.layout = (page) => <GuestLayout children={page} title="Forgot Password" />;
