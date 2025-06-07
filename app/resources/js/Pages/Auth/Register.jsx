import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const [viewPassword, setViewPassword] = useState(false);
    const [viewPassword2, setViewPassword2] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const handleViewPassword = () => {
        setViewPassword(!viewPassword);
    };

    const handleViewPassword2 = () => {
        setViewPassword2(!viewPassword2);
    };

    return (
        <>
            <div className="mb-12 mt-24 flex flex-row items-center justify-center md:mt-32">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] border-[1px] p-5 shadow md:mx-36">
                        <div className="w-full">
                            <Card className="border-none shadow-none dark:bg-[#040529]">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link href="/" className="text-[25px] font-bold leading-relaxed tracking-tighter">
                                        Register
                                    </Link>
                                    <h2 className="text-left text-lg font-medium leading-relaxed tracking-tight text-muted-foreground">
                                        Register to your account
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6" onSubmit={submit}>
                                            {/* form */}
                                            <div>
                                                <InputLabel
                                                    htmlFor="name"
                                                    value="Name"
                                                    className="text-[16px] font-medium leading-[1.2em] text-[#121212] dark:text-white"
                                                />

                                                <TextInput
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={data.name}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                                    placeholder="Insert your name"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    onErrors={
                                                        errors.email && (
                                                            <InputError message={errors.email} className="mt-2" />
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <InputLabel
                                                    htmlFor="email"
                                                    value="Email"
                                                    className="text-[16px] font-medium leading-[1.2em] text-[#121212] dark:text-white"
                                                />
                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                                    placeholder="Insert your email address"
                                                    autoComplete="email"
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    onErrors={
                                                        errors.email && (
                                                            <InputError message={errors.email} className="mt-2" />
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <InputLabel
                                                    htmlFor="password"
                                                    value="Password"
                                                    className="text-[16px] font-medium leading-[1.2em] text-[#121212] dark:text-white"
                                                />

                                                <div className="relative">
                                                    <TextInput
                                                        id="password"
                                                        type={viewPassword == true ? 'text' : 'password'}
                                                        name="password"
                                                        value={data.password}
                                                        className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                                        placeholder="Insert your password"
                                                        autoComplete="new-password"
                                                        onChange={(e) => setData('password', e.target.value)}
                                                        onErrors={
                                                            errors.password && (
                                                                <InputError
                                                                    message={errors.password}
                                                                    className="mt-2"
                                                                />
                                                            )
                                                        }
                                                    />
                                                    {viewPassword == true ? (
                                                        <EyeSlashIcon
                                                            onClick={handleViewPassword}
                                                            className="absolute right-4 top-[1.6rem] h-5 w-5 -translate-y-1/2 cursor-pointer text-[#6F6F6F]"
                                                        />
                                                    ) : (
                                                        <EyeIcon
                                                            onClick={handleViewPassword}
                                                            className="absolute right-4 top-[1.6rem] h-5 w-5 -translate-y-1/2 cursor-pointer text-[#6F6F6F]"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="relative mt-4">
                                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    id="password_confirmation"
                                                    type={viewPassword2 == true ? 'text' : 'password'}
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                                    placeholder="Confirm your password"
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
                                                    required
                                                />

                                                {viewPassword2 == true ? (
                                                    <EyeSlashIcon
                                                        onClick={handleViewPassword2}
                                                        className="absolute right-4 top-[3rem] h-5 w-5 -translate-y-1/2 cursor-pointer text-[#6F6F6F]"
                                                    />
                                                ) : (
                                                    <EyeIcon
                                                        onClick={handleViewPassword2}
                                                        className="absolute right-4 top-[3rem] h-5 w-5 -translate-y-1/2 cursor-pointer text-[#6F6F6F]"
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <Button
                                                    type="submit"
                                                    variant="blue"
                                                    className="w-full transition-all duration-500 ease-in-out"
                                                    disabled={processing}
                                                >
                                                    Register
                                                </Button>
                                            </div>
                                        </form>

                                        <p className="mt-10 text-center text-sm text-muted-foreground">
                                            Already Registered?{' '}
                                            <Link
                                                href={route('login')}
                                                className="font-regular duration-400 text-[#4880FF] underline transition-all ease-in-out hover:text-[#4880FF]/80 hover:no-underline"
                                            >
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="relative hidden w-full gap-5 rounded-[28px] bg-gradient-to-r from-[#0F114C] to-[#00658F] px-10 py-10 dark:rounded-none dark:border-l-[2px] dark:bg-none md:flex md:flex-col">
                            <p className="text-[32px] font-bold text-[#FFFFFF] md:w-[330px]">
                                Very good events are waiting for you Signup Now
                            </p>
                            <div className="absolute top-24">
                                <SideRightDotIcon />
                            </div>
                            <div className="absolute right-0 top-24 rotate-90">
                                <SideRightCrossIcon />
                            </div>
                            <div className="tranform absolute bottom-10 left-0 rotate-180">
                                <LineOrnamenIcon />
                            </div>
                            <img
                                src="assets/images/landing/icon-maskot-itcc.png"
                                alt=""
                                className="absolute bottom-24 right-24 h-auto w-[280px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <GuestLayout children={page} title="Register" />;
