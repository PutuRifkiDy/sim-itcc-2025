import { Link } from "react-router-dom"
import { SideLeftArrowLeftIcon, SideRightSmallCircle } from "../Icons/HeroIcons"

export default function RegistrationForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative w-full">
      <div className="w-full max-w-[600px] h-700px relative items-center">
        <div className="mr-96 absolute">
          <SideRightSmallCircle />
        </div>
        <img
          src="/image/blueDots.svg"
          className="absolute -top-44 -left-20 z-10 w-32 flex-shrink-0 rotate-90"
          alt=""
        />
        <div className="bg-white drop-shadow-xl outline outline-[3px] outline-[#E6E6E6] rounded-lg shadow-lg p-8 w-[90%] md:w-[600px] z-20 relative mx-auto">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/image/ideBisnisLogo.png"
              alt="Seminar Nasional"
              className="w-32 h-32 md:w-44 md:h-44"
            />
            <h2 className="text-[#0066FF] text-2xl font-bold">Seminar Nasional</h2>
            <p className="text-black font-medium">Registration</p>

            <div className="w-full mt-4">
              <p className="text-black font-medium mb-4">Choose event type</p>
              <div className="flex gap-8">
                <label className="flex gap-2">
                  <input type="radio" name="eventType" value="online" />
                  <span>Online</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="eventType" value="offline" />
                  <span>Offline</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 w-full mt-6">
              <Link to="/semnas" className="w-1/2">
                <button className="w-full py-2 border border-[#0F114C] rounded-lg">
                  Back
                </button>
              </Link>
              <button className="w-1/2 py-2 bg-[#0F114C] text-white rounded-lg">
                Register
              </button>
            </div>
            <div className="w-full">
              <p className="text-xs text-gray-500 mt-4 text-start">*You can cancel this ticket before you pay</p>
            </div>
          </div>
        </div>
        <img
          src="/image/blueDots.svg"
          className="absolute -bottom-20 -right-20 z-10 w-32 flex-shrink-0"
          alt=""
        />
        <div className="w-full mt-10">
          <SideLeftArrowLeftIcon />
        </div>
      </div>
    </div>
  )
}
