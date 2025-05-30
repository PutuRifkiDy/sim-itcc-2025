import { Icon401, Icon403, Icon404, Icon429, Icon500, Icon503 } from "@/Components/IconGuest";
import { messages } from "@/lib/utils"
import { Head, Link } from "@inertiajs/react";

function ErrorHandling({ status }) {
    const errorMessages = messages[status];

    const iconForErrorMessage = (status) => {
        console.log(status);
        switch (status) {
            case '500':
                return <Icon500 />;
                break;
            case '503':
                return <Icon503 />;
                break;
            case '404':
                return <Icon404 />;
                break;
            case '403':
                return <Icon403 />;
                break;
            case '401':
                return <Icon401 />;
                break;
            case '429':
                return <Icon429 />;
                break;
            default:
                return <Icon503 />;
        }
    }

    return (
        <>
            <Head title={errorMessages.title} />

            <div className="flex flex-col items-center justify-center py-20 md:px-0 px-5">

                {iconForErrorMessage(errorMessages.status)}

                <h1 className="font-bold text-[35px] text-[#0F114C] dark:text-white text-center">
                    {errorMessages.title}
                </h1>
                <p className="text-[#3A3A3A] text-xl dark:text-white text-center">
                    {errorMessages.description}
                </p>
                <Link href={route('welcome')} className="text-white bg-[#0F114C] dark:bg-white dark:text-[#0F114C] px-6 py-3 font-medium my-10 rounded-[5px] text-xl">
                    Back To Home Page
                </Link>
                <p className="text-[#A4A3A3] text-xl text-center">© 2025 ITCC 2025. All rights reserved.</p>
            </div>
        </>
    )
}

export default ErrorHandling;
