import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/Components/ui/button';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';

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
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <Button className="ms-4" disabled={processing}>
                        Register
                    </Button>
                </div>
            </form> */}


            {/* Template */}
            <div className='flex flex-row justify-center items-center'>

                <div className='min-w-full min-h-full'>

                    <div className='flex flex-row p-5 border-[3px] border-[#E6E6E6] shadow rounded-[28px] md:mx-36'>

                        <div className="w-full">
                            <Card className='border-none shadow-none'>
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
                                                <InputLabel htmlFor="name" value="Name" className='font-medium text-[16px] leading-[1.2em] text-[#121212]' />

                                                <TextInput
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={data.name}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                    placeholder="Insert your name"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    onErrors={
                                                        errors.email && <InputError message={errors.email} className="mt-2" />
                                                    }
                                                    required
                                                />

                                            </div>
                                            <div>
                                                <InputLabel htmlFor="email" value="Email" className='font-medium text-[16px] leading-[1.2em] text-[#121212]' />
                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                    placeholder="Insert your email address"
                                                    autoComplete="email"
                                                    isFocused={true}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    onErrors={
                                                        errors.email && <InputError message={errors.email} className="mt-2" />
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <InputLabel htmlFor="password" value="Password" className='font-medium text-[16px] leading-[1.2em] text-[#121212]' />

                                                <div>
                                                    <TextInput
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        value={data.password}
                                                        className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                        placeholder="Insert your password"
                                                        autoComplete="new-password"
                                                        onChange={(e) => setData('password', e.target.value)}
                                                        onErrors={
                                                            errors.password && (
                                                                <InputError message={errors.password} className="mt-2" />
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
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] placeholder:text-[14px] placeholder:text-[#6F6F6F] px-4"
                                                    placeholder="Confirm your password"
                                                    autoComplete="new-password"
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    onErrors={
                                                        errors.password_confirmation && (
                                                            <InputError message={errors.password_confirmation} className="mt-2" />
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Button type="submit" variant="blue" className="w-full" disabled={processing}>
                                                    Register
                                                </Button>
                                            </div>
                                        </form>

                                        <p className="mt-10 text-center text-sm text-muted-foreground">
                                            Already Registered?{' '}
                                            <Link
                                                href={route('login')}
                                                className="font-regular text-[#4880FF] hover:text-[#4880FF]/80 underline hover:no-underline transition-all duration-400 ease-in-out"
                                            >
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='md:flex-col gap-5 bg-[#4880FF] rounded-[28px] px-10 py-10 md:flex hidden'>
                            <p className='text-[32px] font-bold text-[#FFFFFF] w-[500px]'>
                                Very good events are
                                waiting for you
                                Register Now
                            </p>
                            <img src="/assets/images/image_for_auth.png" alt="" className='w-[354px] h-[379px]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <GuestLayout children={page} title="Register" />
