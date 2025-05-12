const speakers = [
  {
    name: "Speaker 1",
    title: "Community Specialist at Pintu",
    image: "/image/person.png",
  },
  {
    name: "Speaker 2",
    title: "Community Specialist at Pintu",
    image: "/image/person.png",
  },
  {
    name: "Speaker 3",
    title: "Community Specialist at Pintu",
    image: "/image/person.png",
  },
];

const OurSpeaker = () => {
  return (
    <section className="w-full min-h-[722px] bg-white flex-shrink-0 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 mt-8">
      <div className="h-full flex flex-col justify-center items-center text-center py-10">
        <h1 className="text-[36px] leading-[43.2px] font-bold tracking-[5.76px] uppercase text-center font-[Rubik] text-[#0F114C]">
          OUR SPEAKER
        </h1>
        <p className="mt-6 max-w-[653px] text-[#5E5E5E] text-center font-[Rubik] text-[16px] font-normal leading-[28.8px] tracking-[0.32px]">
          Get inspired by our amazing speakers! Learn from experts, leaders, and
          changemakers as they share insights, stories, and experiences to spark
          your growth.
        </p>

        {/* Card Container */}
        <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative rounded-[10px] border border-[#0F114C] bg-white w-[280px] h-[360px] flex-shrink-0 p-4 overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 flex flex-col justify-end items-end z-0 pointer-events-none pr-4 pb-4">
                <p className="text-[48px] text-[#A0A0A0] font-bold opacity-10 select-none rotate-[-42.783deg] whitespace-nowrap text-right">
                  SPEAKER
                </p>
                <p className="text-[48px] text-[#A0A0A0] font-bold opacity-10 select-none rotate-[-42.783deg] whitespace-nowrap text-right">
                  SPEAKER
                </p>
                <p className="text-[48px] text-[#A0A0A0] font-bold opacity-10 select-none rotate-[-42.783deg] whitespace-nowrap text-right">
                  SPEAKER
                </p>
              </div>

              <div className="relative z-10">
                <h2 className="text-xl font-bold text-[#0F114C]">
                  {speaker.name}
                </h2>
                <p className="text-sm text-gray-700">{speaker.title}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-[180px] h-auto z-10">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="relative w-full h-full object-cover z-10"
                />
                <div className="absolute inset-0 rounded-full bg-[#0F114C] opacity-20 blur-lg z-0"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-[180px] h-[180px] flex items-center justify-center z-20">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xl font-bold">?</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpeaker;
