export default function HeroSection() {
  return <section className="w-full h-full">
    <div className="md:flex-row flex-col flex items-center justify-center container md:pt-32 pt-10 gap-10 pb-20 mx-auto">
      <div className="flex flex-row md:translate-y-[-50px]">
        <div className="h-0">
          <img src="/image/hero/ITCCMascot.png" alt="ITCC 2025 Mascot" className="w-32 md:w-72 lg:translate-y-[-120px] translate-y-[-10px]" />
        </div>
        <div>
          <h2 className=" text-indigo-950 lg:text-7xl text-4xl font-extrabold font-['Rubik'] uppercase  tracking-[4px] [text-shadow:_6px_4px_9px_rgb(0_0_0_/_0.54)]">ITCC</h2>
          <div className="flex flex-row lg:items-start items-center">
            <div className="lg:w-16 lg:h-32 w-8 h-20 md:px-7 md:py-1 bg-gradient-to-l from-indigo-950 to-sky-800 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center">
              <div className="-rotate-90 text-center justify-center text-white lg:text-4xl text-xl font-extrabold font-['Rubik'] uppercase leading-[57.60px] tracking-widest">2025</div>
            </div>
            <p className="text-neutral-700 font-rubik lg:text-xl text-sm font-semibold ml-4 md:w-60 w-30">Innovation of Technology to Build the Digital Capabilities of Indonesia's Generation </p>
          </div>
          <div className="flex flex-row gap-x-3 mt-2 ml-auto">
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#0F114C]"></div>
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#0F114C]"></div>
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#0F114C]"></div>
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#0F114C]"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative ml-4">
          <div className="absolute top-4 right-[-10px] flex flex-row gap-2 w-18 ml-4">
            <div className="lg:w-6 w-2 -rotate-[150deg]">
              <img src="/image/about/bluePlus.png" alt="" />
            </div>
            <div className="lg:w-6 w-2 -rotate-[150deg]">
              <img src="/image/about/bluePlus.png" alt="" />
            </div>
            <div className="lg:w-6 w-2 -rotate-[150deg]">
              <img src="/image/about/bluePlus.png" alt="" />
            </div>
            <div className="lg:w-6 w-2 -rotate-[150deg]">
              <img src="/image/about/bluePlus.png" alt="" />
            </div>
          </div>
          <img src="/image/hero/heroPictures.png" className="lg:w-[450px] w-[300px]" alt="ITCC" />
        </div>
        <div className="flex justify-end mt-4">
          <div className="lg:w-10 lg:h-10 w-5 h-5 bg-[#0F114C] rounded-full flex items-center justify-center">
            <div className="lg:w-8 lg:h-8 w-4 h-4 bg-[#0F114C] rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
