import React from 'react'
import bg from '../assets/asset 50.jpeg'
import Footer from '../Component/Footer';
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import ice from '../assets/assets64.jpg';
import ice2 from '../assets/assets65.jpg';
import Test from '../Component/Test';
import ArticleCard from '../Component/ArticaleCard';


const stats = [
    { value: '115+', label: 'Branch Shop', mark:'~~' },
    { value: '85+', label: 'Staffs', mark:'~~' },
    { value: '120+', label: 'Flavor Variants', mark:'~~' },
    { value: '90%', label: 'Positive Review',}
  ];

function AboutUs() {
  return (
    <div>
       <div className="relative w-full h-[450px]">
      <img src={bg} alt="About Us Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold text-black">About Us</h1>
          <p className="mt-2">
            <a href="#" className="text-[#000] hover:text-[#ff0000]">Home</a> <span className='text-black'>/</span><span className="text-red-500">About Us</span>
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start py-24 px-5 md:px-10">
      <div className="md:w-1/2">
        <h2 className="text-red-500 text-2xl font-semibold mb-2">Sweet Escape</h2>
        <h1 className="text-5xl font-bold mb-4">Manufacture</h1>
        <p className="text-gray-500 text-lg mb-6">
          Once The Ingredients Have Cooled Enough, It's Time To Pour Them Into Molds And Freeze In A Brine Bath. After That, The Ice Cream Sticks Are Dried And Packaged In The Freezer In Square Boxes. From Here, This Cool Ice Cream Is Ready To Be Delivered To Visitors...
        </p>
        <button className="bg-[#ff0000] hover:bg-[#000] text-white px-8 py-3 rounded-full flex items-center">
          View More <span className="ml-2"> <ArrowRight/></span>
        </button>
       
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <img src={ice} alt="Ice Cream" className="w-full h-auto" />
      </div>
    </div>

    <div className="bg-[#fff6f3] h-[250px] w-screen flex justify-center items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-around w-full items-center">
          <div>
            <h2 className="text-5xl font-bold text-red-600  font-Kalnia">{stat.value}</h2>
            <p className="text-black font-medium font-sana-seriDm">{stat.label}</p>
            </div>

            <div className=''>
            <h1 className="text-red-600 text-5xl font-bold">{stat.mark}</h1>
            </div>
          </div>
        ))}
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start py-24 md:px-10 w-screen gap-20">

    <div className="md:w-1/2 mt-10 md:mt-0 md:flex ">
        <img src={ice2} alt="Ice Cream" className="w-full h-auto" />
      </div>  

      <div className="md:w-1/2">
        <h2 className="text-red-500 text-2xl font-semibold ">Frozen Joy</h2>
        <h1 className="text-5xl font-bold mb-4">History begin</h1>
        <p className="text-gray-500 text-lg mb-6">
        On hot summer days like today, in addition to a glass of cool beverage, a glass of ice cream can also help relieve some of the heat. Ice cream is popular not only among children but also loved by many people of many different ages…
        </p>
        <button className="bg-[#ff0000] hover:bg-[#000] text-white h-[50px] w-[180px] rounded-full flex justify-center items-center ">
          View More <span className="ml-2"> <ArrowRight/></span>
        </button>
        
      </div>


    </div>
    <Test/>
    <ArticleCard/>
    <Footer/>
     


    </div>
      
    
  )
}

export default AboutUs