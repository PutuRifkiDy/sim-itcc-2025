import { Link, usePage } from "@inertiajs/react";
import DarkMode from "@/Components/DarkMode";
import { ChevronDownIcon, UserCircleIcon, Bars3Icon, XMarkIcon, ArrowRightStartOnRectangleIcon, Squares2X2Icon, Bars3BottomLeftIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner";
import { check } from "prettier";
import { ThemeSwitcher } from "@/Components/ThemeSwitcher";

export default function NavBar({ auth, competitions }) {
    const [openNav, setOpenNav] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { flash_message } = usePage().props;
    const { url } = usePage();
    const urlName = window.location.pathname;

    useEffect(() => {
        if (flash_message?.message) {
            toast[flash_message.type || 'success'](flash_message.message);
        }
    }, [flash_message]);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            scroll = window.scrollY;
            if (scroll > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    }, [scrolled]);

    return (
        <>
            <nav className="md:flex hidden flex-row justify-between py-5 px-24 border-b-[1px] fixed top-0 left-0 w-full z-50 shadow bg-white dark:bg-[#040529]">
                <div>
                    <Link
                        href={route('welcome')}
                    >
                        <img src={`${window.location.origin}/assets/images/image_for_icon_logo_itcc.png`} alt="" className="w-[82px] h-[49px] dark:hidden" />
                        <img src={`${window.location.origin}/assets/images/landing/ITCC_ICON.svg`} alt="" className="w-[82px] h-[49px] hidden dark:block" />
                    </Link>
                </div>
                <div className="flex flex-row gap-10 justify-center items-center">
                    <Link
                        href={route('welcome')}
                        className={`relative transition-all duration-300 overflow-hidden hover:text-[#0F114C] dark:hover:text-[#55b1d7] group ${route().current('welcome') ? 'text-[#0F114C] dark:text-[#55b1d7]' : ''}`}
                    >
                        Home
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0F114C]/90 to-[#0F114C]
                            transform origin-left transition-all duration-300 ease-out
                            ${route().current('welcome') ? 'translate-x-0' : '-translate-x-full'}
                            group-hover:translate-x-0 dark:from-[#55b1d7]/90 dark:to-[#55b1d7]`}>
                        </span>
                    </Link>
                    <DropdownMenu onOpenChange={(open) => setOpenDropdown(open)}>
                        <DropdownMenuTrigger asChild  >
                            <p className='cursor-pointer flex flex-row gap-2 justify-center items-center'>
                                Competitions
                                <ChevronDownIcon className={`font-bold h-4 w-4 transition-transform transform  ${openDropdown ? 'rotate-180' : ''}`} />
                            </p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-3 py-3 outline-none dark:bg-[#040529]">
                            {competitions
                                .filter((competition) => competition.is_open_regis == true)
                                .map((competition) => (
                                    <Link
                                        key={competition.id}
                                        href={route('competition.front.show', [competition.slug])}
                                        className="truncate hover:font-medium transition-all ease-in-out duration-400"
                                    >
                                        {competition.name}
                                    </Link>
                                ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link
                        href={route('event.front.show', ['seminar-nasional-teknologi-informasi-of'])}
                        className={`relative transition-all duration-300 overflow-hidden hover:text-[#0F114C] dark:hover:text-[#55b1d7] group ${route().current('event.front.show') ? 'text-[#0F114C] dark:text-[#55b1d7]' : ''}`}
                    >
                        Semnas
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0F114C]/90 to-[#0F114C]
                            transform origin-left transition-all duration-300 ease-out
                            ${route().current('event.front.show') ? 'translate-x-0' : '-translate-x-full'}
                            group-hover:translate-x-0 dark:from-[#55b1d7]/90 dark:to-[#55b1d7]`}>
                        </span>
                    </Link>

                    <Link
                        href={route('merchandise.front.show')}
                        className={`relative transition-all duration-300 overflow-hidden hover:text-[#0F114C] dark:hover:text-[#55b1d7] group ${route().current('merchandise.front.show') ? 'text-[#0F114C] dark:text-[#55b1d7]' : ''}`}
                    >
                        Merchandise
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0F114C]/90 to-[#0F114C]
                            transform origin-left transition-all duration-300 ease-out
                            ${route().current('merchandise.front.show') ? 'translate-x-0' : '-translate-x-full'}
                            group-hover:translate-x-0 dark:from-[#55b1d7]/90 dark:to-[#55b1d7]`}>
                        </span>
                    </Link>
                </div>

                <div className="flex flex-row gap-5 justify-center items-center">
                    <div>
                        <ThemeSwitcher />
                    </div>

                    {auth ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <p className='cursor-pointer flex flex-row gap-2 justify-center items-center'>
                                    <UserCircleIcon className="h-8 w-8 text-gray-500" />
                                </p>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-4 py-3 outline-none mr-12 dark:bg-[#040529]" >
                                {auth.is_admin === true && auth.name == 'Admin Kesekre' ? (
                                    <Link
                                        href={route('dashboard.overview.admin-kesekre.index')}
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                        Dashboard
                                    </Link>
                                ) : auth.is_admin === true ? (
                                    <Link
                                        href={route('dashboard.overview.admin-lomba.index')}
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                        Dashboard
                                    </Link>
                                ) : (

                                    <Link
                                        href={route('dashboard')}
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                        Dashboard
                                    </Link>
                                )}
                                <Link
                                    href={route('logout')}
                                    className="text-red-500 flex flex-row items-center gap-2"
                                    type="button"
                                    method="post"
                                >
                                    <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-red-500" />
                                    Logout
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button asChild variant="blue" size="lg">
                            <Link
                                href={route('login')}
                            >
                                Login
                            </Link>
                        </Button>
                    )}
                </div>
            </nav>

            <nav className="md:hidden flex flex-col justify-between py-5 border-b-[1px] fixed top-0 left-0 w-full z-50 shadow bg-white dark:bg-[#040529]">
                <div className="flex flex-row justify-between">
                    <Bars3BottomLeftIcon className={`w-6 h-6 text-gray-600 mx-5 cursor-pointer dark:text-white ${openNav ? 'hidden' : 'flex'}`} onClick={() => setOpenNav(!openNav)} />
                    <XMarkIcon className={`w-6 h-6 text-gray-600 mx-5 cursor-pointer transition-transform transform dark:text-white ${openNav ? 'flex rotate-180' : 'hidden'}`} onClick={() => setOpenNav(!openNav)} />
                    {/* <SunIcon className="w-6 h-6 text-yellow-200 mx-5" /> */}
                    <div>
                        <ThemeSwitcher />
                    </div>
                </div>
                {openNav == true && (
                    <div className="mt-10">
                        <div className="flex flex-col gap-5 justify-start px-5">
                            <Link
                                href={route('welcome')}
                            >
                                Home
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <p className='cursor-pointer flex flex-row gap-2 items-center'>
                                        Competitions
                                        <ChevronDownIcon className="font-bold h-4 w-4" />
                                    </p>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-3 py-3 outline-none dark:bg-[#040529]" >
                                    {competitions
                                        .filter((competition) => competition.is_open_regis == true)
                                        .map((competition) => (
                                            <Link
                                                key={competition.id}
                                                href={route('competition.front.show', [competition.slug])}
                                                className="truncate hover:font-medium transition-all ease-in-out duration-400"
                                            >
                                                {competition.name}
                                            </Link>
                                        ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href={route('event.front.show', ['seminar-nasional-teknologi-informasi-of'])}
                                className="truncate"
                            >
                                Semnas
                            </Link>

                            <Link
                                href={route('merchandise.front.show')}
                            >
                                Merchandise
                            </Link>
                        </div>

                        <div className="flex flex-row gap-5 pt-5 justify-start">
                            {auth ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <p className='cursor-pointer flex flex-row gap-2 justify-center items-center px-5'>
                                            <UserCircleIcon className="h-8 w-8 text-gray-500" />
                                        </p>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-4 py-3 outline-none mr-12 dark:bg-[#040529]" >
                                        {auth.is_admin === true && auth.name == 'Admin Kesekre' ? (
                                            <Link
                                                href={route('dashboard.overview.admin-kesekre.index')}
                                                className="flex flex-row items-center gap-2"
                                            >
                                                <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                                Dashboard
                                            </Link>
                                        ) : auth.is_admin === true ? (
                                            <Link
                                                href={route('dashboard.overview.admin-lomba.index')}
                                                className="flex flex-row items-center gap-2"
                                            >
                                                <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                                Dashboard
                                            </Link>
                                        ) : (

                                            <Link
                                                href={route('dashboard')}
                                                className="flex flex-row items-center gap-2"
                                            >
                                                <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                                Dashboard
                                            </Link>
                                        )}
                                        <Link
                                            href={route('logout')}
                                            className="text-red-500 flex flex-row items-center gap-2"
                                            type="button"
                                            method="post"
                                        >
                                            <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-red-500" />
                                            Logout
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Button asChild variant="blue" size="lg">
                                    <Link
                                        href={route('login')}
                                    >
                                        Login
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </nav>

        </>
    );
}
