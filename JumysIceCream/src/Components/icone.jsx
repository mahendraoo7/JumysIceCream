import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const IconBars = () => {
  return (
    <div className="flex items-center space-x-6 mr-5">
      <NavLink to="/">
        <div className="relative" id="icon1">
          <FontAwesomeIcon icon={faSearch} className="iconeNav" />
          </div>
      </NavLink>

       <NavLink to="/login">
 
          <div className="relative" id="icon1">
           <FontAwesomeIcon icon={faUser} className="iconeNav" />
         </div>

       </NavLink>

      <NavLink to="/">

         <div className="relative" id="icon1">
         <FontAwesomeIcon icon={faHeart} className="iconeNav" />
         <span className="icone"></span>
       </div>

      </NavLink>
     

      <NavLink to="/">

        <div className="relative">
          <FontAwesomeIcon icon={faShoppingBasket} className="iconeNav" />
          <span className="icone"></span>
       </div>
      </NavLink>
    </div>
  );
};

export default IconBars;
