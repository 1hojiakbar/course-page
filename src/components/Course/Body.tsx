import React from "react";
import CardWrapper from "./CardWrapper";
import Filter from "./Filter";

const Body: React.FC = () => {
  return (
    <div className="flex justify-center w-[98%] pt-[80px] border-2">
      <div className="w-1/3">
        <Filter />
      </div>
      <div className="w-2/3">
        <CardWrapper />
      </div>
    </div>
  );
};

export default Body;
