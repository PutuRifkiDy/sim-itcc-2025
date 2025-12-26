import { Button } from '@/Components/ui/button';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { ClockIcon } from '@heroicons/react/24/solid';

function Ticket({ event_registrations, className }) {
    console.log(event_registrations.ticket_path);
    return (
        <>
            <section className={className}>
                {event_registrations.payment_status == 'Requested' && (
                    <div className="mb-5 flex w-full flex-row items-center gap-2 border-l-4 border-l-[#0F114C] bg-[#0F114C]/20 px-4 py-2 dark:border-l-[#55b1d7] dark:bg-[#55b1d7]/20">
                        <ClockIcon className="h-5 w-5 text-[#0F114C] dark:text-white" />
                        <p className="text-[12px] font-medium leading-[16px] text-[#0F114C] dark:text-white">
                            Complete your payment before the deadline
                        </p>
                    </div>
                )}
                {event_registrations.payment_status == 'Pending' && (
                    <div className="mb-5 flex w-full flex-row items-center gap-2 border-l-4 border-l-[#FFC300] bg-[#FFC300]/20 px-4 py-2">
                        <ClockIcon className="h-5 w-5 text-[#FFC300]" />
                        <p className="text-[12px] font-medium leading-[16px] text-[#FFC300]">
                            Verification in progress
                        </p>
                    </div>
                )}
                {event_registrations.payment_status == 'Verified' && (
                    <div className="mb-5 flex w-full flex-row items-center gap-2 border-l-4 border-l-[#00D238] bg-[#00D238]/20 px-4 py-2">
                        <ClockIcon className="h-5 w-5 text-[#00D238]" />
                        <p className="text-[12px] font-medium leading-[16px] text-[#00D238]">
                            Payment has been verified
                        </p>
                    </div>
                )}
                {event_registrations.payment_status == 'Rejected' && (
                    <div className="mb-5 flex w-full flex-row items-center gap-2 border-l-4 border-l-[#E82323] bg-[#E82323]/20 px-4 py-2">
                        <ClockIcon className="h-5 w-5 text-[#E82323]" />
                        <p className="text-[12px] font-medium leading-[16px] text-[#E82323]">
                            {event_registrations.reject_reason}
                        </p>
                    </div>
                )}

                {['Pending', 'Requested', 'Rejected'].includes(event_registrations.payment_status) ? (
                    <div className="mt-10 flex flex-col items-center justify-center gap-2">
                        <img
                            src={`${window.location.origin}/assets/images/image_for_ticket_no_available.png`}
                            className="h-[246px] w-[246px]"
                            alt=""
                        />
                        <p className="text-[26px] font-bold text-[#5E5E5E] dark:text-white">No Ticket Available</p>
                    </div>
                ) : (
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <img
                            src={`${event_registrations.ticket_path}`}
                            alt="Your Ticket"
                            className="w-full rounded-lg shadow-md"
                        />
                        <Button variant="blue" asChild>
                            <a
                                href={`${event_registrations.ticket_path}`}
                                download
                            >
                                Download Ticket
                            </a>
                        </Button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Ticket;
Ticket.layout = (page) => <DashboardLayout children={page} title="Semnas" header="Seminar Nasional" />;
