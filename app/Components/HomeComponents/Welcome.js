"use client";
import React from "react";

const Welcome = () => {
  return (
    <div className="relative w-[95%] mx-auto mt-5 rounded-3xl h-[80dvh] ">
      {/* Background Image */}
      <img
        src="home_welcome.png"
        className="w-full h-full object-cover rounded-3xl"
        alt="Welcome Image"
      />

      {/* Gradient Overlay */}
      <div className="absolute flex flex-col justify-end p-5 md:p-10 inset-0 rounded-3xl bg-gradient-to-r from-black/95 to-black/40">
        <p className="text-white/50 font-montserrat font-medium text-[20px] md:text-[26px] leading-[26px] md:leading-[31px] tracking-[-0.03em]">
          Welcome to
        </p>
        <p className="text-white/90 font-montserrat font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] uppercase">
          Liosell Enterprise, Deal Of Honesty!
        </p>
        <p className="text-white/80 mt-3 md:mt-4 font-montserrat font-medium text-[18px] md:text-[28px] leading-[24px] md:leading-[31px] tracking-[-0.03em]">
          Crafting excellence with premium brass architectural hardware.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
