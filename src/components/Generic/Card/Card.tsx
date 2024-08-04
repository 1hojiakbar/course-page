import React from "react";
import "../../Course/style.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  buttonText,
}) => {
  return (
    <div className="w-full flex flex-col rounded overflow-hidden shadow-lg bg-white border h-[440px]">
      <img className="w-full h-[250px]" src={imageUrl} alt={title} />
      <div className="px-6 py-2">
        <div className="font-bold xl:text-xl text-lg md:text-[18px] lg:mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-base description">{description}</p>
      </div>
      <div className="px-3 py-2 pb-2 mt-auto flex items-center justify-between">
        <span className="font-semibold text-xl">${price}</span>
        <button className="bg-button-bg text-white px-4 py-2 rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
