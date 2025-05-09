import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-[700px] 2xl:min-h-[1000px] bg-[url('./assets/hero2.jpeg')] bg-cover bg-center">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1
                  data-aos="fade-up"
                  className="mb-5 text-4xl md:text-5xl font-bold"
                >
                  Level Up Your Gaming Reviews
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="mb-5 text-xs md:text-sm "
                >
                  A relaxing and intuitive platform where gamers can explore
                  detailed reviews, share personal experiences, and connect
                  through their love of games—without the noise or clutter
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  onClick={() => (window.location.href = "/all-reviews")}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-sm shadow-md"
                >
                  Explore Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[700px] 2xl:min-h-[1000px] bg-[url('./assets/hero1.jpeg')] bg-cover">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="2500"
                  className="mb-5 text-4xl md:text-5xl font-bold"
                >
                  Your Go-To Hub for Game Reviews
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="2700"
                  className="mb-5 text-xs md:text-sm "
                >
                  Whether you're a casual player or a hardcore gamer, Chill
                  Gamer offers a smooth and focused experience to browse, write,
                  and enjoy insightful game reviews—all in one place.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="2900"
                  onClick={() => (window.location.href = "/all-reviews")}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-sm shadow-md"
                >
                  Explore Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[700px] 2xl:min-h-[1000px] bg-[url('./assets/hero3.jpeg')] bg-cover bg-center">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="3000"
                  className="mb-5 text-4xl md:text-5xl font-bold"
                >
                  Game Reviews Made Chill
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="3000"
                  className="mb-5 text-xs md:text-sm "
                >
                  Dive into a clean and calming space designed for gamers who
                  want to discover new titles, post thoughtful reviews, and
                  enjoy a community built around honest opinions and shared
                  passions.
                </p>
                <button
                  onClick={() => (window.location.href = "/all-reviews")}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-sm shadow-md"
                >
                  Explore Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
