import { BniIcon } from "@/Components/IconAdmin";
import { ImageUpload } from "@/Components/ImageUpload";
import ImageUploadDashboard from "@/Components/ImageUploadDashboard";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { flashMessage } from "@/lib/utils";
import { Transition } from "@headlessui/react";
import { ClockIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "sonner";

function Payment({ event_registrations, payment_methods, className, payment_value }) {
    const [isCopied, setIsCopied] = useState(false);
    const { data, setData, post, put, patch, errors, processing, recentlySuccessful, formData } = useForm({
        payment_status: 'Pending',
        payment_proof_path: '',
        event_id: event_registrations.event_id,
        user_id: event_registrations.user_id,
        code_registration: event_registrations.code_registration,
        total_payment: event_registrations.total_payment,
        reject_reason: event_registrations.reject_reason,
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

        post(route('dashboard.semnas.payment', { id: event_registrations.id }), {
            forceFormData: true,
            preserveScroll: true,
            preserveState: true,
        });
    };


    const additionalPaymentMethods = [
        {
            image: "assets/images/dashboard/BNI_logo.png",
            className: "w-[60px] h-auto",
        },
        {
            image: "assets/images/dashboard/DANA_logo.png",
            className: "w-[72px] h-[21px]",
        },
        {
            image: "assets/images/dashboard/SHOPEE_PAY_logo.png",
            className: "w-[57px] h-[25px]",
        },
        {
            image: "assets/images/dashboard/GOPAY_logo.png",
            className: "w-[75px] h-[27px]",
        },
        {
            image: "assets/images/dashboard/OVO_logo.png",
            className: "w-[63px] h-[20px]",
        },
    ];

    const combinedPaymentMethodsWithAdditionalContent = payment_methods
        .map((item, index) => ({
            ...item,
            image: additionalPaymentMethods[index]?.image || "assets/images/dashboard/BNI_logo.png",
            className: additionalPaymentMethods[index]?.className || "w-[122px] h-[86px]",
        }))
        .concat(additionalPaymentMethods.slice(payment_methods.length));
    const payment_method = combinedPaymentMethodsWithAdditionalContent.find((method) => method.id == payment_value);
    console.log('cek payment method', payment_method);
    return (
        <>
            <section className={className}>
                {event_registrations.payment_status == 'Requested' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#0F114C] dark:border-l-[#55b1d7] bg-[#0F114C]/20 dark:bg-[#55b1d7]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#0F114C] dark:text-white" />
                        <p className='text-[#0F114C] font-medium text-[12px] leading-[16px] dark:text-white'>Complete your payment before the deadline</p>
                    </div>
                )}
                {event_registrations.payment_status == 'Pending' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#FFC300] bg-[#FFC300]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                        <p className='text-[#FFC300] font-medium text-[12px] leading-[16px]'>Verification in progress</p>
                    </div>
                )}
                {event_registrations.payment_status == 'Verified' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#00D238] bg-[#00D238]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#00D238]" />
                        <p className='text-[#00D238] font-medium text-[12px] leading-[16px]'>Payment has been verified</p>
                    </div>
                )}
                {event_registrations.payment_status == 'Rejected' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#E82323]" />
                        <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>{event_registrations.reject_reason}</p>
                    </div>
                )}

                <div className={`grid ${["Verified", "Pending"].includes(event_registrations.payment_status) ? 'md:grid-cols-3' : 'md:grid-cols-2'} ${event_registrations.payment_status} grid-cols-1 md:gap-5 gap-4`}>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Total Payment</p>
                        <p className="font-reguler text-[20px] tracking-[0.03em] text-[#000000] dark:text-white">Rp. {event_registrations.total_payment}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Account Number</p>
                        <div className="font-reguler text-[20px] tracking-[0.03em] text-[#000000] dark:text-white flex flex-row gap-2 items-center">
                            <img src={`${window.location.origin}/${payment_method.image}`} className={payment_method.className} alt="" />
                            {payment_method.account_number}
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
                        <p className="font-bold text-[14px] tracking-[0.03em] text-[#5E5E5E] dark:text-gray-400">Recipient Name</p>
                        <p className="font-reguler text-[20px] tracking-[0.03em] text-[#000000] dark:text-white">{payment_method.recipient_name}</p>
                    </div>
                </div>

                {/* start upload file */}
                <form onSubmit={onHandleSubmit}>
                    <div className="flex justify-center flex-col gap-5 items-center mt-10">

                        {["Requested", "Pending", "Rejected"].includes(event_registrations.payment_status) ? (
                            <ImageUploadDashboard
                                imagePath={data.payment_proof_path}
                                onChangeImage={(file, previewUrl) => {
                                    setData("payment_proof_path", file);
                                    setPreview(previewUrl);
                                }}
                                errorMessage={errors.payment_proof_path}
                                classNameForBG={`${event_registrations.payment_status === "Pending" && "cursor-not-allowed bg-[#4880FF]/15"}`}
                            />
                        ) : event_registrations.payment_status === "Verified" && (
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img src={`${window.location.origin}/assets/images/image_for_people_verified_semnas.png`} className="w-[200px] h-[200px]" alt="" />
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <p className="text-[29px] font-bold">Payment Successfull</p>
                                    <p className="text-[14px] font-normal">Go download your ticket in the Ticket tab</p>
                                </div>
                            </div>
                        )}

                        {['Requested', 'Rejected'].includes(event_registrations.payment_status) ? (
                            <Button variant="blue" type="submit" className="px-10 rounded-[8px] shadow-xl dark:bg-[#4880FF]/50">
                                Submit
                            </Button>
                        ) : event_registrations.payment_status === "Pending" && (
                            <Button variant="blue" type="submit" className="px-10 rounded-[8px] shadow-xl cursor-not-allowed dark:bg-[#4880FF]/50" disabled>
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
Payment.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" />
