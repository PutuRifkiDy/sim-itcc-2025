import { BackButton, BigCircleBg } from "@/Components/MerchandiseIcon"
import { Link, usePage } from "@inertiajs/react"

export default function MerchandiseDetail({ ...props }) {
    const merchandise_detail = usePage().props.merchandise_detail;
    console.log(merchandise_detail);
    
    return (
        <section className="min-h-screen px-4 md:px-12 py-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <BigCircleBg />
            </div>
            <div className="flex items-center gap-2 mb-8">
                <Link href={`${window.location.origin}/merchandise`}>
                    <BackButton />
                </Link>
                <h2 className="text-lg font-medium">Back</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                <div className="flex-1">
                    <div className="bg-white rounded-lg pb-6 shadow-lg border-2 border-[#808080]">
                        <img
                            src={`${merchandise_detail.image_path}`}
                            alt="ITCC T-Shirt"
                            className="w-1/2 md:w-ful object-contain mx-auto"
                        />
                    </div>
                    <div className="flex justify-center gap-10 mt-4">
                        <div className="border-2 border-[#808080] bg-white rounded-lg p-4 cursor-pointer">
                            <img
                                src={`${merchandise_detail.image_path}`}
                                alt="Black T-Shirt"
                                className="w-24 h-24 object-contain"
                            />
                            <p className="text-center mt-2">Black</p>
                        </div>
                        <div className="border-2 border-[#808080] bg-white rounded-lg p-4 cursor-pointer">
                            <img
                                src={`${merchandise_detail.image_path}`}
                                alt="White T-Shirt"
                                className="w-24 h-24 object-contain"
                            />
                            <p className="text-center mt-2">White</p>
                        </div>
                        <div className="-z-10 absolute left-24 ">
                            <img src="/image/blueDots.svg" className="w-14" alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="bg-white rounded-lg p-6 shadow-lg h-full border-2 border-[#808080]">
                        <h1 className="text-2xl font-bold text-[#0F114C] mb-4">{merchandise_detail.name}</h1>
                        <p className="text-gray-600 mb-10 md:mb-44">
                            {merchandise_detail.description}
                        </p>
                        <p className="text-2xl md:text-5xl font-semibold mb-6">Rp{merchandise_detail.price.toLocaleString("id-ID")}</p>

                        <button className="w-full bg-[#0F114C] text-white py-3 rounded-lg mb-6 flex items-center justify-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Order Now
                        </button>

                        <div className="space-y-4">
                            <div className="items-center gap-4 rounded-lg p-8 border-2 border-[#808080]">                         
                                <div className="flex mb-4 gap-10 items-center">
                                    <img src={`${window.location.origin}/assets/images/merchandise/preorder-icon.png`} alt="" className="w-10 h-10 m-4" />
                                    <div>
                                        <h3 className="font-medium">Pre-Order Batch I</h3>
                                        <p className="text-sm text-gray-600">{new Date(merchandise_detail.start_date).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            })} - {new Date(merchandise_detail.end_date).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <hr className="w-full h-[2px] bg-[#808080]"></hr>
                                <div className="flex mt-4 gap-[60px] items-center ml-4">
                                    <img src={`${window.location.origin}/assets/images/merchandise/pick-up-icon.png`} alt="" className="w-10 h-10" />
                                    <div>
                                        <h3 className="font-medium">Pick-up Offline</h3>
                                        <p className="text-sm text-gray-600">Gedung Teknologi Informasi, Universitas Udayana, Jimbaran, Bali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
