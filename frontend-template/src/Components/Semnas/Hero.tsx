import { useState } from "react";

import {
  SideLeftArrowLeftIcon,
  SideLeftCrookedCrossIcon,
  SideRightCircleIcon,
  SideRightCrossIcon,
  SideRightDotIcon,
  SideRightSquareIndexOne,
  SideRightSquareIndexThree,
  SideRightSquareIndexTwo,
} from "../Icons/HeroIcons";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="px-4 md:px-12 mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
        <div className="w-full flex flex-col">
          <div className="flex flex-col items-start relative">
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M7.0451 22.9569C6.00042 21.9122 5.17174 20.672 4.60637 19.3071C4.04099 17.9422 3.75 16.4793 3.75 15.0019C3.75 13.5245 4.04099 12.0616 4.60637 10.6967C5.17174 9.33173 6.00042 8.09154 7.0451 7.04688M22.9551 7.04688C23.9998 8.09154 24.8285 9.33173 25.3938 10.6967C25.9592 12.0616 26.2502 13.5245 26.2502 15.0019C26.2502 16.4793 25.9592 17.9422 25.3938 19.3071C24.8285 20.672 23.9998 21.9122 22.9551 22.9569M10.5801 19.4206C9.4084 18.2486 8.75018 16.6592 8.75018 15.0019C8.75018 13.3446 9.4084 11.7552 10.5801 10.5831M19.4201 10.5831C20.5918 11.7552 21.25 13.3446 21.25 15.0019C21.25 16.6592 20.5918 18.2486 19.4201 19.4206M16.2501 15.0019C16.2501 15.3334 16.1184 15.6513 15.884 15.8858C15.6496 16.1202 15.3316 16.2519 15.0001 16.2519C14.6686 16.2519 14.3506 16.1202 14.1162 15.8858C13.8818 15.6513 13.7501 15.3334 13.7501 15.0019C13.7501 14.6704 13.8818 14.3524 14.1162 14.118C14.3506 13.8836 14.6686 13.7519 15.0001 13.7519C15.3316 13.7519 15.6496 13.8836 15.884 14.118C16.1184 14.3524 16.2501 14.6704 16.2501 15.0019Z"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-black text-sm font-normal tracking-[0.48px] font-[Rubik]">
                ONLINE
              </span>
              <div className="absolute right-0 top-1 -translate-y-1/2">
                <SideLeftCrookedCrossIcon />
              </div>
            </div>

            <div className="h-2" />

            <span className="text-[#0F114C] text-2xl md:text-[36px] font-bold leading-[120%] tracking-[3px] md:tracking-[5.76px] uppercase font-[Rubik]">
              SEMINAR NASIONAL
            </span>
            <div className="h-4" />

            <div
              className="w-full max-w-[350px] h-auto md:h-[74px] py-3 px-4 rounded-[10px] flex justify-between items-center"
              style={{
                background: "linear-gradient(90deg, #0F114C 0%, #00658F 100%)",
              }}
            >
              <div className="flex flex-col items-start">
                <span className="text-white font-[Rubik] uppercase text-xs font-bold tracking-widest">
                  CLOSING GELOMBANG 1
                </span>
                <span className="text-[#E6E6E6] text-[10px] font-bold tracking-wide uppercase font-[Rubik]">
                  01 MEI - 02 JUNI
                </span>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-white text-3xl font-extrabold font-[Roboto]">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold font-[Roboto]">
                    Days
                  </span>
                  <span className="text-white text-sm font-semibold font-[Roboto]">
                    Left
                  </span>
                </div>
              </div>
            </div>
            <div className="h-6" />

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <button
                className="flex justify-center items-center w-full max-w-[149px] py-[12px] px-[20px] rounded-[10px]"
                style={{
                  background: "#0F114C",
                }}
              >
                <span className="text-white font-[Rubik] font-bold text-base">
                  Register
                </span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  className="flex justify-center items-center cursor-pointer"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "500px",
                    background: "#00658F",
                    boxShadow: "0px 10px 15px 0px #C8DBFF",
                    flexShrink: 0,
                    border: "none",
                  }}
                  onClick={openModal}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 4L15 10L6 16V4Z" />
                  </svg>
                </button>
                <span className="text-[#0F114C] text-sm font-semibold font-[Rubik] tracking-wide flex-grow flex-shrink-0">
                  How to Join
                </span>
              </div>
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white rounded-lg w-[90%] md:w-[700px] h-[80%] md:h-[450px] flex-shrink-0 relative shadow-xl overflow-hidden">
                    {/* Close Button */}
                    <button
                      className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300 z-50"
                      onClick={closeModal}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4L16 16M16 4L4 16"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold uppercase tracking-wider z-40">
                      How to Join
                    </div>

                    {/* YouTube Video Embed */}
                    <div className="mt-16 h-[calc(100%-60px)]">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/xvFZjo5PgG0?si=Uq1_-POS0iBEixB2"
                        title="How to Join Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative flex md:flex-row flex-col items-center gap-2 md:items-start">
              <div className="hidden md:absolute md:top-40 md:left-160 md:inline-flex md:items-center md:gap-3">
                <SideLeftArrowLeftIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:block hidden relative">
          <div className="flex flex-row justify-end">
            <SideRightCrossIcon />
          </div>
          <div className="absolute top-0 right-32 z-30">
            <SideRightSquareIndexThree />
          </div>
          <div className="absolute top-36 right-60 z-20">
            <SideRightSquareIndexTwo />
          </div>
          <div className="absolute top-48 right-16 z-10">
            <SideRightSquareIndexOne />
          </div>
          <div className="absolute top-40 right-56 z-40">
            <SideRightDotIcon />
          </div>
          <div className="absolute top-12 right-0 z-40">
            <img
              src="/image/hero/right-side-index-3.png"
              className="w-[200px] md:w-[254px] h-auto"
              alt=""
            />
          </div>
          <div className="absolute top-12 right-64 z-40">
            <img
              src="/image/hero/right-side-index-2.png"
              className="w-[180px] md:w-[235px] h-auto"
              alt=""
            />
          </div>
          <div className="absolute top-48 right-64 z-40">
            <img
              src="/image/hero/right-side-index-1.png"
              className="w-[140px] md:w-[169px] h-auto"
              alt=""
            />
          </div>
          <div className="absolute top-96 right-16 z-40">
            <SideRightCircleIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
