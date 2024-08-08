import React from 'react'

const BlogCard = (props) => {
  return (
    <>
      <div className='w-1/4 '>
      <div className='w-screen '>
      <div className='z-10 absolute flex w-[360px] justify-end h-[340px] items-end '>
      <a href="" className='bg-white flex font-semibold justify-center items-center h-[35px] w-[130px] text-center rounded-3xl hover:bg-red-600 hover:text-white'>Business Tips </a>
      </div>
      <div className='h-[350px] w-[370px] flex '>
      <img className='object-cover' src={props.img} alt="not found" />
      </div>
      </div>

      <div className='w-[300px] drop-shadow-2xl flex flex-col gap-3'>
        <p className='text-[17px] '>June 20,2024</p>
        <p className='text-[25px] font-bold'>{props.text}</p>
        <p className='text-[17px] text-gray-500'>{props.distext}</p>
        <button className='bg-black text-white w-32 h-11 rounded-full'>Read More</button>
      </div>
      </div>
    </>
  )
}

export default BlogCard