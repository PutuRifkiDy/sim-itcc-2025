import DashboardLayout from "@/Layouts/DashboardLayout";
import { ClockIcon } from "@heroicons/react/24/solid";

function Ticket({ event_registrations, className }) {
    return (
        <>
            <section className={className}>
                {event_registrations.payment_status == 'Requested' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-2 border-l-[#4880FF] bg-[#4880FF]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#4880FF]" />
                        <p className='text-[#4880FF] font-medium text-[12px] leading-[16px]'>Complete your payment before the deadline</p>
                    </div>
                )}
                {event_registrations.payment_status == 'Pending' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-2 border-l-[#FFC300] bg-[#FFC300]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                        <p className='text-[#FFC300] font-medium text-[12px] leading-[16px]'>Verification in progress</p>
                    </div>
                )}
                {event_registrations.payment_status == 'Verified' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-2 border-l-[#00D238] bg-[#00D238]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#00D238]" />
                        <p className='text-[#00D238] font-medium text-[12px] leading-[16px]'>Payment has been verified</p>
                    </div>
                )}
                {event_registrations.payment_status == 'Rejected' && (
                    <div className="flex flex-row gap-2 px-4 py-2 border-2 border-l-[#E82323] bg-[#E82323]/20 w-full items-center mb-5">
                        <ClockIcon className="h-5 w-5 text-[#E82323]" />
                        <p className='text-[#E82323] font-medium text-[12px] leading-[16px]'>{event_registrations.reject_reason}</p>
                    </div>
                )}


                {event_registrations.payment_status == 'Requested' || event_registrations.payment_status == 'Pending' || event_registrations.payment_status == 'Rejected' ? (
                    <div className="flex flex-col gap-2 items-center justify-center mt-10">
                        <img src={`${window.location.origin}/assets/images/image_for_ticket_no_available.png`} className="w-[246px] h-[246px]" alt="" />
                        <p className="font-bold text-[26px] text-[#5E5E5E]">No Ticket Available</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 items-center justify-center mt-10">
                        <img src={`${window.location.origin}/assets/images/image_for_ticket_no_available.png`} className="w-[246px] h-[246px]" alt="" />
                    </div>
                )}
            </section>
        </>
    );
}

export default Ticket;
Ticket.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" />
