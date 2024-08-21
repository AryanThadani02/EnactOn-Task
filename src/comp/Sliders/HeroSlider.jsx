import { Swiper, SwiperSlide } from "swiper/react";
import HeroImg from "../img/Hero1.png";
import ChefMattImg from "../img/chefmatelive.png";
import RecipeImg from "../img/recipes.png";
import SignUp from "../img/Signup.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// Import required modules
import { Pagination } from "swiper/modules";
import Sidebar from "../Sidebar";

export default function HeroSlider() {
  return (
    <>
      <div className="absolute z-10">
        <Sidebar />
      </div>
      <div className="w-full relative">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <img
                src={HeroImg}
                alt="Slide 1"
                className="h-full w-full object-cover"
              />
              <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-10 py-3 md:px-20 md:py-4 rounded bg-black bg-opacity-70 hover:bg-opacity-90 transition-opacity sm:text-xs">
                Meet Chef Matt
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <img
                src={SignUp}
                alt="Slide 2"
                className="h-full w-full object-cover"
              />
              <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-10 py-3 md:px-20 md:py-4 rounded bg-black bg-opacity-70 hover:bg-opacity-90 transition-opacity  sm:text-xs">
                Meet Chef Matt
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <img
                src={RecipeImg}
                alt="Slide 3"
                className="h-full w-full object-cover"
              />
              <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-10 py-3 md:px-20 md:py-4 rounded bg-black bg-opacity-70 hover:bg-opacity-90 transition-opacity sm:text-xs">
                Meet Chef Matt
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen w-screen">
              <img
                src={ChefMattImg}
                alt="Slide 4"
                className="h-full w-full object-cover"
              />
              <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-bold text-white border-2 px-10 py-3 md:px-20 md:py-4 rounded bg-black bg-opacity-70 hover:bg-opacity-90 transition-opacity sm:text-xs">
                Meet Chef Matt
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
