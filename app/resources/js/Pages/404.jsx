import {Icon404} from "@/Components/IconGuest";
import { Link } from '@inertiajs/react';
export default function Error404() {
    return (
            <div className="flex flex-col items-center justify-center py-20">
                <Icon404/>
                <h1 className="font-bold text-[35px] text-[#0F114C] dark:text-white">Page Not Found</h1>
                <p className="text-[#3A3A3A] text-xl dark:text-white">The page you are trying to access doesn’t exist or has been removed.</p>
                <Link href="/" className="text-white bg-[#0F114C] dark:bg-white dark:text-[#0F114C] px-6 py-3 font-medium my-[73px] rounded-[5px] text-xl">Back To Home Page</Link>
                <p className="text-[#A4A3A3] text-xl">© 2025 ITCC 2025. All rights reserved.</p>
            </div>
    );
}