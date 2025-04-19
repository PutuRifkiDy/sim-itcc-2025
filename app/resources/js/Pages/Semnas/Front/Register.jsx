import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { flashMessage } from '@/lib/utils';
import { toast } from 'sonner';

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

            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className="border-[2px] border-[#E6E6E6] flex flex-col justify-center items-center gap-5 rounded-[14px] px-24 py-12">
                    <img src="/assets/images/image_for_icon_semnas.png" alt="" className="h-[158px] w-[165px]" />
                    <h1 className="font-bold text-[25px] text-[#4880FF]">Seminar Nasional</h1>
                    <p className="font-medium text-[16px] leading-[1.2em] text-[#121212]">Registration</p>
                    <form onSubmit={onHandleSubmit}>
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-2 justify-start items-start">
                                <h1 className="font-medium text-[20px] leading-[1.2em] text-[#121212]">Choose event type</h1>
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
                                    show_register_semnas.map((item, index) => (
                                        <div className="flex flex-row justify-center items-center gap-2" key={index}>
                                            <TextInput
                                                type="radio"
                                                name="slug"
                                                value={item.slug}
                                                onChange={(e) => setData('slug', e.target.value)}
                                                checked={data.slug === item.slug}
                                            />
                                            <p>{item.kode === 'SMNTION' ? 'Online' : 'Offline'}</p>
                                        </div>
                                    ))
                                )}
                                {user?.nim?.substring(3, 6) === '555' && (
                                    <p className="text-gray-500">
                                        You are detected as a Information Technology Udayana University student, so you
                                        should attend this event offline
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-x-2 py-6">
                            <Button type="submit" variant="blue" disabled={processing}>
                                Save
                            </Button>
                            {/* <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterForm="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-muted-foreground">Saved.</p>
                            </Transition> */}
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}

export default Register;
Register.layout = (page) => <GuestLayout children={page} title="Register" />
