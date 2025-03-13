// import React from "react";

// const ProductCard = ({ type, name }) => {
//   return (
//     <div>
//       <div>
//         <img
//           className="h-[420px] w-[20dvw] rounded-2xl border-4 border-blue-200 object-cover"
//           src={`/${type}/${name}.webp`}
//           alt={`${type}${name}`}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client"; // Marks this file as a Client Component

import React, { useState } from "react";

const ProductCard = ({ type, name }) => {
  const [imgSrc, setImgSrc] = useState(`/${type}/${name}.webp`);

  return (
    <div className="w-[250px] flex flex-col items-center backgroundCard p-4 shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="h-[250px] w-full rounded-xl border border-blue-200 object-cover"
        src={imgSrc}
        alt={`${type} ${name}`}
        onError={() => setImgSrc("/placeholder.webp")} // Fallback image
      />
      {/* <h3 className="mt-2 text-lg font-semibold text-gray-700">
        {name.replace(/p/, "Product ")}
      </h3> */}
    </div>
  );
};

export default ProductCard;
