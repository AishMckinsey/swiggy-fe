import React from "react";

import './Header.css';
import swiggy_logo from '../../assets/logo.png';

function Header() {
    return(
        <div className="navbar">
            <div className="navbar-logo">
               <img className="logo" src={swiggy_logo} alt="Swiggy Logo"/>
            </div>
            <div className="navbar-title">
                SWIGGY
            </div>
        </div>
    ) ;
  }
  
export default Header;