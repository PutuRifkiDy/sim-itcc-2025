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
            className: "w-[122px] h-[86px]",
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

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);
    console.log("combinepayment", combinedPaymentMethodsWithAdditionalContent);
    return (
        <>
            <div className="py-5">
                {event_registrations != null ? (
                    <div className={`${tabs == "payment" ? "flex flex-row gap-5" : ""}`}>
                        <div className="bg-white p-4 shadow rounded-lg sm:p-8">
                            <div className="flex flex-row md:gap-10 gap-5">
                                <Button variant="none" asChild onClick={() => setTabs("about")}>
                                    <p className={`cursor-pointer ${tabs == "about" ? "text-[#0F114C] font-bold border-[#0F114C] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`}>About</p>
                                </Button>
                                <Button variant="none" asChild onClick={() => setTabs("payment")}>
                                    <p className={`cursor-pointer ${tabs == "payment" ? "text-[#0F114C] font-bold border-[#0F114C] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Payment</p>
                                </Button>
                                <Button variant="none" asChild onClick={() => setTabs("ticket")}>
                                    <p className={`cursor-pointer ${tabs == "ticket" ? "text-[#0F114C] font-bold border-[#0F114C] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Ticket</p>
                                </Button>
                            </div>

                            {tabs == "about" && <About className="w-full mt-5" event_registrations={event_registrations} />}
                            {tabs == 'payment' && <Payment className="w-full mt-5" event_registrations={event_registrations} payment_methods={payment_methods} payment_value={paymentValue} />}
                            {tabs == 'ticket' && <Ticket className="w-full mt-5" event_registrations={event_registrations} />}
                        </div>

                        {tabs == "payment" && event_registrations && ["Requested", "Rejected"].includes(event_registrations.payment_status) && (
                            <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex flex-col gap-10 w-[30%]">
                                <div className="flex flex-col gap-5">
                                    <p className="font-bold text-[18px] leading-[16px] text-[#3A3A3A]">Bank Transfer</p>
                                    {combinedPaymentMethodsWithAdditionalContent
                                        .filter((payment_method) => payment_method.payment_type == "Bank Transfer")
                                        .map((payment_method, index) => (
                                            <label
                                                key={index}
                                                className={`flex cursor-pointer flex-row gap-5 justify-evenly items-center border-2 px-3 py-5 rounded-[10px] w-full transition-all duration-200 hover:border-[#0f114c]/50 ${paymentValue == payment_method.id ? 'border-[#0f114c]' : 'border-[#E6E6E6]'}`}
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
                                                    className="w-5 h-5 accent-[#0f114c]"
                                                />
                                                <img src={`${window.location.origin}/${payment_method.image}`} alt="" className={payment_method.className} />
                                            </label>
                                        ))}
                                </div>
                                <div className="flex flex-col gap-5">
                                    <p className="font-bold text-[18px] leading-[16px] text-[#3A3A3A]">E-Wallet</p>
                                    {combinedPaymentMethodsWithAdditionalContent
                                        .filter((payment_method) => payment_method.payment_type == "E-Wallet")
                                        .map((payment_method, index) => (
                                            <label
                                                key={index}
                                                className={`flex cursor-pointer flex-row gap-5 justify-evenly items-center border-2 px-3 py-5 rounded-[10px] w-full transition-all duration-200 hover:border-[#0f114c]/50
    ${paymentValue == payment_method.id ? 'border-[#0f114c]' : 'border-[#E6E6E6]'}`}
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
                                                    className="w-5 h-5 accent-[#0f114c]"
                                                />
                                                <img src={`${window.location.origin}/${payment_method.image}`} alt="" className={payment_method.className} />
                                            </label>
                                        ))}

                                    <Modal show={showModal} onClose={closeModal} className="px-5 py-5" maxWidth="md">
                                        <h2 className="text-lg font-medium text-gray-900">Are you sure you want to change the payment method?</h2>
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
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 flex flex-col gap-2 justify-center items-center">
                        {/* {`${window.location.origin} */}
                        <img src={`${window.location.origin}/assets/images/image_for_dashboard_semnas.png`} alt="waw" className="w-[344px] h-[312px]" />
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="font-semibold text-[22px] text-[#5E5E5E]">
                                Not Registered for Seminar National
                            </p>
                            <p className="font-regular text-[16px] text-[#5E5E5E]">
                                Get your ticket now to witness the awesomeness of our national seminar!
                            </p>
                        </div>
                        <Button asChild variant="blue" className="px-10 py-3">
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
DashboardSemnas.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" description="Manage your payment ad get your ticket in this page" />;
