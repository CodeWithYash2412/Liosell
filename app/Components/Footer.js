import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-200 pt-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-3 text-[rgba(39,57,146,1)] font-Montserrat font-bold text-3xl md:text-4xl leading-tight tracking-[-0.03em]">
          Contact Us
        </h2>
        <svg
          width="250"
          height="2"
          viewBox="0 0 362 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H361"
            stroke="url(#paint0_linear_10_116)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_116"
              x1="1"
              y1="1.5"
              x2="361"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.5" stopColor="#273992" stopOpacity="0.7" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-5 lg:gap-10 text-center">
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <IoCall className="bg-[rgba(39,57,146)] text-white rounded-xl text-5xl p-2" />
          <p className="font-Montserrat font-bold text-[rgb(16,18,22)] text-lg">
            +91 97257 30548
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <FaLocationDot className="bg-[rgba(39,57,146)] text-white rounded-xl text-5xl p-2" />
          <p className="font-Montserrat font-bold text-[rgb(16,18,22)] text-lg px-2 md:px-0">
            15&16, Bindiya Square, Pramukh Swami circle, Plot no 3015/4, GIDC
            Phase 3 Dared, Jamnagar - 361004, Gujarat, India.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <AiFillMail className="bg-[rgba(39,57,146)] text-white rounded-xl text-5xl p-2" />
          <p className="font-Montserrat font-bold text-[rgb(16,18,22)] text-lg">
            liosell0909@gmail.com
          </p>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 mt-10 md:mt-20">
        <p className="text-center text-[rgba(16,18,22)] text-sm font-Montserrat font-medium mt-5 pb-5">
          © Copyright. All rights reserved Liosell
        </p>
      </div>
    </div>
  );
};

export default Footer;
