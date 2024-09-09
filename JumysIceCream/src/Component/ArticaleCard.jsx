import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
      title: "Post Format Video Blogs Dessert Recipes",
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
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-red-500 mb-2">Our News</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Testiest Updates</h1>
      </div>
      <div className="flex items-center justify-between mb-6">
        <button
          className="bg-white hover:bg-red-500 rounded-full p-2 shadow text-gray-950 hover:text-white"
          onClick={handlePrev}
        >
          <FaArrowLeft size={24} />
        </button>
        <div className="flex flex-wrap gap-4 justify-center flex-grow">
          {visibleArticles.map((article, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={article.image}
                alt={article.title}
              />
              <div className="py-4 px-2">
                <div className="text-gray-500 text-xs sm:text-sm font-medium">
                  BUSINESS TIPS <span className="text-red-500 mx-2">•</span>
                  <span className="text-red-500 mx-2">{article.date}</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-red-500">
                  {article.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-white hover:bg-red-500 rounded-full p-2 shadow text-gray-950 hover:text-white"
          onClick={handleNext}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
      <div className="text-center">
        <NavLink to="">
          <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-full text-sm sm:text-base">
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ArticleCard;
