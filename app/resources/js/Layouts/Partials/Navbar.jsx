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

export default function NavBar({ auth, competitions }) {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { flash_message } = usePage().props;

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
            <nav className="md:flex hidden flex-row justify-between py-5 px-12 border-b-[1px] fixed top-0 left-0 w-full z-50 shadow bg-white">
                <div>
                    <img src={`${window.location.origin}/assets/images/image_for_icon_logo_itcc.png`} alt="" className="w-[82px] h-[49px]"/>
                </div>

                {/* link untuk ngarah ke page lain */}
                <div className="flex flex-row gap-10 justify-center items-center">
                    <Link
                        href={route('welcome')}
                    >
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <p className='cursor-pointer flex flex-row gap-2 justify-center items-center'>
                                Competitions
                                <ChevronDownIcon className="font-bold h-4 w-4" />
                            </p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-3 py-3 outline-none" >
                            {competitions
                                .filter((competition) => competition.is_open_regis == true)
                                .map((competition) => (
                                    <Link
                                        key={competition.id}
                                        href={route('competition.front.show', [competition.slug])}
                                        className="truncate"
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

                <div className="flex flex-row gap-5 justify-center items-center">
                    <div>
                        <SunIcon className="w-8 h-8 text-yellow-200" />
                    </div>
                    {auth ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <p className='cursor-pointer flex flex-row gap-2 justify-center items-center'>
                                    <UserCircleIcon className="h-8 w-8 text-gray-500" />
                                </p>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-4 py-3 outline-none mr-12" >
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
                                        href={route('dashboard.competition.admin-lomba.index')}
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                        Dashboard
                                    </Link>
                                ) : (

                                    <Link
                                        href={route('profile.edit')}
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

            <nav className="md:hidden flex flex-col justify-between py-5 border-b-[1px] fixed top-0 left-0 w-full z-50 shadow bg-white">
                <div className="flex flex-row justify-between">
                    <Bars3BottomLeftIcon className="w-6 h-6 text-gray-600 mx-5 cursor-pointer" onClick={() => setOpenNav(!openNav)} />
                    <SunIcon className="w-6 h-6 text-yellow-200 mx-5" />
                </div>
                {openNav == true && (
                    <div className="mt-10">
                        <div className="flex flex-col bg-white gap-5 justify-start px-5">
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
                                <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-3 py-3 outline-none" >
                                    {competitions
                                        .filter((competition) => competition.is_open_regis == true)
                                        .map((competition) => (
                                            <Link
                                                key={competition.id}
                                                href={route('competition.front.show', [competition.slug])}
                                                className="truncate"
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

                        <div className="flex flex-row gap-5 pt-5 justify-start bg-white">
                            {auth ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <p className='cursor-pointer flex flex-row gap-2 justify-center items-center px-5'>
                                            <UserCircleIcon className="h-8 w-8 text-gray-500" />
                                        </p>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 flex flex-col justify-center px-4 gap-4 py-3 outline-none ml-5" >
                                        <Link
                                            href={route('dashboard')}
                                            className="flex flex-row items-center gap-2"
                                        >
                                            <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                            Dashboard
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            className="text-red-500 flex flex-row items-center gap-2"
                                        >
                                            <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-red-500" />
                                            Logout
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Button asChild variant="blue" size="lg" className='mx-5'>
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
