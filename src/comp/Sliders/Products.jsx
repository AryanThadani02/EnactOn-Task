import React from "react";
import LeafImg from "../img/leaf.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Slider1 from '../img/Ellipse 5.png';
import Slider2 from '../img/Ellipse 6.png';
import Slider3 from '../img/Ellipse 7.png';
import Slider4 from '../img/Ellipse 8.png';
import './styles.css';

function Products() {
  return (
    <>
      <div className="mx-10 relative products">
        <img src={LeafImg} className="lg:mt-[-100px] mt-[-30px] lg:w-[250px] w-[100px]" alt="Leaf" />
        <div className="lg:mt-[-85px] mt-[-45px]">
          <p className="text-yellow-500 text-3xl mb-1">CHEF MATT PRODUCTS</p>
          <div className="bg-yellow-500 sm:w-2/3 lg:w-1/3 h-1 mb-8"></div>
        </div>
        <p className="sm:w-2/3 lg:w-1/3 mb-10">
          Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
          yourself and Thank us later.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrows */}
          <div className="absolute left-0 flex items-center top-1/2 -translate-y-1/2 z-10">
            <div className="swiper-button-prev-custom text-white  cursor-pointer text-3xl md:text-5xl">
              <IoIosArrowBack/>
            </div>
            <div className="swiper-button-prev-custom text-white cursor-pointer text-3xl md:text-5xl">
              <IoIosArrowBack/>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper w-3/4 flex justify-center"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider1} className="w-full h-full object-cover" alt="Product 1" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">CINNAMON HONEY</p>
              <p><span className="line-through mr-5">$12.00</span><span>$9.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider2} className="w-full h-full object-cover" alt="Product 2" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">COCONUT OIL</p>
              <p><span className="line-through mr-5">$20.00</span><span>$15.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider3} className="w-full h-full object-cover" alt="Product 3" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">MANGO HONEY</p>
              <p><span className="line-through mr-5">$9.00</span><span>$6.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider4} className="w-full h-full object-cover" alt="Product 4" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">HONEY HABANERO</p>
              <p><span className="line-through mr-5">$12.00</span><span>$9.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider1} className="w-full h-full object-cover" alt="Product 1" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">CINNAMON HONEY</p>
              <p><span className="line-through mr-5">$12.00</span><span>$9.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider2} className="w-full h-full object-cover" alt="Product 2" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">COCONUT OIL</p>
              <p><span className="line-through mr-5">$20.00</span><span>$15.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider3} className="w-full h-full object-cover" alt="Product 3" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">MANGO HONEY</p>
              <p><span className="line-through mr-5">$9.00</span><span>$6.00</span></p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <img src={Slider4} className="w-full h-full object-cover" alt="Product 4" />
              </div>
              <p className="my-3 text-center text-lg text-yellow-500">HONEY HABANERO</p>
              <p><span className="line-through mr-5">$12.00</span><span>$9.00</span></p>
            </SwiperSlide>
          </Swiper>

          {/* Right Arrows */}
          <div className="absolute right-0 flex items-center top-1/2 -translate-y-1/2 z-10">
            <div className="swiper-button-next-custom text-white  cursor-pointer text-3xl md:text-5xl">
              <IoIosArrowForward />
            </div>
            <div className="swiper-button-next-custom text-white cursor-pointer text-3xl md:text-5xl">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
