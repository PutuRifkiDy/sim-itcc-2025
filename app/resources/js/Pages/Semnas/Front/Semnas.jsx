import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";

function Semnas({ ...props }) {
    const events = usePage().props.event;
    console.log(events);
    return (
        <>
            <div className="mt-24">
                <p>{events.event_content[0]?.location}</p>
                <p>{events.event_prices[0]?.periode_name}</p>
                <p>{events.event_prices[0]?.start_date}</p>
                <p>{events.event_prices[0]?.end_date}</p>
                <p>{events.event_content[0]?.how_to_join_link}</p>
                <p>{events.event_content[0]?.guidebook_link}</p>

                <p className="mt-10">{events.description}</p>

                {events.event_content.map((content, idx) => (
                    <div key={idx} className="mt-10 flex flex-col w-full justify-center items-center gap-24">
                        {content.event_content_faq.map((faq, i) => (
                            <div className="flex flex-col bg-grewn-500" key={i}>
                                <p>{faq.question ?? ''}</p>
                                <p>{faq.answer ?? ''}</p>
                            </div>
                        ))}
                    </div>
                ))}

                {events.event_content.map((content, idx) => (
                    <div key={idx} className="mt-10 flex flex-col w-full justify-center items-center gap-24">
                        {content.event_content_timeline.map((timeline, i) => (
                            <div className="flex flex-col bg-indigo-500" key={i}>
                                <p>{timeline.title ?? ''}</p>
                                <p>{timeline.date_range ?? ''}</p>
                            </div>
                        ))}
                    </div>
                ))}

                {events.event_content.map((content, idx) => (
                    <div key={idx} className="mt-10 grid md:grid-cols-3 grid-cols-1 w-full justify-center items-center gap-24">
                        {content.event_content_contact.map((contact, i) => (
                            <div>
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

export default Semnas;
Semnas.layout = (page) => <GuestLayout children={page} title="Semnas" />;
