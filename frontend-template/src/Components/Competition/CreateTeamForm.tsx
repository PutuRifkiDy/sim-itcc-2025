import { Link } from "react-router-dom"
import { SideLeftArrowLeftIcon, SideRightSmallCircle, SideRightCircleIcon, SideRightCrossIcon } from "../Icons/HeroIcons"

export default function CreateTeamForm() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative w-full">
            <div className="w-full max-w-[600px] h-700px relative items-center">
                <div className="hidden md:flex md:absolute md:-top-20 md:right-10 lg:-top-14 lg:-right-96 md:z-30">
                    <SideRightSmallCircle />
                </div>
                <img
                    src="/image/blueDots.svg"
                    className="hidden md:flex md:absolute md:top-[-40] lg:-top-44 md:-left-20 md:z-10 md:lg:w-32 md:flex-shrink-0 md:rotate-90"
                    alt=""
                />
                <div className="bg-white drop-shadow-xl outline outline-[3px] outline-[#E6E6E6] rounded-lg shadow-lg p-8 w-[90%] lg:w-[600px] z-20 relative mx-auto">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src="/image/ideBisnisLogo.png"
                            alt="Seminar Nasional"
                            className="w-32 h-32 lg:w-44 lg:h-44"
                        />
                        <h2 className="text-[#0F114C] text-2xl font-bold">Ide Bisnis</h2>
                        <p className="text-black font-medium">Insert Team Name</p>
                        <input
                            type="text"
                            placeholder="Insert Team Name"
                            className="w-full px-4 py-2 border border-[#818181] rounded-lg focus:outline-none focus:border-[#0F114C] text-base"
                        />
                        <div className="flex gap-4 w-full">
                            <Link to="/competition/registration" className="w-1/2">
                                <button className="w-full py-2 border border-[#0F114C] rounded-lg">
                                    Back
                                </button>
                            </Link>
                            <button className="w-1/2 py-2 bg-[#0F114C] text-white rounded-lg">
                                Register
                            </button>
                        </div>
                        <div className="w-full">
                            <p className="text-xs text-black mt-4 text-start">*Only the team leader creates the team.</p>
                        </div>
                    </div>
                </div>
                <img
                    src="/image/blueDots.svg"
                    className="hidden md:flex md:absolute md:right-10 md:-bottom-20 md:z-10 md:w-32 md:flex-shrink-0"
                    alt=""
                />
                <div className="hidden md:flex md:w-full md:mt-10">
                    <SideLeftArrowLeftIcon />
                </div>
            </div>
            <div className="hidden md:flex flex-col absolute -bottom-32 left-20 z-3">
                <SideRightCircleIcon />
                <SideRightCircleIcon />
                <SideRightCircleIcon />
                <SideRightCircleIcon />
            </div>
            <div className="hidden md:flex flex-col absolute md:-bottom-32 md:right-20 z-3">
                <SideRightCrossIcon />
            </div>
        </div>
    )
}
