import React, { useState } from "react";
import { useFilterContext } from "../../context/FilterContext";
import { priceFilter } from "../../utils/priceFilter";

const Filter: React.FC = () => {
  const { dispatch } = useFilterContext();

  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedSelectedPriceRanges = [...selectedPriceRanges];

    if (checked) {
      updatedSelectedPriceRanges.push(value);
    } else {
      updatedSelectedPriceRanges = updatedSelectedPriceRanges.filter(
        (item) => item !== value
      );
    }

    setSelectedPriceRanges(updatedSelectedPriceRanges);

    dispatch({
      type: "PRICE_FILTER",
      payload: updatedSelectedPriceRanges,
    });
  };

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-semibold mb-4">Course Categories</h2>
      <div className="mb-4">
        {[
          "Web Development",
          "Data Science",
          "Business",
          "Design",
          "Personal Development",
        ].map((category) => (
          <label key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="form-checkbox accent-button-bg"
              value={category}
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Price Range</h2>
      <div className="mb-4">
        {priceFilter.map((price) => (
          <label key={price} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="form-checkbox accent-button-bg"
              value={price}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">
              {price === "1500000+"
                ? "1500 000+"
                : `${price.split("-")[0]} - ${price && price?.split("-")[1]}`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
