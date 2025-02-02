import React from "react";

const Products = ({ imageSRC, imageALT }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative w-full group h-[421px] rounded-3xl overflow-hidden">
        <img
          src={imageSRC}
          alt={imageALT}
          className="w-full h-full object-cover"
        />
        <div className="absolute p-5 text-white flex flex-col justify-end h-full font-bold inset-0 bg-gradient-to-b from-transparent to-black/80 group-hover:from-black/80 group-hover:to-black/80">
          <button
            type="button"
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-36"
          >
            View Products
          </button>
          <p className="text-center">{imageALT}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
