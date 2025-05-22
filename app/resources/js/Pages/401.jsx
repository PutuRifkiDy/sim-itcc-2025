import {Icon401} from "@/Components/IconGuest";
import { Link } from '@inertiajs/react';
export default function Error401() {
    return (
            <div className="flex flex-col items-center justify-center py-20">
                <Icon401/>
                <h1 className="font-bold text-[35px] text-[#0F114C] dark:text-white">Unauthorized</h1>
                <p className="text-[#3A3A3A] text-xl dark:text-white">This Page is not Publicly available.</p>
                <Link href="/" className="text-white bg-[#0F114C] dark:bg-white dark:text-[#0F114C] px-6 py-3 font-medium my-[73px] rounded-[5px] text-xl">Back To Home Page</Link>
                <p className="text-[#A4A3A3] text-xl">© 2025 ITCC 2025. All rights reserved.</p>
            </div>
    );
}