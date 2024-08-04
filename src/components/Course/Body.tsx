import React from "react";
import CardWrapper from "./CardWrapper";
import Filter from "./Filter";

const Body: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center w-[98%] pt-[80px] gap-10">
      <div className="hidden lg:flex md:flex w-1/3">
        <Filter />
      </div>
      <div className="w-full lg:w-2/3 md:w-2/3">
        <CardWrapper />
      </div>
      <div className="flex w-full lg:hidden md:hidden lg:w-1/3 md:w-1/3">
        <Filter />
      </div>
    </div>
  );
};

export default Body;
