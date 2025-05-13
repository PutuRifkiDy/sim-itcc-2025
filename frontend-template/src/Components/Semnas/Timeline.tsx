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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  x="26.5"
                  y="26.5"
                >
                  <path
                    d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                    fill="white"
                  />
                </svg>
              </svg>
              <div className="absolute left-18 sm:absolute left-24 top-[55%] -translate-y-1/2 hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                >
                  <path
                    d="M16.0423 6.8763V2.29297H20.6257V6.8763H34.3757V2.29297H38.959V6.8763H48.1257C49.3913 6.8763 50.4173 7.90233 50.4173 9.16797V20.6263H45.834V11.4596H38.959V16.043H34.3757V11.4596H20.6257V16.043H16.0423V11.4596H9.16732V43.543H22.9173V48.1263H6.87565C5.61001 48.1263 4.58398 47.1003 4.58398 45.8346V9.16797C4.58398 7.90233 5.61001 6.8763 6.87565 6.8763H16.0423ZM38.959 27.5013C33.8965 27.5013 29.7923 31.6054 29.7923 36.668C29.7923 41.7305 33.8965 45.8346 38.959 45.8346C44.0215 45.8346 48.1257 41.7305 48.1257 36.668C48.1257 31.6054 44.0215 27.5013 38.959 27.5013ZM25.209 36.668C25.209 29.0741 31.3651 22.918 38.959 22.918C46.5529 22.918 52.709 29.0741 52.709 36.668C52.709 44.2619 46.5529 50.418 38.959 50.418C31.3651 50.418 25.209 44.2619 25.209 36.668ZM36.6673 29.793V37.6172L41.9219 42.8717L45.1628 39.6309L41.2507 35.7188V29.793H36.6673Z"
                    fill="#ACACAC"
                  />
                </svg>
              </div>
              <div className="absolute top-1/2 left-12 sm:left-[200px] right-8 sm:right-16 h-[2px] bg-[var(--Blue-Primary,#3a3a3a)] transform -translate-y-1/2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
