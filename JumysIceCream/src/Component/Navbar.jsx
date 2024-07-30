import React from 'react'
import logo from '../assets/asset 0.svg'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
      
    <div className="bg-white border-gray-200 dark:bg-gray-900 px-10"> 
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      
      <NavLink to="" id='Menu' className="text-[20px]"><i class="fa-solid fa-bars"></i></NavLink>
      <NavLink to="" className="rtl:space-x-reverse">
      <img id='logo' className=' size-16 md:size-24 ' src={logo} alt="Not Found" />
      </NavLink>
      
      <div className="items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

               <div className='flex lg:space-x-6 list-none text-[20px]'>

               <NavLink to="/search" className=' hover:text-red-500'><i className="fa-solid fa-magnifying-glass" id='icon'></i></NavLink>
               
               <NavLink to="/account" className=' hover:text-red-500'><i className="fa-regular fa-user"  id='icon'></i></NavLink>

               <NavLink to="/wishlist" className=' hover:text-red-500'><i className="fa-regular fa-heart" id='icon'></i></NavLink>
      
               <NavLink to="/cart" className=' hover:text-red-500'><i className="fa-solid fa-basket-shopping"></i></NavLink>
               </div>
          
          
      </div>
      <div className="items-center justify-between space-x-10 none w-full md:flex md:w-auto md:order-1" id="navbar">
        <ul className="flex text-[16px] space-x-12 font-semibold md:p-0 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-600">

<NavLink className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">
<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" type="button">Home 
</button>

<div id="dropdownHover" class="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> <i className="fa-solid fa-angle-down"></i></NavLink>
           
            <NavLink className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">Shop <i className="fa-solid fa-angle-down"></i></NavLink>

            <NavLink className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">Product <i className="fa-solid fa-angle-down"></i></NavLink>
          
            <NavLink className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">Blog <i className="fa-solid fa-angle-down"></i></NavLink>
         
            <NavLink className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">Page <i className="fa-solid fa-angle-down"></i></NavLink>
          
        </ul>
      </div>
      </div>
    </div>
     
     <Outlet/>

    </div>
  )
}

export default Navbar2
