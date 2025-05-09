import { IconFacebook, IconInstagram, IconTiktok, IconYoutube } from "@/Components/IconGuest";
import ScrollToTop from "@/Components/ScrollToTop";
import { Link, usePage } from "@inertiajs/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Footer({ ...props }) {
    const competitions = usePage().props.competitions;
    return (
        <>
            <footer className="bg-[#0F114C] w-full px-24 py-12 pb-14 md:block hidden">
                <div className="flex flex-row justify-between mb-10">

                    <div className="flex flex-col gap-5">
                        <h1 className="text-white font-semibold text-[24px]">ITCC 2025</h1>
                        <p className="text-[18px] text-white md:w-[420px] w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum
                        </p>
                        <div className="flex flex-row gap-5">
                            <a href="https://www.instagram.com/itcc_udayana/" target="_blank">
                                <IconInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@itccudayana?_t=ZS-8wChNNcVxgo&_r=1" target="_blank">
                                <IconTiktok />
                            </a>
                            <a href="https://www.facebook.com/ITCC.Udayana/?locale=id_ID" target="_blank">
                                <IconFacebook />
                            </a>
                            <a href="https://www.youtube.com/channel/UCv949bv5-KQMECAPVfxuGTw" target="_blank">
                                <IconYoutube />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="text-white font-semibold text-[24px]">Competition</h1>
                        {competitions
                            .filter((competition) => competition.is_open_regis == true)
                            .map((competition) => (
                                <Link
                                    key={competition.id}
                                    href={route('competition.front.show', [competition.slug])}
                                    className="text-white flex flex-row justify-start items-center gap-2"
                                >
                                    {competition.name} <ChevronRightIcon className="w-5 h-5" />
                                </Link>
                            ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-white font-semibold text-[24px]">Other</h1>

                        <Link
                            href={route('event.front.show', ['seminar-nasional-teknologi-informasi-of'])}
                            className="text-white flex flex-row justify-start items-center gap-2"
                        >
                            Seminar Nasional <ChevronRightIcon className="w-5 h-5" />
                        </Link>

                        <Link
                            href={route('merchandise.front.show')}
                            className="text-white flex flex-row justify-start items-center gap-2"
                        >
                            Merchandise <ChevronRightIcon className="w-5 h-5" />
                        </Link>
                    </div>

                </div>
                <div className="md:block hidden divider h-[1px] w-auto md:w-full bg-white mb-10"></div>
                <ScrollToTop />
            </footer>

            {/* untuk responsive footernya */}
            <footer className="md:hidden bg-[#0F114C] w-full px-5 py-5 pb-12">
                <div className="flex flex-col gap-10 mb-10">

                    <div className="flex flex-col gap-5">
                        <h1 className="text-white font-semibold text-[24px]">ITCC 2025</h1>
                        <p className="text-[18px] text-white md:w-[420px] w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum
                        </p>
                        <div className="flex flex-row gap-5">
                            <a href="">
                                <IconInstagram />
                            </a>
                            <a href="">
                                <IconTiktok />
                            </a>
                            <a href="">
                                <IconFacebook />
                            </a>
                            <a href="">
                                <IconYoutube />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="text-white font-semibold text-[24px]">Competition</h1>
                        {competitions
                            .filter((competition) => competition.is_open_regis == true)
                            .map((competition) => (
                                <Link
                                    key={competition.id}
                                    href={route('competition.front.show', [competition.slug])}
                                    className="text-white flex flex-row justify-start items-center gap-2"
                                >
                                    <p className="truncate">{competition.name}</p> <ChevronRightIcon className="w-5 h-5" />
                                </Link>
                            ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-white font-semibold text-[24px]">Other</h1>

                        <Link
                            href={route('event.front.show', ['seminar-nasional-teknologi-informasi-of'])}
                            className="text-white flex flex-row justify-start items-center gap-2"
                        >
                            Seminar Nasional <ChevronRightIcon className="w-5 h-5" />
                        </Link>
                        <Link
                            href={route('merchandise.front.show')}
                            className="text-white flex flex-row justify-start items-center gap-2"
                        >
                            Merchandise <ChevronRightIcon className="w-5 h-5" />
                        </Link>
                    </div>

                </div>
                <div className="divider h-[1px] w-auto md:w-full bg-white mb-10"></div>
                <ScrollToTop />
            </footer>
        </>
    );
}
