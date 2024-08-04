import React from "react";
import Title from "./Title";
import Body from "./Body";
import { CourseProvider } from "../../context/FilterProvider";

const CoursePage: React.FC = () => {
  return (
    <CourseProvider>
      <div className="flex items-center flex-col bg-outer-bg w-full min-h-screen justify-center p-4">
        <Title />
        <Body />
      </div>
    </CourseProvider>
  );
};

export default CoursePage;
