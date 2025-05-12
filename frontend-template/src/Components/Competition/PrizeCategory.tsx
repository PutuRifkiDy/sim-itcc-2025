import { SideRightCrossIcon, SideLeftCrookedCrossIcon, SideLeftArrowLeftIcon } from "../Icons/HeroIcons"

export default function PrizeCategory() {
  return (
    <section className="flex flex-col items-center py-20 mb-10 relative mt-4 min-h-[500px]">
      <div className="absolute md:left-12 left-[-70px] top-32 rotate-90 md:w-0 w-1/2">
        <SideRightCrossIcon />
      </div>
      <h2 className="uppercase lg:text-4xl text-2xl font-bold text-[#0F114C] lg:tracking-[10px] tracking-[5px]">
        Prize Category
      </h2>
      <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base lg:text-lg font-normal tracking-[0.02em] text-center mx-4 lg:w-2/5 w-3/4 mb-10">
        We&apos;ve prepared exciting rewards for the best! Explore the prize categories and see what&apos;s waiting for the winners of each competition track.
      </p>
      <div className="absolute md:right-20 right-10 top-4 md:top-44 -translate-y-1/2">
        <SideLeftCrookedCrossIcon />
      </div>
      <div className="h-full w-full px-4 flex items-end pb-10">
        <div className="flex justify-center gap-6 md:gap-14 w-full">
          <div className="flex flex-col items-center mt-auto">
            <img src="/image/competition/silverTrophy.png" alt="Second Place Trophy" className="md:w-32 md:h-32 w-24 h-24 mb-4" />
            <p className="md:text-2xl text-base font-bold mb-2 tracki-widest">Rp 1.000.000</p>
            <div className="md:w-40 w-24 h-[250px] md:h-[350px] bg-gradient-to-b from-indigo-900 to-cyan-800 rounded-t-lg relative">
              <div className="bg-white text-[#0F114C] px-2 md:px-4 py-1 rounded-full md:text-sm text-xs font-medium w-fit mx-auto mt-4">
                Juara II
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-auto">
            <img src="/image/competition/goldTrophy.png" alt="First Place Trophy" className="md:w-32 md:h-32 w-24 h-24 mb-4" />
            <p className="md:text-2xl text-base font-bold mb-2">Rp 2.000.000</p>
            <div className="md:w-40 w-24 h-[350px] md:h-[500px] bg-gradient-to-b from-indigo-900 to-cyan-800 rounded-t-lg relative">
              <div className="bg-[#FFF3CC] text-[#FFC300] px-2 md:px-4 py-1 rounded-full md:text-sm text-xs font-medium w-fit mx-auto mt-4">
                Juara I
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-auto">
            <img src="/image/competition/bronzeTrophy.png" alt="Third Place Trophy" className="md:w-32 md:h-32 w-24 h-24 mb-4" />
            <p className="md:text-2xl text-base font-bold mb-2">Rp 900.000</p>
            <div className="md:w-40 w-24 h-[200px] md:h-[250px] bg-gradient-to-b from-indigo-900 to-cyan-800 rounded-t-lg relative">
              <div className="bg-[#FFDBD2] text-[#CB3B28] px-2 md:px-4 py-1 rounded-full md:text-sm text-xs font-medium w-fit mx-auto mt-4">
                Juara III
              </div>
            </div>
          </div>
          <div className="md:absolute md:flex md:bottom-20 md:left-12 mb-4 hidden">
            <SideLeftArrowLeftIcon />
          </div>
        </div>
      </div>
    </section>
  )
}