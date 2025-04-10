import { Link } from "@inertiajs/react";
import DarkMode from "@/Components/DarkMode";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
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

export default function NavBar({ auth, competitions }) {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function toggleNav() {
        setOpenNav(!openNav);
    }

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
        <nav className="flex flex-row justify-between py-5 px-12 border-b-[1px] fixed top-0 left-0 w-full z-50 shadow">
            {/* logo */}
            <div>
                <h1 className="text-4xl">
                    Logo
                </h1>
            </div>

            {/* link untuk ngarah ke page lain */}
            <div className="flex flex-row gap-10 justify-center items-center">
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
                    href="#"
                >
                    Semnas
                </Link>
                <Link
                    href="#"
                >
                    P'cozzy
                </Link>
                <Link
                    href="#"
                >
                    Merchandise
                </Link>
            </div>

            {/* login dan darkmode */}
            <div className="flex flex-row gap-5 justify-center items-center">
                {/* darkmode */}
                <div>
                    {/* darkmode */}
                </div>
                {auth ? (
                    <Link
                        href={route('dashboard')}
                    >
                        {auth.name}
                    </Link>
                ) : (
                    <Button asChild variant="blue">
                        <Link
                            href={route('login')}
                        >
                            Login
                        </Link>
                    </Button>
                )}
            </div>
        </nav>
    );
}
