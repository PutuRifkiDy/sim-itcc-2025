import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
export default function Login({ status, canResetPassword }) {
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

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] p-5 border-[1px] shadow md:mx-36">
                        <div className="hidden gap-5 rounded-[28px] bg-[#4880FF] px-10 py-10 md:flex md:flex-col">
                            <p className="w-[500px] text-[32px] font-bold text-[#FFFFFF]">
                                Very good events are waiting for you Login Now
                            </p>
                            <img src="/assets/images/image_for_auth.png" alt="" className="h-[379px] w-[354px]" />
                        </div>

                        <div className="w-full">
                            <Card className="border-none shadow-none">
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
                                                    className="text-[16px] font-medium leading-[1.2em] text-[#121212]"
                                                />
                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
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
                                                    className="text-[16px] font-medium leading-[1.2em] text-[#121212]"
                                                />

                                                <div>
                                                    <TextInput
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        value={data.password}
                                                        className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
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
