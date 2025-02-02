import React from "react";
import { TbHours24 } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BiSolidMedal } from "react-icons/bi";

const SelectUs = () => {
  return (
    <div className="relative h-[140dvh] md:h-[50dvh] w-full py-10 md:py-20">
      <img
        src="SelectUs.png"
        className="w-full h-full object-cover absolute inset-0"
        alt="Select Us"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[rgba(39,57,146,0.8)] to-[rgba(39,57,146,0)] px-5 py-10 md:py-20 min-h-full">
        <h2 className="text-white text-center text-3xl md:text-4xl font-bold mb-5">
          Reasons to Select Us
        </h2>
        <div className="w-full max-w-6xl mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 text-center">
          <div className="bg-white/50 hover:bg-white/90 hover:text-black transition-all duration-300 font-Montserrat font-bold text-white p-5 rounded-2xl">
            <TbHours24 className="text-[48px] mx-auto" />
            <p className="text-[20px] md:text-[22px] leading-[30px] tracking-[-0.03rem]">
              On-Time Delivery Commitment
            </p>
          </div>
          <div className="bg-white/50 hover:bg-white/90 hover:text-black transition-all duration-300 font-Montserrat font-bold text-white p-5 rounded-2xl">
            <FaHandshake className="text-[48px] mx-auto" />
            <p className="text-[20px] md:text-[22px] leading-[30px] tracking-[-0.03rem]">
              Developing Long-term Connections
            </p>
          </div>
          <div className="bg-white/50 hover:bg-white/90 hover:text-black transition-all duration-300 font-Montserrat font-bold text-white p-5 rounded-2xl">
            <RiMoneyRupeeCircleFill className="text-[48px] mx-auto" />
            <p className="text-[20px] md:text-[22px] leading-[30px] tracking-[-0.03rem]">
              Affordable Pricing Benefits
            </p>
          </div>
          <div className="bg-white/50 hover:bg-white/90 hover:text-black transition-all duration-300 font-Montserrat font-bold text-white p-5 rounded-2xl">
            <BiSolidMedal className="text-[48px] mx-auto" />
            <p className="text-[20px] md:text-[22px] leading-[30px] tracking-[-0.03rem]">
              High-Grade Quality Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUs;
