import React from "react";
import Welcome from "./Components/HomeComponents/Welcome";
import RangeOfProducts from "./Components/HomeComponents/RangeOfProducts";
import Profile from "./Components/HomeComponents/Profile";
import SelectUs from "./Components/HomeComponents/SelectUs";

const page = () => {
  return (
    <>
      <Welcome />
      <RangeOfProducts />
      <Profile />
      <SelectUs />
    </>
  );
};

export default page;
