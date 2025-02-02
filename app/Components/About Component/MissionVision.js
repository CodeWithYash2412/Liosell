// import React from "react";
// import { FaBullseye, FaEye } from "react-icons/fa";

// const MissionVision = () => {
//   return (
//     <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
//       {/* Mission Section */}
//       <div className="flex flex-col items-center text-center bg-gradient-to-b from-[rgba(39,57,146,0.15)] to-white p-10 rounded-3xl shadow-lg transition-transform transform hover:scale-105 h-full">
//         <FaBullseye className="text-[60px] text-[rgba(39,57,146,1)] mb-5" />
//         <h2 className="text-4xl font-extrabold text-[rgba(39,57,146,1)] mb-4 uppercase">
//           Our Mission
//         </h2>
//         <p className="text-lg text-gray-800 leading-relaxed">
//           Our mission is to deliver innovative and sustainable architectural
//           hardware solutions, focusing on excellence in design and
//           functionality. We are committed to understanding and exceeding our
//           customers' needs, fostering collaborative partnerships, promoting
//           eco-friendly practices, empowering our team, and making a positive
//           impact on the communities we serve.
//         </p>
//       </div>

//       {/* Vision Section */}
//       <div className="flex flex-col items-center text-center bg-gradient-to-b from-[rgba(39,57,146,0.15)] to-white p-10 rounded-3xl shadow-lg transition-transform transform hover:scale-105 h-full">
//         <FaEye className="text-[60px] text-[rgba(39,57,146,1)] mb-5" />
//         <h2 className="text-4xl font-extrabold text-[rgba(39,57,146,1)] mb-4 uppercase">
//           Our Vision
//         </h2>
//         <p className="text-lg text-gray-800 leading-relaxed">
//           To be the leading global provider of innovative and sustainable
//           architectural hardware solutions, enriching spaces and inspiring
//           creativity in design. Our vision is to continuously evolve and adapt
//           to industry advancements, setting new benchmarks for quality and
//           service.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MissionVision;

import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <div className="w-[90%] mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      {/* Mission Section */}
      <div className="flex flex-col items-center text-center bg-gradient-to-b from-[rgba(39,57,146,0.1)] to-white p-8 lg:p-12 rounded-3xl shadow-lg transition-transform transform hover:scale-105 h-full hover:shadow-xl">
        <FaBullseye
          className="text-6xl text-[rgba(39,57,146,1)] mb-6"
          aria-label="Mission Icon"
        />
        <h2 className="text-3xl lg:text-4xl font-bold text-[rgba(39,57,146,1)] mb-6 uppercase">
          Our Mission
        </h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to deliver innovative and sustainable architectural
          hardware solutions, focusing on excellence in design and
          functionality. We are committed to understanding and exceeding our
          customers' needs, fostering collaborative partnerships, promoting
          eco-friendly practices, empowering our team, and making a positive
          impact on the communities we serve.
        </p>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col items-center text-center bg-gradient-to-b from-[rgba(39,57,146,0.1)] to-white p-8 lg:p-12 rounded-3xl shadow-lg transition-transform transform hover:scale-105 h-full hover:shadow-xl">
        <FaEye
          className="text-6xl text-[rgba(39,57,146,1)] mb-6"
          aria-label="Vision Icon"
        />
        <h2 className="text-3xl lg:text-4xl font-bold text-[rgba(39,57,146,1)] mb-6 uppercase">
          Our Vision
        </h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
          To be the leading global provider of innovative and sustainable
          architectural hardware solutions, enriching spaces and inspiring
          creativity in design. Our vision is to continuously evolve and adapt
          to industry advancements, setting new benchmarks for quality and
          service.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
