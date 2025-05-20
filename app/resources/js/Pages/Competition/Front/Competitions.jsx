import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightBlueDotIcon, SideRightCircleIcon, SideRightCrossIcon, SideRightDotIcon, SideRightSquareIndexOne, SideRightSquareIndexThree, SideRightSquareIndexTwo } from "@/Components/IconGuest";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { flashMessage } from "@/lib/utils";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Timeline from "./Partials/Timeline";
import Faq from "./Partials/Faq";

function Competitions({ ...props }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const competitions = usePage().props.competition;
    const current_batch = usePage().props.current_batch;
    const { flash_message } = usePage().props;
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        slug: competitions.slug ?? '',
        _method: 'POST',
    });

    console.log('cek isi var competition', competitions);


    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('register.competition.store', data.slug), {

            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            {/* start home */}
            <section className="px-12 md:px-24 md:pb-24 mb-18 md:mt-44 mt-24">
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6">
                    <div className="w-full flex flex-col">
                        <div className="flex flex-col items-start relative">
                            <div className="flex items-center gap-2">
                                <div className="w-[30px] h-[30px] flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.0451 22.9569C6.00042 21.9122 5.17174 20.672 4.60637 19.3071C4.04099 17.9422 3.75 16.4793 3.75 15.0019C3.75 13.5245 4.04099 12.0616 4.60637 10.6967C5.17174 9.33173 6.00042 8.09154 7.0451 7.04688M22.9551 7.04688C23.9998 8.09154 24.8285 9.33173 25.3938 10.6967C25.9592 12.0616 26.2502 13.5245 26.2502 15.0019C26.2502 16.4793 25.9592 17.9422 25.3938 19.3071C24.8285 20.672 23.9998 21.9122 22.9551 22.9569M10.5801 19.4206C9.4084 18.2486 8.75018 16.6592 8.75018 15.0019C8.75018 13.3446 9.4084 11.7552 10.5801 10.5831M19.4201 10.5831C20.5918 11.7552 21.25 13.3446 21.25 15.0019C21.25 16.6592 20.5918 18.2486 19.4201 19.4206M16.2501 15.0019C16.2501 15.3334 16.1184 15.6513 15.884 15.8858C15.6496 16.1202 15.3316 16.2519 15.0001 16.2519C14.6686 16.2519 14.3506 16.1202 14.1162 15.8858C13.8818 15.6513 13.7501 15.3334 13.7501 15.0019C13.7501 14.6704 13.8818 14.3524 14.1162 14.118C14.3506 13.8836 14.6686 13.7519 15.0001 13.7519C15.3316 13.7519 15.6496 13.8836 15.884 14.118C16.1184 14.3524 16.2501 14.6704 16.2501 15.0019Z"
                                            stroke="black"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-black text-sm font-normal tracking-[0.48px] font-[Rubik]">
                                    ONLINE
                                </span>
                                <div className="absolute right-0 top-1 -translate-y-1/2">
                                    <SideLeftCrookedCrossIcon />
                                </div>
                            </div>

                            <div className="h-2" />

                            <span className="text-[#0F114C] text-2xl md:text-[36px] font-bold leading-[120%] tracking-[3px] md:tracking-[5.76px] uppercase font-[Rubik]">
                                PEMOGRAMAN
                            </span>
                            <div className="h-4" />

                            <div
                                className="w-full max-w-[350px] h-auto md:h-[74px] py-3 px-4 rounded-[10px] flex justify-between items-center"
                                style={{
                                    background: "linear-gradient(90deg, #0F114C 0%, #00658F 100%)",
                                }}
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-white font-[Rubik] uppercase text-xs font-bold tracking-widest">
                                        CLOSING GELOMBANG 1
                                    </span>
                                    <span className="text-[#E6E6E6] text-[10px] font-bold tracking-wide uppercase font-[Rubik]">
                                        01 MEI - 02 JUNI
                                    </span>
                                </div>

                                <div className="flex items-end gap-2">
                                    <span className="text-white text-3xl font-extrabold font-[Roboto]">
                                        10
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-white text-sm font-semibold font-[Roboto]">
                                            Days
                                        </span>
                                        <span className="text-white text-sm font-semibold font-[Roboto]">
                                            Left
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-6" />

                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">

                                <Button variant="blue" size="lg">
                                    Register
                                </Button>

                                <div className="flex items-center gap-2">
                                    <button
                                        className="flex justify-center items-center cursor-pointer"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "500px",
                                            background: "#00658F",
                                            boxShadow: "0px 10px 15px 0px #C8DBFF",
                                            flexShrink: 0,
                                            border: "none",
                                        }}
                                        onClick={openModal}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="white"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6 4L15 10L6 16V4Z" />
                                        </svg>
                                    </button>
                                    <span className="text-[#0F114C] text-sm font-semibold tracking-wide flex-grow flex-shrink-0">
                                        How to Join
                                    </span>
                                </div>
                                {isModalOpen && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                        <div className="bg-white rounded-lg w-[90%] md:w-[700px] h-[80%] md:h-[450px] flex-shrink-0 relative shadow-xl overflow-hidden">
                                            {/* Close Button */}
                                            <button
                                                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300 z-50"
                                                onClick={closeModal}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4 4L16 16M16 4L4 16"
                                                        stroke="#000"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>

                                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold uppercase tracking-wider z-40">
                                                How to Join
                                            </div>

                                            {/* YouTube Video Embed */}
                                            <div className="mt-16 h-[calc(100%-60px)]">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/xvFZjo5PgG0?si=Uq1_-POS0iBEixB2"
                                                    title="How to Join Video"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="rounded-lg shadow-lg"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-2 mt-4">
                                <a
                                    href="/guidebook.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    Guidebook
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.33325 3.33334H4.99992C4.55789 3.33334 4.13397 3.50893 3.82141 3.82149C3.50885 4.13405 3.33325 4.55798 3.33325 5V15C3.33325 15.442 3.50885 15.866 3.82141 16.1785C4.13397 16.4911 4.55789 16.6667 4.99992 16.6667H14.9999C15.4419 16.6667 15.8659 16.4911 16.1784 16.1785C16.491 15.866 16.6666 15.442 16.6666 15V11.6667M9.99992 10L16.6666 3.33334M16.6666 3.33334V7.5M16.6666 3.33334H12.4999"
                                            stroke="#0F114C"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <div className="relative flex md:flex-row flex-col items-center gap-2 md:items-start">
                                <div className="hidden md:inline-flex md:absolute top-40 left-160 items-center gap-3">
                                    <SideLeftArrowLeftIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:block hidden relative">
                        <div className="flex flex-row justify-end">
                            <SideRightCrossIcon />
                        </div>
                        <div className="absolute top-0 right-32 z-30">
                            <SideRightSquareIndexThree />
                        </div>
                        <div className="absolute top-36 right-60 z-20">
                            <SideRightSquareIndexTwo />
                        </div>
                        <div className="absolute top-48 right-16 z-10">
                            <SideRightSquareIndexOne />
                        </div>
                        <div className="absolute top-40 right-56 z-40">
                            <SideRightDotIcon />
                        </div>
                        <div className="absolute top-12 right-0 z-40">
                            <img
                                src="/image/hero/right-side-index-3.png"
                                className="w-[200px] md:w-[254px] h-auto"
                                alt=""
                            />
                        </div>
                        <div className="absolute top-12 right-64 z-40">
                            <img
                                src="/image/hero/right-side-index-2.png"
                                className="w-[180px] md:w-[235px] h-auto"
                                alt=""
                            />
                        </div>
                        <div className="absolute top-48 right-64 z-40">
                            <img
                                src="/image/hero/right-side-index-1.png"
                                className="w-[140px] md:w-[169px] h-auto"
                                alt=""
                            />
                        </div>
                        <div className="absolute top-96 right-16 z-40">
                            <SideRightCircleIcon />
                        </div>
                    </div>
                </div>
            </section>
            {/* end home */}

            {/* start about */}
            <section className="w-full min-h-[500px] relative bg-gradient-to-r from-[#0F114C] dark:from-[#100961] to-[#00658F] overflow-hidden md:mt-48 mt-24">
                <img className="md:w-80 w-40 top-0 left-0 absolute" src={`${window.location.origin}/assets/images/about/leftEdge.png`} />
                <div className="absolute top-0 right-0 flex flex-col items-end w-full">
                    <div className="md:w-96 w-20 h-[2px] bg-white mt-2"></div>
                    <div className="md:w-96 w-20 h-[2px] bg-[#00658C]"></div>
                    <div className="md:w-48 w-10 h-[2px] mt-4 bg-[#00658C]"></div>
                    <div className="md:w-48 w-10 h-[6px] bg-white"></div>
                </div>
                <div className="md:flex-row flex-col flex items-center md:justify-evenly justify-center container mx-auto px-4 md:pt-32 pt-10 gap-8 pb-24">
                    <img className="md:w-96 w-60" src={`${window.location.origin}/assets/images/about/ITCCLogo.png`} alt="ITCC 2025 Logo" data-aos="fade-up" />
                    <div className="md:w-[600px] relative">
                        <h2 className="text-[#A5CBD0] text-xl md:text-2xl font-rubik font-bold tracking-[5px] uppercase" data-aos="fade-up" data-aos-delay="100">What is ITCC?</h2>
                        <img className="absolute top-0 right-0 md:w-10 w-6" src={`${window.location.origin}/assets/images/about/bluePlus.png`} alt="" data-aos="fade-up" data-aos-delay="100" />
                        <p className="font-rubik text-white font-light my-6 md:text-lg text-base line-clamp-5" data-aos="fade-up" data-aos-delay="200">
                            {competitions.description}
                        </p>
                        <div className="flex flex-row gap-x-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                        </div>
                    </div>
                </div>
                <img className="lg:w-52 xl:w-60 w-40 bottom-0 right-0 absolute" src={`${window.location.origin}/assets/images/about/rightEdge.png`} />
                <img className="bottom-0 left-0 md:w-80 w-40 absolute md:translate-y-10 translate-y-5 z-10" src={`${window.location.origin}/assets/images/about/leftLine.png`} alt="" />
                <img className="bottom-0 left-0 md:w-20 w-10 absolute" src={`${window.location.origin}/image/about/leftDots.png`} alt="" />
                <div className="md:absolute bottom-0 left-5 z-20 text-white" data-aos="fade-up" data-aos-delay="400">
                    <SideRightBlueDotIcon />
                </div>
            </section>
            {/* end about */}

            {/* start prize */}
            <section className="flex flex-col items-center py-20 mb-10 relative mt-4 min-h-[500px]">
                <div className="absolute md:left-12 left-[-70px] top-32 rotate-90 md:w-0 w-1/2">
                    <SideRightCrossIcon />
                </div>
                <h2 className="uppercase lg:text-4xl text-2xl font-bold text-[#0F114C] lg:tracking-[10px] tracking-[5px]">
                    Prize Category
                </h2>
                <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base lg:text-lg font-normal tracking-[0.02em] text-center mx-4 lg:w-2/5 w-3/4 mb-10">
                    We&apos;ve prepared exciting rewards for the best! Explore the prize categories and see what&apos;s waiting for the winners of each competition track.
                </p>
                <div className="absolute md:right-20 right-10 top-4 md:top-44 -translate-y-1/2">
                    <SideLeftCrookedCrossIcon />
                </div>
                <div className="h-full w-full px-4 flex items-end pb-10">
                    <div className="flex justify-center gap-6 md:gap-14 w-full">
                        <div className="flex flex-col items-center mt-auto">
                            <img src={`${window.location.origin}/assets/images/competition/silverTrophy.png`} alt="Second Place Trophy" className="md:w-32 md:h-32 w-24 h-24 mb-4" />
                            <p className="md:text-2xl text-base font-bold mb-2 tracki-widest">Rp 1.000.000</p>
                            <div className="md:w-40 w-24 h-[250px] md:h-[350px] bg-gradient-to-b from-indigo-900 to-cyan-800 rounded-t-lg relative">
                                <div className="bg-white text-[#0F114C] px-2 md:px-4 py-1 rounded-full md:text-sm text-xs font-medium w-fit mx-auto mt-4">
                                    Juara II
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-auto">
                            <img src={`${window.location.origin}/assets/images/competition/goldTrophy.png`} alt="First Place Trophy" className="md:w-32 md:h-32 w-24 h-24 mb-4" />
                            <p className="md:text-2xl text-base font-bold mb-2">Rp 2.000.000</p>
                            <div className="md:w-40 w-24 h-[350px] md:h-[500px] bg-gradient-to-b from-indigo-900 to-cyan-800 rounded-t-lg relative">
                                <div className="bg-[#FFF3CC] text-[#FFC300] px-2 md:px-4 py-1 rounded-full md:text-sm text-xs font-medium w-fit mx-auto mt-4">
                                    Juara I
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-auto">
                            <img src={`${window.location.origin}/assets/images/competition/bronzeTrophy.png`} alt="Third Place Trophy" className="md:w-32 md:h-32 w-24 h-24 mb-4" />
                            <p className="md:text-2xl text-base font-bold mb-2">Rp 900.000</p>
                            <div className="md:w-40 w-24 h-[200px] md:h-[250px] bg-gradient-to-b from-indigo-900 to-cyan-800 rounded-t-lg relative">
                                <div className="bg-[#FFDBD2] text-[#CB3B28] px-2 md:px-4 py-1 rounded-full md:text-sm text-xs font-medium w-fit mx-auto mt-4">
                                    Juara III
                                </div>
                            </div>
                        </div>
                        <div className="md:absolute md:flex md:bottom-20 md:left-12 mb-4 hidden">
                            <SideLeftArrowLeftIcon />
                        </div>
                    </div>
                </div>
            </section>
            {/* end prize */}

            {/* start timeline */}
            <Timeline />
            {/* end timeline */}

            <Faq />

            {/* start contact */}
                
            {/* end contact */}
        </>
    );
}

