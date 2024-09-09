import React from "react";
import { FaArrowRight } from "react-icons/fa";
import asset41 from "../assets/asset 41.jpeg";
import asset42 from "../assets/asset 42.jpeg";
import asset43 from "../assets/asset 43.jpeg";
import asset44 from "../assets/asset 44.jpeg";

const IceSlider = () => {
  return (
    <div className="grid gap-5 px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* 1st card */}
      <div className="bg-[#dff6e8] shadow-md p-4 sm:p-6 text-center max-w-xs mx-auto h-[500px] rounded-lg">
        <div
          className="w-36 h-36 sm:w-44 sm:h-44 border hover:scale-105 duration-300 mx-auto rounded-full overflow-hidden mb-4"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset41}
            alt="Matcha Ice Cream"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Matcha</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Matcha Ice Cream Needs The Absolute Balance Between Sweetness, Fatness
          And Bitterness That Is Very...
        </p>
        <div className="flex justify-center">
          <button className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* 2nd card */}
      <div className="bg-[#ffe4e9] shadow-md p-4 sm:p-6 text-center max-w-xs mx-auto h-[500px] rounded-lg">
        <div
          className="w-36 h-36 sm:w-44 sm:h-44 border mx-auto rounded-full overflow-hidden mb-4"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset42}
            alt="Strawberry Ice Cream"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Strawberry</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          The main ingredient is pureed fresh strawberries, so it's not the same
          as other strawberry-flavored milk...
        </p>
        <div className="flex justify-center">
          <button className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* 3rd card */}
      <div className="bg-[#f4eac9] shadow-md p-4 sm:p-6 text-center max-w-xs mx-auto h-[500px] rounded-lg">
        <div
          className="w-36 h-36 sm:w-44 sm:h-44 border mx-auto rounded-full overflow-hidden mb-4"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset43}
            alt="Orange Ice Cream"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Orange</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          The ice cream has the sweet taste of honey and the scent of orange
          combined with the fatty milk that is...
        </p>
        <div className="flex justify-center">
          <button className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* 4th card */}
      <div className="bg-[#ead6c0] shadow-md p-4 sm:p-6 text-center max-w-xs mx-auto h-[500px] rounded-lg">
        <div
          className="w-36 h-36 sm:w-44 sm:h-44 border mx-auto rounded-full overflow-hidden mb-4"
          style={{ outline: "5px solid white" }}
        >
          <img
            src={asset44}
            alt="Chocolate Ice Cream"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Chocolate</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Each piece of melted chocolate blends with fresh milk and rich, thick
          butter to create surprisingly...
        </p>
        <div className="flex justify-center">
          <button className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full p-2 shadow text-gray-950 hover:text-gray-100 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IceSlider;
