import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";

function Competitions({ ...props }) {
    const competitions = usePage().props.competition;

    return (
        <>
            <div className="">
                <p>{competitions.competition_content[0]?.location}</p>
                <p>{competitions.competition_prices[0]?.periode_name}</p>
                <p>{competitions.competition_prices[0]?.start_date}</p>
                <p>{competitions.competition_prices[0]?.end_date}</p>
                <p>{competitions.competition_content[0]?.how_to_join_link}</p>
                <p>{competitions.competition_content[0]?.guidebook_link}</p>

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
