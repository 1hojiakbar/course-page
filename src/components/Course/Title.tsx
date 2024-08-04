import React, { useState } from "react";
import { useFilterContext } from "../../context/FilterProvider";

const Title: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useFilterContext();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    dispatch({ type: "FILTER_COURSES", payload: value });
  };

  return (
    <div className="w-[80%] bg-outer-bg pt-[100px]">
      <div className="flex items-center flex-col text-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mx-auto mb-6">
          Explore Our Courses
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-secondary-color mb-6">
          Find the perfect course to expand your knowledge and skills.
        </p>
        <div>
          <div className="flex flex-wrap gap-3 justify-center mb-6 w-full">
            <button className="px-4 whitespace-nowrap py-2 bg-white border rounded-lg text-black hover:bg-gray-100">
              Web Development
            </button>
            <button className="px-4 whitespace-nowrap py-2 bg-white border rounded-lg text-black hover:bg-gray-100">
              Data Science
            </button>
            <button className="px-4 whitespace-nowrap py-2 bg-white border rounded-lg text-black hover:bg-gray-100">
              Business
            </button>
            <button className="px-4 whitespace-nowrap py-2 bg-white border rounded-lg text-black hover:bg-gray-100">
              Design
            </button>
            <button className="px-4 whitespace-nowrap py-2 bg-white border rounded-lg text-black hover:bg-gray-100">
              Personal Development
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-full lg:max-w-full justify-between">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 outline-none rounded-lg flex-1 border"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              className="px-8 py-2 bg-button-bg text-white rounded-lg w-full sm:w-auto"
              onClick={() => handleSearch(searchTerm)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
