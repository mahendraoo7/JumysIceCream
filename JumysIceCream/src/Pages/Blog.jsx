import React from 'react'
import BlogCard from '../Component/BlogCard'
import bgImg from '../assets/asset 50.jpeg'
import img1 from '../assets/asset 1.jpeg'
import img2 from '../assets/asset 2.jpeg'
import img3 from '../assets/asset 3.jpeg'
import img4 from '../assets/asset 47.jpeg'
import Footer from '../Component/Footer'
import Top from '../Component/Top'

const Blog = (props) => {
  return (
    <>  
    <section className='w-screen h-[500px] flex justify-center items-center overflow-hidden '>
      <img className='w-full h-full object-center object-cover' src={bgImg} alt="not found" /> 
      <div className='absolute flex-col justify-center items-center z-10 mt-28'>
        <p className='tips-text text-[45px] font-bold'>Business Tips</p>
        <p className='text-[15px] ml-14'>Home / <span className='text-red-600'>Business Tips</span></p>
      </div>
    </section><br />
    <div className='w-screen flex gap-20 pt-10 mx-10'>
       <BlogCard img= {img1} distext="Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a..." text = "Top Ice Cream Flavors To Sell This Years"/>    
       <BlogCard img= {img2} distext="Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a..." text = "The Art Of Crafting Gourment Ice Cream"/>    
       <BlogCard img= {img3} distext="Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a..." text = "Ice Cream Treand That Drive More Sales"/>   
    </div><br/><br/>
        <div className='w-screen flex mx-10 pb-10'>
       <BlogCard img= {img4} text = "Ice Cream Treand That Drive More Sales"/>     
        </div>
    <Footer/>
    <Top/>
    </>

  )
}

export default Blog