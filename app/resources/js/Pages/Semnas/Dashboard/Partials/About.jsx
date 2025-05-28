import { LineIcon, WhatsappIcon } from "@/Components/IconAdmin";
import Modal from "@/Components/Modal";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { useState } from "react";

function About({ event_registrations, className }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <>
            <section className={className}>
                <div className="flex md:flex-row flex-col gap-5">
                    <p className="text-[#000000] font-semibold text-[22px] dark:text-white">
                        {event_registrations.events?.name}
                    </p>
                    {event_registrations.payment_status == "Requested" && (
                        <div className="bg-[#0F114C]/20 dark:bg-[#55b1d7]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#0F114C] font-bold text-[12px] dark:text-[#55b1d7]">{event_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {event_registrations.payment_status == "Pending" && (
                        <div className="bg-[#FFC300]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#FFC300] font-bold text-[12px]">{event_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {event_registrations.payment_status == "Verified" && (
                        <div className="bg-[#00D238]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#00D238] font-bold text-[12px]">{event_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {event_registrations.payment_status == "Rejected" && (
                        <div className="bg-[#E82323]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#E82323] font-bold text-[12px]">{event_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 md:gap-0 gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[12px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Registration Code</p>
                        <p className="font-reguler text-[18px] tracking-[0.03em]">{event_registrations.code_registration ?? ' '}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[12px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Name</p>
                        <p className="font-reguler text-[18px] tracking-[0.03em]">{event_registrations.user?.name ?? ' '}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[12px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Institution</p>
                        <p className="font-reguler text-[18px] tracking-[0.03em]">{event_registrations.user?.institution ?? ' '}</p>
                    </div>

                </div>
                {event_registrations.events.event_content.map((event_content, index) => (
                    <div key={index} className="grid md:grid-cols-3 grid-cols-1 w-full mt-8 md:gap-0 gap-4">
                        {event_content.event_content_contact.map((content_contact, idx) => (
                            <div className="flex flex-col gap-2" key={idx}>
                                <p className="font-bold text-[12px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Contact Person {idx + 1}</p>
                                <div className="flex flex-row items-center text-[#0f114c] dark:text-white gap-2">
                                    <WhatsappIcon />
                                    <a href={`https://wa.me/${content_contact.wa_number}`} target="_blank" className="text-[#0f114c] text-[13px] tracking-[0.03em] dark:text-[#55b1d7]">{content_contact.wa_number}</a>
                                </div>
                                <div className="flex flex-row items-center text-[#0f114c] dark:text-white gap-2">
                                    <LineIcon />
                                    <a href={`https://line.me/ti/p/${content_contact.id_line}`} target="_blank" className="text-[#0f114c] text-[13px] tracking-[0.03em] dark:text-[#55b1d7]">{content_contact.id_line}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {event_registrations.events.event_content.map((event_content, index) => (
                    <div key={index} className="grid md:grid-cols-3 grid-cols-1 w-full mt-8 md:gap-0 gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-[12px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">{event_content.guidebook_link && "Guidebook"}</p>
                            <a href={event_content.guidebook_link ?? '#'} target="_blank" className="flex flex-row gap-2 items-center text-[#0f114c] dark:text-[#55b1d7]">
                                Open Guidebook
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#0f114c] dark:text-[#55b1d7] font-semibold" />
                            </a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-[12px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">{event_content.how_to_join_link && "How to Join"}</p>
                            <a href={event_content.how_to_join_link ?? '#'} target="_blank" className="flex flex-row gap-2 items-center text-[#0f114c] dark:text-[#55b1d7]">
                                Play Video
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#0f114c] dark:text-[#55b1d7] font-semibold" />
                            </a>
                        </div>

                    </div>
                ))}

                <div className="flex justify-start w-full">
                    <Button
                        variant='red'
                        className="mt-8"
                        onClick={confirmUserDeletion}
                    >
                        Cancel Registration
                    </Button>

                    <Modal show={confirmingUserDeletion} onClose={closeModal} className="dark:bg-[#040529]" maxWidth="lg">
                        <div className="border-b-2 dark:border-none border-gray-400 px-5 py-5 dark:bg-gradient-to-r from-[#00658F] to-[#0F114C]">
                            <h2 className="text-lg font-bold text-[#0F114C] dark:text-white flex flex-row gap-2 items-center">
                                {/* Are you sure you want cancel your registration? */}
                                <div className="flex justify-center items-center bg-[#FFE0E3] p-2 rounded-full">
                                    <InformationCircleIcon className="w-6 h-6 text-[#DC3545] font-bold" />
                                </div>
                                Cancel Registration
                            </h2>
                        </div>
                        <div className="px-5 py-5 dark:bg-[#0F114C]">
                            <p className="text-[16px] text-[#000000] font-medium dark:text-white">
                                Once you cancel your registration,  This action cannot be undone.
                            </p>
                            <ul class="list-inside list-disc mt-2 dark:text-white bg-gray-100 dark:bg-[#0F114C] rounded-[10px] px-2 py-2">
                                <li className="text-red-700">The payment proof you have upload cannot be retrieved</li>
                            </ul>
                            <div className="mt-6 flex w-full">
                                <Button onClick={closeModal} variant="blue" className="w-1/2 dark:bg-[#040529]" type="button">Cancel</Button>

                                <Button className="ms-3 w-1/2 dark:bg-white dark:text-[#0F114C]" variant="red" type="submit" asChild>
                                    <Link
                                        className="text-white"
                                        type="button"
                                        method="delete"
                                        href={route('dashboard.semnas.destroy', { id: event_registrations.id })}
                                    >
                                        Confirm
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </section>
        </>
    );
}

export default About;
About.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" />
