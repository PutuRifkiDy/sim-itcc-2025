import DashboardLayout from "@/Layouts/DashboardLayout";
import About from "./Partials/About";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";
import Payment from "./Partials/Payment";
import Submission from "./Partials/Submission";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import Modal from "@/Components/Modal";

function DashboardCompetitionDetail() {
    const user_competition_registrations = usePage().props.user_competition_registrations;
    const payment_methods = usePage().props.payment_methods;
    const competitions = usePage().props.competitions;
    const show_reject_reason_submission = usePage().props.show_reject_reason_submission;

    const status_submission = usePage().props.status_submission;
    const [tabs, setTabs] = useState("about");
    const [paymentValue, setPaymentValue] = useState(1);

    const [showModal, setShowModal] = useState(false);
    const [pendingPaymentValue, setPendingPaymentValue] = useState(null);
    const [prevPaymentValue, setPrevPaymentValue] = useState(paymentValue);

    const closeModal = () => {
        setShowModal(false);
        setPendingPaymentValue(null);
        // setPrevPaymentValue(paymentValue);
    }

    const additionalPaymentMethods = [
        {
            image: "assets/images/dashboard/BNI_logo.png",
            className: "w-[150px] h-auto",
        },
        {
            image: "assets/images/dashboard/DANA_logo.png",
            className: "w-[134px] h-[38px]",
        },
        {
            image: "assets/images/dashboard/SHOPEE_PAY_logo.png",
            className: "w-[129px] h-[57px]",
        },
        {
            image: "assets/images/dashboard/GOPAY_logo.png",
            className: "w-[143px] h-[52px]",
        },
        {
            image: "assets/images/dashboard/OVO_logo.png",
            className: "w-[130px] h-[40px]",
        },
    ];

    const combinedPaymentMethodsWithAdditionalContent = payment_methods
        .map((item, index) => ({
            ...item,
            image: additionalPaymentMethods[index]?.image || "assets/images/dashboard/BNI_logo.png",
            className: additionalPaymentMethods[index]?.className || "w-[122px] h-[86px]",
        }))
        .concat(additionalPaymentMethods.slice(payment_methods.length));

    return (
        <>
            <div className="py-5">
                <Link
                    href={route('dashboard.competition.index')}
                    className="flex flex-row gap-2 items-center text-[#000000] hover:text-[#0f114c] hover:transition-all duration-500 ease-in-out mb-5 font-bold w-fit dark:text-white dark:hover:text-[#4880ff]"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                    Back
                </Link>
                <div className={`${tabs == "payment" ? "flex md:flex-row flex-col-reverse gap-5" : ""}`}>
                    <div className={`bg-white p-4 shadow rounded-lg sm:p-8 dark:bg-[#040529] ${tabs == "payment" && ["Requested", "Rejected"].includes(user_competition_registrations.payment_status) && user_competition_registrations ? "md:w-[70%] w-full" : "w-full"}`}>
                        <div className="flex flex-row md:gap-10 gap-5">
                            <Button variant="none" asChild onClick={() => setTabs("about")}>
                                <p className={`cursor-pointer ${tabs == "about" ? "text-[#0F114C] font-bold border-[#264A9D] border-b-[4px] rounded-[5px] transition-all ease-in-out duration-400 text-[16px] dark:text-[#55b1d7] dark:border-[#55b1d7]" : "text-[#5E5E5E] text-[16px] dark:text-white"}`}>About</p>
                            </Button>
                            <Button variant="none" asChild onClick={() => setTabs("payment")}>
                                <p className={`cursor-pointer ${tabs == "payment" ? "text-[#0F114C] font-bold border-[#264A9D] border-b-[4px] rounded-[5px] transition-all ease-in-out duration-400 text-[16px] dark:text-[#55b1d7] dark:border-[#55b1d7]" : "text-[#5E5E5E] text-[16px] dark:text-white"}`} >Payment</p>
                            </Button>
                            <Button variant="none" asChild onClick={() => setTabs("submission")}>
                                <p className={`cursor-pointer ${tabs == "submission" ? "text-[#0F114C] font-bold border-[#264A9D] border-b-[4px] rounded-[5px] transition-all ease-in-out duration-400 text-[16px] dark:text-[#55b1d7] dark:border-[#55b1d7]" : "text-[#5E5E5E] text-[16px] dark:text-white"}`} >Submission</p>
                            </Button>
                        </div>

                        {tabs == "about" && user_competition_registrations && (
                            <About className="w-full mt-5" user_competition_registrations={user_competition_registrations} />
                        )}
                        {tabs == "payment" && user_competition_registrations && (
                            <Payment className="w-full mt-5" user_competition_registrations={user_competition_registrations} payment_methods={payment_methods} payment_value={paymentValue} />
                        )}
                        {tabs == "submission" && user_competition_registrations && (
                            <Submission className="w-full mt-5" user_competition_registrations={user_competition_registrations} competitions={competitions} status_submission={status_submission} show_reject_reason_submission={show_reject_reason_submission} />
                        )}
                    </div>

                    {tabs == "payment" && user_competition_registrations && ["Requested", "Rejected"].includes(user_competition_registrations.payment_status) && (
                        <div className="bg-white dark:bg-[#040529] p-4 shadow rounded-lg sm:p-8 flex flex-col gap-10 md:w-[30%] w-full">
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-[18px] leading-[16px] text-[#3A3A3A] dark:text-white">Bank Transfer</p>
                                {combinedPaymentMethodsWithAdditionalContent
                                    .filter((payment_method) => payment_method.payment_type == "Bank Transfer")
                                    .map((payment_method, index) => (
                                        <label
                                            key={index}
                                            className={`flex cursor-pointer flex-row gap-5 justify-evenly items-center border-2 px-3 py-5 rounded-[10px] w-full transition-all duration-200 hover:border-[#0f114c]/50 dark:hover:border-[#55b1d7]/50 ${paymentValue == payment_method.id ? 'border-[#0f114c] dark:border-2 dark:border-[#55b1d7]' : 'border-[#E6E6E6]'}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (paymentValue !== payment_method.id) {
                                                    setPendingPaymentValue(payment_method.id);
                                                    setShowModal(true);
                                                }
                                            }}
                                        >
                                            <Input
                                                type="radio"
                                                name="payment_method"
                                                value={payment_method.id}
                                                checked={paymentValue == payment_method.id}
                                                onChange={(e) => setPaymentValue(Number(e.target.value))}
                                                className="w-5 h-5 accent-[#0f114c] dark:accent-[#55b1d7]"
                                            />
                                            <img src={`${window.location.origin}/${payment_method.image}`} alt="" className={payment_method.className} />
                                        </label>
                                    ))}
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-[18px] leading-[16px] text-[#3A3A3A] dark:text-white">E-Wallet</p>
                                {combinedPaymentMethodsWithAdditionalContent
                                    .filter((payment_method) => payment_method.payment_type == "E-Wallet")
                                    .map((payment_method, index) => (
                                        <label
                                            key={index}
                                            className={`flex cursor-pointer flex-row gap-5 justify-evenly items-center border-2 px-3 py-5 rounded-[10px] w-full transition-all duration-200 hover:border-[#0f114c]/50 dark:hover:border-[#55b1d7]/50
    ${paymentValue == payment_method.id ? 'border-[#0f114c] dark:border-2 dark:border-[#55b1d7]' : 'border-[#E6E6E6]'}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (paymentValue !== payment_method.id) {
                                                    setPendingPaymentValue(payment_method.id);
                                                    setShowModal(true);
                                                }
                                            }}
                                        >
                                            <Input
                                                type="radio"
                                                name="payment_method"
                                                value={payment_method.id}
                                                checked={paymentValue == payment_method.id}
                                                onChange={(e) => setPaymentValue(Number(e.target.value))}
                                                className="w-5 h-5 accent-[#0f114c] dark:accent-[#55b1d7]"
                                            />
                                            <img src={`${window.location.origin}/${payment_method.image}`} alt="" className={payment_method.className} />
                                        </label>
                                    ))}

                                <Modal show={showModal} onClose={closeModal} className="px-5 py-5 dark:bg-[#040529]" maxWidth="md">
                                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Are you sure you want to change the payment method?</h2>
                                    <p className="mt-1 text-sm text-gray-600 mb-10">
                                        Once you confirm, you will not be able to revert this action.
                                    </p>
                                    <div className="mt-6 flex justify-end gap-5" >
                                        <Button onClick={closeModal} variant="red" type="button">Cancel</Button>

                                        <Button
                                            variant="blue"
                                            onClick={() => {
                                                setPrevPaymentValue(paymentValue); // simpan nilai sebelumnya
                                                setPaymentValue(pendingPaymentValue);
                                                setPendingPaymentValue(null);
                                                setShowModal(false);
                                            }}>
                                            Confirm
                                        </Button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default DashboardCompetitionDetail;
DashboardCompetitionDetail.layout = (page) => <DashboardLayout children={page} title="Competition Detail" header="Competition Detail" description="Manage your payment and submission in this page" />;
