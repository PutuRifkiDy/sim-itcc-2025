import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            {/* Template Login */}
            <div className="flex flex-row items-center justify-center">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] p-5 border-[1px] shadow md:mx-36 md:mt-28 mt-16 md:mb-16 mb-10">
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
                            <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} alt="" className="absolute left-24 bottom-24 h-auto md:w-[280px]" />
                        </div>

                        <div className="w-full">
                            <Card className="flex flex-col border-none py-24 shadow-none dark:bg-[#040529] min-h-[650px]">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[25px] font-bold leading-relaxed tracking-tighter text-[#0F114C] dark:text-white"
                                    >
                                        Reset Password
                                    </Link>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form onSubmit={submit}>
                                            <div>
                                                <InputLabel htmlFor="email" value="Email" />
                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:text-white dark:bg-[#040529]"
                                                    placeholder="Insert your email address"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    onErrors={
                                                        errors.email && (
                                                            <InputError message={errors.email} className="mt-2" />
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <InputLabel htmlFor="password" value="Password" />

                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:text-white dark:bg-[#040529]"
                                                    placeholder="Insert your new password"
                                                    autoComplete="new-password"
                                                    isFocused={true}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    onErrors={
                                                        errors.password && (
                                                            <InputError message={errors.password} className="mt-2" />
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    type="password"
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:text-white dark:bg-[#040529]"
                                                    placeholder="Confirm your new password"
                                                    autoComplete="new-password"
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    onErrors={
                                                        errors.password_confirmation && (
                                                            <InputError
                                                                message={errors.password_confirmation}
                                                                className="mt-2"
                                                            />
                                                        )
                                                    }
                                                />
                                            </div>
                                            <Button
                                                className="mt-4 w-full transition-all duration-500 ease-in-out"
                                                variant="blue"
                                                disabled={processing}
                                            >
                                                Reset Password
                                            </Button>
                                        </form>
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

ResetPassword.layout = (page) => <GuestLayout children={page} title="Reset Password" />;
