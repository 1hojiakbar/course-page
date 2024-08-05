import React, { useState } from "react";
import typeFilter from "../../utils/typeFilter";
import { useFilterContext } from "../../context/FilterContext";

const Title: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useFilterContext();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryButtonClick = (category: string) => {
    let updatedSelectedCategories = [...selectedCategories];
    if (updatedSelectedCategories.includes(category)) {
      updatedSelectedCategories = updatedSelectedCategories.filter(
        (item) => item !== category
      );
    } else {
      updatedSelectedCategories.push(category);
    }
    setSelectedCategories(updatedSelectedCategories);
    dispatch({
      type: "CATEGORY_FILTER",
      payload: updatedSelectedCategories,
    });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    dispatch({ type: "filter" });
  };

  const handleFilter = (value: string) => {
    dispatch({ type: "filter", payload: value });
  };

  return (
    <div className="lg:w-[80%] md:w-[85%] w-[90%] bg-outer-bg pt-[100px]">
      <div className="flex items-center flex-col text-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mx-auto mb-6">
          Explore Our Courses
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-secondary-color mb-6">
          Find the perfect course to expand your knowledge and skills.
        </p>
        <div className="w-full lg::w-[70%] md:w-[80%]">
          <div className="flex xl:flex-row lg:flex-row md:flex-row gap-3 flex-col justify-center mb-6 w-full">
            {typeFilter.map((category) => (
              <button
                key={category}
                className={`flex lg:w-max md:w-max w-full px-5 rounded-md mx-auto py-2 text-center justify-center ${
                  selectedCategories.includes(category)
                    ? "bg-button-bg text-white"
                    : "btn-outlined"
                }`}
                onClick={() => handleCategoryButtonClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:w-full lg:w-full w-[100%] max-w-full lg:max-w-full justify-between">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 outline-none rounded-lg flex-1 border"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              className="px-8 py-2 bg-button-bg text-white rounded-lg w-full sm:w-auto"
              onClick={() => handleFilter(searchTerm)}
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
