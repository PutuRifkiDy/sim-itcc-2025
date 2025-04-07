import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

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
                                        Reset Password
                                    </Link>
                                    {/* <h2 className=" text-md font-medium leading-relaxed tracking-tight text-center text-muted-foreground w-[400px]">
                                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                                        reset link that will allow you to choose a new one.
                                    </h2> */}
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
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                    placeholder="Insert your email address"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    onErrors={
                                                        errors.email && <InputError message={errors.email} className="mt-2" />
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
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                    placeholder="Insert your new password"
                                                    autoComplete="new-password"
                                                    isFocused={true}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    onErrors={errors.password && <InputError message={errors.password} className="mt-2" />}
                                                />

                                            </div>

                                            <div className="mt-4">
                                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    type="password"
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                    placeholder="Confirm your new password"
                                                    autoComplete="new-password"
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    onErrors={errors.password_confirmation && <InputError message={errors.password_confirmation} className="mt-2" />}
                                                />

                                            </div>
                                            <Button className="w-full transition-all duration-500 ease-in-out mt-4" variant='blue' disabled={processing}>
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

ResetPassword.layout = (page) => <GuestLayout children={page} title="Reset Password" />
