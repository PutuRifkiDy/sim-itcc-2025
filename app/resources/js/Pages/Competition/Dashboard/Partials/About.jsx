import { LineIcon, WhatsappIcon } from "@/Components/IconAdmin";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function About({ competition_registrations, className }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    console.log("isi var competition", competition_registrations);

    return (
        <>
            <section className={className}>
                <div className="flex md:flex-row flex-col gap-5">
                    <p className="text-[#000000] font-semibold text-[22px]">
                        {competition_registrations.competitions?.name}
                    </p>
                    {competition_registrations.payment_status == "Requested" && (
                        <div className="bg-[#4880FF]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#4880FF] font-bold text-[12px]">{competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {competition_registrations.payment_status == "Pending" && (
                        <div className="bg-[#FFC300]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#FFC300] font-bold text-[12px]">{competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {competition_registrations.payment_status == "Verified" && (
                        <div className="bg-[#00D238]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#00D238] font-bold text-[12px]">{competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {competition_registrations.payment_status == "Rejected" && (
                        <div className="bg-[#E82323]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#E82323] font-bold text-[12px]">{competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 md:gap-0 gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Registration Code</p>
                        <p className="font-reguler text-[18px] tracking-[0.03em]">{competition_registrations.code_registration ?? ' '}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Name</p>
                        <p className="font-reguler text-[18px] tracking-[0.03em]">{competition_registrations.user?.name ?? ' '}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Institution</p>
                        <p className="font-reguler text-[18px] tracking-[0.03em]">{competition_registrations.user?.institution ?? ' '}</p>
                    </div>

                </div>
                {competition_registrations.competitions.competition_content.map((competition_content, index) => (
                    <div key={index} className="grid md:grid-cols-3 grid-cols-1 w-full mt-8 md:gap-0 gap-4">
                        {competition_content.competition_content_contact.map((content_contact, idx) => (
                            <div className="flex flex-col gap-2" key={idx}>
                                <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Contact Person {idx + 1}</p>
                                <div className="flex flex-row items-center gap-2">
                                    <WhatsappIcon />
                                    <p className="text-[#6D98F9] text-[13px] tracking-[0.03em]">{content_contact.wa_number}</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <LineIcon />
                                    <p className="text-[#6D98F9] text-[13px] tracking-[0.03em]">{content_contact.id_line}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {competition_registrations.competitions.competition_content.map((competition_content, index) => (
                    <div key={index} className="grid md:grid-cols-3 grid-cols-1 w-full mt-8 md:gap-0 gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">{competition_content.guidebook_link && "Guidebook"}</p>
                            <a href={competition_content.guidebook_link ?? '#'} target="_blank" className="flex flex-row gap-2 items-center text-[#6D98F9]">
                                Open Guidebook
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#6D98F9] font-semibold" />
                            </a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">{competition_content.how_to_join_link && "How to Join"}</p>
                            <a href={competition_content.how_to_join_link ?? '#'} target="_blank" className="flex flex-row gap-2 items-center text-[#6D98F9]">
                                Play Video
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#6D98F9] font-semibold" />
                            </a>
                        </div>

                    </div>
                ))}

                {/* <div className="flex justify-start w-full">
                    <Button
                        variant='red'
                        className="mt-8"
                        onClick={confirmUserDeletion}
                    >
                        Cancel Registration
                    </Button>

                    <Modal show={confirmingUserDeletion} onClose={closeModal} className="px-5 py-5" maxWidth="md">
                        <h2 className="text-lg font-medium text-gray-900">Are you sure you want cancel your registration?</h2>
                        <p className="mt-1 text-sm text-gray-600 mb-10">
                            Once you cancel your registration, you will not be able to revert this action.
                        </p>
                        <div className="mt-6 flex justify-end">
                            <Button onClick={closeModal} variant="blue" type="button">Cancel</Button>

                            <Button className="ms-3" variant="red" type="submit" asChild>
                                <Link
                                    className="text-white"
                                    type="button"
                                    method="delete"
                                    href={route('dashboard.semnas.destroy', { id: competition_registrations.id })}
                                >
                                    Confirm
                                </Link>
                            </Button>
                        </div>
                    </Modal>
                </div> */}
            </section>
        </>
    );
}

export default About;
About.layout = (page) => <DashboardLayout children={page} title="About" />;
