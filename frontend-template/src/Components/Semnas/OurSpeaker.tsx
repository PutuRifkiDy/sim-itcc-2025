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
    <section className="w-full min-h-[722px] bg-white flex-shrink-0 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
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
              <p className="absolute text-[48px] text-[#615959] font-bold opacity-10 z-0 select-none rotate-[15deg] whitespace-nowrap inset-0 m-auto text-center pointer-events-none">
                SPEAKER
              </p>

              <div className="relative z-10">
                <h2 className="text-xl font-bold text-[#0F114C]">
                  {speaker.name}
                </h2>
                <p className="text-sm text-gray-700">{speaker.title}</p>
              </div>

              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute bottom-0 left-0 w-[180px] h-auto z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpeaker;
