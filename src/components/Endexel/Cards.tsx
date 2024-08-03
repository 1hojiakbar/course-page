import React from "react";
import walletIcon from "../../assets/icons/wallet.svg";
import clockIcon from "../../assets/icons/clock.svg";
import chartIcon from "../../assets/icons/chart.svg";
import langIcon from "../../assets/icons/lang.svg";
import tableIcon from "../../assets/icons/table.svg";
import ratingIcon from "../../assets/icons/rating.svg";

const Cards: React.FC = () => {
  return (
    <div className="flex justify-start mt-[30px] w-[85%]">
      <div className="flex w-full mb-[50px]">
        <div className="flex lg:justify-between justify-start flex-wrap items-center lg:gap-3 w-full gap-[30px]">
          <div className="flex flex-col rounded-md lg:w-1/6 h-[110px] w-full pl-2 shadow-slate-200 py-2 shadow-sm">
            <div className="flex items-center w-full">
              <img
                src={walletIcon}
                alt="wallet icon not found"
                className="w-[20px] mr-3"
              />
              <h6>Price</h6>
            </div>
            <div className="flex flex-col pl-[7px] gap-[2px] pt-2">
              <p>$99 Certificate</p>
              <p>$70 Course</p>
            </div>
          </div>
          <div className="flex flex-col rounded-md lg:w-1/6 w-full h-[110px] pl-2 shadow-slate-200 py-2 shadow-sm">
            <div className="flex items-center w-full">
              <img
                src={clockIcon}
                alt="clock icon not found"
                className="w-[20px] mr-3"
              />
              <h6>Time and date</h6>
            </div>
            <div className="flex flex-col pl-[7px] gap-[2px] pt-2">
              <p>$99 Certificate</p>
              <p>$70 Course</p>
            </div>
          </div>
          <div className="flex flex-col rounded-md lg:w-1/6 w-full h-[110px] pl-2 shadow-slate-200 py-2 shadow-sm">
            <div className="flex items-center w-full">
              <img
                src={chartIcon}
                alt="chart icon not found"
                className="w-[20px] mr-3"
              />
              <h6>Course level</h6>
            </div>
            <div className="flex flex-col pl-[7px] gap-[2px] pt-2">
              <p>$99 Certificate</p>
              <p>$70 Course</p>
            </div>
          </div>
          <div className="flex flex-col rounded-md lg:w-1/6 w-full h-[110px] pl-2 shadow-slate-200 py-2 shadow-sm">
            <div className="flex items-center w-full">
              <img
                src={langIcon}
                alt="lang icon not found"
                className="w-[20px] mr-3"
              />
              <h6>Languages</h6>
            </div>
            <div className="flex flex-col pl-[7px] gap-[2px] pt-2">
              <p>$99 Certificate</p>
              <p>$70 Course</p>
            </div>
          </div>
          <div className="flex flex-col rounded-md lg:w-1/6 w-full h-[110px] pl-2 shadow-slate-200 py-2 shadow-sm">
            <div className="flex items-center w-full">
              <img
                src={tableIcon}
                alt="table icon not found"
                className="w-[20px] mr-3"
              />
              <h6>Place</h6>
            </div>
            <div className="flex flex-col pl-[7px] gap-[2px] pt-2">
              <p>$99 Certificate</p>
              <p>$70 Course</p>
            </div>
          </div>
          <div className="flex flex-col rounded-md lg:w-1/6 w-full h-[110px] pl-2 shadow-slate-200 py-2 shadow-sm">
            <div className="flex items-center w-full">
              <img
                src={ratingIcon}
                alt="rating icon not found"
                className="w-[20px] mr-3"
              />
              <h6>Rating</h6>
            </div>
            <div className="flex flex-col pl-[7px] gap-[2px] pt-2">
              <p>$99 Certificate</p>
              <p>$70 Course</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
