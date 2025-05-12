import {
  SideRightCircleIcon,
  SideLeftArrowLeftIcon,
  SideRightCrossIcon,
} from "../Icons/HeroIcons";

interface Person {
  name?: string;
  idLine?: string;
  phoneNumber?: string;
}

export default function ContactPerson() {
  const Person1: Person[] = [
    {
      name: "Person",
      idLine: "clickablecontact",
      phoneNumber: "0853121212123",
    },
  ];

  const Person2: Person[] = [
    {
      name: "Person",
      idLine: "clickablecontact",
      phoneNumber: "0853121212123",
    },
  ];

  const Person3: Person[] = [
    {
      name: "Person",
      idLine: "clickablecontact",
      phoneNumber: "0853121212123",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 mb-10 relative mt-8">
      <div className="absolute left-12 top-0 md:w-0 w-1/2">
        <SideRightCircleIcon />
      </div>
      <h2 className="uppercase lg:text-4xl text-2xl font-bold text-[#0F114C] lg:tracking-[10px] tracking-[5px]">
        Contact Person
      </h2>
      <p className="mt-4 text-[#5E5E5E] font-rubik text-sm sm:text-base lg:text-lg font-normal tracking-[0.02em] text-center mx-4 lg:w-2/5 w-3/4 mb-10">
        Need more help or want to reach out directly? Connect with our contact
        person for personalized support and assistance.
      </p>
      <div className="md:absolute flex top-72 md:top-48 md:right-12 mb-4">
        <SideLeftArrowLeftIcon />
      </div>
      <div className="flex flex-col-reverse lg:flex-col items-center w-full">
        <div className="lg:flex-row flex-col flex items-center lg:justify-evenly justify-center container mx-auto px-4 lg:pt-10 pt-10 gap-6 pb-24">
          <div className="rounded-xl flex flex-col lg:flex-row border-[#ACACAC] border lg:w-3/4 w-3/4 p-4 lg:pr-20 lg:justify-between items-center">
            <img
              src="/image/contactIcon.png"
              alt="Contact Person"
              className="lg:w-24 lg:h-24 w-20 h-20 my-auto"
            />
            <div className="flex flex-col gap-2 p-4 items-center lg:items-start">
              {Person1.map((person) => (
                <p
                  key={person.name}
                  className="font-semibold lg:text-xl text-lg text-center"
                >
                  {person.name}
                </p>
              ))}
              <div className="flex items-center gap-2">
                <img src="/image/lineIcon.png" className="w-6 h-6" alt="" />
                {Person1.map((person) => (
                  <a
                    href="#"
                    key={person.idLine}
                    className="text-sm lg:text-lg"
                  >
                    {person.idLine}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <img src="/image/whatsappIcon.png" className="w-6 h-6" alt="" />
                {Person1.map((person) => (
                  <a
                    href="#"
                    key={person.phoneNumber}
                    className="text-sm lg:text-lg"
                  >
                    {person.phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl flex flex-col lg:flex-row border-[#ACACAC] border lg:w-3/4 w-3/4 p-4 lg:pr-20 lg:justify-between items-center">
            <img
              src="/image/contactIcon.png"
              alt="Contact Person"
              className="lg:w-24 lg:h-24 w-20 h-20 my-auto"
            />
            <div className="flex flex-col gap-2 p-4 items-center lg:items-start">
              {Person2.map((person) => (
                <p
                  key={person.name}
                  className="font-semibold lg:text-xl text-lg text-center"
                >
                  {person.name}
                </p>
              ))}
              <div className="flex items-center gap-2">
                <img src="/image/lineIcon.png" className="w-6 h-6" alt="" />
                {Person2.map((person) => (
                  <a
                    href="#"
                    key={person.idLine}
                    className="text-sm lg:text-lg"
                  >
                    {person.idLine}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <img src="/image/whatsappIcon.png" className="w-6 h-6" alt="" />
                {Person2.map((person) => (
                  <a
                    href="#"
                    key={person.phoneNumber}
                    className="text-sm lg:text-lg"
                  >
                    {person.phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl flex flex-col lg:flex-row border-[#ACACAC] border lg:w-3/4 w-3/4 p-4 lg:pr-20 lg:justify-between items-center">
            <img
              src="/image/contactIcon.png"
              alt="Contact Person"
              className="lg:w-24 lg:h-24 w-20 h-20 my-auto"
            />
            <div className="flex flex-col gap-2 p-4 items-center lg:items-start">
              {Person3.map((person) => (
                <p
                  key={person.name}
                  className="font-semibold lg:text-xl text-lg text-center"
                >
                  {person.name}
                </p>
              ))}
              <div className="flex items-center gap-2">
                <img src="/image/lineIcon.png" className="w-6 h-6" alt="" />
                {Person3.map((person) => (
                  <a
                    href="#"
                    key={person.idLine}
                    className="text-sm lg:text-lg"
                  >
                    {person.idLine}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <img src="/image/whatsappIcon.png" className="w-6 h-6" alt="" />
                {Person3.map((person) => (
                  <a
                    href="#"
                    key={person.phoneNumber}
                    className="text-sm lg:text-lg"
                  >
                    {person.phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            src="/image/chatbotIcon.png"
            className="w-1/2 md:w-1/3 lg:w-1/4"
            alt=""
          />
        </div>
        <div className="absolute md:left-12 left-[-50px] bottom-0 rotate-90 md:w-0 w-1/2">
          <SideRightCrossIcon />
        </div>
        <div className="absolute md:right-12 right-0 bottom-[-20px]">
          <img src="/image/blueDots.svg" className="w-1/2 md:w-full" alt="" />
        </div>
      </div>
    </section>
  );
}
