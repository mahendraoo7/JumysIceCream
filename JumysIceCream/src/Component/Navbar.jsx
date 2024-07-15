import React from 'react'
import './Navbar.css'
import logo from '../assets/asset 0.svg'

const Navbar = () => {

    return (
          <div>
                       {/* NAVBAR  */}

      <div id='navbar' className='w-screen bg-white flex justify-around items-center'>

           <div className='-ml-16'> 
                <a href="#"><img id='logo' className='' src={logo} alt="Not Found" /></a>
           </div>

           <div className='flex space-x-12 text-[12px] items-center'>
               <a className='underline-animate ' href="#">Home <i class="fa-solid fa-angle-down"></i></a>
               <a className='underline-animate ' href="#">Shop <i class="fa-solid fa-angle-down"></i></a>
               <a className='underline-animate ' href="#">Products <i class="fa-solid fa-angle-down"></i></a>
               <a className='underline-animate ' href="#">Blog <i class="fa-solid fa-angle-down"></i></a>
               <a className='underline-animate ' href="#">Page <i class="fa-solid fa-angle-down"></i></a>
          </div>
               <div className='flex space-x-5 -mr-12'>
               <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
               <a href="#"><i class="fa-regular fa-user"></i></a>
               <a href="#"><i class="fa-regular fa-heart"></i></a>
               <a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
           </div>
            
        </div>


       </div>
    )
}

export default Navbar