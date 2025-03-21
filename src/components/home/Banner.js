"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import image
import banner2 from "../../../public/banners/slider/banner2.jpg";
import banner3 from "../../../public/banners/slider/banner3.jpg";
import banner1 from "../../../public/banners/slider/banner1.jpg";
import banner4 from "../../../public/banners/slider/banner4.jpg";
import banner5 from "../../../public/banners/slider/banner5.jpg";
import banner6 from "../../../public/banners/slider/banner6.jpg";
import Slide from "../shared/Slide";

const Banner = () => {
  return (
    <div className="z-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            img={banner1}
            title="Revolutionizing Education with AI"
            text="Harness the power of AI to streamline course management. Create personalized learning experiences, track progress, and optimize educational outcomes for both instructors and students"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={banner2}
            title="Smarter Course Management, Powered by AI"
            text="Simplify course administration and enhance learning with AI-driven insights. From attendance tracking to performance analysis, our platform makes managing courses easier than ever."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={banner3}
            title="AI-Driven Learning, Tailored for Success"
            text="Utilize AI to create a dynamic learning environment. Adaptive learning paths, real-time progress tracking, and intelligent recommendations for improved student performance."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={banner4}
            title="AI Meets Education: Streamlining Course Management"
            text="Empower educators and students with AI-driven tools that simplify course creation, grading, and progress tracking. Make education more efficient, personalized, and accessible."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={banner5}
            title="Intelligent Insights for Smarter Course Planning"
            text="Leverage AI to analyze student performance and optimize course content. Gain actionable insights that improve course delivery and student engagement."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={banner6}
            title="Your AI-Powered Learning Hub"
            text="Create, manage, and enhance courses effortlessly with the power of AI. From automating assignments to predicting student outcomes, we make learning management smarter."
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;