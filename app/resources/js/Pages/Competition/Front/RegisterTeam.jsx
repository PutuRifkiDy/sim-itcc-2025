import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

function RegisterTeam() {
    const slug = usePage().props.slug;
    const { flash_message } = usePage().props;

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);

    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        team_name: '',
        _method: 'POST',
    });

    const onHandleSubmit = (e) => {

        e.preventDefault();

        if (!data.team_name) {
            toast.error("Please enter team name.");
            return;
        }


        post(route('register.competition.team.store', slug.slug), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <form onSubmit={(e) => onHandleSubmit(e)}>


                <div className="mt-6">

                    <TextInput
                        id="team_name"
                        type="team_name"
                        name="team_name"
                        value={data.team_name}
                        onChange={(e) => setData('team_name', e.target.value)}
                        className="mt-1 block w-3/4"
                        isFocused
                        placeholder="Team Name"
                        onErrors={errors.team_name && <InputError message={errors.team_name} className='mt-2' />}
                    />

                </div>


                <Button className="ms-3" variant="red" type="submit" disabled={processing}>
                    Submit
                </Button>
            </form>
        </>
    );
}

export default RegisterTeam;
RegisterTeam.layout = (page) => <GuestLayout children={page} title="Register Team" />;
