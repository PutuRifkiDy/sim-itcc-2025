import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { flashMessage } from "@/lib/utils";
import Dashboard from "@/Pages/Dashboard";
import { ClockIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { PiWarningBold } from "react-icons/pi";
import { toast } from "sonner";

function Submission({ className, user_competition_registrations, competitions, status_submission, show_reject_reason_submission }) {
    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData } = useForm({
        competition_registration_id: user_competition_registrations.id,
        submission_link: '',
        submission_status: 'Pending',
        _method: 'POST',
    });

    const [showSubmissionInformationError, setShowSubmissionInformationError] = useState(false);

    useEffect(() => {
        if (errors.submission_link) {
            setShowSubmissionInformationError(true);
        }
    }, [errors]);

    const closeModal = () => {
        setShowSubmissionInformationError(false);
    };

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (!data.submission_link) {
            toast.error("Please don't leave the submission link empty.");
            return;
        }

        post(route('dashboard.competition.submission'), {
            // onSuccess: (success) => {
            //     const flash = flashMessage(success);
            //     if (flash) toast[flash.type](flash.message);
            // },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <section className={className}>
                {user_competition_registrations.competitions.is_need_submission ? (
                    <div>
                        {user_competition_registrations.payment_status == 'Requested' && (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#0F114C] bg-[#0F114C]/20 w-full items-center mb-5 dark:bg-[#55b1d7]/20 dark:border-l-[#55b1d7]">
                                <ClockIcon className="h-5 w-5 text-[#0F114C] dark:text-white" />
                                <p className='text-[#0F114C] font-medium text-[12px] leading-[16px] dark:text-white'>Complete your payment before the deadline</p>
                            </div>
                        )}
                        {user_competition_registrations.payment_status == 'Pending' && (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#FFC300] bg-[#FFC300]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                                <p className='text-[#FFC300] font-medium text-[12px] leading-[16px]'>Verification in progress</p>
                            </div>
                        )}
                        {user_competition_registrations.payment_status == 'Rejected' && (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#E82323]" />
                                <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>{user_competition_registrations.reject_reason}</p>
                            </div>
                        )}


                        {status_submission == null && user_competition_registrations.payment_status == 'Verified' ? (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#0F114C] bg-[#0F114C]/20 w-full items-center mb-5 dark:bg-[#55b1d7]/20 dark:border-l-[#55b1d7]">
                                <ClockIcon className="h-5 w-5 text-[#0F114C] dark:text-white" />
                                <p className='text-[#0F114C] font-medium text-[12px] leading-[16px] dark:text-white'>
                                    Upload your submission before the deadline
                                </p>
                            </div>
                        ) : status_submission == 'Pending' ? (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#FFC300] bg-[#FFC300]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                                <p className='text-[#FFC300] font-medium text-[12px] leading-[16px]'>
                                    Please wait for the admin to verify your submission
                                </p>
                            </div>
                        ) : status_submission == 'Verified' ? (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#00D238] bg-[#00D238]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#00D238]" />
                                <p className='text-[#00D238] font-medium text-[12px] leading-[16px]'>
                                    Your submission has been verified
                                </p>
                            </div>
                        ) : status_submission == 'Rejected' && (
                            <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                                <ClockIcon className="h-5 w-5 text-[#E82323]" />
                                <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>
                                    {show_reject_reason_submission}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#E82323]" />
                        <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>
                            This competition does not require submission
                        </p>
                    </div>
                )}

                <form onSubmit={onHandleSubmit}>
                    <div className="mt-10 mb-5">
                        <InputLabel htmlFor="submission_link" value="Submission Link" className='text-[12px] text-[#676767] font-medium dark:text-gray-400' />

                        <TextInput
                            id="submission_link"
                            name="submission_link"
                            type="text"
                            className="mt-1 block md:w-[500px] w-full rounded-[10px] border-[1px] border-[#818181] dark:border-white px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F] dark:bg-[#040529]"
                            value={data.submission_link}
                            onChange={onHandleChange}
                            isFocused
                            placeholder="Upload your submission link"
                            autoComplete="submission_link"
                        />
                    </div>
                    <Button variant="blue" className="px-12 shadow-lg dark:bg-[#2b48a6]">
                        Submit
                    </Button>
                    <p className="text-[14px] font-normal text-[#5E5E5E] mt-3">
                        *please wait until verification is done if you want to submit your submission again
                    </p>

                </form>



                <Modal show={showSubmissionInformationError} onClose={closeModal} className="dark:bg-[#040529]" maxWidth="lg">
                    <div className="border-b-2 dark:border-none border-gray-400 px-5 py-5 dark:bg-gradient-to-r from-[#00658F] to-[#0F114C]">
                        <h2 className="text-lg font-semibold text-[#0F114C] dark:text-white flex flex-row gap-2 items-center">
                            {/* Are you sure you want cancel your registration? */}
                            <div className="flex justify-center items-center bg-[#FFE0E3] p-2 rounded-full">
                                <PiWarningBold className="w-6 h-6 text-[#DC3545] font-bold" />
                            </div>
                            {/* {errors.submission_link && <span>{errors.submission_link}</span>} */}
                            Invalid Submission Link
                        </h2>
                    </div>
                    <div className="px-5 py-5 dark:bg-[#0F114C]">
                        <p className="text-[16px] text-[#000000] font-medium dark:text-white">
                            Link you have submitted is not valid
                        </p>
                        <ul class="list-inside list-disc mt-2 dark:text-white bg-gray-100 dark:bg-[#0F114C] rounded-[10px] px-2 py-2">
                            <li className="text-red-700">{errors.submission_link}</li>
                        </ul>
                        <div className="mt-6 flex w-full justify-end">
                            <Button onClick={closeModal} variant="blue" className="ms-3 w-1/3 dark:bg-white dark:text-[#0F114C]" type="button">Accept</Button>
                        </div>
                    </div>
                </Modal>
            </section>
        </>
    );
}

export default Submission;
