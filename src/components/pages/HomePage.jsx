"use client";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Course, { CourseShow } from "./Course";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { MotionBottom, MotionTop } from "../Motion";
import Slide from "../Slide";
const HomePage = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      delay: 700,
      easing: "ease-in-out-back",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
      loop: true
    });
  }, []);
  return (
    <section>
      <Navbar />
      <div>
        <div className="col-span-1">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 5000 }}
            className="swiper-slide overflow-hidden "
            data-swiper-autoplay="2000"
            injectStyles={false}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="overflow-hidden banner-1">
              <div className="container mx-auto px-[3rem] text-slate-50 flex items-center justify-center h-screen">
                <div className="grid gap-6" data-aos="fade-down">
                  <MotionTop>
                    <h1 className="text-5xl font-extrabold font-Regular text-white mds:text-3xl ">
                      Center of Science and Technology Advanced Development
                    </h1>
                  </MotionTop>
                  <p className="font-Regular text-base w-[70%] mds:w-auto">
                    CSTAD is a noteworthy science and technology center in
                    Cambodia. CSTAD has routed Cambodian students to advanced
                    science and technology, research, and develop digital skills
                    and our graduates have been guaranteed excellent job
                    opportunities with the Top IT company.
                  </p>
                  <MotionBottom>
                    <button className="w-max bg-blue-800 py-2 px-5 rounded-md mt-6">
                      Enroll Now
                    </button>
                  </MotionBottom>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden  banner-2">
              <div className="container mx-auto px-[3rem] text-slate-50 flex items-center justify-strat h-screen">
                <div className="grid gap-6">
                  <MotionTop>
                    <h2 className="text-5xl font-extrabold font-Regular text-white mds:text-3xl">
                      Vision
                    </h2>
                  </MotionTop>
                  <p className="font-Regular text-base mds:w-auto">
                    Advanced IT Center in Cambodia
                  </p>
                  <MotionBottom>
                    <button className="w-max bg-blue-800 py-2 px-5 rounded-md mt-6">
                      Enroll Now
                    </button>
                  </MotionBottom>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden  banner-3">
              <div className="container mx-auto px-[3rem] text-slate-50 flex items-center justify-strat h-screen">
                <div className="grid gap-6">
                  <h2 className="text-5xl font-extrabold font-Regular text-white mds:text-3xl">
                    Mission
                  </h2>
                  <div className="grid gap-4">
                    <p className="font-Regular text-base mds:w-auto">
                      Provide the latest methodology with high-quality training
                      and mentoring
                    </p>
                    <p className="font-Regular text-base mds:w-auto">
                      Build up the capacity and career of IT experts Cambodia
                    </p>
                    <p className="font-Regular text-base mds:w-auto">
                      Consult and connect CSTAD trainees to top IT careers
                    </p>
                  </div>
                  <button className="w-max bg-blue-800 py-2 px-5 rounded-md mt-6">
                    Enroll Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <CourseShow />
      <Slide />
      <Footer />
    </section>
  );
};

export default HomePage;
