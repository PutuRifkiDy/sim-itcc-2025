import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, usePage } from "@inertiajs/react";
import About from "./Partials/About";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import Payment from "./Partials/Payment";
import Ticket from "./Partials/Ticket";
import { toast } from "sonner";

function DashboardSemnas() {
    const event_registrations = usePage().props.event_registrations;
    const payment_methods = usePage().props.payment_methods;
    const [tabs, setTabs] = useState("about");
    // const { flash_message } = usePage().props;

    // useEffect(() => {
    //     if (flash_message?.message) {
    //         toast[flash_message.type || 'success'](flash_message.message);
    //     }
    // }, [flash_message]);
    console.log(event_registrations);
    return (
        <>
            <div className="py-5">
                {event_registrations != null ? (
                    <div className="bg-white p-4 shadow rounded-lg sm:p-8">
                        <div className="flex flex-row md:gap-10 gap-5">
                            <Button variant="none" asChild onClick={() => setTabs("about")}>
                                <p className={`cursor-pointer ${tabs == "about" ? "text-[#4880FF] font-bold border-[#4880FF] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`}>About</p>
                            </Button>
                            <Button variant="none" asChild onClick={() => setTabs("payment")}>
                                <p className={`cursor-pointer ${tabs == "payment" ? "text-[#4880FF] font-bold border-[#4880FF] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Payment</p>
                            </Button>
                            <Button variant="none" asChild onClick={() => setTabs("ticket")}>
                                <p className={`cursor-pointer ${tabs == "ticket" ? "text-[#4880FF] font-bold border-[#4880FF] border-b-[4px] rounded-[2px] transition-all ease-in-out duration-400 text-[16px]" : "text-[#5E5E5E] text-[16px]"}`} >Ticket</p>
                            </Button>
                        </div>

                        {tabs == "about" && <About className="w-full mt-5" event_registrations={event_registrations} />}
                        {tabs == 'payment' && <Payment className="w-full mt-5" event_registrations={event_registrations} payment_methods={payment_methods} />}
                        {tabs == 'ticket' && <Ticket className="w-full mt-5" event_registrations={event_registrations} />}
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
DashboardSemnas.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" />;
