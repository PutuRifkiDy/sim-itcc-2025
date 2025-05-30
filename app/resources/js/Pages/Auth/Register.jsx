import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Register() {
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

    return (
        <>
            <div className="flex flex-row items-center justify-center md:mt-32 mt-12 mb-12">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] border-[1px] shadow p-5 md:mx-36">
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
                                                    isFocused={true}
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

                                                <div>
                                                    <TextInput
                                                        id="password"
                                                        type="password"
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
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    id="password_confirmation"
                                                    type="password"
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

                        <div className="relative hidden gap-5 rounded-[28px] bg-gradient-to-r from-[#0F114C] to-[#00658F] px-10 py-10 md:flex md:flex-col w-full dark:border-l-[2px] dark:rounded-none dark:bg-none">
                            <p className="md:w-[330px] text-[32px] font-bold text-[#FFFFFF]">
                                Very good events are waiting for you Signup Now
                            </p>
                            <div className='absolute top-24'>
                                <SideRightDotIcon />
                            </div>
                            <div className='absolute rotate-90 right-0 top-24'>
                                <SideRightCrossIcon />
                            </div>
                            <div className='absolute bottom-10 left-0 tranform rotate-180'>
                                <LineOrnamenIcon />
                            </div>
                            <img src="assets/images/landing/icon-maskot-itcc.png" alt="" className="absolute right-24 bottom-24 h-auto w-[280px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <GuestLayout children={page} title="Register" />;
