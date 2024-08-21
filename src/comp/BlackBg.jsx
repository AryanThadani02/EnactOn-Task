import React from 'react'
import Footer from "./Footer";
import SignUp from "./Sign_up";
import Banners from "./Banners";
import DealSlider from "./Sliders/DealSlider"
import Products from './Sliders/Products';

function BlackBg() {
  return (
    <div className='lg:pl-20  bg-black'><Products/><DealSlider /><Banners /><SignUp /><Footer /></div>
  )
}

export default BlackBg