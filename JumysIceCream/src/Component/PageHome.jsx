import React from 'react';
import img1 from '../assets/asset 36.png';
import img2 from '../assets/asset 37.png';
import img3 from '../assets/asset 59.svg';
import img4 from '../assets/asset 60.svg';
import img5 from '../assets/asset 61.svg';
import img6 from '../assets/asset 40.png';
import img7 from '../assets/asset 38.png';
import img8 from '../assets/asset 39.png';
import { FaArrowRight } from 'react-icons/fa';
import pagebg from '../assets/asset 52.jpeg';

const PageHome = () => {
  return (
    <>
      <div
        className='my-5 w-full h-[830px] overflow-hidden flex flex-col md:flex-row justify-between bg-center'
        style={{ backgroundImage: `url(${pagebg})` }}
      >
        <div className='relative h-full w-full flex flex-col items-start justify-center px-4 md:px-10'>
          <img
            src={img1}
            alt="not found"
            className='h-[200px] w-[150px] md:h-[400px] md:w-[300px] md:-ml-20'
          />
          <img
            src={img2}
            alt="not found"
            className='h-[100px] w-[75px] md:h-[200px] md:w-[100px]'
          />
        </div>

        <div className='flex flex-col h-full w-full md:w-[1000px] items-start justify-center px-4 md:pl-10'>
          <h1 className='slider-font font-bold text-[30px] md:text-[45px]'>
            Make Every Day a Sweet Day
          </h1>
          <p className='text-gray-500 text-sm md:text-base mt-2'>
            But incorporating liquor into ice cream seems like nothing when you consider how inventive…
          </p>
          <div className='w-full flex flex-col md:pl-10 mt-4'>
            <div className='flex items-center font-semibold mb-2'>
              <img src={img3} alt="not found" className='w-6 h-6' />
              <span className='ml-4 text-sm md:text-base'>Guaranteed frozen delivery</span>
            </div>
            <div className='flex items-center font-semibold mb-2'>
              <img src={img4} alt="not found" className='w-6 h-6' />
              <span className='ml-4 text-sm md:text-base'>Guaranteed frozen delivery</span>
            </div>
            <div className='flex items-center font-semibold'>
              <img src={img5} alt="not found" className='w-6 h-6' />
              <span className='ml-4 text-sm md:text-base'>Guaranteed frozen delivery</span>
            </div>
          </div>

          <button className='mt-4 ml-0 md:ml-10 w-full md:w-36 h-10 bg-white flex items-center justify-center rounded-full'>
            View More <FaArrowRight className='ml-2' />
          </button>
        </div>

        <div className='flex justify-end items-center w-full h-full px-4 md:px-0'>
          <img src={img6} alt="not found" className='w-full max-w-[400px] md:max-w-[800px]' />
        </div>

        <div className='flex flex-col items-end justify-between w-full h-full p-4 md:w-96 md:pr-4'>
          <img src={img7} alt="not found" className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-4' />
          <img src={img8} alt="not found" className='w-[100px] h-[100px] md:w-[200px] md:h-[200px]' />
        </div>
      </div>
    </>
  );
};

export default PageHome;
