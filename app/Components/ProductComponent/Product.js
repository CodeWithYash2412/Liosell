// import React from "react";
// import ProductCard from "./ProductCard";
// import TitleCard from "../TitleCard";

// const Product = () => {
//   return (
//     <>
//       <TitleCard title="Brass Cylinder and Lock Body" />

//       <div className="flex flex-wrap justify-center gap-4 m-10">
//         <ProductCard type="LockBody" name="p1" />
//         <ProductCard type="LockBody" name="p2" />
//         <ProductCard type="LockBody" name="p3" />
//         <ProductCard type="LockBody" name="p4" />
//       </div>

//       <TitleCard title="Brass Tower Bolt" />

//       <div className="flex flex-wrap justify-center gap-4 m-10">
//         <ProductCard type="TowerBolts" name="p1" />
//         <ProductCard type="TowerBolts" name="p2" />
//         <ProductCard type="TowerBolts" name="p3" />
//         <ProductCard type="TowerBolts" name="p4" />
//         <ProductCard type="TowerBolts" name="p5" />
//         <ProductCard type="TowerBolts" name="p6" />
//         <ProductCard type="TowerBolts" name="p7" />
//       </div>

//       <TitleCard title="Brass Hinges" />

//       <div className="flex flex-wrap justify-center gap-4 m-10">
//         <ProductCard type="Hinges" name="p1" />
//         <ProductCard type="Hinges" name="p2" />
//         <ProductCard type="Hinges" name="p3" />
//         <ProductCard type="Hinges" name="p4" />
//         <ProductCard type="Hinges" name="p5" />
//         <ProductCard type="Hinges" name="p6" />
//       </div>

//       <TitleCard title="Brass Mortise" />

//       <div className="flex flex-wrap justify-center gap-4 m-10">
//         <ProductCard type="Mortise" name="p3" />
//         <ProductCard type="Mortise" name="p4" />
//         <ProductCard type="Mortise" name="p5" />
//         <ProductCard type="Mortise" name="p6" />
//         <ProductCard type="Mortise" name="p7" />
//         <ProductCard type="Mortise" name="p8" />
//         <ProductCard type="Mortise" name="p9" />
//         <ProductCard type="Mortise" name="p10" />
//         <ProductCard type="Mortise" name="p11" />
//         <ProductCard type="Mortise" name="p12" />
//         <ProductCard type="Mortise" name="p13" />
//         <ProductCard type="Mortise" name="p14" />
//         <ProductCard type="Mortise" name="p15" />
//         <ProductCard type="Mortise" name="p16" />
//         <ProductCard type="Mortise" name="p17" />
//         <ProductCard type="Mortise" name="p18" />
//         <ProductCard type="Mortise" name="p19" />
//         <ProductCard type="Mortise" name="p20" />
//         <ProductCard type="Mortise" name="p21" />
//         <ProductCard type="Mortise" name="p22" />
//         <ProductCard type="Mortise" name="p23" />
//         <ProductCard type="Mortise" name="p24" />
//         <ProductCard type="Mortise" name="p25" />
//         <ProductCard type="Mortise" name="p26" />
//         <ProductCard type="Mortise" name="p27" />
//         <ProductCard type="Mortise" name="p28" />
//         <ProductCard type="Mortise" name="p29" />
//         <ProductCard type="Mortise" name="p30" />
//         <ProductCard type="Mortise" name="p31" />
//       </div>
//     </>
//   );
// };

// export default Product;

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
