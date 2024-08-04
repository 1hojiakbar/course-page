import React from "react";
import Title from "./Title";
import Body from "./Body";

const CoursePage: React.FC = () => {
  return (
    <div className="flex items-center flex-col bg-outer-bg w-full min-h-screen justify-center p-4">
      <Title />
      <Body />
    </div>
  );
};

export default CoursePage;
