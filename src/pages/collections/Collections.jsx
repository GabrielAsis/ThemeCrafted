import React from 'react'
import "./Collections.scss"
import NewestThemes from '../../components/newest themes/NewestThemes'
import Hero from '../../components/collections hero/Hero'

const Collections = () => {
  return (
    <div className='collections'>
      <Hero />
      <NewestThemes />
    </div>  
  )
}

export default Collections