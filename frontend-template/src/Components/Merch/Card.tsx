const images = [
  "/image/merch/ITCCmerch.png",
  "/image/merch/ITCCmerch.png",
  "/image/merch/ITCCmerch.png",
  "/image/merch/ITCCmerch.png",
  "/image/merch/ITCCmerch.png",
  "/image/merch/ITCCmerch.png",
];

const harga = [50000, 60000, 70000, 80000, 90000, 100000];

const titles = [
  "Merchandise 1",
  "Merchandise 2",
  "Merchandise 3",
  "Merchandise 4",
  "Merchandise 5",
  "Merchandise 6",
];

const Card = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-4 box-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="p-1 rounded-2xl border-4 border-x-gray-100 w-fit mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-[3/4] bg-[#0F114C] w-64">
            <img
              src="/image/ITCC.png"
              alt="Logo ITCC"
              className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg rounded-full p-1"
            />

            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-20 group">
              <span className="text-white font-bold text-lg group-hover:block hidden">
                {titles[idx]}
              </span>
              <span className="block w-14 h-1 bg-[#495190] rounded mt-1 group-hover:block hidden" />
              <span className="text-white text-sm mt-2 group-hover:block hidden font-bold">
                Pre Order Batch 1
              </span>
              <span className="text-white text-sm group-hover:block hidden">
                1 Juni - 10 Juni 2025
              </span>
              <span className="text-white text-xs mt-2 font-bold group-hover:block hidden text-center">
                Pick up offline
              </span>
              <span className="text-white text-xs group-hover:block hidden text-center">
                Gedung Teknologi Informasi
                <br />
                Universitas Udayana
              </span>
            </div>

            <img
              src={img}
              alt={`Card ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-white pb-8">
              <p className="text-lg font-semibold mb-2">
                Rp {harga[idx].toLocaleString("id-ID")}
              </p>
              <button className="bg-[#00658F] hover:bg-[#00658F] text-white px-4 py-2 rounded-full shadow">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
