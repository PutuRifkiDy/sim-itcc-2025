import { IconFaq, SideLeftCrookedCrossIcon, SideRightCrossIcon } from "@/Components/IconGuest";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    // accordion faq
    const [openIndex, setOpenIndex] = useState(null);


    const faqItems = [
        { question: "What is ITCC?", answer: "ITCC is an annual IT competition." },
        {
            question: "How to register?",
            answer: "You can register on our website.",
        },
        {
            question: "Who can participate?",
            answer: "Anyone interested in IT can participate.",
        },
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const AccordionLanding = ({ heading, description, isOpen, onClick }) => {
        return (
            <div className="w-full md:w-[636px] border border-primary rounded-[10px] m-2 p-2 shadow-lg">
                <button
                    className="w-full px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    onClick={onClick}
                >
                    <div className="flex items-center justify-between">
                        <span className="text-[15px] md:text-lg font-semibold text-gray-900">{heading}</span>
                        {/* icon arrow */}
                        <svg
                            className={`w-6 h-6 ${isOpen ? 'transition-transform rotate-180' : ''
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
                    <div className="px-4 py-2 text-gray-700">
                        {description}
                    </div>
                )}
            </div>
        );
    }

    return (
        <section className="relative max-w-[1440px] w-full flex-shrink-0 bg-white mx-auto px-4 sm:px-8 mt-6">
            <div className="absolute top-4 left-4 sm:top-10 sm:left-10 hidden lg:block">
                <SideLeftCrookedCrossIcon />
            </div>

            <h1 className="text-[24px] sm:text-[36px] leading-[120%] font-bold font-rubik text-center uppercase tracking-[3px] sm:tracking-[5.76px] text-[color:var(--Blue-Primary,#0F114C)] mt-4 sm:mt-8">
                FAQ
            </h1>
            <p className="text-[#5E5E5E] text-center font-rubik text-[14px] sm:text-[16px] font-normal leading-[180%] tracking-[0.32px] mt-2 sm:mt-4 px-2 mx-auto max-w-[653px] w-full">
                Got questions? We’ve got answers. Browse through our frequently asked
                questions to find quick solutions and helpful information.
            </p>
            <div className="flex flex-col lg:flex-row mt-6 mx-auto max-w-[1200px] items-center lg:items-start relative lg:justify-between">
                <div className="w-[300px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px]">
                    <IconFaq />
                </div>
                <div className="flex flex-col gap-4 lg:ml-8 mt-6 lg:mt-8 w-full lg:w-auto">
                    {faqItems.map((item, index) => (
                        <AccordionLanding
                            heading={item.question}
                            description={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 hidden lg:block">
                    <SideRightCrossIcon />
                </div>
            </div>
        </section>
    );
};

export default Faq;
