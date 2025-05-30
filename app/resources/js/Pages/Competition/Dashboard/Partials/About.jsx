import { LineIcon, WhatsappIcon } from "@/Components/IconAdmin";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArrowTopRightOnSquareIcon, DocumentDuplicateIcon, InformationCircleIcon, NoSymbolIcon, PencilSquareIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function About({ user_competition_registrations, className }) {
    const [isCopied, setIsCopied] = useState(false);
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const { flash_message } = usePage().props;
    const [editingTeamNameModalOpen, setEditTeamNameModalOpen] = useState(false);

    const { data, setData, post, errors, processing, recentlySuccessful, formData, clearErrors, reset } = useForm({
        team_name: '',
        leader_id: user_competition_registrations.teams?.leader_id,
        token: user_competition_registrations.teams?.token,
        _method: 'POST',
    });

    console.log(user_competition_registrations);

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const editTeamNameModalOpen = () => {
        setEditTeamNameModalOpen(true);
    };

    const closeEditTeamNameModal = () => {
        setEditTeamNameModalOpen(false);

        clearErrors();
        reset();
    };

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

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (!data.team_name) {
            toast.error("Please enter team name.");
            return;
        }

        post(route('dashboard.competition.team_name', { id: user_competition_registrations.teams.id }), {
            onSuccess: (success) => {
                closeEditTeamNameModal();

            },
            forceFormData: true,
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <section className={className}>
                <div className="flex md:flex-row flex-col gap-5">
                    <p className="text-[#000000] font-semibold text-[22px] dark:text-white">
                        {user_competition_registrations?.competitions?.name}
                    </p>
                    {user_competition_registrations.payment_status == "Requested" && (
                        <div className="bg-[#0F114C]/20 dark:bg-[#55b1d7]/20 rounded-md flex justify-center items-center py-2 px-5">
                            <p className="text-[#0F114C] font-bold text-[12px] dark:text-[#55b1d7]">{user_competition_registrations.payment_status ?? ' '}</p>
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
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Code Registrations</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.code_registration ?? ' '}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Team Token</p>
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
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">
                                Team Name
                            </p>
                            <div className="flex flex-row gap-1 items-center">
                                <p className="font-reguler text-[18px] tracking-[0.03em]">
                                    {user_competition_registrations.teams?.team_name ?? ' '}
                                </p>
                                <Button variant="none" size="lg" onClick={editTeamNameModalOpen}>
                                    <PencilSquareIcon className="w-5 h-5" />
                                </Button>
                                <Modal show={editingTeamNameModalOpen} onClose={closeEditTeamNameModal} maxWidth="lg" className="relative px-5 py-5 dark:bg-[#040529] md:w-lg w-full">
                                    <form onSubmit={(e) => onHandleSubmit(e)}>
                                        <XMarkIcon className="w-5 h-5 absolute top-4 right-3 cursor-pointer" onClick={closeEditTeamNameModal} />
                                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Please input a team name
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-600 dark:text-white">
                                            You will not be able to revert this action.
                                        </p>
                                        <div className="mt-6">
                                            <TextInput
                                                id="team_name"
                                                type="team_name"
                                                name="team_name"
                                                value={data.team_name}
                                                onChange={(e) => setData('team_name', e.target.value)}
                                                className="mt-1 block w-3/4"
                                                isFocused
                                                placeholder="Update Team Name"
                                            />

                                            <InputError message={errors.team_name} className="mt-2 text-red-700" />
                                        </div>

                                        <Button disabled={processing} className="mt-6" variant="blue">
                                            Update
                                        </Button>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                    ) : (

                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Name</p>
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
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Competition Category</p>
                            <p className="font-reguler text-[18px] tracking-[0.03em]">{user_competition_registrations.competitions.competition_category.category_name ?? ' '}</p>
                        </div>
                    )}
                </div>
                {user_competition_registrations.competitions.competition_content.map((competition_content, index) => (
                    <div key={index} className="grid md:grid-cols-3 grid-cols-1 w-full mt-8 md:gap-0 gap-4">
                        {competition_content.competition_content_contact.map((content_contact, idx) => (
                            <div className="flex flex-col gap-2" key={idx}>
                                <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Contact Person {idx + 1}</p>
                                <div className="text-[#0f114c] dark:text-white flex flex-row items-center gap-2">
                                    <WhatsappIcon />
                                    <a href={`https://wa.me/${content_contact.wa_number}`} className="text-[13px] tracking-[0.03em] dark:text-[#55b1d7]">{content_contact.wa_number}</a>
                                </div>
                                <div className="text-[#0f114c] dark:text-white flex flex-row items-center gap-2">
                                    <LineIcon />
                                    <a href={`https://line.me/ti/p/${content_contact.id_line}`} className="text-[13px] tracking-[0.03em]  dark:text-[#55b1d7]">{content_contact.id_line}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {user_competition_registrations.competitions.competition_content.map((competition_content, index) => (
                    <div key={index} className="grid md:grid-cols-3 grid-cols-1 w-full mt-8 md:gap-0 gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">{competition_content.guidebook_link && "Guidebook"}</p>
                            <a href={competition_content.guidebook_link ?? '#'} target="_blank" className="flex flex-row gap-2 items-center text-[#0f114c] dark:text-[#55b1d7]">
                                Open Guidebook
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#0f114c] dark:text-[#55b1d7] font-semibold" />
                            </a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">{competition_content.how_to_join_link && "How to Join"}</p>
                            <a href={competition_content.how_to_join_link ?? '#'} target="_blank" className="flex flex-row gap-2 items-center text-[#0f114c] dark:text-[#55b1d7]">
                                Play Video
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#0f114c] dark:text-[#55b1d7] font-semibold" />
                            </a>
                        </div>

                    </div>
                ))}
                {user_competition_registrations.competitions.is_team == true && (
                    <div className="flex flex-col gap-2 mt-10">
                        <div className="flex flex-row gap-2">
                            <div className="font-bold flex flex-row items-center gap-2 text-[18px] tracking-[0.03em] text-[#3A3A3A] dark:text-white">
                                <UserGroupIcon className="w-6 h-6 text-[#3A3A3A] dark:text-white" />
                                Our Team
                                <div className="flex flex-row items-center">
                                    <p>{user_competition_registrations.teams.team_members.length}{" "}/{" "}3</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-12">
                            {user_competition_registrations.teams.team_members.map((member, index) => (

                                <div className="flex flex-col gap-5 border-2 border-gray-200 rounded-xl p-5 hover:scale-[102%] transition-all duration-200 ease-in-out" key={index}>
                                    <div className="flex justify-center items-center">
                                        <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="w-[161px] h-auto" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-3 items-start">
                                        <p className="font-bold text-[18px] text-[#000000] line-clamp-1 dark:text-white">
                                            {member.competition_registrations.user.name}
                                        </p>
                                        <div className="bg-[#0f114c] dark:bg-[#55b1d7]/20 rounded-md p-1 px-6 max-w-fit text-white text-[14px] font-medium">
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
                                <li className="text-red-700">The submission link you have upload cannot be retrieved</li>
                            </ul>
                            <div className="mt-6 flex w-full">
                                <Button onClick={closeModal} variant="blue" className="w-1/2 dark:bg-[#040529]" type="button">Cancel</Button>

                                <Button className="ms-3 w-1/2 dark:text-white" variant="red" type="submit" asChild>
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
                        </div>
                    </Modal>
                </div>
            </section>
        </>
    );
}

export default About;
