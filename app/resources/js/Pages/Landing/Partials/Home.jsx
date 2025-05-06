import { SideLeftArrowLeftIcon, SideLeftCrookedCrossIcon, SideRightCircleIcon, SideRightCrossIcon, SideRightDotIcon, SideRightSquareIndexOne, SideRightSquareIndexThree, SideRightSquareIndexTwo } from "@/Components/IconGuest";

export default function Home() {
  return (
    <section className="px-12">
      <div className="flex flex-row justify-center md:justify-between">

        {/* side left */}
        <div className="w-full flex flex-col">
          <SideLeftCrookedCrossIcon />

          <div className="relative flex md:flex-row flex-col items-center md:gap-0 gap-2 md:items-start">
            <div className="flex justify-center items-center md:block">
              <img src="assets/images/landing/ITCCMascot.png" className="w-[156.09px] h-[151.77px]" alt="" />
            </div>
            <h1 className="font-extrabold text-[80px] tracking-[0.05em] leading-[1.2em] text-[#0F114C] [text-shadow:_6px_4px_9px_rgb(0_0_0_/_0.54)] md:absolute flex justify-center items-center top-8 left-40">
              ITCC
            </h1>
            <div className="flex flex-row justify-center items-center bg-gradient-to-l from-indigo-950 to-sky-800 px-4 md:w-16 md:h-40 w-full h-20 m md:absolute left-40 top-32 rounded-[10px]">
              <h1 className="md:-rotate-90 rotate-0 font-extrabold text-[48px] tracking-[0.05em] leading-[1.2em] text-white ">
                2025
              </h1>
            </div>
            <p className="font-semibold text-[21px] leading-[35px] text-[#3A3A3A] md:absolute md:text-start text-center top-32 left-60 w-[273px] h-[140px]">
              Innovation of Technology to Build the Digital Capabilities of Indonesia's Generation
            </p>
            <div className="md:absolute flex top-72 left-60">
              <SideLeftArrowLeftIcon />
            </div>
          </div>
        </div>

        {/* side right */}
        <div className="w-full md:block hidden">
          <div className="relative">
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
              <img src="assets/images/landing/right-side-index-3.png" className="w-[254px] h-[284px]" alt="" />
            </div>
            <div className="absolute top-12 right-64 z-40">
              <img src="assets/images/landing/right-side-index-2.png" className="w-[235px] h-[132px]" alt="" />
            </div>
            <div className="absolute top-48 right-64 z-40">
              <img src="assets/images/landing/right-side-index-1.png" className="w-[169px] h-[230px]" alt="" />
            </div>
            <div className="absolute top-96 right-16 z-40">
              <SideRightCircleIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
