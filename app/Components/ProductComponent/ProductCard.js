import React from "react";

const ProductCard = ({ type, name }) => {
  return (
    <div>
      <div>
        <img
          className="h-[420px] w-[20dvw] rounded-2xl border-4 border-blue-200 object-cover"
          src={`/${type}/${name}.webp`}
          alt={`${type}${name}`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
