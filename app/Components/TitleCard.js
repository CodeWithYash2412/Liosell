import React from "react";

const TitleCard = ({ title }) => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-[rgba(39,57,146,1)] font-Montserrat font-bold text-4xl leading-[40px] tracking-[-0.03em]">
          {title}
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
    </>
  );
};

export default TitleCard;
