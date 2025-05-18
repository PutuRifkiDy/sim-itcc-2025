// import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
// import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        if (!data.password) {
            toast.error("Please enter your current password.");
        }

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header className='flex flex-col gap-2 mt-4'>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Delete Account</h2>

                <p className="mt-1 text-sm text-gray-600 md:w-[350px] w-full">
                    Once your account is deleted, all of its resources and data will be permanently deleted.
                </p>
            </header>

            <Button variant="red" onClick={confirmUserDeletion}>Delete Account</Button>

            <Modal show={confirmingUserDeletion} onClose={closeModal} className='dark:bg-[#040529]'>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Are you sure you want to delete your account?</h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4 dark:bg-[#040529]"
                            isFocused
                            placeholder="Password"
                            onErrors={errors.password && <InputError message={errors.password} className="mt-2" />}
                        />


                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button onClick={closeModal} variant="blue" type="button">Cancel</Button>

                        <Button className="ms-3" variant="red" type="submit" disabled={processing}>
                            Delete Account
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
