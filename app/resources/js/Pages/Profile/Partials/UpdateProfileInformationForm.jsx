import { CancelUpdateProfile, IconEditForDashboard, IconPreviewImageProfile } from '@/Components/IconAdmin';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Transition } from '@headlessui/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { flashMessage } from '@/lib/utils';
import { toast } from 'sonner';
import { ImageUpload } from '@/Components/ImageUpload';

export default function UpdateProfileInformation({ mustVerifyEmail, status, status_students, className = '' }) {
    const user = usePage().props.auth.user;
    const [updateProfileInformation, setUpdateProfileInformation] = useState(false);

    const { data, setData, patch, post, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        phone_number: user.phone_number ?? '',
        address: user.address ?? '',
        line_id: user.line_id ?? '',
        nim: user.nim ?? '',
        institution: user.institution ?? '',
        institution_path: user.institution_path ?? '',
        status: user.status ?? '',
        _method: 'PUT',
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (!(data.institution_path instanceof File)) {
            delete data.institution_path;
        }
        post(route('profile.update'), {
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };


    return (
        <section className={className}>
            <div className='flex flex-row justify-between w-full'>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Update your account's profile information.
                    </p>
                </header>
                {updateProfileInformation == false && (
                    <Button className='flex justify-center items-center gap-3' variant="blue" onClick={() => setUpdateProfileInformation(true)}>
                        <IconEditForDashboard />
                        Edit
                    </Button>
                )}
                {updateProfileInformation == true && (
                    <Button className='flex justify-center items-center gap-3 bg-white border-[#0F114C] border-2 text-[#0F114C]' variant="none" onClick={() => setUpdateProfileInformation(false)}>
                        <CancelUpdateProfile />
                        Cancel
                    </Button>
                )}
            </div>

            {updateProfileInformation && (
                <form onSubmit={onHandleSubmit} className="">
                    <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div>
                            <InputLabel htmlFor="name" value="Name" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="name"
                                type="text"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                name="name"
                                value={data.name}
                                onChange={onHandleChange}
                                required
                                isFocused
                                autoComplete="name"
                                onErrors={errors.name && <InputError message={errors.name} className='mt-2' />}
                            />

                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="Email" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                value={data.email}
                                onChange={onHandleChange}
                                required
                                isFocused
                                autoComplete="username"
                                onErrors={errors.email && <InputError message={errors.email} className='mt-2' />}
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="nim" value="Identification Number" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="nim"
                                name="nim"
                                type="text"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                value={data.nim}
                                onChange={onHandleChange}
                                required
                                isFocused
                                placeholder="Insert your identification number"
                                autoComplete="nim"
                                onErrors={errors.nim && <InputError message={errors.nim} className='mt-2' />}
                            />

                        </div>
                        <div>
                            <InputLabel htmlFor="phone_number" value="Phone Number" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="phone_number"
                                name="phone_number"
                                type='text'
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                value={data.phone_number}
                                onChange={onHandleChange}
                                isFocused
                                placeholder="Insert your phone number"
                                autoComplete="phone_number"
                                onErrors={errors.phone_number && <InputError message={errors.phone_number} className='mt-2' />}
                            />

                        </div>

                        <div>
                            <InputLabel htmlFor="address" value="Address" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="address"
                                name="address"
                                type='text'
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                value={data.address}
                                onChange={onHandleChange}
                                isFocused
                                placeholder="Insert your address"
                                autoComplete="address"
                                onErrors={errors.address && <InputError message={errors.address} className='mt-2' />}
                            />

                        </div>

                        <div>
                            <InputLabel htmlFor="line_id" value="Line Account" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="line_id"
                                name="line_id"
                                type='text'
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                value={data.line_id}
                                onChange={onHandleChange}
                                isFocused
                                placeholder="Insert your line ID"
                                autoComplete="line_id"
                                onErrors={errors.line_id && <InputError message={errors.line_id} className='mt-2' />}
                            />

                        </div>

                        <div>
                            <InputLabel htmlFor="institution" value="Institution" className='text-[12px] text-[#676767] font-normal' />

                            <TextInput
                                id="institution"
                                name="institution"
                                type="text"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                                value={data.institution}
                                onChange={onHandleChange}
                                isFocused
                                placeholder="Insert your institution"
                                autoComplete="institution"
                                onErrors={errors.institution && <InputError message={errors.institution} className='mt-2' />}
                            />

                        </div>


                        <div className='flex flex-col gap-2'>
                            <InputLabel htmlFor="status" value="Status" className='text-[12px] text-[#676767] font-normal' />

                            <Select
                                defaultValue={data.status}
                                onValueChange={(value) => setData('status', value)}
                                className='mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]'
                            >
                                <SelectTrigger>
                                    <SelectValue>
                                        {status_students.find((status_student) => status_student.value == data.status)
                                            ?.label ?? 'Select a priority'}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {status_students.map((status_student, index) => (
                                        <SelectItem key={index} value={status_student.value}>
                                            {status_student.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <InputLabel htmlFor="institution_path" value="Institution Card" className='text-[12px] text-[#676767] font-normal' />

                            <ImageUpload
                                imagePath={user.institution_path}
                                onChangeImage={(file, previewUrl) => {
                                    setData("institution_path", file);
                                    setPreview(previewUrl);
                                }}
                                errorMessage={errors.institution_path}
                            />

                            {/* Input Image Incoming sajalah */}

                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-10">
                        <Button variant="blue" disabled={processing}>Save</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                    </div>
                </form>
            )}

            {updateProfileInformation == false && (
                <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                        <InputLabel htmlFor="name" value="Name" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.name}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.email}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="phone_number" value="Phone Number" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.phone_number ? data.phone_number : '-'}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="address" value="Address" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.address ? data.address : '-'}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="line_id" value="Line ID" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.line_id ? data.line_id : '-'}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="nim" value="Identification Number" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.nim ? data.nim : '-'}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="institution" value="Institution" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.institution ? data.institution : '-'}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="status" value="Status" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.status ? data.status : '-'}</p>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger className='flex flex-row gap-3 justify-center items-center '>
                                <p className='text-[#676767] text-[14px]'>Institution Card</p>
                                <IconPreviewImageProfile />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>
                                    Institution Card
                                </DialogTitle>
                                <img src={user.institution_path ? user.institution_path : 'assets/images/default_image_profile.png'} className="h-64 w-auto" alt="" />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            )}
        </section>
    );
}
