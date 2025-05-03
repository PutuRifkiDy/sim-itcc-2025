import { LineIcon, WhatsappIcon } from "@/Components/IconAdmin";
import Modal from "@/Components/Modal";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArrowTopRightOnSquareIcon, DocumentDuplicateIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function About({ user_competition_registrations, className }) {
    const [isCopied, setIsCopied] = useState(false);
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const { flash_message } = usePage().props;

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    console.log("cek isi", user_competition_registrations);
    function handleCopy(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Team token copied to clipboard!");
                setIsCopied(true);

                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch(() => {
                toast.error("Failed to copy team token");
                setIsCopied(false);
            });
    }

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <>
            <section className={className}>
                <div className="flex md:flex-row flex-col gap-5">
                    <p className="text-[#000000] font-semibold text-[22px]">
                        {user_competition_registrations?.competitions?.name}
                    </p>
                    {user_competition_registrations.payment_status == "Requested" && (
                        <div className="bg-[#4880FF]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#4880FF] font-bold text-[12px]">{user_competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {user_competition_registrations.payment_status == "Pending" && (
                        <div className="bg-[#FFC300]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#FFC300] font-bold text-[12px]">{user_competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {user_competition_registrations.payment_status == "Verified" && (
                        <div className="bg-[#00D238]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#00D238] font-bold text-[12px]">{user_competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                    {user_competition_registrations.payment_status == "Rejected" && (
                        <div className="bg-[#E82323]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#E82323] font-bold text-[12px]">{user_competition_registrations.payment_status ?? ' '}</p>
                        </div>
                    )}
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 md:gap-0 gap-4">
                    {user_competition_registrations.competitions.is_team == false ? (
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Code Registrations</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.code_registration ?? ' '}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Team Token</p>
                            <div className="font-reguler text-[18px] tracking-[0.03em] flex flex-row gap-2 items-center">
                                {user_competition_registrations.teams.token ?? ' '}
                                {isCopied == true ? (
                                    <div>
                                        <p className="text-sm text-muted-foreground">Copied.</p>
                                    </div>
                                ) : (
                                    <DocumentDuplicateIcon className="w-5 h-5 cursor-pointer text-gray-500" onClick={() => handleCopy(user_competition_registrations.teams.token ?? ' ')} />
                                )}
                            </div>
                        </div>
                    )}
                    {user_competition_registrations.competitions.is_team == true ? (
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Team Name</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.teams?.team_name ?? ' '}</p>
                        </div>
                    ) : (

                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Name</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.user?.name ?? ' '}</p>
                        </div>
                    )}

                    {user_competition_registrations.competitions.is_team == false ? (
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Institution</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.user?.institution ?? ' '}</p>
                        </div>
                    ) : (

                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Competition Category</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.competitions.competition_category.category_name ?? ' '}</p>
                        </div>
                    )}
                </div>
                {user_competition_registrations.competitions.competition_content.map((competition_content, index) => (
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
                {user_competition_registrations.competitions.competition_content.map((competition_content, index) => (
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
                {user_competition_registrations.competitions.is_team == true && (
                    <div className="flex flex-col gap-2 mt-10">
                        <div className="flex flex-row gap-2">
                            <div className="font-bold flex flex-row items-center gap-2 text-[18px] tracking-[0.03em] text-[#3A3A3A]">
                                <UserGroupIcon className="w-6 h-6 text-[#3A3A3A]" />
                                Our Team
                                <div className="flex flex-row items-center">
                                    <p>{user_competition_registrations.teams.team_members.length}{" "}/{" "}3</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-12">
                            {user_competition_registrations.teams.team_members.map((member, index) => (

                                <div className="flex flex-col gap-5 border-2 border-gray-200 rounded-xl p-5" key={index}>
                                    <div className="flex justify-center items-center">
                                        <img src={`${window.location.origin}/assets/images/image_for_our_team.png`} className="w-[161px] h-[173px]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-3 items-start">
                                        <p className="font-bold text-[18px] text-[#000000] line-clamp-1">
                                            {member.competition_registrations.user.name}
                                        </p>
                                        <div className="bg-[#00658F] rounded-md p-1 px-6 max-w-fit text-white text-[14px] font-medium">
                                            {member.teams.leader_id === member.competition_registrations.user.id ? "Leader" : "Member"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )}

                <div className="flex flex-col justify-start w-full">
                    <Button
                        variant='red'
                        className="mt-8 max-w-fit"
                        onClick={confirmUserDeletion}
                    >
                        Cancel Registration
                    </Button>
                    <p className="mt-3 text-sm text-gray-600">
                        Once you cancel your registration, you will not be able to revert this action.
                    </p>

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
                                    href={route('dashboard.competition.destroy', { id: user_competition_registrations.id })}
                                >
                                    Confirm
                                </Link>
                            </Button>
                        </div>
                    </Modal>
                </div>
            </section>
        </>
    );
}

export default About;
