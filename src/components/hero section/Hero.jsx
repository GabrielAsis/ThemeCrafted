import React from 'react';
import './Hero.scss';
import { ArrowRight } from 'lucide-react';

// image imports
import { heroImage, star, underline, circle } from "../../assets"

import Slider from 'infinite-react-carousel';


const Hero = () => {
  return (
    <div className="hero">
      <div className="grid-bg">
        <div className="grid-overlay" />
        <div className="hero-container">
          <div className="left-side">
            <div className='title'>
            <h1>
              Crafted <span className="themes-word">Themes<img src={star} className="star" /></span> for <span className="underline-target"><span className='text'>Visionary Creators</span><img src={underline} className="line" /></span>
            </h1>
            </div>
            <p>Discover beautifully designed, high-performance website themes and templates for every niche—handpicked to help you build better, faster.</p>
            <button className='primary-btn'>Browse Themes <ArrowRight /></button>
          </div>

          <div className="right-side">
            <div className="container">
              <img src={heroImage} className='hero-img'/>
              <img src={circle} className='circle-drawing'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
