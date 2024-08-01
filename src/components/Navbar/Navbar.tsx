import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import heartIcon from "../../assets/icons/heart.svg";
import bellIcon from "../../assets/icons/bell.svg";
import rightImage from "../../assets/images/image.jpg";
import darkHeartIcon from "../../assets/icons/dark-heart.svg";

const Navbar: React.FC = () => {
  const [like, setLike] = useState(false);

  const selectLike = () => {
    setLike(!like);
  };

  return (
    <div
      className="h-[80px] bg-white flex items-center justify-between lg:px-[50px] md:px-[50px] px-[15px] gap-3"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
      }}
    >
      <div className="flex justify-between lg:w-2/3 md:w-3/4 w-max ">
        <div className="flex items-center justify-between md:w-full gap-[90px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-[63px]" src={logo} alt="Logo image not found" />
            <h1 className="text-3xl font-bold text-darkblue-color">ENDEXEL</h1>
          </div>
          <div className="lg:flex md:flex w-full items-center hidden justify-between rounded-[5px] px-2 py-[4px] gap-4 bg-gray-200 h-max">
            <input
              type="text"
              placeholder="What do you want to learn"
              autoComplete="off"
              className="outline-none bg-transparent w-full md:w-full sm:w-full text-gray-500 text-md placeholder:text-gray-500"
            />
            <button className="text-center bg-teal-bg px-5 rounded-md py-2 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center md:justify-end md:gap-[40px] sm:gap-[40px] xl:gap-[20px] lg:gap-[10px] gap-[20px] justify-end lg:w-1/3 md:w-1/4 w-2/4">
        <div className="flex items-center xl:gap-[20px] lg:gap-[10px] gap-[20px]">
          <h4 className="lg:flex md:hidden sm:flex xs:flex hidden whitespace-nowrap xl:text-[20px] lg:text-[16px] font-[500]">
            Be a Mentor
          </h4>
          <div className="h-9 border-l-2 lg:block md:hidden hidden border-gray-400"></div>
          <div className="lg:w-max w-full lg:flex md:flex hidden items-center lg:justify-center  gap-[20px]">
            <img
              src={!like ? heartIcon : darkHeartIcon}
              alt="icon not found"
              onClick={selectLike}
              className="w-[20px] cursor-pointer"
            />
            <img
              src={bellIcon}
              alt="icon not found"
              className="w-[20px] cursor-pointer"
            />
          </div>
        </div>
        <div>
          <img
            src={rightImage}
            alt="image not found"
            className="w-[50px]  rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
