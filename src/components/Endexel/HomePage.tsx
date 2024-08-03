import React from "react";
import rightIcon from "../../assets/icons/angle-right.svg";
import greenArrowIcon from "../../assets/icons/green-arrow.svg";
import globeIcon from "../../assets/icons/globe.svg";
import likeIcon from "../../assets/icons/like.svg";
import img from "../../assets/images/image.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="flex flex-col lg:flex-row xl:flex-row sm:flex-col w-[85%] pt-[5%] justify-between">
        <div className="flex flex-col lg:w-[75%] w-full">
          <div className="flex lg:items-center gap-3 lg:flex-row flex-col">
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-black">Categories</p>
              <img
                src={rightIcon}
                alt="icon not found"
                className="w-[10px] mt-[2px]"
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-black">Categories</p>
              <img
                src={rightIcon}
                alt="icon not found"
                className="w-[10px] mt-[2px]"
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-teal-bg lg:whitespace-nowrap md:whitespace-nowrap">
                Design a User Experience for Social Good & Prepare for Jobs
              </p>
            </div>
          </div>
          <div className="flex pt-[30px] flex-col">
            <h1 className="font-bold text-[35px] w-[93%]">
              Design a User Experience for Social Good & Prepare for Jobs
            </h1>
            <div className="flex lg:items-center md:items-center flex-col lg:flex-row md:flex-row pt-[12px] md:gap-[20px] lg:gap-[20px] gap-[10px]">
              <h4 className="text-[17px] underline-offset-2 underline font-[400] cursor-pointer">
                Course on Coursera
              </h4>
              <div className="h-9 border-l-2 lg:flex md:flex hidden border-gray-400"></div>
              <div className="text-[17px] underline-offset-2 underline font-[400] cursor-pointer">
                By Google
              </div>
            </div>
            <div className="flex lg:items-center md:items-center flex-col lg:flex-row md:flex-row w-full pt-4 gap-8">
              <div className="flex relative px-20 py-3 rounded-md shadow-slate-400 shadow-sm items-center">
                <button className="lg:whitespace-nowrap w-full md:whitespace-nowrap whitespace-nowrap">
                  Mark as complete
                </button>
                <div className="absolute right-2 bg-teal-100 p-[5px] rounded-md px-2">
                  <img
                    src={greenArrowIcon}
                    className="w-[24px]"
                    alt="arrow icon not found"
                  />
                </div>
              </div>
              <div className="flex justify-center h-10 rounded-md shadow-slate-400 shadow-sm cursor-pointer w-12">
                <img
                  src={globeIcon}
                  alt="globe icon not found"
                  className="w-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-[25%] pt-[50px] w-full">
          <div className="flex flex-col lg:w-[97%] w-full justify-start shadow-slate-400 shadow-md py-8 px-3 gap-1 rounded-lg">
            <p className="text-gray-400">Are you interested in</p>
            <h4 className="text-gray-700 text-[28px] font-semibold">
              UX Design
            </h4>
            <div className="flex flex-col">
              <p className="text-gray-400 text-[14px]">
                Join to 116 mentor appreciate this course
              </p>
              <div className="flex gap-2 items-center pt-2">
                <img src={likeIcon} alt="icon not found" className="w-[18px]" />
                <p className="text-teal-bg text-[14] font-[600]">Appreciate</p>
                <div className="flex">
                  <img
                    src={img}
                    alt="img not found"
                    className="rounded-full w-[20px] relative z-1"
                  />
                  <img
                    src={img}
                    alt="img not found"
                    className="rounded-full w-[20px] relative ml-[-5px] z-2"
                  />
                  <img
                    src={img}
                    alt="img not found"
                    className="rounded-full w-[20px] relative ml-[-5px] z-3"
                  />
                  <img
                    src={img}
                    alt="img not found"
                    className="rounded-full w-[20px] relative ml-[-5px] z-4"
                  />
                  <img
                    src={img}
                    alt="img not found"
                    className="rounded-full w-[20px] relative ml-[-5px] z-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
