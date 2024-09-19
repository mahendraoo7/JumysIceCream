import React from 'react';

const BlogCard = (props) => {           
  return (
    <div className='w-full max-w-md mx-auto p-4 relative bg-white rounded-lg shadow-lg'>
      {/* Image and overlay button */}
      <div className='relative'>
        <img
          className='w-full h-48 object-cover rounded-t-lg'
          src={props.img}
          alt="Blog"
        />
        <div className='absolute top-4 right-4'>
          <a     
            href="#"
            className='bg-white flex font-semibold justify-center items-center h-10 px-4 text-center rounded-full hover:bg-red-600 hover:text-white'
          >
            Business Tips
          </a>
        </div>
      </div>

      {/* Content */}
      <div className='p-4'>
        <p className='text-xs text-gray-600 md:text-sm'>{props.date || 'June 20, 2024'}</p>
        <p className='text-lg font-bold mt-2'>{props.text}</p>
        <p className='text-sm text-gray-500 mt-2 md:text-base'>{props.distext}</p>
        <button className='bg-black text-white mt-4 py-2 px-4 rounded-full text-sm hover:bg-gray-800 md:text-base'>
          Read More
        </button>    
      </div>
    </div>
  );
};

export default BlogCard;
