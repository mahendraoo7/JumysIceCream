import React from "react";
import logo from "../assets/asset 0.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [HomeVisible, setHomeVisible] = useState(false);

  const [shopVisible, setShopVisible] = useState(false);

  const [productVisible, setProductVisible] = useState(false);

  const [blogVisible, setBlogVisible] = useState(false);

  const [pageVisible, setPageVisible] = useState(false);

  const HomeMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="absolute bg-white text-black ring-2 ring-gray-50 w-[200px] h-[300px]">
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 1</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 2</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 3</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 4</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 5</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 6</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 7</li>
            </NavLink>
            <NavLink to="" className="hover:text-red-500">
              <li className="mt-3 ml-5">Home 8</li>
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
          <div className="absolute bg-white text-black h-[400px] w-[400px] ring-1 ring-gray-100 mt-5">
            <div className="flex gap-5">
              <div className="">
             <h1 className="font-bold text-[20px]">Shop Style</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Standard</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Full</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">ShopList</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Sub Category</NavLink>
              </div>
              <div>
              <h1 className="font-bold text-[20px]">Woo Pages</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Order Tracking</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Login</NavLink>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Wishlist</NavLink>
              </div>
              <div>
              <h1 className="font-bold text-[20px]">Mini Cart</h1>
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Cart Page</NavLink> 
              <NavLink to="" className="text-gray-500 block hover:text-red-500">Shop Full</NavLink>
              </div>


              </div>
              </div>  
        </ul>
      </div>
    );
  };

  const ProductMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="bg-white absolute text-gray-400 shadow-lg">
            <a className="text-black" href="">
              <li className="">Products</li>
            </a>
            <a href="">
              <li>
                Simpler <br />
                products
              </li>
            </a>
          </div>
        </ul>
      </div>
    );
  };

  const BlogMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="bg-white absolute text-gray-400 shadow-lg">
            <a href="">
              <li className="mb-2">Blog</li>
            </a>
            <a href="">
              <li>Blog Card</li>
            </a>
          </div>
        </ul>
      </div>
    );
  };

  const PageMenu = () => {
    return (
      <div className="">
        <ul>
          <div className="absolute text-black">
            <a href="">
              <li>About us</li>
            </a>
            <a href="">
              <li>Contact us</li>
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="">
              <li>404</li>
            </a>
            <a href="">
              <li>Faq 2</li>
            </a>
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

  return (
    <div>
      <div className="bg-white border-gray-200 dark:bg-gray-900 px-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="" id="Menu" className="text-[20px]">
            <i class="fa-solid fa-bars"></i>
          </NavLink>
          <NavLink to="" className="rtl:space-x-reverse">
            <img
              id="logo"
              className=" size-16 md:size-24 "
              src={logo}
              alt="Not Found"
            />
          </NavLink>

          <div className="items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex lg:space-x-6 list-none text-[20px]">
              <NavLink to="/search" className=" hover:text-red-500">
                <i className="fa-solid fa-magnifying-glass" id="icon"></i>
              </NavLink>

              <NavLink to="/account" className=" hover:text-red-500">
                <i className="fa-regular fa-user" id="icon"></i>
              </NavLink>

              <NavLink to="/wishlist" className=" hover:text-red-500">
                <i className="fa-regular fa-heart" id="icon"></i>
              </NavLink>

              <NavLink to="/cart" className=" hover:text-red-500">
                <i className="fa-solid fa-basket-shopping"></i>
              </NavLink>
            </div>
          </div>
          <div
            className="items-center justify-between space-x-10 none w-full md:flex md:w-auto md:order-1"
            id="navbar"
          >
            <ul className="flex text-[16px] space-x-12 font-semibold md:p-0 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-600">
              <NavLink
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Home <i className="fa-solid fa-angle-down"></i>
                {HomeVisible && HomeMenu()}
              </NavLink>

              <NavLink
                onMouseEnter={shophandleMouseEnter}
                onMouseLeave={shophandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Shop{" "}
                <i className="fa-solid fa-angle-down"></i>
                  {shopVisible && ShopMenu()}
              </NavLink>

              <NavLink
                onMouseEnter={producthandleMouseEnter}
                onMouseLeave={producthandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Product <i className="fa-solid fa-angle-down"></i>
                {productVisible && ProductMenu()}
              </NavLink>

              <NavLink
                onMouseEnter={bloghandleMouseEnter}
                onMouseLeave={bloghandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Blog <i className="fa-solid fa-angle-down"></i>
                {blogVisible && BlogMenu()}
              </NavLink>

              <NavLink
                onMouseEnter={pagehandleMouseEnter}
                onMouseLeave={pagehandleMouseLeave}
                className="underline-animate block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600"
              >
                Page <i className="fa-solid fa-angle-down"></i>
                {pageVisible && PageMenu()}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
