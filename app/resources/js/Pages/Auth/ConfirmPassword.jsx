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
                                                    className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
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
