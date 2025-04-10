import GuestLayout from "@/Layouts/GuestLayout";

export function Competitions({...props})
{
    const competitions = props.competitions;

    console.log('cek isi -> ', competitions);
    return (
        <>
            <p>ini adalah page competition front</p>
        </>
    );
}

Competition.layout = (page) => <GuestLayout children={page} title="Competition Page" />;
