import React from "react";
import HomePage from "./HomePage";
import Cards from "./Cards";
import AboutCourse from "./AboutCourse";

const Endexel: React.FC = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <div
        className="flex relative z-10 flex-col w-[100%] items-center"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 7px",
        }}
      >
        <HomePage />
        <Cards />
      </div>
      <AboutCourse />
    </div>
  );
};

export default Endexel;
