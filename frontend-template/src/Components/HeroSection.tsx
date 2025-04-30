export default function HeroSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side */}
      <div className="max-w-lg text-center md:text-left">
        <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
          <img src="/logo-itcc.png" alt="ITCC Logo" className="w-20 h-20" />
          <h1 className="text-4xl font-bold text-blue-900">ITCC</h1>
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
          <div className="bg-blue-700 text-white font-bold px-3 py-1 rounded-md text-lg">
            2025
          </div>
          <div className="flex gap-1 text-blue-800 text-xl">
            <span>▶</span>
            <span>▶</span>
            <span>▶</span>
          </div>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Innovation of Technology to Build the Digital Capabilities of
          Indonesia's Generation
        </p>
      </div>

      {/* Right Side */}
      <div className="relative w-full max-w-2xl flex justify-center">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[#23347A] -z-10"></div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/photo1.jpg"
            alt="Presentation 1"
            className="rounded-md shadow-md"
          />
          <img
            src="/photo2.jpg"
            alt="Presentation 2"
            className="rounded-md shadow-md"
          />
          <img
            src="/photo3.jpg"
            alt="Presentation 3"
            className="rounded-md shadow-md col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
