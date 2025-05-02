import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, usePage } from "@inertiajs/react";


function Register() {
    const slug = usePage().props.slug;
    console.log('cek slug', slug);
    return (
        <>
            <Button variant="blue" asChild>
                <Link
                    href={route('register.competition.team.show', { competition: slug })}
                >
                    Create Team
                </Link>
            </Button>
            <Button variant="blue" asChild>
                <Link
                    href={route('register.competition.join-team.show', { competition: slug })}
                >
                    Join Team
                </Link>
            </Button>
        </>
    );
}

export default Register;
Register.layout = (page) => <GuestLayout children={page} title="Register Competition" />;
