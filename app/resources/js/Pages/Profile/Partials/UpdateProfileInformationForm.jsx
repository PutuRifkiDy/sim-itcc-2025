import { IconEditForDashboard, IconPreviewImageProfile } from '@/Components/IconAdmin';
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

export default function UpdateProfileInformation({ mustVerifyEmail, status, status_students, className = '' }) {
    const user = usePage().props.auth.user;
    const [updateProfileInformation, setUpdateProfileInformation] = useState(false);

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        address: user.address,
        line_id: user.line_id,
        birthdate: user.birthdate,
        institution: user.institution,
        institution_path: user.institution_path,
        status: user.status,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
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
                    <Button className='flex justify-center items-center gap-3' variant="blue" onClick={() => setUpdateProfileInformation(false)}>
                        <IconEditForDashboard />
                        Cancel
                    </Button>
                )}
            </div>

            {updateProfileInformation && (
                <form onSubmit={submit} className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <InputLabel htmlFor="name" value="Name" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="name"
                            type="text"
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                            onErrors={errors.name && <InputError message={errors.name} className='mt-2' />}
                        />

                    </div>
                    <div>
                        <InputLabel htmlFor="phone_number" value="Phone Number" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="phone_number"
                            type='text'
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            required
                            isFocused
                            autoComplete="phone_number"
                            onErrors={errors.phone_number && <InputError message={errors.phone_number} className='mt-2' />}
                        />

                    </div>

                    <div>
                        <InputLabel htmlFor="address" value="Address" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="address"
                            type='text'
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            required
                            isFocused
                            autoComplete="address"
                            onErrors={errors.address && <InputError message={errors.address} className='mt-2' />}
                        />

                    </div>

                    <div>
                        <InputLabel htmlFor="line_id" value="Line Account" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="line_id"
                            type='text'
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.line_id}
                            onChange={(e) => setData('line_id', e.target.value)}
                            required
                            isFocused
                            autoComplete="line_id"
                            onErrors={errors.line_id && <InputError message={errors.line_id} className='mt-2' />}
                        />

                    </div>

                    <div>
                        <InputLabel htmlFor="birthdate" value="Birthdate" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="birthdate"
                            type="date"
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.birthdate}
                            onChange={(e) => setData('birthdate', e.target.value)}
                            required
                            isFocused
                            autoComplete="birthdate"
                            onErrors={errors.birthdate && <InputError message={errors.birthdate} className='mt-2' />}
                        />

                    </div>

                    <div>
                        <InputLabel htmlFor="institution" value="Institution" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="institution"
                            type="text"
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.institution}
                            onChange={(e) => setData('institution', e.target.value)}
                            required
                            isFocused
                            autoComplete="institution"
                            onErrors={errors.institution && <InputError message={errors.institution} className='mt-2' />}
                        />

                    </div>

                    <div>
                        <InputLabel htmlFor="institution_path" value="Institution Card" className='text-[12px] text-[#676767] font-normal' />

                        <TextInput
                            id="institution_path"
                            type="file"
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.institution_path}
                            onChange={(e) => setData('institution_path', e.target.value)}
                            required
                            isFocused
                            autoComplete="institution_path"
                            onErrors={errors.institution_path && <InputError message={errors.institution_path} className='mt-2' />}
                        />

                        {/* Input Image Incoming sajalah */}

                    </div>

                    <div className='flex flex-col gap-2'>
                        <InputLabel htmlFor="status" value="Status" className='text-[12px] text-[#676767] font-normal' />

                        {/* <TextInput
                            id="status"
                            className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            required
                            isFocused
                            autoComplete="status"
                            onErrors={errors.status && <InputError message={errors.status} className='mt-2' />}
                        /> */}

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
                    <div className="flex items-center gap-4">
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
                        <InputLabel htmlFor="birthdate" value="Birthdate" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.birthdate ? data.birthdate : '-'}</p>
                    </div>
                    <div>
                        <InputLabel htmlFor="institution" value="Institution" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.institution ? data.institution : '-'}</p>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger className='flex flex-row gap-3 justify-center items-center text-[12px] text-[#676767] font-normal'>
                                Institution Card
                                <IconPreviewImageProfile />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>
                                    Institution Card
                                </DialogTitle>
                                <img src={data.institution_path ? data.institution_path : 'assets/images/default_image_profile.png'} className="w-full" alt="" />
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div>
                        <InputLabel htmlFor="institution" value="Institution" className='text-[12px] text-[#676767] font-normal' />
                        <p>{data.institution ? data.institution : '-'}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
