const Competition = () => {
  const svgLeft = (
    <div className="absolute -top-10 left-0 pl-[28px] flex flex-col gap-4 z-10">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="h-[30px] self-stretch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#0F114C" />
            <circle
              cx="15"
              cy="15.0001"
              r="9.38461"
              fill="#0F114C"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      ))}
    </div>
  );

  const svgRight = (
    <div className="absolute -top-12 right-0 pr-4 z-10">
      <div className="w-[50px] h-[50px] rotate-[31.594deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="69"
          height="69"
          fill="none"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M52.8187 40.2224L40.8405 32.8551L48.2078 20.8769C49.1119 19.4071 48.653 17.482 47.1832 16.5779L44.5214 14.9408C43.0516 14.0367 41.1264 14.4956 40.2224 15.9654L32.8551 27.9436L20.8769 20.5762C19.4071 19.6722 17.482 20.131 16.5779 21.6009L14.9407 24.2627C14.0367 25.7325 14.4955 27.6576 15.9654 28.5617L27.9435 35.929L20.5762 47.9072C19.6722 49.377 20.131 51.3021 21.6008 52.2062L24.2627 53.8433C25.7325 54.7474 27.6576 54.2885 28.5617 52.8187L35.929 40.8405L47.9071 48.2079C49.377 49.1119 51.3021 48.6531 52.2061 47.1832L53.8433 44.5214C54.7474 43.0516 54.2885 41.1265 52.8187 40.2224Z"
              fill="#0F114C"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="50"
                height="50"
                fill="white"
                transform="translate(26.1949) rotate(31.5941)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );

  const competitions = [
    {
      title: "PROGRAMMING",
      image: "/image/Programing.jpg",
      logo: "/image/ITCC.png",
    },
    {
      title: "UI / UX DESIGN",
      image: "/image/UIUX.jpg",
      logo: "/image/ITCC.png",
    },
    {
      title: "LCC",
      image: "/image/LCC.jpg",
      logo: "/image/ITCC.png",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] min-h-screen bg-white mx-auto px-4 py-12">
      <h1 className="text-center text-[#0F114C] font-rubik font-bold uppercase tracking-[0.36em] text-2xl md:text-4xl">
        OUR COMPETITIONS
      </h1>
      <p className="text-[#5E5E5E] text-center font-rubik text-base leading-[180%] max-w-[653px] mt-6 mx-auto">
        Join our exciting competitions and showcase your skills! A perfect
        opportunity to challenge yourself, connect with others, and win amazing
        prizes.
      </p>

      {/* SVG kiri dan kanan */}
      <div className="relative flex justify-between items-center mt-16">
        {svgLeft}
        {svgRight}
      </div>

      {/* Stacked Card Section */}
      <div className="flex flex-col gap-8 mt-[120px]">
        {competitions.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-[1024px] mx-auto h-[450px] rounded-[30px] overflow-hidden 
             bg-gradient-to-r from-[#0F114C] to-[#006693] 
             transition-transform transform 
             hover:scale-105 active:scale-105 focus:scale-105"
          >
            <div className="relative w-full h-full">
              <img
                className="absolute h-full w-full object-cover"
                src={item.image}
                alt={item.title}
              />

              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-l from-[#00658F1A] via-[#00658FE6] to-[#0F114C]" />

              {/* Text content */}
              <div className="absolute top-10 left-10 right-10 md:left-[60px] md:right-[400px]">
                <h2 className="font-bold text-white text-2xl md:text-3xl tracking-wider mb-4">
                  {item.title}
                </h2>
                <p className="text-white text-sm md:text-base lg:text-xl leading-relaxed max-w-xl mt-10">
                  A community of Influencers and Tech Personalities forging a
                  stage where the continent’s brightest minds meet new partners,
                  and the sharpest innovators share their visions.
                </p>
              </div>

              {/* Join button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 absolute bottom-10 right-10 bg-transparent py-2 px-4 rounded-full"
              >
                <span className="font-bold text-white text-lg md:text-xl">
                  Join
                </span>
                <img src="/image/arrow.png" className="w-5 h-4" alt="arrow" />
              </a>

              {/* Logo */}
              <div className="absolute top-8 right-10">
                <img
                  src={item.logo}
                  className="w-[60px] h-[36px] object-cover"
                  alt="Logo"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-[100px] h-[300px] top-[260px] left-0 rotate-[-180deg]">
                <img
                  src="/image/Element1.png"
                  className="absolute w-[60px] h-[180px] top-[120px] left-0 rotate-[180deg] object-cover"
                  alt="Element1"
                />
              </div>

              <div className="absolute w-64 h-[22px] top-[87px] left-[20px] rotate-180">
                <img
                  src="/image/Element2.png"
                  className="absolute w-[270px] h-[22px] top-0 left-0 -rotate-180 object-cover"
                  alt="Element2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competition;
