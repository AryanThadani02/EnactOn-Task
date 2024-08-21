import React, { useState } from "react";
import chefmate from "./img/Chef-Matt.png";
import bag from "./img/Bag_alt.png";
import favourite from "./img/Favorite.png";
import menu from './img/menu.png'
import chef from './img/chef-mate-hor.png'
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [previousdiv,setPreviousdiv] = useState()

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setPreviousdiv(!previousdiv)
  };

  return (
    <div className="w-20 border-r-4 border-yellow-500">
      <div className={`bg-black bg-opacity-90 text-center pt-6 h-screen ${previousdiv? "hidden": "block"}`}>
        <button
          className="   "
          type="button"
          onClick={toggleDrawer}
        >
          <img src={menu} alt="" width={25} />
        </button>
        <div className="h-full flex items-center">
            <img src={chef} className="h-72 ms-4"  alt="" />
        </div>
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen  overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-black  bg-opacity-90  dark:bg-gray-800`}
      >
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto ">
          <ul className="space-y-2 ">
            <li>
              <img src={chefmate} alt="" />
            </li>
            <li className="font-light ms-7">HOME</li>
            <li className="font-light ms-7">PRODUCTS</li>
            <li className="font-normal ms-7">MEET CHEF MATT</li>
            <li className="font-normal ms-7">FAQ</li>
            <li className="font-normal ms-7">CONNECT WITH US</li>
            {/* Other menu items go here */}
          </ul>
        </div>
        <div className="absolute bottom-9 w-full">
          <div className="text-xs text-center">
            TEXT SUPPORT 24/7{" "}
            <span className="underline text-services">070-7782-9137</span>
          </div>
          <div className="w-full h-0.5 mt-4 bg-white"></div>
          <div className="flex items-center justify-evenly mt-3">
            <div className="flex items-center">
              <img src={bag} alt="" />
              <span className="text-lg ms-1">CART</span>
            </div>
            <div className="flex items-center">
              <img src={favourite} alt="" />
              <span className="text-lg ms-1">WISHLIST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
