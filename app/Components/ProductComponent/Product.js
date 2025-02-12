import React from "react";
import ProductCard from "./ProductCard";
import TitleCard from "../TitleCard";

const Product = () => {
  return (
    <>
      <TitleCard title="Brass Cylinder and Lock Body" />

      <div className="flex flex-wrap justify-center gap-4 m-10">
        <ProductCard type="LockBody" name="p1" />
        <ProductCard type="LockBody" name="p2" />
        <ProductCard type="LockBody" name="p3" />
        <ProductCard type="LockBody" name="p4" />
      </div>

      <TitleCard title="Brass Tower Bolt" />

      <div className="flex flex-wrap justify-center gap-4 m-10">
        <ProductCard type="TowerBolts" name="p1" />
        <ProductCard type="TowerBolts" name="p2" />
        <ProductCard type="TowerBolts" name="p3" />
        <ProductCard type="TowerBolts" name="p4" />
        <ProductCard type="TowerBolts" name="p5" />
        <ProductCard type="TowerBolts" name="p6" />
        <ProductCard type="TowerBolts" name="p7" />
      </div>

      <TitleCard title="Brass Hinges" />

      <div className="flex flex-wrap justify-center gap-4 m-10">
        <ProductCard type="Hinges" name="p1" />
        <ProductCard type="Hinges" name="p2" />
        <ProductCard type="Hinges" name="p3" />
        <ProductCard type="Hinges" name="p4" />
        <ProductCard type="Hinges" name="p5" />
        <ProductCard type="Hinges" name="p6" />
      </div>

      <TitleCard title="Brass Mortise" />

      <div className="flex flex-wrap justify-center gap-4 m-10">
        <ProductCard type="Mortise" name="p1" />
        <ProductCard type="Mortise" name="p2" />
        <ProductCard type="Mortise" name="p3" />
        <ProductCard type="Mortise" name="p4" />
        <ProductCard type="Mortise" name="p5" />
        <ProductCard type="Mortise" name="p6" />
        <ProductCard type="Mortise" name="p7" />
        <ProductCard type="Mortise" name="p8" />
        <ProductCard type="Mortise" name="p9" />
        <ProductCard type="Mortise" name="p10" />
        <ProductCard type="Mortise" name="p11" />
        <ProductCard type="Mortise" name="p12" />
        <ProductCard type="Mortise" name="p13" />
        <ProductCard type="Mortise" name="p14" />
        <ProductCard type="Mortise" name="p15" />
        <ProductCard type="Mortise" name="p16" />
        <ProductCard type="Mortise" name="p17" />
        <ProductCard type="Mortise" name="p18" />
      </div>
    </>
  );
};

export default Product;
