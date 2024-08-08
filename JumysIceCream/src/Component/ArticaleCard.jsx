import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import assent1 from "../assets/asset 1.jpeg";
import assent2 from "../assets/asset 2.jpeg";
import assent3 from "../assets/asset 3.jpeg";
import assent45 from "../assets/asset 45.jpeg";
import assent46 from "../assets/asset 46.jpeg";
import assent47 from "../assets/asset 47.jpeg";

const ArticleCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articles = [
    {
      image: assent1,
      title: "Top Ice Cream Flavors To Sell This Year",
      date: "April 3, 2024",
    },
    {
      image: assent2,
      title: "The Art Of Crafting Gourmet Ice Cream",
      date: "April 2, 2024",
    },
    {
      image: assent3,
      title: "Ice Cream Trends That Drive More Sales",
      date: "March 8, 2024",
    },
    {
      image: assent45,
      title: "Post Format Video Blogs Dessert Recipes ",
      date: "February 8, 2024",
    },
    {
      image: assent46,
      title: "Sustainable Ice Cream Packaging Flavor",
      date: "February 4, 2024",
    },
    {
      image: assent47,
      title: "How To Market Seasonal Ice Cream",
      date: "December 10, 2023",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  const visibleArticles = articles
    .slice(currentIndex, currentIndex + 3)
    .concat(articles.slice(0, Math.max(0, currentIndex + 3 - articles.length)));

  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] text-red-500">Our News </h1>
        <h1 className="text-[40px] font-bold">Testiest Updates</h1>
      </div>
      <div className="flex items-center justify-around w-screen py-7 ">
        <button
          className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full h-10 shadow text-gray-950 hover:text-gray-100"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <div className="flex justify-center items-center w-screen gap-5">
          {visibleArticles.map((article, index) => (
            <div key={index} className="">
              <img
                className="object-cover homeIcecreem overflow-hidden"
                src={article.image}
                alt={article.title}
              />

              <div className="py-4 ">
                <div className="text-gray-500 text-sm font-medium">
                  BUSINESS TIPS <span className="text-[#ff0000] mx-2">•</span>
                  <span className="text-[#ff0000] mx-2">{article.date}</span>
                </div>
                <h2 className="text-xl   font-semibold text-[#000] hover:text-[#ff0000]">
                  {article.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full  shadow text-gray-950 hover:text-gray-100"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <NavLink to="">
          <button className="h-[40px] w-[150px] bg-red-600 text-white font-bold rounded-full">
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ArticleCard;
