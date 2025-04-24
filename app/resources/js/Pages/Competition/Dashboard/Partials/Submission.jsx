import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { flashMessage } from "@/lib/utils";
import Dashboard from "@/Pages/Dashboard";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

function Submission({ className, competition_registrations, competitions, status_submission }) {
    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData } = useForm({
        competition_registration_id: competition_registrations.id,
        submission_link: '',
        submission_status: 'Pending',
        _method: 'POST',
    });

    console.log("status_submission", status_submission);

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
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <section className={className}>
                {competition_registrations.payment_status == 'Requested' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#4880FF] bg-[#4880FF]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#4880FF]" />
                        <p className='text-[#4880FF] font-medium text-[12px] leading-[16px]'>Complete your payment before the deadline</p>
                    </div>
                )}
                {competition_registrations.payment_status == 'Pending' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#FFC300] bg-[#FFC300]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                        <p className='text-[#FFC300] font-medium text-[12px] leading-[16px]'>Verification in progress</p>
                    </div>
                )}
                {/* {competition_registrations.payment_status == 'Verified' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#00D238] bg-[#00D238]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#00D238]" />
                        <p className='text-[#00D238] font-medium text-[12px] leading-[16px]'>Payment has been verified</p>
                    </div>
                )} */}
                {competition_registrations.payment_status == 'Rejected' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#E82323]" />
                        <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>{competition_registrations.reject_reason}</p>
                    </div>
                )}


                {competition_registrations.payment_status == 'Verified' && status_submission == 'Requested' ? (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#4880FF] bg-[#4880FF]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#4880FF]" />
                        <p className='text-[#4880FF] font-medium text-[12px] leading-[16px]'>
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
                            Your submission has been rejected
                        </p>
                    </div>
                )}

                <form onSubmit={onHandleSubmit}>
                    <div className="mt-10 mb-5">
                        <InputLabel htmlFor="submission_link" value="Submission Link" className='text-[12px] text-[#676767] font-medium' />

                        <TextInput
                            id="submission_link"
                            name="submission_link"
                            type="text"
                            className="mt-1 block w-1/3 rounded-[10px] border-[1px] border-[#818181] px-4 placeholder:text-[14px] placeholder:text-[#6F6F6F]"
                            value={data.submission_link}
                            onChange={onHandleChange}
                            isFocused
                            placeholder="Upload your submission link"
                            autoComplete="submission_link"
                            onErrors={errors.submission_link && <InputError message={errors.submission_link} className='mt-2' />}
                        />
                    </div>
                    <Button variant="blue" className="px-12 shadow-lg">
                        Submit
                    </Button>
                    <p className="text-[14px] font-normal text-[#5E5E5E] mt-3">
                        *please wait until verification is done if you want to submit your submission again
                    </p>

                </form>
            </section>
        </>
    );
}

export default Submission;
Submission.layout = (page) => <Dashboard children={page} title="Submission" />
