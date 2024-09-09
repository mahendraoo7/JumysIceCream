import React from 'react';
import BlogCard from '../Component/BlogCard';
import bgImg from '../assets/asset 50.jpeg';
import img1 from '../assets/asset 1.jpeg';
import img2 from '../assets/asset 2.jpeg';
import img3 from '../assets/asset 3.jpeg';
import img4 from '../assets/asset 47.jpeg';
import Footer from '../Component/Footer';
import Top from '../Component/Top';

const Blog = (props) => {
  return (
    <>
      <section className='relative w-full h-[300px] md:h-[500px] flex justify-center items-center overflow-hidden'>
        <img className='w-full h-full object-center object-cover' src={bgImg} alt="Background" />
        <div className='absolute flex flex-col justify-center items-center z-10 text-center px-4 md:px-0'>
          <p className='text-2xl md:text-4xl font-bold'>Business Tips</p>
          <p className='text-xs md:text-sm mt-2'>Home / <span className='text-red-600'>Business Tips</span></p>
        </div>
      </section>
      <div className='w-full flex flex-col md:flex-row gap-6 md:space-x-20 px-4 md:px-10 pt-6 md:pt-10'>
        <BlogCard img={img1} distext="Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a..." text="Top Ice Cream Flavors To Sell This Year" />
        <BlogCard img={img2} distext="Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a..." text="The Art Of Crafting Gourmet Ice Cream" />
        <BlogCard img={img3} distext="Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a..." text="Ice Cream Trends That Drive More Sales" />
      </div>
      <div className='w-full flex justify-center px-4 md:px-10 pb-10 mt-10'>
        <BlogCard img={img4} text="Ice Cream Trends That Drive More Sales" />
      </div>
      <Footer />
      <Top />
    </>
  );
};

export default Blog;
