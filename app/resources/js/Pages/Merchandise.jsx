import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCrossIcon } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Link, usePage } from "@inertiajs/react";
import { motion } from 'framer-motion';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Merchandise({ ...props }) {
    const merchandise = usePage().props.merchandise;
    console.log('cek isi var', merchandise);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic',
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);
    return (
        <>
            <img
                src="assets/images/bg_ornament.png"
                alt="banner"
                className="absolute z-0 w-auto object-center rounded-none h-screen object-cover hidden md:block top-0 opacity-60 dark:opacity-0"
            />
            <img
                src="assets/images/bg_circle_ornament.png"
                alt="banner"
                className="absolute z-0 rounded-none w-screen h-[800px] object-cover dark:hidden md:block top-0"
            />
            <img
                src="assets/images/bg_circle_ornamen_white.png"
                alt="banner"
                className="absolute z-0 rounded-none w-screen h-[800px] object-cover hidden md:block top-0 opacity-60"
            />
            <div className="isolate min-h-screen md:mt-24">
                <div className="relative md:px-24 px-10">
                    <div
                        className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0F114C]/50 to-[#0F114C]/20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>

                    <div className="w-24 h-24 md:mt-0 mt-12 pointer-events-none">
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-full h-full animate-pulse"
                        >
                            <SideLeftCrookedCrossIcon />
                        </motion.div>
                    </div>

                    <div className="absolute top-12 right-48 md:block hidden text-[#0F114C]">
                        <SideRightCrossIcon />

                    </div>

                    <div className="absolute md:bottom-0 -bottom-12 left-24">
                        <SideLeftArrowLeftIcon />
                    </div>

                    <div className="flex md:flex-row flex-col justify-around">
                        <img src="assets/images/merch_bundle.png" alt="" className="md:w-[446px] md:h-[468px] w-full h-auto object-contain " data-aos="fade-up" data-aos-delay="100" />
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[#0F114C] dark:text-[#0886BB] leading-[1.2em] text-[50px] tracking-[0.016em] uppercase font-bold text-center" data-aos="fade-up" data-aos-delay="100">
                                MERCHANDISE bundle
                            </p>
                            <p className="text-[18px] tracking-[0.02em] leading-[1.8em] md:w-[380px] w-full text-center mt-5 text-[#000000] font-light dark:text-white" data-aos="fade-up" data-aos-delay="200">
                                Get your Exclusive Merchandise Bundle at a special price — limited time only!
                            </p>
                            <p className="text-[23px] font-medium text-center mt-10 text-[#0886BB] line-through decoration-2" data-aos="fade-up" data-aos-delay="300">
                                Rp. 199.000
                            </p>
                            <p className="text-[29px] font-medium text-center text-[#495190]" data-aos="fade-up" data-aos-delay="300">
                                Only Rp. 100.000
                            </p>
                            <Button variant="blue" asChild size="lg" className="mt-5" data-aos="fade-up" data-aos-delay="300">
                                <a href="#">Buy Bundle</a>
                            </Button>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0F114C]/50 to-[#0F114C]/20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
                <div className="pt-36" id="card-merch">
                    {merchandise.map((merchandise, idx) => (
                        <div key={idx} className="" >
                            <p>{merchandise.name}</p>
                            <p>{merchandise.price}</p>
                            <p>{merchandise.description}</p>
                            <p>{merchandise.batch_name}</p>
                            <p>{merchandise.start_date}</p>
                            <p>{merchandise.end_date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Merchandise;
Merchandise.layout = (page) => <GuestLayout children={page} title="Merchandise" />;


// import { Button } from '@/Components/ui/button';
// import { ArrowDownIcon } from '@heroicons/react/24/solid';
// import { Link, usePage } from '@inertiajs/react';

// export default function Merch() {
//     const auth = usePage().props.auth.user;
//     return (
//         <div>
//             <header className="absolute inset-x-0 top-0 z-50">
//                 <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//                     <div className="flex lg:flex-1">
//                         <Link href="/" className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter">
//                             Plannify<span className="text-red-500">.</span>
//                         </Link>
//                     </div>
//                     <div className="flex lg:hidden">
//                         {auth ? (
//                             <Link href={route('dashboard')} className="font-semibold leading-relaxed tracking-tighter text-foreground">
//                                 Dashboard <span aria-hidden="true">&rarr;</span>
//                             </Link>
//                         ): (
//                                 <Link href={route('login')} className="font-semibold leading-relaxed tracking-tighter text-foreground">
//                                     Log in <span aria-hidden="true">&rarr;</span>
//                                 </Link>
//                         )}

//                     </div>

//                     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                         {auth ? (
//                             <Link href={route('dashboard')} className="text-base font-semibold leading-relaxed tracking-tighter text-foreground">
//                                 Dashboard <span aria-hidden="true">&rarr;</span>
//                             </Link>
//                         ) : (
//                                 <Link href={route('login')} className="text-base font-semibold leading-relaxed tracking-tighter text-foreground">
//                                 Log in <span aria-hidden="true">&rarr;</span>
//                             </Link>
//                         )}

//                     </div>
//                 </nav>
//             </header>

//             <main className="isolate">
//                 <div className="relative pt-14">
//                     <div
//                         className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
//                         aria-hidden="true"
//                     >
//                         <div
//                             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-red-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//                             style={{
//                                 clipPath:
//                                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                             }}
//                         />
//                     </div>
//                     <div className="py-24 sm:py-32">
//                         <div className="px-6 mx-auto max-w-7xl lg:px-8">
//                             <div className="max-w-2xl mx-auto text-center">
//                                 <h1 className="text-4xl font-bold leading-relaxed tracking-tight text-foreground sm:text-6xl">
//                                     Get Merchandise in your hands
//                                 </h1>
//                                 <p className="mt-6 text-lg leading-8 text-muted-foreground">
//                                     Riftasks is a simple and easy to use task manager that helps you stay on top of your
//                                     to-dos.
//                                 </p>
//                                 <div className="flex items-center justify-center mt-10 gap-x-6">
//                                     <Button variant="red" asChild>
//                                         <Link href={route('login')}>Get started</Link>
//                                     </Button>
//                                     <Button variant="ghost" asChild>
//                                         <Link href={route('login')}>
//                                             Learn more <span aria-hidden="true">→</span>
//                                         </Link>
//                                     </Button>
//                                 </div>
//                                 <div className="flex justify-center items-center md:mt-0 pt-12" data-aos="fade-up" data-aos-delay="500">
//                                     <a href="#competition" className="flex flex-row gap-2 items-center text-gray-600">
//                                         Scroll down to Explore more
//                                         <ArrowDownIcon className="w-6 h-6 animate-bounce" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="flow-root mt-16 sm:mt-24">
//                                 <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
//                                     <img
//                                         src="/assets/images/app.png"
//                                         alt="App screenshot"
//                                         width={2432}
//                                         height={1442}
//                                         className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//                         aria-hidden="true"
//                     >
//                         <div
//                             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-400 to-red-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//                             style={{
//                                 clipPath:
//                                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                             }}
//                         />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }
