"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../../public/banner1.jpg";
import banner2 from "../../../public/banner2.jpg";
import banner3 from "../../../public/banner3.jpg";
import banner4 from "../../../public/banner4.jpg";
import banner5 from "../../../public/banner5.jpg";
import banner6 from "../../../public/banner6.jpg";
import Slide from "../shared/Slide";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF] text-white overflow-hidden">
      {/* SVG Curve */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L80,213.3C160,203,320,181,480,176C640,171,800,181,960,181.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className="relative flex flex-col md:flex-row items-center justify-between px-35 py-25">
        {/* Left Text Content */}
        <div className="max-w-lg text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            AI-Powered Learning for the Future
          </h1>
          <p className="mt-2 text-lg">
            Transform education with AI-driven insights. Automate workflows,
            enhance learning experiences, and empower educators.
          </p>
          <div className="mt-3 flex gap-4 justify-center md:justify-start">
            <button className="px-5 py-3 bg-white text-purple-700 font-semibold rounded-md shadow-md hover:bg-gray-200">
              Get Started
            </button>
            <button className="px-5 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side (Slider) */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-lg"
          >
            {[banner1, banner2, banner3, banner4, banner5, banner6].map(
              (banner, index) => (
                <SwiperSlide key={index}>
                  <Slide
                    img={banner}
                    title={`AI-Powered Learning ${index + 1}`}
                    text="Experience smarter education with AI-driven analytics."
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;