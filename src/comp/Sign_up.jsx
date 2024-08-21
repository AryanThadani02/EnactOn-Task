import React from "react";
import "./Sign_up.css";

function SignUp() {
  return (
    <div className="Sign_up ">
      <div className=" px-4 md:px-8 lg:px-16 pt-10 md:pt-16 lg:pt-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold underline text-white underline-offset-8 ">
          SIGN UP SPECIAL PROMOTIONS
        </h1>
        <p className="text-white mt-4 md:mt-5 lg:mt-6 ">
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </p>
        <div className=" md:flex-row justify-center items-center mt-4 md:mt-6">
          <input
            className="mt-2 md:mt-0 md:me-5 shadow bg-transparent appearance-none border py-2 px-3 border-gray-100 text-gray-100 focus:outline-none focus:shadow-outline md:w-8/12 lg:w-6/12 xl:w-4/12"
            id="username"
            type="text"
            placeholder="Enter email address"
          />
          <button className="mt-4 md:mt-0 bg-subscribe-btn h-11 text-white px-12 md:px-16 text-sm text-center">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
