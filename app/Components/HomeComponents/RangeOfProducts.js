import React from "react";
import Products from "./Products";

const RangeOfProducts = () => {
  return (
    <div className=" mx-auto py-10 w-[95%] ">
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-[rgba(39,57,146,1)] font-Montserrat font-bold text-4xl leading-[40px] tracking-[-0.03em]">
          Our Range Of Products
        </h2>
        <svg
          width="362"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Products
          imageSRC="Brass Mortaise Handle.png"
          imageALT="Brass Mortaise Handle"
        />
        <Products
          imageSRC="Brass Pin Cylinder.png"
          imageALT="Brass Pin Cylinder"
        />
        <Products
          imageSRC="Brass Door Hinges.png"
          imageALT="Brass Door Hinges"
        />
        <Products
          imageSRC="Brass Tower Bolts.png"
          imageALT="Brass Tower Bolts"
        />
      </div>
    </div>
  );
};

export default RangeOfProducts;
