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
import { ArrowRightStartOnRectangleIcon, Squares2X2Icon, SunIcon, UserCircleIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { User } from 'lucide-react';
import { ThemeSwitcher } from '@/Components/ThemeSwitcher';


export default function Sidebar({ navigations, children, header, description }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
    const auth = usePage().props.auth.user;
    const { url } = usePage();

    if (!auth) {
        window.location.href = route('login');
    }

    const currentRoute = route().current();

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
                    className={`hidden flex-col items-center justify-start gap-6 overflow-hidden border-r-[1px] border-r-slate-200 transition-all duration-200 ease-in-out dark:border-r-slate-600 md:flex ${isSidebarOpen ? 'w-16 md:w-[300px]' : 'w-0 md:w-24'} fixed min-h-screen`}
                >
                    <Link
                        href={route('welcome')}
                        className="flex w-full flex-row items-center justify-center gap-1 border-b-[1px] border-slate-200 py-6 text-[24px] font-bold text-[#0F114C] dark:border-slate-600 tracking-[0.03em] truncate"
                    >
                        <img src={`${window.location.origin}/assets/images/image_for_icon_logo_itcc.png`} alt="" className="w-[61.5px] h-auto dark:hidden block" />
                        <img src={`${window.location.origin}/assets/images/landing/ITCC.png`} alt="" className="w-[61.5px] h-auto dark:block hidden" />
                    </Link>
                    <img
                        src={`${window.location.origin}/assets/images/image_for_sidebar.png`}
                        alt="Profile"
                        className={`${isSidebarOpen ? 'h-[111px] w-[90px]' : 'h-[50px] w-[50px]'}`}
                    />
                    <nav className={`mt-1 w-full ${isSidebarOpen ? 'px-5' : ' '} text-center`}>
                        <ul className="font-bold">
                            {navigations.map((navigation, i) => {
                                const routePath = window.location.pathname;
                                const routeName = navigation.link.startsWith("http")
                                    ? new URL(navigation.link).pathname
                                    : navigation.link;

                                const normalizedRouteName = routeName.replace(/\/$/, '');
                                const isActive =
                                    normalizedRouteName === '/dashboard'
                                        ? routePath === normalizedRouteName
                                        : routePath.startsWith(normalizedRouteName);
                                return (
                                    <li
                                        key={i}
                                        className={`py-4 ${isSidebarOpen ? 'relative rounded-[6px] px-8' : 'items-center'} flex flex-col justify-center ${isActive ? 'bg-[#0F114C] stroke-white text-white' : 'transition-all duration-200 ease-in-out hover:bg-[#0F114C]/20'}`}
                                    >
                                        {isActive && isSidebarOpen && (
                                            <div className="absolute left-0 top-0 h-full w-[8px] rounded-r-md bg-[#264A9D]"></div>
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
                    className={`fixed left-0 top-0 z-50 h-full w-full transform bg-white dark:bg-[#040529] transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
                >
                    <div className="flex items-center justify-between border-b p-5">
                        <span className="text-xl font-bold text-[#0F114C]">
                            ITCC{" "}<span className="text-[#264A9D]">2025</span>
                        </span>
                        <button onClick={() => setIsSidebarOpen(false)} className="">
                            <Bars3BottomRightIcon className="h-6 w-6 text-gray-600" />
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
                                        className={`py-4 ${isSidebarOpen ? 'relative rounded-[6px] px-8' : 'items-center'} flex flex-col justify-center ${isActive ? 'bg-[#0F114C] stroke-white text-white' : 'transition-all duration-200 ease-in-out hover:bg-[#0F114C]/20'}`}
                                    >
                                        {/* Garis warna di samping */}
                                        {isActive && isSidebarOpen && (
                                            <div className="absolute left-0 top-0 h-full w-[8px] rounded-r-md bg-[#264A9D]"></div>
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
                            <li className={`py-4 ${isSidebarOpen ? 'px-8' : 'items-center'} flex cursor-pointer flex-col justify-center`}>
                                <Link
                                    href={route('logout')}
                                    as="button"
                                    method="post"
                                    className="light:text-[#404040] flex flex-row items-center justify-start gap-5 text-[14px] font-medium tracking-[0.11em] text-[#FF0000]"
                                >
                                    <IconLogoutSideBar />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div
                    className={`flex-1 ${isSidebarOpen ? 'ml-0 md:ml-[300px] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]' : 'ml-0 md:ml-24 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'} overflow-x-auto transition-all`}
                >
                    <header className="flex w-full items-center justify-center border-b-[1px] border-b-slate-200 px-0 py-[1.14rem] dark:border-b-slate-600 md:justify-between md:px-5">
                        {/* Untuk Tampilan Laptop */}
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hidden text-xl md:block">
                            {!isSidebarOpen ? <Bars3BottomRightIcon className="w-6 h-6 text-[#000000] dark:text-white" /> : <IconSideBar />}
                        </button>

                        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                            {/* Untuk Tampilan Responsive */}
                            <div className="flex w-screen flex-row justify-between px-5 md:hidden md:w-full md:px-0">
                                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
                                    <IconSideBar />
                                </button>
                                <ThemeSwitcher />
                            </div>

                            <div className="divider flex h-[2px] w-auto bg-slate-200 dark:bg-slate-600 md:hidden md:w-full"></div>
                            <div className='hidden md:block'>
                                <ThemeSwitcher />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <p className='cursor-pointer flex flex-row gap-4 justify-center items-center text-gray-800 dark:text-gray-200'>
                                        <img src={`${window.location.origin}/assets/images/image_for_auth.png`} className="md:w-[40px] w-[50px] h-auto md:h-auto" alt="" />
                                        <div className='flex flex-col items-start'>
                                            {auth.name}
                                            <div className='flex flex-row gap-1 items-center'>
                                                <div className='w-2 h-2 bg-green-700 rounded-full'></div>
                                                <p className='text-green-500'>Online</p>
                                            </div>
                                        </div>
                                        <IconDropdown />
                                    </p>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 flex flex-col justify-start px-4 gap-4 py-3 outline-none md:mr-12 mr-0 dark:bg-[#040529]" >
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
                                        type='button'
                                        method='post'
                                    >
                                        <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-red-500" />
                                        Logout
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                    </header>

                    <div className="flex min-h-screen flex-col gap-1 bg-[#E6EFF5] px-4 py-2 dark:bg-[#0e0f32] md:px-10 md:py-5 md:mt-0 pt-10">
                        <p className='text-3xl font-semibold leading-tight text-gray-800 dark:text-white'>
                            {header}
                        </p>
                        <p className='text-[17px] text-gray-500 dark:text-white'>
                            {description}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
