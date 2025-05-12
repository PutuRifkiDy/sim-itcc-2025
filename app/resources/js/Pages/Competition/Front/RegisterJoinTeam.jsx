import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

function RegisterJoinTeam() {
    const slug = usePage().props.slug;

    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        token: '',
        _method: 'POST',
    });

    const onHandleSubmit = (e) => {

        e.preventDefault();

        if (!data.token) {
            toast.error("Please enter a token.");
            return;
        }

        post(route('register.competition.join-team.store', slug.slug), {
            preserveScroll: true,
            preserveState: true,
        });
    };
    return (
        <>
            <form onSubmit={(e) => onHandleSubmit(e)}>

                <div className="mt-6">

                    <TextInput
                        id="token"
                        type="token"
                        name="token"
                        value={data.token}
                        onChange={(e) => setData('token', e.target.value)}
                        className="mt-1 block w-3/4"
                        isFocused
                        placeholder="Token"
                        onErrors={errors.token && <InputError message={errors.token} className='mt-2' />}
                    />

                </div>

                <Button className="ms-3" variant="red" type="submit" disabled={processing}>
                    Submit
                </Button>
            </form>
        </>
    );
}

export default RegisterJoinTeam;
RegisterJoinTeam.layout = (page) => <GuestLayout children={page} title="Register Join Team" />;


