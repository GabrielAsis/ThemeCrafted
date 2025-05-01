import React from 'react'
import "./Navbar.scss"
import { logo } from "../../assets"
import { useState } from 'react';

import { Search, ShoppingCart, CircleUserRound } from "lucide-react";

import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const currentUser = {
    id: 1,
    name: "John Doe",
    isSeller: true,
  }

  return (
    <> 
      <div className='navbar'> 
        <div className="container">
          {/* LOGO & NAV LINKS */}
          <div className="left-side">
            {/* LOGO */}
            <Link to ="/" className='link'>
              <div className="logo">
                <img className="logoImg" src={logo} alt="" />
                <h4 className="logoText">Theme<br/>Crafted</h4>
              </div>
            </Link>
            {/* NAV LINKS */}
            <div className="links">
                <Link className="link" to="/collections">Collections</Link>
                <Link className="link" to="/">Discover</Link>
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

            {!currentUser && <button className='outline-btn'>Log In</button>}
            {!currentUser && <button className='primary-btn'>Sign Up</button>}
            {currentUser && (
              <div className="user" onClick={()=>setOpen(!open)}>
                <CircleUserRound className="user-avatar"/>
                <span>{currentUser?.username}</span>
                {open && <div className="options">
                  {currentUser?.isSeller && (
                      <>
                        <Link className='link' to="/mygigs">Themes</Link>
                        <Link className='link' to="/add">Create New Theme</Link>
                      </>
                  )}
                  <Link className='link' to="orders">Orders</Link>
                  <Link className='link' to="/messages">Messages</Link>
                  <Link className='link' to="/log">Logout</Link>
                </div>}
              </div>
            ) }
          </div>
        </div>  
      </div>
    </>
  )
}

export default Navbar