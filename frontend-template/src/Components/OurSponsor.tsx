import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const sponsors = [
  { name: "Dana", src: "/sponsors/dana.png" },
  { name: "Tokopedia", src: "/sponsors/tokopedia.png" },
  { name: "Shopee", src: "/sponsors/shopee.png" },
  { name: "Lazada", src: "/sponsors/lazada.png" },
  { name: "CompanyX", src: "/sponsors/companyx.png" },
];

const OurSponsor: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 20 },
      },
    },
  });

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 1000);

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="flex flex-col justify-center items-center gap-6 w-full py-16 sm:py-20 md:py-24 bg-white text-center px-4 sm:px-6 md:px-12">
      <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-[#0F114C] font-rubik font-bold leading-[120%] tracking-[0.36em] uppercase">
        Our Sponsors
      </h2>

      <p className="text-[#5E5E5E] font-rubik text-sm sm:text-base md:text-lg font-normal leading-[160%] tracking-[0.02em] w-[90%] sm:w-[80%] md:w-[653px] max-w-full">
        As a sponsor, we’re promising reach to thousands of people who are
        interested in your brand. What better way to get your brand in front of
        people.
      </p>

      <a
        href="#contact"
        className="inline-block text-[#0F114C] font-rubik text-sm sm:text-base md:text-lg font-normal leading-[120%] tracking-[0.02em] underline decoration-solid decoration-[#0F114C] decoration-1 underline-offset-[2px]"
      >
        Contact us to become a sponsor →
      </a>

      {/* Sponsor Slider */}
      <div ref={sliderRef} className="keen-slider mt-8 sm:mt-10 md:mt-12">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="keen-slider__slide border rounded-lg p-4 sm:p-6 md:p-8 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={sponsor.src}
              alt={sponsor.name}
              className="max-h-6 sm:max-h-10 md:max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSponsor;
