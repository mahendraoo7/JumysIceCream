import React from 'react'
import HomeFooter from '../Component/HomeFooter'
import bg from '../assets/bg.jpg'
import Ice from '../assets/asset 5.png'
import good from '../assets/asset 6.png'
import dis from '../assets/asset 4.svg'
import flower from '../assets/asset 7.png'
import cup from '../assets/asset 16.png'
import img1 from '../assets/asset 17.jpeg'
import img2 from '../assets/asset 18.jpeg'
import img3 from '../assets/asset 19.jpeg'
import CardSlider from '../Component/CardSlider'
import PageHome from '../Component/PageHome'
import IceSlider from '../Component/IceSlider'
import ArticleCard from '../Component/ArticaleCard'
import Top from '../Component/Top'


const Home = () => {
  return (
    <div className='m-0 p-0 mx-auto '>
   <div className="w-screen h-auto bg-cover bg-no-repeat flex flex-col sm:flex-row gap-10 justify-center" style={{ backgroundImage: `url(${bg})` }}>
  <div className="flex-1 hidden md:block">
    {/* Optional content for larger screens */}
  </div>

  <div className="flex flex-col items-center justify-center text-center px-4 sm:px-0 sm:items-start sm:text-left flex-1">
    <h1 className="font-bold text-[24px] sm:text-[30px] lg:text-[35px] mb-2">SUNDAES AND SMILES</h1>
    <h2 className="font-bold text-[20px] sm:text-[30px] lg:text-[35px] mb-4">Frosty Delight Treat YourSelf TO Creamy</h2>
    <div className="flex gap-2 sm:gap-4">
      <button className="bg-red-600 rounded-xl h-[30px] w-[80px] sm:w-[100px] text-white font-bold text-[12px] sm:text-[14px] hover:bg-black">Shop Now</button>
      <button className="bg-black rounded-xl h-[30px] w-[80px] sm:w-[100px] text-white font-bold text-[12px] sm:text-[14px] hover:bg-red-600">See More</button>
    </div>
  </div>

  <div className="flex-1 flex items-center justify-center relative">
    <img className="absolute animate-spin w-[120px] h-[120px]" src={dis} alt="Discount Icon" />
    <h1 className="absolute text-white font-bold text-[24px] md:text-[20px] lg:text-[20px]">Get<br />30%<br />Off</h1>
    <img className="w-full h-auto" src={Ice} alt="Ice Cream" />
    <div className="absolute bottom-0 right-0 p-4">
      <img className=" absolute bottom-60 size-28  flip-vertical-right" src={good} alt="Good" />
    </div>
  </div>

  <div className="hidden md:flex flex-col items-end p-4">
    <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] mb-2">Choose Your <br /> Favourite Flavor!</h1>
    <img className="h-[150px] md:h-[200px]" src={flower} alt="Flower" />
  </div>
</div>

    
<div className='flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center md:w-screen py-10'>
  <div className='lg:w-1/2'>
    <div className='flex flex-col lg:flex-row items-center lg:items-start py-2'>
      <div className='text-red-600 font-bold font-serif text-[40px] lg:text-[50px] mb-4 lg:mb-0'>
        <h1>Best Ice Cream Shops</h1>
      </div>
      <div className='lg:ml-10'>
        <p className='font-medium text-sm lg:text-base'>
          It's quite possible that we are living in the golden age of ice cream innovation. Old school creameries are churning out vanilla bean masterpieces honed over generations, while new shops are tossing the term "chef".
        </p>
        <a href='#' className='underline hover:text-red-600 font-medium text-sm lg:text-base'>Read More</a>
      </div>
    </div>
    <h1 className='text-[20px] lg:text-[30px] font-medium text-red-600 mt-4 lg:mt-10'>
      {Array.from({ length: 50 }, (_, i) => '-').join('')}
    </h1>
  </div>

  <div className='lg:w-1/2'>
    <div className='flex flex-col lg:flex-row items-center lg:items-start'>
      <div className='text-red-600 font-bold font-serif text-[40px] lg:text-[50px] mb-4 lg:mb-0'>
        <h1>Wave Artisan Shops</h1>
      </div>
      <div className='lg:ml-10'>
        <p className='font-medium text-sm lg:text-base'>
          These ice cream shops represent everything that is well and good: new-wave artisan shops challenging the very notion of what should be placed on a cone (or stick, or between cookies), old-school parlors learning…
        </p>
        <a href='#' className='underline hover:text-red-600 font-medium text-sm lg:text-base'>Read More</a>
        <div className='flex justify-center lg:justify-end items-end mt-4 lg:mt-0'>
          <img className='w-[150px] lg:w-[230px]' src={cup} alt="Cup of Ice Cream" />
        </div>
      </div>
    </div>
    <h1 className='text-[20px] lg:text-[30px] font-medium text-red-600 mt-4 lg:mt-10'>
      {Array.from({ length: 50 }, (_, i) => '-').join('')}
    </h1>
  </div>
</div>


       <div id='ScrollMenu' className='w-full' >
         <div className='flex w-full h-[350px]'>
         
          <div className='overflow-hidden w-1/3'>
           <div className='bg-cover bg-no-repeat flex justify-center overflow-hidden hover:scale-110 duration-1000 h-full'style={{backgroundImage: `url(${img1})`}}> 
             <div className='flex flex-col items-center justify-center'>
             <h1 className='jus text-[40px] font-bold text-white'>Hello</h1>
             <h1 className='text-[40px] font-bold text-white'>SUMMER!</h1>
             </div>
           </div>
           </div>

           <div className='overflow-hidden w-1/3 h-[350px]'>
           <div className='bg-cover bg-no-repeat flex justify-around items-center overflow-hidden hover:scale-110 duration-1000 h-full'style={{backgroundImage: `url(${img2})`}}>
           <div className='z-10 bg-cover flex h-[120px] w-[120px] justify-center items-center text-[25px] text-white' style={{backgroundImage: `url(${dis})`}}>-30%</div>
           <div className='opacity-0'>hello</div>
           </div>
           </div>

           <div className='overflow-hidden w-1/3 h-[350px]'>
           <div className='bg-cover bg- h-full bg-no-repeat flex justify-center overflow-hidden hover:scale-110 duration-1000 'style={{backgroundImage: `url(${img3})`}}>
            <div className='flex flex-col justify-center'>
            <h1 className='text-[40px] font-bold text-white'>Creamy</h1>
            <h1 className='text-[40px] font-bold text-white'>Enjoy</h1>
            </div>
           </div>
           </div>
         </div>
       </div>
                 {/* Slider part */}

       <div className='flex flex-col items-center h-full py-10'>
      
         <div className='flex justify-center items-center'>
            <h1 className='font-serif text-[50px] font-bold'>Best Ice Cream Shops</h1>
         </div>
          <div className='h-full'>
          <CardSlider/>
          </div>
         </div>

         <div className='py-10'>
          <PageHome/>
         </div>

         <div className=''>
          <IceSlider/>
         </div>

         <div className=''>
          <ArticleCard/>
         </div>

        <HomeFooter/>
        <Top/>

       </div>

      )
}

export default Home
