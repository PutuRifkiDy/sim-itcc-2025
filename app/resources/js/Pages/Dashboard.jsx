import { Card } from '@/Components/ui/card';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const competitions = usePage().props.competitions;
    return (
        <div className="py-12">
            <div className="mx-auto w-full flex flex-col gap-8">
                <div className="flex flex-row items-center gap-7">
                    <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="md:w-[46px] w-[50px] h-auto md:h-auto" alt="" />
                    <div className='border-2 border-gray-300 dark:border-gray-100 dark:border-[1px] px-5 py-3 w-full rounded-[5px] bg-white dark:bg-[#040529]'>
                        <p className='text-[17px]'>
                            Welcome
                            {" "}
                            <span className='text-[#000000] dark:text-white font-bold'>Future Crafters!</span>
                            {" "}
                            Let me introduce myself, my name is
                            {" "}
                            <span className='text-[#0F114C] dark:text-[#47B5FF] font-bold'>Transformer</span>
                            {" "}
                            who will accompany you here!
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-7">
                    <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="md:w-[46px] w-[50px] h-auto md:h-auto" alt="" />
                    <div className='border-2 border-gray-300 dark:border-gray-100 dark:border-[1px] px-5 py-3 w-full rounded-[5px] bg-white dark:bg-[#040529]'>
                        <p className='text-[17px]'>
                            First of all, let's fill in your personal data
                            {" "}
                            <Link
                                href={route('profile.edit')}
                            >
                                <span className='text-[#0F114C] dark:text-[#47B5FF] font-bold underline cursor-pointer decoration-1'>here</span>
                            </Link>
                            {" "}
                            so we can get to know each other better!

                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-7">
                    <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="md:w-[46px] w-[50px] h-auto md:h-auto" alt="" />
                    <div className='border-2 border-gray-300 dark:border-gray-100 dark:border-[1px] px-5 py-3 w-full rounded-[5px] bg-white dark:bg-[#040529]'>
                        <p className='text-[17px]'>
                            Next, if you are interested in registering for the
                            {" "}
                            <span className='text-[#495190] font-bold'>Competition</span>
                            {" "}
                            ,
                            you can see the types of competitions and their explanations
                            {" "}
                            <Link
                                href={route('welcome')}
                            >
                                <span className='text-[#0F114C] dark:text-[#47B5FF] font-bold underline cursor-pointer decoration-1'>here</span>
                            </Link>
                            {" "}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-7">
                    <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="md:w-[46px] w-[50px] h-auto md:h-auto" alt="" />
                    <div className='border-2 border-gray-300 dark:border-gray-100 dark:border-[1px] px-5 py-3 w-full rounded-[5px] bg-white dark:bg-[#040529]'>
                        <p className='text-[17px]'>
                            Then, if you want to join our
                            {" "}
                            <span className='text-[#495190] font-bold'>National Seminar</span>
                            {" "}
                            ,
                            which of course will be filled with cool speakers and topics, you can register
                            {" "}
                            <Link
                                href={route('event.front.show', ['seminar-nasional-teknologi-informasi-of'])}
                            >
                                <span className='text-[#0F114C] dark:text-[#47B5FF] font-bold underline cursor-pointer decoration-1'>here</span>
                            </Link>
                            {" "}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-7">
                    <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="md:w-[46px] w-[50px] h-auto md:h-auto" alt="" />
                    <div className='border-2 border-gray-300 dark:border-gray-100 dark:border-[1px] px-5 py-3 w-full rounded-[5px] bg-white dark:bg-[#040529]'>
                        <p className='text-[17px]'>
                            And if you want to buy exclusive merchandise, you can check it out
                            {" "}
                            <Link
                                href={route('merchandise.front.show')}
                            >
                                <span className='text-[#0F114C] dark:text-[#47B5FF] font-bold underline cursor-pointer decoration-1'>here</span>
                            </Link>
                            {" "}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-7">
                    <img src={`${window.location.origin}/assets/images/landing/icon-maskot-itcc.png`} className="md:w-[46px] w-[50px] h-auto md:h-auto" alt="" />
                    <div className='border-2 border-gray-300 dark:border-gray-100 dark:border-[1px] px-5 py-3 w-full rounded-[5px] bg-white dark:bg-[#040529]'>
                        <p className='text-[17px]'>
                            Maybe that's all the information I can convey to you
                            {" "}
                            <span className='text-[#000000] dark:text-white font-bold'>Future Crafters!</span>
                            {" "}
                            , Good Luck and Thank you!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

Dashboard.layout = (page) => <DashboardLayout children={page} title="Dashboard" />;
