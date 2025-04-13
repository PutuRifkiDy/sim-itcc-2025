import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import DarkMode from '../../Components/DarkMode';
import {
    IconDropdown,
    IconHome,
    IconLogout,
    IconLogoutSideBar,
    IconSideBar,
    IconSilangResponsiveWeb,
} from '../../Components/IconAdmin';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { ArrowRightStartOnRectangleIcon, Squares2X2Icon, SunIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { User } from 'lucide-react';

export default function Sidebar({ navigations, children, header }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
    const auth = usePage().props.auth.user;

    const currentRoute = route().current();
    console.log(currentRoute);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    }, [currentRoute]);
    return (
        <>
            <div className="flex flex-col justify-between md:flex-row">
                {/* Sidebar */}
                <aside
                    className={`hidden flex-col items-center justify-start gap-6 overflow-hidden border-r-[1px] border-r-slate-200 transition-all duration-200 ease-in-out dark:border-r-slate-600 md:flex ${isSidebarOpen ? 'w-16 md:w-[242px]' : 'w-0 md:w-16'} fixed min-h-screen`}
                >
                    <div className="flex w-full flex-row items-center justify-center gap-1 border-b-[1px] border-slate-200 py-6 text-[24px] font-semibold text-[#6D98F9] dark:border-slate-600">
                        ITCC<span className={`${isSidebarOpen ? 'flex flex-row text-[#4880FF]' : 'hidden'}`}>2025</span>
                    </div>
                    <img
                        src='assets/images/image_for_sidebar.png'
                        alt="Profile"
                        className={`${isSidebarOpen ? 'h-[111px] w-[90px]' : 'h-[50px] w-[50px]'}`}
                    />
                    <nav className={`mt-1 w-full ${isSidebarOpen ? 'px-5' : ' '} text-center`}>
                        <ul className="font-bold">
                            {navigations.map((navigation, i) => {
                                let routePath = window.location.pathname;
                                const routeName = navigation.link.startsWith('http')
                                    ? new URL(navigation.link).pathname
                                    : navigation.link;

                                const isActive = routePath === routeName;

                                return (
                                    <li
                                        key={i}
                                        className={`py-4 ${isSidebarOpen ? 'relative rounded-[6px] px-8' : 'items-center'} flex flex-col justify-center ${isActive ? 'bg-[#6D98F9] stroke-white text-white' : 'transition-all duration-200 ease-in-out hover:bg-[#42A1A4]/20'}`}
                                    >
                                        {isActive && isSidebarOpen && (
                                            <div className="absolute left-0 top-0 h-full w-[8px] rounded-r-md bg-[#4880FF]"></div>
                                        )}
                                        <Link
                                            href={navigation.link}
                                            as="button"
                                            className={`flex flex-row items-center gap-5 text-[14px] font-semibold tracking-[0.3px]`}
                                            onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
                                        >
                                            {navigation.icon} {isSidebarOpen && navigation.text}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li
                                className={`py-4 ${isSidebarOpen ? 'px-8' : 'items-center'} flex cursor-pointer flex-col justify-center`}
                            >
                                <Link
                                    href={route('logout')}
                                    as="button"
                                    method="post"
                                    className="flex flex-row items-center gap-5 text-[14px] font-semibold tracking-[0.3px] text-[#FF0000]"
                                >
                                    <IconLogoutSideBar />
                                    {isSidebarOpen && 'Logout'}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {isSidebarOpen && window.innerWidth < 768 && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}
                <aside
                    className={`fixed left-0 top-0 z-50 h-full w-full transform bg-white transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
                >
                    <div className="flex items-center justify-between border-b p-5">
                        <span className="text-xl font-bold">
                            ITCC<span className="text-[#42A1A4]">2025</span>
                        </span>
                        <button onClick={() => setIsSidebarOpen(false)} className="">
                            <IconSilangResponsiveWeb width="100" height="12" />
                        </button>
                    </div>
                    <nav className="mt-5 text-center">
                        <ul className="font-bold">
                            {navigations.map((navigation, i) => {
                                let routePath = window.location.pathname;
                                const routeName = navigation.link.startsWith('http')
                                    ? new URL(navigation.link).pathname
                                    : navigation.link;

                                const isActive = routePath === routeName;

                                return (
                                    <li
                                        key={i}
                                        className={`py-4 ${isSidebarOpen ? 'relative rounded-[6px] px-8' : 'items-center'} flex flex-col justify-center ${isActive ? 'bg-[#42A1A4] stroke-white text-white' : 'transition-all duration-200 ease-in-out hover:bg-[#42A1A4]/20'}`}
                                    >
                                        {/* Garis warna di samping */}
                                        {isActive && isSidebarOpen && (
                                            <div className="absolute left-0 top-0 h-full w-[8px] rounded-r-md bg-[#285B70]"></div>
                                        )}
                                        <Link
                                            href={navigation.link}
                                            as="button"
                                            className={`flex flex-row items-center gap-5 text-[14px] font-semibold tracking-[0.3px]`}
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            {navigation.icon} {isSidebarOpen && navigation.text}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <Link
                                    href={route('logout')}
                                    as="button"
                                    method="post"
                                    className="light:text-[#404040] flex flex-row items-center justify-start gap-2 text-[14px] font-medium tracking-[0.11em] dark:text-white"
                                >
                                    <IconLogout />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div
                    className={`flex-1 ${isSidebarOpen ? 'ml-0 md:ml-[242px] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]' : 'ml-0 md:ml-16 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'} overflow-x-auto transition-all`}
                >
                    <header className="flex w-full items-center justify-center border-b-[1px] border-b-slate-200 px-0 py-[1.85rem] dark:border-b-slate-600 md:justify-between md:px-5">
                        {/* Untuk Tampilan Laptop */}
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hidden text-xl md:block">
                            <IconSideBar />
                        </button>

                        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                            {/* Untuk Tampilan Responsive */}
                            <div className="flex w-screen flex-row justify-between px-5 md:hidden md:w-full md:px-0">
                                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
                                    <IconSideBar />
                                </button>
                                <DarkMode />
                            </div>

                            <div className="divider flex h-[2px] w-auto bg-slate-200 dark:bg-slate-600 md:hidden md:w-full"></div>

                            <SunIcon className="w-8 h-8 text-yellow-200" />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <p className='cursor-pointer flex flex-row gap-2 justify-center items-center'>
                                        {/* <UserIcon className="h-6 w-6 text-black" /> */}
                                        <UserCircleIcon className="h-6 w-6 text-gray-500" />
                                        {/* <img src="assets/images/image_for_sidebar.png" alt="" className='w-6 h-6' /> */}
                                        {auth.name}
                                    </p>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-4 py-3 outline-none mr-12" >
                                    <Link
                                        href={route('welcome')}
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                                        Home
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


                            {/* <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="flex w-screen cursor-pointer flex-row items-center justify-between gap-5 px-5 md:w-full md:justify-center md:px-0"
                                >
                                    <div className="flex flex-row gap-3">
                                        <div className="h-[52px] w-[50px] overflow-hidden rounded-full">
                                            <img
                                                src={`${window.location.origin}/images/admin/icon-profile.png`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-[16px] light:text-[#404040] dark:text-white">{user.name}</p>
                                            <p className="font-medium text-[14px] light:text-[#565656] dark:text-white">{user.role}</p>
                                        </div>
                                    </div>
                                    <IconDropdown className="h-9 w-9" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 px-8 shadow md:w-52 md:px-0"
                                >
                                    <li className="border-b-2 border-slate-200 dark:border-slate-600">
                                        <Link
                                            href={route('welcome')}
                                            className="light:text-[#404040] flex flex-row items-center justify-start gap-2 text-[14px] font-medium tracking-[0.11em] dark:text-white"
                                        >
                                            <IconHome />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route('logout')}
                                            as="button"
                                            method="post"
                                            className="light:text-[#404040] flex flex-row items-center justify-start gap-2 text-[14px] font-medium tracking-[0.11em] dark:text-white"
                                        >
                                            <IconLogout />
                                            Keluar
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </header>

                    <div className="flex min-h-screen flex-col gap-1 bg-[#F5F6FA] px-4 py-2 dark:bg-[#1d232a] md:px-10 md:py-5">
                        <p className='text-3xl font-semibold leading-tight text-gray-800'>
                            {header}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
