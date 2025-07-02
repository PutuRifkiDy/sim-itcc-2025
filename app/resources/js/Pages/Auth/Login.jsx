import Checkbox from '@/Components/Checkbox';
import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
export default function Login({ status, canResetPassword }) {
    const [viewPassword, setViewPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const handleViewPassword = () => {
        setViewPassword(!viewPassword);
    };

    return (
        <>
            <div className="mb-12 mt-24 flex flex-row items-center justify-center md:mt-32">
                <div className="min-h-full min-w-full">
                    <div className="flex min-h-[650px] flex-row rounded-[28px] border-[1px] p-5 shadow md:mx-36">
                        <div className="relative hidden w-full gap-5 rounded-l-[28px] border-gray-100 bg-gradient-to-r from-[#0F114C] to-[#00658F] px-10 py-10 dark:border-r-[1px] dark:bg-none md:flex md:flex-col">
                            <p className="text-[32px] font-bold text-[#FFFFFF] md:w-[330px]">
                                Very good events are waiting for you Login Now
                            </p>
                            <div className="absolute top-24">
                                <SideRightDotIcon />
                            </div>
                            <div className="absolute right-0 top-24 rotate-90">
                                <SideRightCrossIcon />
                            </div>
                            <div className="absolute bottom-10 right-0">
                                <LineOrnamenIcon />
                            </div>
                            <img
                                src="assets/images/landing/icon-maskot-itcc-with-shield.png"
                                alt=""
                                className="absolute bottom-12 left-24 h-auto md:w-[440px]"
                            />
                        </div>

                        <div className="w-full mt-10">
                            <Card className="flex min-h-[650px] flex-col justify-center rounded-r-[28px] border-none shadow-none dark:bg-[#040529]">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link href="/" className="text-[25px] font-bold leading-relaxed tracking-tighter">
                                        Login
                                    </Link>
                                    <h2 className="text-left text-lg font-medium leading-relaxed tracking-tight text-muted-foreground">
                                        Sign in to your account
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                        {status && (
                                            <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
                                        )}
                                        <form className="space-y-6" onSubmit={submit}>
                                            {/* form */}
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
                                                        autoComplete="password"
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
                                                {canResetPassword && (
                                                    <div className="mt-3 text-end text-sm">
                                                        <Link
                                                            href={route('password.request')}
                                                            className="font-regular duration-400 text-[#4880FF] underline transition-all ease-in-out hover:text-[#4880FF]/80 hover:no-underline"
                                                        >
                                                            Forgot your password?
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mt-4 block">
                                                <label htmlFor="" className="flex items-center">
                                                    <Checkbox
                                                        name="remember"
                                                        checked={data.remember}
                                                        onChange={(e) => setData('remember', e.target.checked)}
                                                    />
                                                    <span className="ms-2 text-sm text-muted-foreground">
                                                        Remember me
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <Button
                                                    type="submit"
                                                    variant="blue"
                                                    className="w-full transition-all duration-500 ease-in-out"
                                                    disabled={processing}
                                                >
                                                    Login
                                                </Button>
                                            </div>
                                        </form>

                                        <p className="mt-10 text-center text-sm text-muted-foreground">
                                            Don’t have an account?{' '}
                                            <Link
                                                href={route('register')}
                                                className="font-regular duration-400 text-[#4880FF] underline transition-all ease-in-out hover:text-[#4880FF]/80 hover:no-underline"
                                            >
                                                Register
                                            </Link>
                                        </p>
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

Login.layout = (page) => <GuestLayout children={page} title="Log in" />;
