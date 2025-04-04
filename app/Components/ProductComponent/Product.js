import React from "react";
import ProductCard from "./ProductCard";
import TitleCard from "../TitleCard";

const Product = () => {
  const products = {
    PinCylinder: ["p1", "p2", "p3", "p4"],
    TowerBolts: ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
    Hinges: ["p1", "p2", "p3", "p4", "p5", "p6"],
    Mortise: Array.from({ length: 29 }, (_, i) => `p${i + 3}`), // Dynamic array
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-12">
          <TitleCard
            title={`Brass ${category.replace(/([A-Z])/g, " $1").trim()}`}
          />
          <div className="flex flex-wrap gap-6 justify-center mt-6">
            {items.map((name) => (
              <ProductCard key={name} type={category} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