Competitions.layout = (page) => <GuestLayout children={page} title="Competition Page" />;

export default Competitions;
{/* <div className="md:mt-44 mt-24">
    <p>{competitions.competition_content[0]?.location}</p>
    <p>{current_batch?.periode_name}</p>
    <p>{current_batch?.start_date}</p>
    <p>{current_batch?.end_date}</p>
    <p>{current_batch?.price}</p>
    <p>{competitions.competition_content[0]?.how_to_join_link}</p>
    <p>{competitions.competition_content[0]?.guidebook_link}</p>
    {competitions.is_team == false ? (
        <Button type="submit" onClick={onHandleSubmit}>
            Register
        </Button>
    ) : (
        <Button asChild>
            <Link
                href={route('register.competition.show', competitions.slug)}
            >
                Register
            </Link>
        </Button>
    )}

    <p className="mt-10">{competitions.description}</p>

    {competitions.competition_content.map((content, idx) => (
        <div key={idx} className="mt-10 grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-24">
            {content.competition_content_prizes.map((prize, i) => (
                <div className="flex flex-col bg-red-500" key={i}>
                    <p>
                        {prize.rank ?? '-'}
                    </p>
                    <p>
                        {prize.name ?? ''}
                    </p>
                    <p>
                        {(prize.money).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) ?? '-'}
                    </p>
                </div>
            ))}
        </div>
    ))}

    {competitions.competition_content.map((content, idx) => (
        <div key={idx} className="mt-10 flex flex-col w-full justify-center items-center gap-24">
            {content.competition_content_timeline.map((timeline, i) => (
                <div className="flex flex-col bg-indigo-500" key={i}>
                    <p>{timeline.title ?? ''}</p>
                    <p>{timeline.date_range ?? ''}</p>
                </div>
            ))}
        </div>
    ))}

    {competitions.competition_content.map((content, idx) => (
        <div key={idx} className="mt-10 flex flex-col w-full justify-center items-center gap-24">
            {content.competition_content_faq.map((faq, i) => (
                <div className="flex flex-col bg-grewn-500" key={i}>
                    <p>{faq.question ?? ''}</p>
                    <p>{faq.answer ?? ''}</p>
                </div>
            ))}
        </div>
    ))}

    {competitions.competition_content.map((content, idx) => (
        <div key={idx} className="mt-10 grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-24">
            {content.competition_content_contact.map((contact, i) => (
                <div className="flex flex-col bg-red-500" key={i}>
                    {contact.name ?? ''}
                    {contact.id_line ?? ''}
                    {contact.wa_number ?? ''}
                </div>
            ))}
        </div>
    ))}

</div> */}
