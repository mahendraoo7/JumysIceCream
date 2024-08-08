import React from 'react'
import img1 from '../assets/asset 36.png'
import img2 from '../assets/asset 37.png'
import img3 from '../assets/asset 59.svg'
import img4 from '../assets/asset 60.svg'
import img5 from '../assets/asset 61.svg'
import img6 from '../assets/asset 40.png'
import img7 from '../assets/asset 38.png'
import img8 from '../assets/asset 39.png'
import { FaArrowRight} from 'react-icons/fa';
import pagebg from '../assets/asset 52.jpeg'

const PageHome = () => {
  return (
  <>
  <div className='w-full overflow-hidden h-[750px] flex justify-between bg-center'style={{backgroundImage: `url(${pagebg})`}}>
    <div className='absolute h-full w-full flex flex-col'>
        <img src={img1} alt="not found" className=' -ml-20 h-[400px] w-[300px] ' />
        <img src={img2} alt="not found"  className=' h-[200px] w-[100px]'/>
    </div>

    <div className='h-full w-[1000px] pl-10 justify-center items-start flex flex-col mr-44' >
    <h1 className='slider-font font-bold text-[45px]'>Make Every Day a Sweet Day</h1><br />
    <p className='text-gray-500'>But incorporating liquor into ice cream seems like nothing when you consider how inventive…</p> <br />
    <div className='w-full h-10 flex items-center font-semibold mb-3 pl-10' id='texed'>
        <img src={img3} alt="not found" /> <span className='ml-7'>Guaranteed frozen delivery</span>
    </div>

    <div className='w-full h-10 flex items-center font-semibold mb-3 pl-10' id='texed'>
        <img src={img4} alt="not found" /> <span className='ml-7'>Guaranteed frozen delivery</span>
    </div>

    <div className='w-full h-10 flex items-center font-semibold pl-10' id='texed'>
        <img src={img5} alt="not found" /> <span className='ml-7'>Guaranteed frozen delivery</span>
    </div><br />

    <button className='ml-10 w-36 h-10 bg-white flex items-center justify-center rounded-full' id='home-slider-button'> View More <FaArrowRight className='ml-2'/></button>

    </div>

    <div className='h-full items-center w-full justify-end flex'>
    <img src={img6} alt="not found" className='w-[800px]'/>   
    </div>

    <div className='h-full w-96 flex flex-col items-end justify-evenly'>
        <img src={img7} alt="not found" className='size-[200px] -mr-12'/>
        <img src={img8} alt="not found" className='size-[200px] -mr-12' />
    </div>

  </div>  
  </>
  )
}

export default PageHome