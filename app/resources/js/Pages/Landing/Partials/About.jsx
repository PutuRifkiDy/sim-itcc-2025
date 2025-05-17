import { SideRightBlueDotIcon } from '@/Components/IconGuest';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic',
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);
    return (
        <section className="w-full min-h-[500px] relative bg-gradient-to-r from-[#0F114C] dark:from-[#100961] to-[#00658F] overflow-hidden md:mt-80 mt-24">
            <img className="md:w-80 w-40 top-0 left-0 absolute" src="assets/images/about/leftEdge.png" />
            <div className="absolute top-0 right-0 flex flex-col items-end w-full" >
                <div className="md:w-96 w-20 h-[2px] bg-white mt-2"></div>
                <div className="md:w-96 w-20 h-[2px] bg-[#00658C]"></div>
                <div className="md:w-48 w-10 h-[2px] mt-4 bg-[#00658C]"></div>
                <div className="md:w-48 w-10 h-[6px] bg-white"></div>
            </div>
            <div className="md:flex-row flex-col flex items-center md:justify-evenly justify-center container mx-auto px-4 md:pt-32 pt-10 gap-8 pb-24">
                <img className="md:w-96 w-60" src="assets/images/about/ITCCLogo.png" alt="ITCC 2025 Logo" data-aos="fade-up" />
                <div className="md:w-[600px] relative">
                    <h2 className="text-[#A5CBD0] text-xl md:text-2xl font-rubik font-bold tracking-[5px] uppercase" data-aos="fade-up" data-aos-delay="100">What is ITCC?</h2>
                    <img className="absolute top-0 right-0 md:w-10 w-6" src="assets/images/about/bluePlus.png" alt="" data-aos="fade-up" data-aos-delay="100" />
                    <p className="font-rubik text-white font-light my-6 md:text-lg text-base" data-aos="fade-up" data-aos-delay="200">
                        <span className='font-bold'>Information Technology Creative Competition (ITCC)</span>{" "}
                        is the largest competition in the field of Information Technology in Bali, which is organized by the Information Technology Student Association (HMTI) of Udayana University. From year to year, ITCC always raises interesting topics in the world of technology.
                    </p>
                    <div className="flex flex-row gap-x-3" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"></div>
                    </div>
                </div>
            </div>
            <img className="lg:w-52 xl:w-60 w-40 bottom-0 right-0 absolute" src="assets/images/about/rightEdge.png" />
            <img className="bottom-0 left-0 md:w-80 w-40 absolute md:translate-y-10 translate-y-5 z-10" src="assets/images/about/leftLine.png" alt="" />
            <img className="bottom-0 left-0 md:w-20 w-10 absolute" src="image/about/leftDots.png" alt="" />
            <div className="md:absolute bottom-0 left-5 z-20 text-white" data-aos="fade-up" data-aos-delay="400">
                <SideRightBlueDotIcon />
            </div>
        </section>
    );
}
