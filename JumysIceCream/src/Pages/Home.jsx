import React from 'react'
import bg from '../assets/bg.jpg'
import Ice from '../assets/asset 5.png'
import good from '../assets/asset 6.png'
import dis from '../assets/asset 4.svg'
import flower from '../assets/asset 7.png'
import cup from '../assets/asset 16.png'
import img1 from '../assets/asset 17.jpeg'
import img2 from '../assets/asset 18.jpeg'
import img3 from '../assets/asset 19.jpeg'

const Home = () => {
  return (
    <div className='m-0 p-0'>
    <div className = "h-screen w-screen flex justify-end gap-20 items-center bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>

      <div className='flex flex-col'>
        <h1 className='font-bold'>SUNDAES AND SMILES</h1>
        <h1 className='font-bold text-[35px] '>Frosty Delight <br />Treat YourSelf TO <br /> Creamy</h1>
        <div className='flex gap-3'>
        <button className='bg-red-600 rounded-xl h-[30px] w-[90px] text-white font-bold text-[12px] hover:bg-black' >Shop Now</button>
        <button className='bg-black rounded-xl h-[30px] w-[90px] text-white font-bold text-[12px] hover:bg-red-600' >See More</button>
        </div>
      </div>

          
       <div className=''>
          <div className='absolute flex items-end h-[350px] justify-center'>
          <img className='animate-spin size-24' src={dis} alt="Not Found"/> 
          <h1 className='absolute h-[80px] flex font-bold text-white '>Get<br/>30%<br/>Off</h1>
          </div>
          <div className='flex h-[560px] items-end'>
          <img className='h-[450px] w-[290px]' src={Ice} alt="Not Found"/>    
         </div>
        </div>
          <div className='h-[200px] flip-vertical-right'>
          <img className='absolute h-[100px] ' src={good} alt="Not Found"/> 
             
          </div>
        <div className='flex items-end h-[550px] '>
        <h1 className='font-bold'>Choose Your <br /> Favourite Flavor!</h1>
        <img className='h-[200px]' src={flower} alt="Not Found" />
        </div>
   </div>
    
      <div className='flex gap-20 justify-around items-center h-[500px]'>
      <div>
       <div className='flex items-center w-[400px]'>
            <div className='text-red-600 font-bold font-serif text-[50px]'>
              <h1 className=''>Best <br /> Ice <br /> Cream <br /> Shops</h1>
            </div>
            <div>
              <p className='font-medium'>it's Quite Possible That We Are Living In The Golden Age Of Ice Cream Innovation. Old School Creameris Are Churing out Vannila Bean maasterPrice Honed Over Generation While New Shops Are Tossing The Term "Chef" </p>
              <a href='' className='underline hover:text-red-600'>Read More </a>
            </div>
            </div>
            <h1 className='text-[30px] font-medium text-red-600'>----------------------------------</h1>
       </div>

       <div>
       <div className='flex items-center justify-center w-[450px] '>
        <div className=' text-red-600 font-bold font-serif text-[50px]'>
              <h1 className=''>Wave <br /> Artisan <br /> Shops</h1>
            </div>
            <div className=''>
              <p className='font-medium'>These Ice Cream Shops Represent Everything That Is Well And Good: New-Wave Artisan Shops Challenging The Very Notion Of What Should Be Placed On A Cone (Or Stick, Or Between Cookies), Old-School Parlors Learning… </p>
              <a href='' className='underline hover:text-red-600'>Read More</a>
              <div className='flex justify-end items-end w-[230px]'>
              <img className='' src={cup} alt="Not Found" />
              </div>
            </div>
            </div>
              <h1 className='text-[30px] font-medium text-red-600'>-----------------------------------</h1>
       </div>
      </div>

       <div id='ScrollMenu' className=''>

         <div className='flex '>
          <div className='overflow-hidden'>
           <div className=' bg-contain flex justify-center overflow-hidden hover:scale-110 duration-1000 h-[350px] w-[500px]'style={{backgroundImage: `url(${img1})`}}> 
             <div className='flex flex-col items-center justify-center'>
             <h1 className='jus text-[40px] font-bold text-white'>Hello</h1>
             <h1 className='text-[40px] font-bold text-white'>SUMMER!</h1>
             </div>
           </div>
           </div>

           <div className='overflow-hidden'>
           <div className='bg-contain flex justify-around items-center overflow-hidden hover:scale-110 duration-1000 h-[350px] w-[500px]'style={{backgroundImage: `url(${img2})`}}>
           <div className='z-10 bg-cover flex h-[120px] w-[120px] justify-center items-center text-[25px] text-white' style={{backgroundImage: `url(${dis})`}}>-30%</div>
           <div className='opacity-0'>hello</div>
           </div>
           </div>

           <div className='overflow-hidden'>
           <div className='bg-contain flex justify-center overflow-hidden hover:scale-110 duration-1000 h-[350px] w-[500px]'style={{backgroundImage: `url(${img3})`}}>
            <div className='flex flex-col justify-center'>
            <h1 className='text-[40px] font-bold text-white'>Creamy</h1>
            <h1 className='text-[40px] font-bold text-white'>Enjoy</h1>
            </div>
           </div>
           </div>
         </div>
       </div>
                 {/* Slider part */}

       <div className='flex flex-col justify-center items-center h-[500px]'>
      
         <div className='font-serif text-[50px] font-bold'>
            <h1>Best Ice Cream Shops</h1>
         </div>

         <div className='h-[300px]'>
     
         </div>

       </div>
       

   </div>
      )
}

export default Home
