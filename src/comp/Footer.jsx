import React from "react";
import headphone from "./img/headphone.png";
import quality from "./img/quality.png";
import shoping from "./img/shopping.png";
import chefmate from "./img/Chef-Matt.png"

function Footer() {
  return (
    <div className="footer bg-black py-12">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row lg:justify-evenly justify-between items-center text-center md:text-left">
          <div className="flex mb-6 md:mb-0 items-center">
            <img src={shoping} className="me-4" style={{ height: "30px" }} />
            <div>
              <div className="text-services text-white">FREE SHIPPING WORLDWIDE</div>
              <p className="text-xs text-gray-400">Guaranteed Delivery</p>
            </div>
          </div>

          <div className="flex mb-6 md:mb-0 items-center mt-3 md:mt-0">
            <img src={headphone} alt="" className="me-4" style={{ height: "30px" }} />
            <div>
              <div className="text-services text-white">24/7 CUSTOMER SERVICE</div>
              <p className="text-xs text-gray-400">Text Us 24/7 at 070-7782-9197</p>
            </div>
          </div>

          <div className="flex items-center mt-3 md:mt-0">
            <img src={quality} alt="" className="me-4" style={{ height: "30px" }} />
            <div>
              <div className="text-services text-white">QUALITY GUARANTEE!</div>
              <p className="text-xs text-gray-400">Send Within 30 Days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-services mt-12" ></div>
      <div className="w-full px-0 mx-0">
      <img className="mx-auto md:w-96 sm:w-72 w-52" src={chefmate}   />
      </div>  

    </div>
  );
}

export default Footer;
