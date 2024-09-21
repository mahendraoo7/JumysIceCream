import React, { useState } from "react";
import Weblogo from "../assets/asset0.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom"; // Added useNavigate
import IconBar from "./icone";
import "./Navbar.css";
import { FaGripVertical, FaHeart, FaSearch, FaUser } from "react-icons/fa";
import navImg1 from '../assets/asset1.jpeg'
import navImg2 from '../assets/asset2.jpeg'
import navImg3 from '../assets/asset3.jpeg'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate(); // Initializing useNavigate

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };


  const [HomeVisible, setHomeVisible] = useState(false);

  const [shopVisible, setShopVisible] = useState(false);

  const [productVisible, setProductVisible] = useState(false);

  const [blogVisible, setBlogVisible] = useState(false);

  const [pageVisible, setPageVisible] = useState(false);

  const [SideMenuVisible, setSideMenuVisible] = useState(false);


  const HomeMenu = () => {
    return (
      <div className="">
        <ul className="duration-1000 flex justify-center">
          <div className="absolute bg-gray-50 text-black w-[150px] h-[300px] flex flex-col items-center space-y-3">
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-5">Home 1</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 2</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 3</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 4</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 5</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 6 </li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 7</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="">Home 8</li>
            </NavLink>
          </div>
        </ul>
      </div>
    );
  };

  const ShopMenu = () => {
    return (
      <div className="">
        <ul className="flex justify-center">
          <div className="absolute bg-gray-50 text-black h-[450px] w-[1000px]">
            <div className="flex justify-around">
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Shop Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500 ">Shop Standard</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Full</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Only Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Icon Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Image Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Image Category 2</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Sub Category</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">ShopList</NavLink>
              </div>
              <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Filter Layout</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Sidebar</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter Side Out</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter DropDown</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter On Top</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Filter Drawer</NavLink>
              <div className="space-y-3 mt-5">
              <h1 className="font-bold text-[20px]">Shop Loader</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Pagination</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Infinity</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Load More</NavLink>
              </div>
              </div>
             
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Hover Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Icon On Hover</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Quick View Button</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Add To Cart Button</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">WhishList Icon</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Quick Shop Light</NavLink>
              <div className="space-y-2 mt-5">
             <h1 className="font-bold text-[20px]">Woo Pages</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Order Tracking</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Login</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">WishList</NavLink>
              </div>
              </div>
              <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Mini Cart</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Side Out Light</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Side Out Dark</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Dropdown</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Cart Page</NavLink>
              <div className="space-y-2 mt-5">
              <h1 className="font-bold text-[20px]">Checkout Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Check out Classis</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Check out Modern</NavLink>
              </div>
              </div>
              
              
             </div>
          </div>  
        </ul>
      </div>
    )
  }

  const ProductMenu = () => {
    return (

      <div className="">
      <ul className="flex justify-center">
        <div className="absolute bg-gray-50 text-black h-[450px] w-[1000px]">
          <div className="flex flex-wrap justify-around">

            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Product Featured</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sticky Add TO Cart</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Video Inner </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Video PopUp</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">360 Degree</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">CountDown</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Buy Together</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Notify Me</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Real Time Visitor</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Products Recently Viewed</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">trust Badge </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Pre Order_Product</NavLink>
            </div>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Product Type</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Simple Product</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Simple Slider</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Group Product</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Variable Product</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">External & Affiliat Product</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sold Out</NavLink>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Zoom Effect</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">AutoZoom </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Lens Zoom </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Magic Zoom</NavLink>
            </div>
            </div>
          
            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Product Gallery</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Gird Sticky </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Gird Mix</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">One Column</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Grid 2 Column</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Slider </NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Large Gallery</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Left Thumbnail</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Right Thumbnail</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Bottom Thumbnail</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">OutSide Thumbnail</NavLink>
            </div>

            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Product Style</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Clean </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Modern</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Full Width</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Background Color</NavLink> 
            <div className="space-y-2 mt-5">
           <h1 className="font-bold text-[20px]">Description Style</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description Tab</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description According</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description Full Content</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Description Vertical</NavLink> 
            </div>
            </div>


         </div>
        </div>  
      </ul>
    </div>

     
    )
  }

  const BlogMenu = () => {
    return (
      <div className="">
      <ul className="flex justify-around">
        <div className="absolute bg-gray-50 text-black h-[500px] w-[900px]">
         
          <div className="flex justify-around">
            <div className="space-y-5  mt-5">
           <h1 className="font-bold text-[20px]">Blog Layout</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Left Sidebar</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Right Sidebar</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Without Sidebar</NavLink>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Blog Style</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog List </NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Grid</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Card</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Modern</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Blog Standar</NavLink>
            </div>
            </div>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Blog Format</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Post Format Gallery</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Post Format video</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Audio</NavLink>
            <div className="space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Post Layout</h1>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sidebar</NavLink> 
            <NavLink to="" className="text-gray-500 block hover:text-red-500">One Column</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Prallax Image</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Simple Title</NavLink>
            <NavLink to="" className="text-gray-500 block hover:text-red-500">Sticky Title</NavLink>
            </div>
            </div>
            <div className="grid space-y-3 mt-5">
            <h1 className="font-bold text-[20px]">Recent Post</h1>
            <div className="flex gap-5">
            <div > 
               <NavLink to="" className=""><img className="h-[80px] w-[160px]" src={navImg1} alt="Not Found" /></NavLink>
            </div>
            <div>
              <NavLink to="" className="hover:text-red-500">
              <h1 className="text-gray-400">April 3, 2024</h1>
              <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
              </NavLink>
            </div>
            </div>
            <div className="flex gap-5">
            <div > 
                <NavLink to="" className=""><img className="h-[80px] w-[160px]" src={navImg2} alt="Not Found" /> </NavLink>
            </div>
            <div>
              <NavLink to="" className="hover:text-red-500">
              <h1 className="text-gray-400">April 3, 2024</h1>
              <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
              </NavLink>
            </div>
            </div>
            <div className="flex gap-5">
            <div > 
              <NavLink to=""> <img className="h-[80px] w-[160px]" src={navImg3} alt="Not Found" /> </NavLink>
            </div>
            <div>
              <NavLink to="" className="hover:text-red-500">
              <h1 className="text-gray-400">April 3, 2024</h1>
              <h1 className="font-bold">Top Icecream Flavor TO Sell <br /> This Year</h1>
              </NavLink>
            </div>
            </div>
            </div>
            </div>
            </div>  
      </ul>
    </div>
    );
  };

  const PageMenu = () => {
    return (
      <div className="">
        <ul className="flex justify-center">
          <div className="absolute bg-gray-50 text-gray-500 flex justify-center w-[150px] h-[220px]">
          <div className="mt-5 grid">
           <NavLink to="about" className="hover:text-red-500">About Us</NavLink>
           <NavLink to="contact" className="hover:text-red-500">Contact</NavLink>
           <NavLink to="" className="hover:text-red-500">Faq</NavLink>
           <NavLink to="Faq2" className="hover:text-red-500">Faq2</NavLink>
           <NavLink to="page404" className="hover:text-red-500">Page 404</NavLink>
           </div>
          </div>
        </ul>
      </div>
    );
  };

  // HOME Page

  const handleMouseEnter = () => {
    setHomeVisible(true);
  };

  const handleMouseLeave = () => {
    setHomeVisible(false);
  };

  // Shop Page

  const shophandleMouseEnter = () => {
    setShopVisible(true);
  };

  const shophandleMouseLeave = () => {
    setShopVisible(false);
  };

  // Product page

  const producthandleMouseEnter = () => {
    setProductVisible(true);
  };

  const producthandleMouseLeave = () => {
    setProductVisible(false);
  };

  // Blog Page

  const bloghandleMouseEnter = () => {
    setBlogVisible(true);
  };

  const bloghandleMouseLeave = () => {
    setBlogVisible(false);
  };

  // Pages Page

  const pagehandleMouseEnter = () => {
    setPageVisible(true);
  };

  const pagehandleMouseLeave = () => {
    setPageVisible(false);
  };
  const SideMenuhandleMouseEnter = () => {
    setSideMenuVisible(true);
  };
  const SideMenuhandleMouseLeave = () => {
    setSideMenuVisible(false);
  };


  return (
    <>
      <div className="bg-[#fff] w-full h-28 flex justify-around items-center z-50  sticky top-0">
        <div className="container">
          <div className="flex items-center justify-between ml-5">
            <div className="" id="toggelmenuTop">
              <button
                onClick={() => toggleMenu("mobile")}
                className="text-gray-950"
              >
                ☰
              </button>
            </div>
            <button
              className="flex items-center rtl:space-x-reverse"
              onClick={() => navigate("/")} // Navigate to home
            >
              <img
                id="logo"
                className="size-24"
                src={Weblogo}
                alt="Not Found"
              />
            </button>
            <div className="hidden md:flex space-x-16" id="toggle">

              <NavLink to="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="underline-animate block  text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Home <i className="fa-solid fa-angle-down"></i>
                {HomeVisible && HomeMenu()}
              </NavLink>

              <NavLink to="shop"
                onMouseEnter={shophandleMouseEnter}
                onMouseLeave={shophandleMouseLeave}
                className="underline-animate block text-black
                 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Shop {" "}
                <i className="fa-solid fa-angle-down"></i>
                  {shopVisible && ShopMenu()}
              </NavLink>


          
              <NavLink to="product"
                onMouseEnter={producthandleMouseEnter}
                onMouseLeave={producthandleMouseLeave}
                className="underline-animate block  text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Product <i className="fa-solid fa-angle-down"></i>
                {productVisible && ProductMenu()}
              </NavLink>

              <NavLink to="blog"
                onMouseEnter={bloghandleMouseEnter}
                onMouseLeave={bloghandleMouseLeave}
                className="underline-animate block  text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Blog <i className="fa-solid fa-angle-down"></i>
                {blogVisible && BlogMenu()}
              </NavLink>

              <NavLink to=""
                onMouseEnter={pagehandleMouseEnter}
                onMouseLeave={pagehandleMouseLeave}
                className="underline-animate text-black block  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Page <i className="fa-solid fa-angle-down"></i>
                {pageVisible && PageMenu()}
              </NavLink>

            </div>
            <div className="flex justify-between items-center">
              <IconBar />
            </div>
          </div>

          {activeMenu === "mobile" && (
            <ul
              id="toggelmenuTop"
              className=" bg-[#ffffff] text-black text-xl font-bold space-y-4 py-4 px-4 w-full"
            >
              <li>
                <NavLink to="/" onClick={() => toggleMenu(null)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" onClick={() => toggleMenu(null)}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" onClick={() => toggleMenu(null)}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => toggleMenu(null)}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/page" onClick={() => toggleMenu(null)}>
                  Page
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div
          className="w-full justify-evenly flex fixed bg-white h-16 bottom-0"
          id="toggelHiden"
        >
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaGripVertical />
            Shop
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaUser />
            Account
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaSearch />
            Search
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaHeart />
            Wishlist
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
