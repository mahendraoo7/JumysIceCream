
import React, { useState } from 'react';
import { Pagination, Stack } from '@mui/material';

import FilterComponent from '../Component/FilterComponent';
import ProductCardProductList from '../Component/ProductCartList';
import Footer from '../Component/Footer';
import Top from '../Component/Top';
import bgpage from '../assets/asset 50.jpeg'

const ShopList = () => {
  return (
    <div className="">
    <Top/>
      <div className="relative w-full h-[400px]" id="shopbg">
        <div className="absolute inset-0  flex items-center justify-center bg-center h-auto bg-cover bg-no-repeat" style={{backgroundImage: `url(${bgpage})`}}>
          <div className="flex flex-col text-center items-center justify-center text-white mt-28">
            <h1 className="text-4xl font-bold text-black">Shop List</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black mx-3">/</span>
              <span className="text-red-500">Shop List</span>
            </p>
          </div>
        </div>
      </div>

<div className="flex flex-row">
{/* information */}
    <div>
<FilterComponent/>
    </div>


    {/* image side */}
    <div>
<ProductCardProductList/>
<ProductCardProductList/>
<ProductCardProductList/>
<ProductCardProductList/>
<ProductCardProductList/>
    </div>

</div>
{/* Pagination */}
<div className="flex my-5 justify-center">
  <Stack spacing={2}>
    <Pagination count={3} variant="outlined" color="primary" className="custom-pagination" />
  </Stack>

</div>
<Footer/>


    </div>
  );
};

export default ShopList;