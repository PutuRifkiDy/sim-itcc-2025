import {
  SideLeftCrookedCrossIcon,
  SideRightCircleIcon,
  SideRightCrossIcon,
} from "../Icons/HeroIcons";

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
    <section className="relative w-full max-w-[1200px] mx-auto p-4 py-16 box-border min-h-[650px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 686 686"
        fill="none"
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[400px] h-[400px] hidden sm:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M343.046 685.386C154.167 685.386 0.609375 531.828 0.609375 342.95C0.609375 154.179 154.167 0.621094 343.046 0.621094C531.816 0.621094 685.374 154.179 685.374 342.95C685.374 531.828 531.816 685.386 343.046 685.386ZM343.046 2.34403C155.244 2.34403 2.44022 155.148 2.44022 342.95C2.44022 530.751 155.244 683.555 343.046 683.555C530.847 683.555 683.651 530.751 683.651 342.95C683.651 155.148 530.847 2.34403 343.046 2.34403Z"
          fill="#111827"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 902 902"
        fill="none"
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[600px] h-[600px] hidden sm:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M451.053 901.389C390.211 901.389 331.2 889.436 275.743 865.961C222.116 843.24 173.874 810.827 132.523 769.476C91.1719 728.125 58.7588 679.882 36.0374 626.256C12.5622 570.798 0.609375 511.787 0.609375 450.945C0.609375 390.211 12.5622 331.2 36.0374 275.635C58.7588 222.008 91.1719 173.874 132.523 132.523C173.874 91.1719 222.116 58.6512 275.743 36.0375C331.2 12.4546 390.211 0.609375 451.053 0.609375C511.787 0.609375 570.798 12.4546 626.363 36.0375C679.99 58.6512 728.125 91.1719 769.476 132.523C810.827 173.874 843.347 222.008 865.961 275.635C889.543 331.2 901.389 390.211 901.389 450.945C901.389 511.787 889.543 570.798 865.961 626.256C843.347 679.882 810.827 728.125 769.476 769.476C728.125 810.827 679.99 843.24 626.363 865.961C570.798 889.436 511.787 901.389 451.053 901.389ZM451.053 1.47085C203.163 1.47085 1.57843 203.164 1.57843 450.945C1.57843 698.835 203.163 900.42 451.053 900.42C698.835 900.42 900.527 698.835 900.527 450.945C900.527 203.164 698.835 1.47085 451.053 1.47085Z"
          fill="#111827"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 902 902"
        fill="none"
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[650px] h-[650px] hidden sm:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M451.053 901.389C390.211 901.389 331.2 889.436 275.743 865.961C222.116 843.24 173.874 810.827 132.523 769.476C91.1719 728.125 58.7588 679.882 36.0374 626.256C12.5622 570.798 0.609375 511.787 0.609375 450.945C0.609375 390.211 12.5622 331.2 36.0374 275.635C58.7588 222.008 91.1719 173.874 132.523 132.523C173.874 91.1719 222.116 58.6512 275.743 36.0375C331.2 12.4546 390.211 0.609375 451.053 0.609375C511.787 0.609375 570.798 12.4546 626.363 36.0375C679.99 58.6512 728.125 91.1719 769.476 132.523C810.827 173.874 843.347 222.008 865.961 275.635C889.543 331.2 901.389 390.211 901.389 450.945C901.389 511.787 889.543 570.798 865.961 626.256C843.347 679.882 810.827 728.125 769.476 769.476C728.125 810.827 679.99 843.24 626.363 865.961C570.798 889.436 511.787 901.389 451.053 901.389ZM451.053 1.47085C203.163 1.47085 1.57843 203.164 1.57843 450.945C1.57843 698.835 203.163 900.42 451.053 900.42C698.835 900.42 900.527 698.835 900.527 450.945C900.527 203.164 698.835 1.47085 451.053 1.47085Z"
          fill="#111827"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 902 902"
        fill="none"
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[700px] h-[700px] hidden sm:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M451.053 901.389C390.211 901.389 331.2 889.436 275.743 865.961C222.116 843.24 173.874 810.827 132.523 769.476C91.1719 728.125 58.7588 679.882 36.0374 626.256C12.5622 570.798 0.609375 511.787 0.609375 450.945C0.609375 390.211 12.5622 331.2 36.0374 275.635C58.7588 222.008 91.1719 173.874 132.523 132.523C173.874 91.1719 222.116 58.6512 275.743 36.0375C331.2 12.4546 390.211 0.609375 451.053 0.609375C511.787 0.609375 570.798 12.4546 626.363 36.0375C679.99 58.6512 728.125 91.1719 769.476 132.523C810.827 173.874 843.347 222.008 865.961 275.635C889.543 331.2 901.389 390.211 901.389 450.945C901.389 511.787 889.543 570.798 865.961 626.256C843.347 679.882 810.827 728.125 769.476 769.476C728.125 810.827 679.99 843.24 626.363 865.961C570.798 889.436 511.787 901.389 451.053 901.389ZM451.053 1.47085C203.163 1.47085 1.57843 203.164 1.57843 450.945C1.57843 698.835 203.163 900.42 451.053 900.42C698.835 900.42 900.527 698.835 900.527 450.945C900.527 203.164 698.835 1.47085 451.053 1.47085Z"
          fill="#111827"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 902 902"
        fill="none"
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[850px] h-[850px] hidden sm:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M451.053 901.389C390.211 901.389 331.2 889.436 275.743 865.961C222.116 843.24 173.874 810.827 132.523 769.476C91.1719 728.125 58.7588 679.882 36.0374 626.256C12.5622 570.798 0.609375 511.787 0.609375 450.945C0.609375 390.211 12.5622 331.2 36.0374 275.635C58.7588 222.008 91.1719 173.874 132.523 132.523C173.874 91.1719 222.116 58.6512 275.743 36.0375C331.2 12.4546 390.211 0.609375 451.053 0.609375C511.787 0.609375 570.798 12.4546 626.363 36.0375C679.99 58.6512 728.125 91.1719 769.476 132.523C810.827 173.874 843.347 222.008 865.961 275.635C889.543 331.2 901.389 390.211 901.389 450.945C901.389 511.787 889.543 570.798 865.961 626.256C843.347 679.882 810.827 728.125 769.476 769.476C728.125 810.827 679.99 843.24 626.363 865.961C570.798 889.436 511.787 901.389 451.053 901.389ZM451.053 1.47085C203.163 1.47085 1.57843 203.164 1.57843 450.945C1.57843 698.835 203.163 900.42 451.053 900.42C698.835 900.42 900.527 698.835 900.527 450.945C900.527 203.164 698.835 1.47085 451.053 1.47085Z"
          fill="#111827"
        />
      </svg>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <SideRightCircleIcon />
      </div>

      <div className="absolute top-2 right-2 z-10 hidden sm:block">
        <SideLeftCrookedCrossIcon />
      </div>

      <div className="absolute bottom-6 left-6 z-10 hidden sm:block">
        <SideRightCrossIcon />
      </div>

      <div className="absolute bottom-[1px] right-[1px] z-10 rotate-90 hidden sm:block">
        <SideRightCrossIcon />
      </div>

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
