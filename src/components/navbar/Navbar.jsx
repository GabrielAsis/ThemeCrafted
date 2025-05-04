import React, { useState, useEffect } from 'react'
import "./Navbar.scss"
import { logo } from "../../assets"

import { Search, ShoppingCart, CircleUserRound, X, Menu } from "lucide-react";

import { Link, useLocation } from 'react-router-dom';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const {pathname} = useLocation();

  const currentUser = {
    id: 1,
    name: "John Doe",
    isSeller: true,
  }

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // LOGIN states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // SIGNUP states
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Track window width for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRegister = async (e)=> {
    e.preventDefault();
    try {
     await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
     const user = auth.currentUser;
     console.log(user);
     if(user) {
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        username: signupUsername
      })
     }
     console.log("User is Registered Sucessfully!!")
     toast.success("Account Registered Successfully. Welcome!", {
      position: "bottom-right"
     })
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-right"
       })
    }
  };

  const handleLogin = async (e)=> {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("User logged in succesfully!")
      toast.success("Account Logged In Successfully. Welcome Back!", {
        position: "bottom-right"
       })
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, {
        position: "bottom-right"
       })
    }
  }

  // Toggle mobile menu and prevent body scrolling when menu is open
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  }

  return (
    <> 
      <div className='navbar'> 
        <div className="container">
          {/* LOGO & HAMBURGER MENU ICON (mobile only) */}
          <div className="left-side">
            {/* LOGO */}
            <Link to ="/" className='link'>
              <div className="logo">
                <img className="logoImg" src={logo} alt="" />
                <h4 className="logoText">Theme<br/>Crafted</h4>
              </div>
            </Link>
            
            {/* DESKTOP NAV LINKS */}
            <div className="links desktop-only">
                <Link className="link" to="/collections">Collections</Link>
                <Link className="link" to="/">Discover</Link>
            </div>
          </div>

          {/* HAMBURGER MENU BUTTON (mobile only) */}
          <div className="hamburger-menu mobile-only" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </div>

          {/* SEARCHBAR (desktop only) */}
          <div className="searchbar desktop-only">
            <Search className="search-icon"/>
            <input type="text" placeholder="Search" />
          </div>

          {/* BUTTONS (desktop only) */}
          <div className='right-side desktop-only'>
            <ShoppingCart />

            {<button className='outline-btn' onClick={() => setShowLogin(true)}>Log In</button>}
            {<button className='primary-btn' onClick={() => setShowSignup(true)}>Sign Up</button>}
            {!currentUser && (
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
            )}
          </div>
        </div>  
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {/* MOBILE SEARCH */}
          <div className="mobile-search">
            <Search className="search-icon"/>
            <input type="text" placeholder="Search" />
          </div>
          
          {/* MOBILE NAV LINKS */}
          <div className="mobile-links">
            <Link className="link" to="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link className="link" to="/" onClick={() => setMobileMenuOpen(false)}>Discover</Link>
            
            {currentUser?.isSeller && (
              <>
                <Link className='link' to="/mygigs" onClick={() => setMobileMenuOpen(false)}>Themes</Link>
                <Link className='link' to="/add" onClick={() => setMobileMenuOpen(false)}>Create New Theme</Link>
              </>
            )}
            
            <Link className='link' to="orders" onClick={() => setMobileMenuOpen(false)}>Orders</Link>
            <Link className='link' to="/messages" onClick={() => setMobileMenuOpen(false)}>Messages</Link>
          </div>
          
          {/* MOBILE CART */}
          <div className="mobile-cart">
            <ShoppingCart />
            <span>Cart</span>
          </div>
          
          {/* MOBILE AUTH BUTTONS */}
          <div className="mobile-auth-buttons">
            <button className='outline-btn' onClick={() => {
              setShowLogin(true);
              setMobileMenuOpen(false);
            }}>Log In</button>
            
            <button className='primary-btn' onClick={() => {
              setShowSignup(true);
              setMobileMenuOpen(false);
            }}>Sign Up</button>
          </div>
        </div>
      </div>

      {/* LOG IN POPUP */}
      {showLogin && (
        <div className="modal-backdrop" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <X className="close-icon" onClick={() => setShowLogin(false)} />
            <div className="grid-bg"></div>

            <img src={logo} alt=""className='logo'/>
            <div className="top-glow"></div>

            <div className="title-desc">
              <h3>Welcome to <span className='logo-text'>ThemeCrafted</span></h3>
              <p>Access your account to manage purchases & explore exclusive content crafted just for you</p>
            </div>

            <form onSubmit={handleLogin}>
              {/* EMAIL */}
              <div className='input-group email'>
                <label>Email address</label>
                <input 
                  type="email" 
                  className='input'
                  placeholder='Enter your email'
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className='input-group password'>
                <label>Password</label>
                <input 
                  type="password" 
                  className='input'
                  placeholder='Enter your password'
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <div className="checkbox">
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>

              <div className="btns">
                <button className='primary-btn'>Log In</button>

                <p className="switch-link link">
                  Don't have an account?{" "}
                  <span onClick={() => { setShowLogin(false); setShowSignup(true); }}>
                    Sign Up!
                  </span>
                </p>
              </div>        
            </form>

          </div>
        </div>
      )}

      {/* SIGN UP POPUP */}
      {showSignup && (
        <div className="modal-backdrop" onClick={() => setShowSignup(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <X className="close-icon" onClick={() => setShowSignup(false)} />
            <div className="grid-bg"></div>

            <img src={logo} alt="" className="logo" />
            <div className="top-glow"></div>

            <div className="title-desc">
              <h3>Join <span className='logo-text'>ThemeCrafted</span></h3>
              <p>Create your account to showcase your themes and discover work from other creators</p>
            </div>

            <form onSubmit={handleRegister}>
              {/* USERNAME */}
              <div className="input-group username">
                <label>Username</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Choose a username"
                  onChange={(e) => setSignupUsername(e.target.value)}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="input-group email">
                <label>Email address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="input-group password">
                <label>Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Create a password"
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
              </div>

              <div className="btns">
                <button className="primary-btn">Sign Up</button>

                <p className="switch-link link">
                  Already have an account?{" "}
                  <span onClick={() => { setShowSignup(false); setShowLogin(true); }}>
                    Log In!
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}


    </>
  )
}

export default Navbar