export default function Merch() {
    return (
        <section className="flex flex-col items-center py-10 z-100">
            <div className="text-center md:mb-0 mb-10 md:w-[600px] w-[350px]">
                <h2 className="uppercase md:text-4xl text-2xl font-bold text-[#0F114C] md:tracking-[10px] tracking-[5px]">
                    Our Merchandise
                </h2>
                <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base md:text-lg font-normal tracking-[0.02em]">
                    Support us and show your pride by getting our official merchandise. High-quality, stylish, and made just for you — wear it and be part of the community!
                </p>
            </div>

            <div className="md:flex-row flex-col flex items-center justify-center gap-4 container md:translate-y-[-40px] md:pl-32">
                <div className="lg:w-[750px] w-[350px]">
                    <h2 className="uppercase text-2xl font-bold text-[#0F114C] tracking-[5px] text-center md:text-start">
                        ITCC 2025 Merchandise
                    </h2>
                    <p className="text-center md:text-start mt-4 text-[#121212] font-rubik text-sm sm:text-base md:text-lg font-normal tracking-[0.02em]">
                        Lorem ipsum dolor sit amet consectetur. Enim sagittis ac quam nunc viverra maecenas semper ullamcorper quis. Facilisi diam tortor bibendum porta.
                    </p>
                    <div className="flex gap-4 mt-6 justify-center md:justify-start">
                        <button className="bg-[#0F114C] text-white px-6 py-2 rounded font-semibold">Buy Now <img src="/image/rightArrow.svg" className="inline ml-4" alt="" /></button>
                        <button className="border border-[#0F114C] px-6 py-2 rounded text-[#0F114C] font-semibold">Get to know</button>
                    </div>
                    <img src="/image/about/bluePlus.png" className="absolute left-0 md:w-10 w-6 rotate-30 hidden md:inline" alt="" />
                </div>

                <div className="relative md:w-5/6 w-[400px] h-[400px] md:h-[800px] mt-10 mr-4 md:mr-0" style={{
                    backgroundImage: `url('/image/merch/merchBackground.png'), url('/image/merch/linear.png')`,
                    backgroundSize: 'contain, contain',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'center, center',
                }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src="/image/merch/ITCCmerch.png"
                            className="relative md:w-[400px] w-48 md:ml-40 md:mr-24 ml-10"
                            alt="ITCC 2025 Merch"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
