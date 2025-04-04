import React from "react";


const Certificates = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-[rgba(39,57,146,1)] font-Montserrat font-bold text-4xl leading-[40px] tracking-[-0.03em]">
          Certificates
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
      <div className="mx-auto py-10 w-[95%] flex flex-wrap justify-center gap-6">
        {[
          "GST",
          "MSME",
          "UDYOG AADHAR",
          "ICE GATE",
          "DGFT",
          "GPCB",
          "FIEO",
        ].map((name, index) => (
          <div key={index} className="relative group">
            <img
              src={`Certificates/${name}.png`}
              alt={name}
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <p className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              {name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
