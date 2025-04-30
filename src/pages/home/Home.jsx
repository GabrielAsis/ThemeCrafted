import React from 'react'
import "./Home.scss"
import Hero from '../../components/hero section/Hero'
import Categories from '../../components/categories section/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Categories />
    </div>
  )
}

export default Home