import { useState } from "react";
import {
  SideLeftCrookedCrossIcon,
  SideRightCrossIcon,
} from "../Icons/HeroIcons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <div className="flex flex-col lg:flex-row mt-6 mx-auto max-w-[1200px] items-center lg:items-start relative">
        <div className="w-[300px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px]">
          <img
            src="image/FAQ.png"
            alt="FAQ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 lg:ml-8 mt-6 lg:mt-8 w-full lg:w-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className={`flex flex-col gap-2 w-full sm:w-[590px] p-4 sm:p-5 rounded-[10px] border ${
                activeIndex === index
                  ? "border-[rgba(0,0,255,0.40)] bg-[rgba(0,0,255,0.10)]"
                  : "border-[rgba(255,255,255,0.40)] bg-[linear-gradient(129deg,rgba(255,255,255,0.40)_9.11%,rgba(255,255,255,0.10)_79.77%)]"
              } shadow-[0px_4px_12px_0px_rgba(0,0,0,0.20)] cursor-pointer`}
            >
              <div className="flex justify-between items-center">
                <p className="text-[#0F114C] font-rubik text-[14px] sm:text-[16px] font-medium">
                  {item.question}
                </p>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#0F114C]" />
                ) : (
                  <FaChevronDown className="text-[#0F114C]" />
                )}
              </div>
              {activeIndex === index && (
                <p className="text-[#5E5E5E] font-rubik text-[12px] sm:text-[14px] font-normal mt-2">
                  {item.answer}
                </p>
              )}
            </div>
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
