import React from 'react'
import './CollectionsCategory.scss'

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CollectionsCategory = () => {
  return (
    <div className='collections-category'>
      <div className="container">
        <div className="title-desc">
          <h2>Explore By Category</h2>
          <p>Browse handcrafted templates by category and bring your ideas to life.</p>
        </div>
        <div className="category-slider">
          
        </div>
      </div>
    </div>
  )
}

export default CollectionsCategory