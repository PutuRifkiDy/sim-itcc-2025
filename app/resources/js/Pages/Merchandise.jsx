import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";

function Merchandise({...props})
{
    const merchandise = usePage().props.merchandise;
    console.log('cek isi var', merchandise);
    return (
        <>
            {merchandise.map((merchandise, idx) => (
                <div key={idx} className="mt-24">
                    <p>{merchandise.name}</p>
                    <p>{merchandise.price}</p>
                    <p>{merchandise.description}</p>
                    <p>{merchandise.batch_name}</p>
                    <p>{merchandise.start_date}</p>
                    <p>{merchandise.end_date}</p>
                </div>
            ))}
        </>
    );
}
export default Merchandise;
Merchandise.layout = (page) => <GuestLayout children={page} title="Merchandise" />;


