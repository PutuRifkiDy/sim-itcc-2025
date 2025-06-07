export const Accordion = ({ heading, description, isOpen, onClick }) => {
    return (
        <div className="w-full md:w-[636px] border border-gray-200 rounded-[10px] m-2 p-2 shadow">
            <button
                className="w-full px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                onClick={onClick}
            >
                <div className="flex flex-shrink-0 items-center justify-between">
                    <span className="md:w-[500px] w-full text-[15px] md:text-lg font-semibold text-gray-900 dark:text-[#D9D9D9]">
                        {heading}
                    </span>
                    {/* icon arrow */}
                    <svg
                        className={`w-6 h-6 transition-transform ${isOpen ? 'transition-transform rotate-180' : ''
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="px-4 py-2 text-gray-700 dark:text-gray-400">
                    {description}
                </div>
            )}
        </div>
    );
}
