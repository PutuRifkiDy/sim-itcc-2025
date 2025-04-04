import {
    AcademicCapIcon,
    ArrowLeftEndOnRectangleIcon,
    Bars3Icon,
    MoonIcon,
    ShieldExclamationIcon,
    SunIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { IconDashboard, IconDropdown, IconHome, IconLogout, IconLogoutSideBar, IconProfile, IconSideBar, IconSilangResponsiveWeb } from "../../Components/IconAdmin";
import DarkMode from "../../Components/DarkMode";

export default function Sidebar({ navigations, children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

    const currentRoute = route().current();
    console.log(currentRoute);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    }, [currentRoute]);
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between">
                {/* Sidebar */}
                <aside className={`hidden md:flex flex-col gap-6 justify-start items-center transition-all duration-200 ease-in-out overflow-hidden border-r-[1px] border-r-slate-200 dark:border-r-slate-600 ${isSidebarOpen ? "md:w-[242px] w-16" : "md:w-16 w-0"} min-h-screen fixed`} >
                    <div className="py-6 w-full flex flex-row gap-1 justify-center items-center font-semibold text-[24px] text-[#285B70] border-b-[1px] border-slate-200 dark:border-slate-600">

                        ITCC<span className={`${isSidebarOpen ? "flex flex-row text-[#42A1A4]" : "hidden"}`}>2025</span>
                    </div>
                    <img src={`${window.location.origin}/images/Logo-PKM-TI-2025.png`} alt="Profile" className={`${isSidebarOpen ? "w-[90px] h-[111px]" : "w-[37px] h-[46px]"}`} />
                    <nav className={`mt-1 w-full ${isSidebarOpen ? "px-5" : " "}  text-center`}>

                        <ul className="font-bold">

                            {navigations.map((navigation, i) => {
                                let routePath = window.location.pathname;
                                const routeName = navigation.link.startsWith("http")
                                    ? new URL(navigation.link).pathname
                                    : navigation.link;

                                const isActive = routePath === routeName;


                                return (
                                    <li
                                        key={i}
                                        className={`py-4 ${isSidebarOpen ? "px-8 rounded-[6px] relative" : "items-center"} flex flex-col justify-center ${isActive ? "bg-[#42A1A4] text-white stroke-white" : "hover:bg-[#42A1A4]/20 transition-all duration-200 ease-in-out"}`}
                                    >
                                        {isActive && isSidebarOpen && (
                                            <div className="absolute left-0 top-0 h-full w-[8px] bg-[#285B70] rounded-r-md"></div>
                                        )}
                                        <Link href={navigation.link} as="button" className={`font-semibold text-[14px] tracking-[0.3px] flex flex-row gap-5 items-center`} onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}>
                                            {navigation.icon} {isSidebarOpen && navigation.text}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className={`py-4 ${isSidebarOpen ? "px-8" : "items-center"} flex flex-col justify-center cursor-pointer`}>
                                <Link
                                    href={route('logout')}
                                    as="button"
                                    method="post"
                                    className="font-semibold text-[14px] tracking-[0.3px] flex flex-row gap-5 items-center text-[#FF0000]"
                                >
                                    <IconLogoutSideBar />
                                    {isSidebarOpen && "Logout"}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {isSidebarOpen && window.innerWidth < 768 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
                )}
                <aside className={`fixed top-0 left-0 h-full w-full bg-white z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    <div className="flex justify-between items-center p-5 border-b">
                        <span className="font-bold text-xl">ITCC<span className="text-[#42A1A4]">2025</span></span>
                        <button onClick={() => setIsSidebarOpen(false)} className="">
                            <IconSilangResponsiveWeb width="100" height="12" />
                        </button>
                    </div>
                    <nav className="mt-5 text-center">
                        <ul className="font-bold">
                            {navigations.map((navigation, i) => {
                                let routePath = window.location.pathname;
                                const routeName = navigation.link.startsWith("http")
                                    ? new URL(navigation.link).pathname
                                    : navigation.link;

                                const isActive = routePath === routeName;


                                return (
                                    <li
                                        key={i}
                                        className={`py-4 ${isSidebarOpen ? "px-8 rounded-[6px] relative" : "items-center"} flex flex-col justify-center ${isActive ? "bg-[#42A1A4] text-white stroke-white" : "hover:bg-[#42A1A4]/20 transition-all duration-200 ease-in-out"}`}
                                    >
                                        {/* Garis warna di samping */}
                                        {isActive && isSidebarOpen && (
                                            <div className="absolute left-0 top-0 h-full w-[8px] bg-[#285B70] rounded-r-md"></div>
                                        )}
                                        <Link href={navigation.link} as="button" className={`font-semibold text-[14px] tracking-[0.3px] flex flex-row gap-5 items-center`} onClick={() => setIsSidebarOpen(false)}>
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
                                    className="flex flex-row gap-2 justify-start items-center font-medium text-[14px] light:text-[#404040] dark:text-white tracking-[0.11em]"
                                >
                                    <IconLogout />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className={`flex-1 ${isSidebarOpen ? "md:ml-[242px] ml-0 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" : "md:ml-16 ml-0 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]"}  overflow-x-auto transition-all`}>

                    <header className="py-4 flex items-center md:justify-between justify-center md:px-5 px-0 w-full border-b-[1px] border-b-slate-200 dark:border-b-slate-600">
                        {/* Untuk Tampilan Laptop */}
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl md:block hidden">
                            <IconSideBar />
                        </button>


                        <div className="flex md:flex-row flex-col justify-center items-center gap-5">

                            {/* Untuk Tampilan Responsive */}
                            <div className="md:hidden flex flex-row justify-between md:w-full md:px-0 px-5 w-screen">
                                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
                                    <IconSideBar />
                                </button>
                                <DarkMode />
                            </div>

                            <div className="md:hidden flex divider h-[2px] w-auto md:w-full bg-slate-200 dark:bg-slate-600"></div>

                            <div className="md:flex hidden">
                                <DarkMode />
                            </div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="flex flex-row gap-5 md:justify-center justify-between items-center cursor-pointer md:w-full w-screen md:px-0 px-5">
                                    <div className="flex flex-row gap-3">
                                        <div className="rounded-full overflow-hidden w-[50px] h-[52px]">
                                            <img src={`${window.location.origin}/images/admin/icon-profile.png`} alt="" />
                                        </div>
                                        {/* <div className="flex flex-col">
                                            <p className="font-bold text-[16px] light:text-[#404040] dark:text-white">{user.name}</p>
                                            <p className="font-medium text-[14px] light:text-[#565656] dark:text-white">{user.role}</p>
                                        </div> */}
                                    </div>
                                    <IconDropdown className="w-9 h-9" />
                                </div>
                                <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] md:w-52 w-full md:px-0 px-8 p-2 shadow">
                                    <li className="border-b-2 border-slate-200 dark:border-slate-600">
                                        <Link href={route("welcome")} className="flex flex-row gap-2 justify-start items-center font-medium text-[14px] light:text-[#404040] dark:text-white tracking-[0.11em]">
                                            <IconHome />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route('logout')}
                                            as="button"
                                            method="post"
                                            className="flex flex-row gap-2 justify-start items-center font-medium text-[14px] light:text-[#404040] dark:text-white tracking-[0.11em]"
                                        >
                                            <IconLogout />
                                            Keluar
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <div className="flex flex-col gap-2 md:px-12 px-4 md:py-5 py-2 bg-[#F5F6FA] dark:bg-[#1d232a] min-h-screen">
                        {navigations.map((navigation, i) => {
                            let routePath = window.location.pathname;
                            const routeName = navigation.link.startsWith("http")
                                ? new URL(navigation.link).pathname
                                : navigation.link;

                            let displayText = routeName === routePath ? navigation.text : " ";
                            if (displayText === "Asistensi") {
                                displayText = "Bukti Asistensi";
                            }
                            return (

                                <h1
                                    key={i}
                                    className={`text-[48px] font-semibold`}
                                >
                                    {displayText}
                                </h1>
                            );
                        })}


                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
