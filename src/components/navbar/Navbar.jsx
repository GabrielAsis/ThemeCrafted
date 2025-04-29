import React from 'react'
import "./Navbar.scss"
import { logo } from "../../assets"

import { Search, ShoppingCart } from "lucide-react";



const Navbar = () => {
  return (
    <> 
      <div className='navbar'> 
        <div className="container">
          {/* LOGO & NAV LINKS */}
          <div className="left-side">
            {/* LOGO */}
            <div className="logo">
              <img className="logoImg" src={logo} alt="" />
              <h4 className="logoText">Theme<br/>Crafted</h4>
            </div>

            {/* NAV LINKS */}
            <div className="links">
                <span>Collections</span>
                <span>Discover</span>
            </div>

          </div>

          {/* SEARCHBAR */}
          <div className="searchbar">
            <Search className="search-icon"/>
            <input type="text" placeholder="Search" />
          </div>

          {/* BUTTONS */}
          <div className='right-side'>
            <ShoppingCart />

            <button className='outline-btn'>Log In</button>
            <button className='primary-btn'>Sign Up</button>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Navbar