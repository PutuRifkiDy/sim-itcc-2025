const Timeline = () => {
  return (
    <section className="bg-white w-full max-w-[1200px] h-[1100px] flex-shrink-0 mx-auto px-4 sm:px-8">
      <h1 className="text-center text-[var(--Blue-Primary,#0F114C)] font-rubik text-3xl sm:text-4xl font-bold leading-[120%] tracking-[5.76px] uppercase">
        TIMELINE
      </h1>
      <p className="mx-auto mt-4 text-center text-[#5E5E5E] font-rubik text-base font-normal leading-[180%] tracking-[0.32px] max-w-[653px]">
        Stay on track with our event schedule. From registration to the final
        announcement, here’s everything you need to know about important dates.
      </p>
      <div className="h-16" />
      <div
        className="relative flex flex-col items-center mt-12"
        style={{ gap: "96px" }}
      >
        {/* Vertical blue line */}
        <div className="absolute left-[26%] sm:left-[22%] -translate-x-1/2 top-0 bottom-0 flex items-center z-0">
          <div
            className="w-2 bg-[var(--Blue-Primary,#0F114C)] h-full rounded-full"
            style={{ minHeight: "100%", width: "4px" }}
          />
        </div>
        {/* Timeline items */}
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="relative z-10 flex items-center w-full max-w-[900px]"
          >
            {/* Rectangle */}
            <div className="relative flex-1 h-[160px] rounded-[10px] border border-[var(--Blue-Primary,#0F114C)] bg-white flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 92 92"
                fill="none"
                className="absolute -top-6 left-20 sm:left-24 w-12 h-12 sm:w-16 sm:h-16"
              >
                <circle
                  cx="46"
                  cy="46"
                  r="46"
                  fill="url(#paint0_linear_784_48881)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_784_48881"
                    x1="46"
                    y1="0"
                    x2="46"
                    y2="92"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0F114C" />
                    <stop offset="1" stopColor="#00658F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
