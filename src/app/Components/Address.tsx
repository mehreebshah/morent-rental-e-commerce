"use client";
import { FaRegCircle } from "react-icons/fa";
import React from "react";
import Locationdropdown from "./Location";
import Date from "./Date";
import Time from "./Time";
import { useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

function Address() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 md:mx-8 lg:mx-16 gap-6">
      {/* Pick-Up Section */}
      <div className="border border-gray-300 shadow-lg flex-grow max-w-full lg:max-w-[45%] p-4 rounded-md bg-white">
        <div className="flex items-center mb-4">
          <FaRegCircle
            onClick={handleClick}
            className={` rounded-md text-white ${clicked ? "bg-blue-800" : "bg-blue-100"}`}
          />
          <h1 className="text-lg md:text-xl font-semibold ml-2">Pick-Up</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8">
          <Locationdropdown />
          <Date />
          <Time />
        </div>
      </div>

      {/* Switcher in the middle */}
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white  hover:from-blue-700 hover:to-blue-900  rounded-lg p-6 h-6 mt-12  my-4">
        <HiOutlineArrowsUpDown />
      </div>

      {/* Drop-Off Section */}
      <div className="border border-gray-300 shadow-lg flex-grow max-w-full lg:max-w-[45%] p-4 rounded-md bg-white">
        <div className="flex items-center mb-4">
          <FaRegCircle
            onClick={handleClick}
            className={` rounded-md text-white ${clicked ? "bg-blue-800" : "bg-blue-100"}`}
          />
          <h1 className="text-lg md:text-xl font-semibold ml-2">Drop-off</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8">
          <Locationdropdown />
          <Date />
          <Time />
        </div>
      </div>
    </div>
  );
}

export default Address;
