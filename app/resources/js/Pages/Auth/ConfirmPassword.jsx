import { LineOrnamenIcon, SideRightCrossIcon, SideRightDotIcon } from '@/Components/IconGuest';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <div className="min-h-full min-w-full">
                    <div className="flex flex-row rounded-[28px] border-[1px] shadow p-5 md:mx-36">
                        <div className="relative hidden gap-5 rounded-l-[28px] bg-gradient-to-r from-[#0F114C] to-[#00658F] px-10 py-10 md:flex md:flex-col w-full dark:border-r-[1px] border-gray-100 dark:bg-none">
                            <p className="md:w-[330px] text-[32px] font-bold text-[#FFFFFF]">
                                Very good events are waiting for you Verif Now
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
                            <img src="assets/images/landing/icon-maskot-itcc.png" alt="" className="absolute right-24 bottom-24 h-auto md:w-[220px]" />
                        </div>

                        <div className="w-full">
                            <Card className="shadow-none border-none rounded-r-[28px] dark:bg-[#040529] min-h-[650px] flex flex-col justify-center">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[25px] font-bold leading-relaxed tracking-tighter text-[#0F114C] dark:text-white"
                                    >
                                        Confirm Password
                                    </Link>
                                    <h2 className="text-md w-[400px] text-center font-medium leading-relaxed tracking-tight text-muted-foreground">
                                        This is a secure area of the application. Please confirm your password before
                                        continuing.
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form onSubmit={submit}>
                                            <div className="mt-4">
                                                <InputLabel htmlFor="password" value="Password" />

                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529] dark:text-white"
                                                    isFocused={true}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    onErrors={
                                                        errors.password && (
                                                            <InputError message={errors.password} className="mt-2" />
                                                        )
                                                    }
                                                />
                                            </div>

                                            <Button
                                                className="w-full transition-all duration-500 ease-in-out"
                                                variant="blue"
                                                disabled={processing}
                                            >
                                                Confirm
                                            </Button>
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

ConfirmPassword.layout = (page) => <GuestLayout children={page} title="Confirm Password" />;
