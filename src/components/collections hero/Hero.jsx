import React, { useEffect, useState } from 'react';
import './Hero.scss';
import { ArrowRight } from 'lucide-react';

// image imports
import { pop, underline2 } from "../../assets"

import Slider from 'infinite-react-carousel';


const Hero = () => {
  const [randomBlocks, setRandomBlocks] = useState([]);

  useEffect(() => {
    // Generate random colored blocks
    const blocks = [];
    const colors = [
      'rgba(var(--primary-color), 0.1)',
      'rgba(var(--secondary-color), 0.1)',
      'rgba(var(--accent-color), 0.1)',
    ];
    
    for (let i = 0; i < 20; i++) {
      blocks.push({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 10),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setRandomBlocks(blocks);
  }, []);

  return (
    <div className="hero">
      <div className="grid-bg">
        {/* This is the missing part - rendering the colored blocks */}
        {randomBlocks.map((block, index) => (
          <div
            key={index}
            className="colored-block"
            style={{
              left: `${block.x * 70}px`,
              top: `${block.y * 70}px`,
              backgroundColor: block.color,
            }}
          />
        ))}
        
        <div className="grid-overlay" />
        <div className="hero-container">
          <div className="left-side">
            <div className='title'>
            <h1>
              <span className="underline-target">
                <span className='text'>Curated & Crafted</span>
                <img src={underline2} className="line" />
              </span> for <span className="themes-word"> Every Business<img src={pop} className="star" /></span>
            </h1>
            </div>
            <p>Explore expertly crafted theme collections tailored to industries, styles, and goals — all handpicked to help you design with purpose and launch with confidence.</p>
          </div>

          <div className="right-side">
            <div className="container">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;