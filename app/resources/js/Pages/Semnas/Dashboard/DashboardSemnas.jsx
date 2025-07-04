import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, usePage } from "@inertiajs/react";
import About from "./Partials/About";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import Payment from "./Partials/Payment";
import Ticket from "./Partials/Ticket";
import { toast } from "sonner";
import { Input } from "@/Components/ui/input";
import Modal from "@/Components/Modal";

function DashboardSemnas() {
    const event_registrations = usePage().props.event_registrations;
    const payment_methods = usePage().props.payment_methods;
    const [tabs, setTabs] = useState("about");
    const { flash_message } = usePage().props;

    const [paymentValue, setPaymentValue] = useState(6);
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
        {
            image: "assets/images/dashboard/SEABANK_logo.png",
            className: "w-[130px] h-[40px]",
        },
        {
            image: "assets/images/dashboard/SEABANK_logo.png",
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


    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);
    return (
        <>
            <div className="py-5">
                {event_registrations != null ? (
                    <div className={`${tabs == "payment" ? "flex md:flex-row flex-col-reverse gap-5" : ""}`}>
                        <div className={`bg-white p-4 shadow rounded-lg sm:p-8 dark:bg-[#040529] ${tabs == "payment" && ["Requested", "Rejected"].includes(event_registrations.payment_status) && event_registrations ? "md:w-[70%] w-full" : "w-full"}`}>
                            <div className="flex flex-row md:gap-10 gap-5">
                                <Button variant="none" asChild onClick={() => setTabs("about")}>
                                    <p className={`cursor-pointer ${tabs == "about" ? "text-[#0F114C] font-bold border-[#264A9D]  border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px] dark:text-[#55b1d7] dark:border-[#55b1d7]" : "text-[#5E5E5E] text-[16px] dark:text-white"}`}>About</p>
                                </Button>
                                <Button variant="none" asChild onClick={() => setTabs("payment")}>
                                    <p className={`cursor-pointer ${tabs == "payment" ? "text-[#0F114C] font-bold border-[#264A9D] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px] dark:text-[#55b1d7] dark:border-[#55b1d7]" : "text-[#5E5E5E] text-[16px] dark:text-white"}`} >Payment</p>
                                </Button>
                                <Button variant="none" asChild onClick={() => setTabs("ticket")}>
                                    <p className={`cursor-pointer ${tabs == "ticket" ? "text-[#0F114C] font-bold border-[#264A9D] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px] dark:text-[#55b1d7] dark:border-[#55b1d7]" : "text-[#5E5E5E] text-[16px] dark:text-white"}`} >Ticket</p>
                                </Button>
                            </div>

                            {tabs == "about" && <About className="w-full mt-5" event_registrations={event_registrations} />}
                            {tabs == 'payment' && <Payment className="w-full mt-5" event_registrations={event_registrations} payment_methods={payment_methods} payment_value={paymentValue} />}
                            {tabs == 'ticket' && <Ticket className="w-full mt-5" event_registrations={event_registrations} />}
                        </div>

                        {tabs == "payment" && event_registrations && ["Requested", "Rejected"].includes(event_registrations.payment_status) && (
                            <div className="bg-white dark:bg-[#040529] p-4 shadow rounded-lg sm:p-8 flex flex-col gap-10 md:w-[30%] w-full">
                                <div className="flex flex-col gap-5">
                                    <p className="font-bold text-[18px] leading-[16px] text-[#3A3A3A] dark:text-white">Bank Transfer</p>
                                    {combinedPaymentMethodsWithAdditionalContent
                                        .filter((payment_method) => payment_method.event_type == "semnas" && payment_method.payment_type == "Bank Transfer")
                                        .map((payment_method, index) => (
                                            <label
                                                key={index}
                                                className={`flex cursor-pointer flex-row gap-5 justify-evenly items-center border-2 px-3 py-5 rounded-[10px] w-full transition-all duration-200 dark:hover:border-[#55b1d7]/50 hover:border-[#0f114c]/50 ${paymentValue == payment_method.id ? 'border-[#0f114c] dark:border-2 dark:border-[#55b1d7]' : 'border-[#E6E6E6]'}`}
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
                                        .filter((payment_method) =>
                                            payment_method.payment_type == "E-Wallet" && payment_method.event_type == "semnas")
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
                                                    setPrevPaymentValue(paymentValue);
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

                ) : (
                    <div className="bg-white dark:bg-[#040529] p-4 py-8 shadow rounded-lg sm:p-8 flex flex-col gap-2 justify-center items-center">
                        {/* {`${window.location.origin} */}
                        <img src={`${window.location.origin}/assets/images/image_for_dashboard_semnas.png`} alt="waw" className="w-[344px] h-[312px]" />
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="font-semibold text-[22px] text-[#5E5E5E] dark:text-white text-center">
                                Not Registered for Seminar National
                            </p>
                            <p className="font-regular text-[16px] text-[#5E5E5E] dark:text-gray-400 text-center">
                                Get your ticket now to witness the awesomeness of our national seminar!
                            </p>
                        </div>
                        <Button asChild variant="blue" className="px-10 py-3 dark:bg-[#2b48a6]">
                            <Link
                                href={route('register.semnas.show')}
                            >
                                Register
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}

export default DashboardSemnas;
DashboardSemnas.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" description="Manage your payment and get your ticket in this page" />;
