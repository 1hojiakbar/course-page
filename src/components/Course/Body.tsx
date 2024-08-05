import React from "react";
import Filter from "./Filter";
import CardWrapper from "./CardWrapper";
import "./style.css";

const Body: React.FC = () => {
  return (
    <div className="justify-center pt-[80px] body">
      <div className="flex w-full">
        <Filter />
      </div>
      <div className="w-full">
        <CardWrapper />
      </div>
    </div>
  );
};

export default Body;
