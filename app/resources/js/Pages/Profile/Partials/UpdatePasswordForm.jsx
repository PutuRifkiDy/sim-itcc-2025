import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { use, useRef } from 'react';
import DeleteUserForm from './DeleteUserForm';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const user = usePage().props.auth.user;

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-200">Account Setting</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <div className="mt-6 flex md:flex-row flex-col-reverse justify-between">
                <div className='w-full flex flex-col justify-end'>

                    <DeleteUserForm />
                </div>

                <form onSubmit={updatePassword} className='w-full'>

                    <div className='w-full flex flex-col gap-5'>
                        <div>
                            <InputLabel htmlFor="current_password" value="Current Password" className='text-[12px] text-[#676767] font-normal dark:text-white' />

                            <TextInput
                                id="current_password"
                                ref={currentPasswordInput}
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                isFocused
                                autoComplete="current-password"
                                onErrors={errors.current_password && <InputError message={errors.current_password} className='mt-2' />}
                            />

                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="New Password" className='text-[12px] text-[#676767] font-normal dark:text-white' />

                            <TextInput
                                id="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                isFocused
                                autoComplete="new-password"
                                onErrors={errors.password && <InputError message={errors.password} className='mt-2' />}
                            />

                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" className='text-[12px] text-[#676767] font-normal dark:text-white' />

                            <TextInput
                                id="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                type="password"
                                className="mt-1 block w-full rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                                isFocused
                                autoComplete="new-password"
                                onErrors={errors.password_confirmation && <InputError message={errors.password_confirmation} className='mt-2' />}
                            />

                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="blue" disabled={processing} className="flex flex-row gap-2 justify-center items-center dark:bg-[#0F114C]">
                                Save
                                <CheckBadgeIcon className='w-6 h-6 text-white' />
                            </Button>

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
                    </div>

                </form>
            </div>
        </section>
    );
}
