import { BniIcon } from "@/Components/IconAdmin";
import ImageUploadDashboard from "@/Components/ImageUploadDashboard";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { flashMessage } from "@/lib/utils";
import { ClockIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "sonner";

function Payment({ user_competition_registrations, payment_methods, className }) {
    const [isCopied, setIsCopied] = useState(false);
    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData } = useForm({
        payment_status: 'Pending',
        payment_proof_path: '',
        event_id: user_competition_registrations.competition_id,
        user_id: user_competition_registrations.user_id,
        code_registration: user_competition_registrations.code_registration,
        total_payment: user_competition_registrations.total_payment,
        reject_reason: user_competition_registrations.reject_reason,
        _method: 'POST',
    });

    function handleCopy(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Account number copied to clipboard!");
                setIsCopied(true);

                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch(() => {
                toast.error("Failed to copy account number");
                setIsCopied(false);
            });
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (!data.payment_proof_path) {
            toast.error("Please upload payment proof");
            return;
        }

        post(route('dashboard.competition.payment', { id: user_competition_registrations.id }), {
            forceFormData: true,
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <section className={className}>
                {user_competition_registrations.payment_status == 'Requested' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#4880FF] bg-[#4880FF]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#4880FF]" />
                        <p className='text-[#4880FF] font-medium text-[12px] leading-[16px]'>Complete your payment before the deadline</p>
                    </div>
                )}
                {user_competition_registrations.payment_status == 'Pending' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#FFC300] bg-[#FFC300]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                        <p className='text-[#FFC300] font-medium text-[12px] leading-[16px]'>Verification in progress</p>
                    </div>
                )}
                {user_competition_registrations.payment_status == 'Verified' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#00D238] bg-[#00D238]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#00D238]" />
                        <p className='text-[#00D238] font-medium text-[12px] leading-[16px]'>Payment has been verified</p>
                    </div>
                )}
                {user_competition_registrations.payment_status == 'Rejected' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#E82323]" />
                        <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>{user_competition_registrations.reject_reason}</p>
                    </div>
                )}

                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Total Payment</p>
                        <p className="font-bold text-[20px] tracking-[0.03em] text-[#000000]">Rp. {user_competition_registrations.total_payment}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Account Number</p>
                        <div className="font-bold text-[20px] tracking-[0.03em] text-[#000000] flex flex-row gap-2 items-center">
                            <BniIcon />
                            {payment_methods.account_number}
                            {isCopied == true ? (
                                <div>
                                    <p className="text-sm text-muted-foreground">Copied.</p>
                                </div>
                            ) : (
                                <DocumentDuplicateIcon className="w-5 h-5 cursor-pointer text-gray-500" onClick={() => handleCopy(payment_methods.account_number)} />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E]">Recipient Name</p>
                        <p className="font-bold text-[20px] tracking-[0.03em] text-[#000000]">{payment_methods.recipient_name}</p>
                    </div>
                </div>

                <form onSubmit={onHandleSubmit}>
                    <div className="flex justify-center flex-col gap-5 items-center mt-10">

                        {["Requested", "Pending", "Rejected"].includes(user_competition_registrations.payment_status) ? (
                            <ImageUploadDashboard
                                imagePath={data.payment_proof_path}
                                onChangeImage={(file, previewUrl) => {
                                    setData("payment_proof_path", file);
                                    setPreview(previewUrl);
                                }}
                                errorMessage={errors.payment_proof_path}
                                classNameForBG={`${user_competition_registrations.payment_status === "Pending" && "cursor-not-allowed bg-[#4880FF]/15"}`}
                            />
                        ) : user_competition_registrations.payment_status === "Verified" && (
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img src={`${window.location.origin}/assets/images/image_for_people_verified_semnas.png`} className="w-[200px] h-[200px]" alt="" />
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <p className="text-[29px] font-bold">Payment Successfull</p>
                                    <p className="text-[14px] font-normal">Go upload your submission</p>
                                </div>
                            </div>
                        )}

                        {['Requested', 'Rejected'].includes(user_competition_registrations.payment_status) ? (
                            <Button variant="blue" type="submit" className="px-10 rounded-[8px] shadow-xl">
                                Submit
                            </Button>
                        ) : user_competition_registrations.payment_status === "Pending" && (
                            <Button variant="blue" type="submit" className="px-10 rounded-[8px] shadow-xl cursor-not-allowed" disabled>
                                Submit
                            </Button>
                        )}
                    </div>
                </form>
            </section >
        </>
    );
}

export default Payment;
