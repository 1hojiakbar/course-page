import React, { useState } from "react";
import { useFilterContext } from "../../context/FilterContext";
import { priceFilter } from "../../utils/priceFilter";
import "./style.css";
import typeFilter from "../../utils/typeFilter";

const Filter: React.FC = () => {
  const { dispatch } = useFilterContext();

  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handlePriceButtonClick = (price: string) => {
    let updatedSelectedPriceRanges = [...selectedPriceRanges];
    if (updatedSelectedPriceRanges.includes(price)) {
      updatedSelectedPriceRanges = updatedSelectedPriceRanges.filter(
        (item) => item !== price
      );
    } else {
      updatedSelectedPriceRanges.push(price);
    }
    setSelectedPriceRanges(updatedSelectedPriceRanges);
    dispatch({
      type: "PRICE_FILTER",
      payload: updatedSelectedPriceRanges,
    });
  };

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

  return (
    <div className="w-full mx-auto bg-white py-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-semibold mb-4 pl-3">Course Categories</h2>
      <div className="mb-4 flex flex-col justify-center gap-2">
        {typeFilter.map((category) => (
          <button
            key={category}
            className={`pl-4 rounded-md w-[90%] shadow-sm mx-auto py-2 text-left hover:shadow-md shadow-gray-200 ${
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

      <h2 className="text-2xl font-semibold mb-4 pl-3">Price Range</h2>
      <div className="mb-4 flex flex-col gap-2">
        {priceFilter.map((price) => (
          <button
            key={price}
            className={`pl-4 rounded-md w-[90%] shadow-sm mx-auto py-2 text-left hover:shadow-md shadow-gray-200 ${
              selectedPriceRanges.includes(price)
                ? "bg-button-bg text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => handlePriceButtonClick(price)}
          >
            {price === "1500000+"
              ? "1500 000+"
              : `${price.split("-")[0]} - ${price.split("-")[1]}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
