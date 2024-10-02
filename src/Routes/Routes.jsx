import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Product from '../Pages/Product';
import Blog from '../Pages/Blog';
import Page from '../Pages/Page';
import Contact from '../Pages/Contact';
import ShopList from '../Pages/ShopList'; // Import the ShopList component
import Login from '../Pages/Login'; 
import Wishlist from '../Pages/WishList';
import AboutUs from '../Pages/AboutUs';
import Faq2 from '../Pages/Faq-2';
import Error404 from '../Pages/Error404';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from '../Pages/Register';

const PageRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Shop',
        element: <Shop />
      },
      {
        path: '/Product',
        element: <Product />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/Page',
        element: <Page />
      },
      {
        path: '/shopList', // Add the Shop List route
        element: <ShopList />
      },
      {
        path: '/login', // Add the Login route
        element: <Login />
      },
      {
        path: '/wishlist', // Add the Wishlist route
        element: <Wishlist />
      },
      {
        path: '/about', // Add the AboutUs route
        element: <AboutUs />
      },
      {
        path: '/Faq2', // Add the Faq2 route
        element: <Faq2 />
      },
      {
        path: '/page404', // Add the Error404 route
        element: <Error404 />
      },
      {
        path: '/register', // Add the Error404 route
        element: <Register/>
      }
  
      
    ]
  }
]);

const Layout = () => {
  return (
    <div>
      <RouterProvider router={PageRouter}>
      </RouterProvider>
    </div>
  );
};

export default Layout;
