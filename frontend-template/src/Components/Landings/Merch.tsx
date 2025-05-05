import { ArrowRightIcon } from "../Icons/MerchIcons";

export default function Merch() {
  return (
    <section className="flex flex-col items-center md:pl-12 py-10">
      <div className="text-center md:mb-0 mb-10 md:w-[600px] w-full">
        <h2 className="uppercase md:text-4xl text-2xl font-bold text-[#0F114C] md:tracking-[10px] tracking-[5px]">
          Our Merchandise
        </h2>
        <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base md:text-lg font-normal tracking-[0.02em]">
          Support us and show your pride by getting our official merchandise.
          High-quality, stylish, and made just for you — wear it and be part of
          the community!
        </p>
      </div>

      <div className="flex md:flex-row flex-col-reverse justify-between md:mt-24 mt-4">
        <div className="relative flex flex-col justify-center gap-8 w-full">
          <h1 className="font-bold text-[33px] leading-[1.2em] tracking-[0.16em] text-[#000000] uppercase md:text-start text-center">
            ITCC 2025 Merchandise
          </h1>
          <p className="font-reguler text-[17px] tracking-[0.04em] leading-[1.5em] text-[#121212] md:w-[427px] max-w-[700px] md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur. Enim sagittis ac quam nunc viverra maecenas semper ullamcorper quis. Facilisi diam tortor bibendum porta.
          </p>
          <div className="flex md:flex-row flex-col md:gap-7 gap-5 justify-center md:justify-start">
            <button className="bg-[#0F114C] text-white px-6 py-2 rounded-[10px] font-semibold">
              Buy Now{" "}
              <img src="/image/rightArrow.svg" className="inline ml-4" alt="" />
            </button>
            <button className="border border-[#0F114C] px-6 py-2 rounded-[10px] text-[#0F114C] font-semibold">
              Get to know
            </button>
          </div>
          <img
            src="/image/about/bluePlus.png"
            className="absolute bottom-0 left-0 md:w-10 w-6 rotate-30 hidden md:inline"
            alt=""
          />
          {/* <img src="/image/rightArrow.svg" className="inline ml-4" alt="" /> */}
          <div className="absolute bottom-0 left-48">
            <ArrowRightIcon />
          </div>
        </div>

        <div className="relative ">
          <img src="/image/merch/merchBackground.png" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/image/merch/ITCCmerch.png"
              className="relative md:w-[556px] w-48 md:ml-32 md:mr-16 ml-6"
              alt="ITCC 2025 Merch"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
