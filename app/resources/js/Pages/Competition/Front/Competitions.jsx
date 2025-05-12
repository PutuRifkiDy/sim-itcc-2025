import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { flashMessage } from "@/lib/utils";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

function Competitions({ ...props }) {
    const competitions = usePage().props.competition;
    const current_batch = usePage().props.current_batch;
    const { flash_message } = usePage().props;
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        slug: competitions.slug ?? '',
        _method: 'POST',
    });

    console.log('cek isi var competition', competitions);


    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('register.competition.store', data.slug), {

            preserveScroll: true,
            preserveState: true,
        });
    };



    return (
        <>
            <div className="">
                <p>{competitions.competition_content[0]?.location}</p>
                <p>{current_batch?.periode_name}</p>
                <p>{current_batch?.start_date}</p>
                <p>{current_batch?.end_date}</p>
                <p>{current_batch?.price}</p>
                <p>{competitions.competition_content[0]?.how_to_join_link}</p>
                <p>{competitions.competition_content[0]?.guidebook_link}</p>
                {competitions.is_team == false ? (
                    <Button type="submit" onClick={onHandleSubmit}>
                        Register
                    </Button>
                ) : (
                    <Button asChild>
                        <Link
                            href={route('register.competition.show', competitions.slug)}
                        >
                            Register
                        </Link>
                    </Button>
                )}

                <p className="mt-10">{competitions.description}</p>

                {competitions.competition_content.map((content, idx) => (
                    <div key={idx} className="mt-10 grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-24">
                        {content.competition_content_prizes.map((prize, i) => (
                            <div className="flex flex-col bg-red-500" key={i}>
                                <p>
                                    {prize.rank ?? '-'}
                                </p>
                                <p>
                                    {prize.name ?? ''}
                                </p>
                                <p>
                                    {(prize.money).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) ?? '-'}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}

                {competitions.competition_content.map((content, idx) => (
                    <div key={idx} className="mt-10 flex flex-col w-full justify-center items-center gap-24">
                        {content.competition_content_timeline.map((timeline, i) => (
                            <div className="flex flex-col bg-indigo-500" key={i}>
                                <p>{timeline.title ?? ''}</p>
                                <p>{timeline.date_range ?? ''}</p>
                            </div>
                        ))}
                    </div>
                ))}

                {competitions.competition_content.map((content, idx) => (
                    <div key={idx} className="mt-10 flex flex-col w-full justify-center items-center gap-24">
                        {content.competition_content_faq.map((faq, i) => (
                            <div className="flex flex-col bg-grewn-500" key={i}>
                                <p>{faq.question ?? ''}</p>
                                <p>{faq.answer ?? ''}</p>
                            </div>
                        ))}
                    </div>
                ))}

                {competitions.competition_content.map((content, idx) => (
                    <div key={idx} className="mt-10 grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-24">
                        {content.competition_content_contact.map((contact, i) => (
                            <div className="flex flex-col bg-red-500" key={i}>
                                {contact.name ?? ''}
                                {contact.id_line ?? ''}
                                {contact.wa_number ?? ''}
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </>
    );
}

Competitions.layout = (page) => <GuestLayout children={page} title="Competition Page" />;

export default Competitions;
