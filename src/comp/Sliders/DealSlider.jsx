// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import DealImg from '../img/deal.png';
import Mask from "../img/Mask Group.png";
import Hero from "../img/Hero1.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function DealSlider() {
  return (
    <>
      <div className="py-36 deal">
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="relative h-96 text-center">
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4 font-bold">
                <p className="text-xl sm:text-2xl md:text-3xl font-normal text-black">ONLINE ONLY</p>
                <div className="bg-black h-1 w-16 sm:w-20 mx-auto my-6 md:my-10"></div>
                <p className="text-lg sm:text-xl md:text-2xl font-normal mb-6 md:mb-10 mx-auto text-black">
                  GET 20% OFF YOUR ORDER OF $50 OR MORE
                  <br />
                  Use code <span className='font-semibold'>“Chef20”</span>
                </p>
                <button className="font-bold text-black border-2 border-black px-10 py-2 sm:px-16 sm:py-3 md:px-20 md:py-4 rounded">
                  Meet Chef Matt
                </button>
              </div>
              <img 
                src={DealImg} 
                alt="Slide 1" 
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-96 text-center">
              
              <img 
                src={Hero} 
                alt="Slide 2" 
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-96 text-center">
              
              <img 
                src={Mask} 
                alt="Slide 3" 
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-96 text-center">
              <img 
                src={Hero} 
                alt="Slide 4" 
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}
