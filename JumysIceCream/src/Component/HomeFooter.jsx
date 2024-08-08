import React from 'react';
import Footerlogo from "../assets/logo-white.svg";
import { FaBehance, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function HomeFooter() {
  return (
    
    <footer className="bg-black text-white h-[400px] ">
      <div className="mx-auto max-w-screen-xl px-4 pt-10 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold font-sana-seriDm   ">Sign Up For Our Newsletter!</h2>
            <p className="mt-4  text-gray-200">Be the first to know about new flavors and more</p>
          </div><br />


          <div className="font-Kalnia flex justify-end items-center"> 
  <input className='h-[60px] w-[800px] rounded-full ' type="text"placeholder="  Your Email..."/> 
  <button className="absolute h-[50px] w-[150px] rounded-full font-Kalnia bg-red-600 mx-1 text-[18px]" type="submit">Subscribe</button>   
</div>
        </div>

        <div className="pt-32 md:mt-0 flex justify-between items-center">
          <div className="flex left-0 space-x-5 items-center">
            <div className="">
              <img id='logo' className='w-24 text-white' src={Footerlogo} alt="Logo" />
            </div>
            <p className="text-base text-white text-center sm:text-left">
              &copy; 2024 – Jumys. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a className="cursor-pointer"><FaFacebook/></a>
            <i class="fa-brands fa-x-twitter"></i>
            <a className="cursor-pointer"><FaYoutube/></a>
            <a className="cursor-pointer"><FaInstagram/></a>
            <a className="cursor-pointer"><FaBehance/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;