import React from 'react'
import "./Home.scss"

// section imports
import Hero from '../../components/hero section/Hero'
import Categories from '../../components/categories section/Categories'
import Benifits from '../../components/benifits section/Benifits'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Categories />
      <Benifits />
    </div>
  )
}

export default Home