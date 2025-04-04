

"use client";

import React, { useState } from "react";
import Image from 'next/image';

const ProductCard = ({ type, name }) => {
  const [imgSrc, setImgSrc] = useState(`/${type}/${name}.webp`);

  return (
    <div className="w-[250px] flex flex-col items-center backgroundCard p-4 shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Image
        className="h-[250px] w-full rounded-xl border border-blue-200 object-cover"
        src={imgSrc}
        alt={`${type} ${name}`}
        width={500} 
        height={250} 
        priority 
        placeholder="blur" 
        blurDataURL="/placeholder.webp" 
        onError={() => setImgSrc("/placeholder.webp")}
      />
      {/* Commented for Future Use */}
      {/* <h3 className="mt-2 text-lg font-semibold text-gray-700">
        {name.replace(/p/, "Product ")}
      </h3> */}
    </div>
  );
};

export default ProductCard;
