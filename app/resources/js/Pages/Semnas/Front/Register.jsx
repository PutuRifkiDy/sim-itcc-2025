import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { flashMessage } from '@/lib/utils';
import { toast } from 'sonner';
import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightSmallCircle } from "@/Components/IconGuest";

function Register({ ...props }) {
    const show_register_semnas = usePage().props.show_register_semnas;
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        slug: '',
        _method: 'POST',
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (!data.slug) {
            toast.error("Please select an event type.");
            return;
        }

        post(route('register.semnas.store', data.slug), {

            // onSuccess: (success) => {
            //     const flash = flashMessage(success);
            //     if (flash) toast[flash.type](flash.message);
            // },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center relative w-full mt-10">
                <div className="w-full max-w-[600px] relative items-center">
                    <div className="mr-96 absolute">
                        <SideRightSmallCircle />
                    </div>
                    <img
                        src="/image/blueDots.svg"
                        className="absolute -top-44 -left-20 z-10 w-32 flex-shrink-0 rotate-90"
                        alt=""
                    />
                    <div className="relative">
                        <div className="hidden md:flex flex-col absolute md:-bottom-28 md:left-0 z-3">
                            <SideLeftCrookedCrossIcon />
                        </div>
                        <img src={`${window.location.origin}/assets/images/competition/bannerRegisCompeLeft.png`} className="absolute -left-11 -top-11 z-0 w-[301px] h-[157px] md:block hidden" alt="" />
                        <div className="bg-white drop-shadow-xl outline outline-[3px] outline-[#E6E6E6] rounded-lg shadow-lg p-8 w-[90%] md:w-[600px] z-20 relative mx-auto dark:bg-[#040529]">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2 items-center mb-5">
                                    <h2 className="text-[#0F114C] text-2xl font-bold dark:text-white">Seminar Nasional</h2>
                                    <p className="text-black font-medium dark:text-gray-400">Registration</p>
                                </div>

                                <form onSubmit={onHandleSubmit}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col gap-2 justify-start items-start">
                                            <h1 className="font-medium text-[20px] leading-[1.2em] text-[#121212] dark:text-white">Choose event type</h1>
                                            {user?.nim?.substring(3, 6) === '555' ? (
                                                // Khusus nim 555: hanya tampilkan radio custom
                                                <div className="flex flex-row justify-center items-center gap-2">
                                                    <TextInput
                                                        type="radio"
                                                        name="slug"
                                                        value="seminar-nasional-teknologi-informasi-of"
                                                        onChange={(e) => setData('slug', e.target.value)}
                                                        checked={data.slug === "seminar-nasional-teknologi-informasi-of"}
                                                    />
                                                    <p>Offline</p>
                                                </div>
                                            ) : (
                                                <div className="flex flex-row gap-10 mb-5">
                                                    {show_register_semnas.map((item, index) => (
                                                        <div className="flex flex-row gap-1 w-full h-full justify-center items-center" key={index}>
                                                            <TextInput
                                                                type="radio"
                                                                name="slug"
                                                                value={item.slug}
                                                                onChange={(e) => setData('slug', e.target.value)}
                                                                checked={data.slug === item.slug}
                                                            />
                                                            <p>{item.kode === 'SMNTION' ? 'Online' : 'Offline'}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {user?.nim?.substring(3, 6) === '555' && (
                                                <p className="text-gray-500">
                                                    You are detected as a Information Technology Udayana University student, so you
                                                    should attend this event offline
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-full gap-y-4 py-2 mt-5">
                                        <Button className="w-full rounded-lg py-6 bg-white hover:bg-[#0F114C] border-2 border-[#0F114C] transition-all duration-300 ease-in-out text-[16px] dark:bg-[#040529]" asChild size="lg">
                                            <Link href={route('event.front.show', ['seminar-nasional-teknologi-informasi-of'])} className="hover:text-white text-[#0F114C] dark:text-white">
                                                Back
                                            </Link>
                                        </Button>

                                        <Button type="submit" variant="blue" size="lg" disabled={processing} className="w-full font-bold">
                                            Confirm
                                        </Button>
                                    </div>
                                </form>
                                <div className="w-full">
                                    <p className="text-[14px] text-gray-500 text-start">*You can cancel this ticket before you pay</p>
                                </div>
                            </div>
                        </div>
                        <img src={`${window.location.origin}/assets/images/competition/bannerRegisCompeRight.png`} className="absolute -right-11 -bottom-11 z-0 w-[301px] h-[157px] md:block hidden" alt="" />
                        <div className="hidden md:flex flex-col absolute md:-top-20 md:right-0 z-3">
                            <SideLeftCrookedCrossIcon />
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default Register;
Register.layout = (page) => <GuestLayout children={page} title="Register" />
