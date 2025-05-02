import React from 'react'
import "./Collections.scss"
import NewestThemes from '../../components/newest themes/NewestThemes'
import CollectionsoHero from '../../components/collections hero/CollectionsHero'
import CollectionsCategory from '../../components/collections category/CollectionsCategory'

const Collections = () => {
  return (
    <div className='collections'>
      <CollectionsoHero/>
      <NewestThemes />
      <CollectionsCategory />
    </div>  
  )
}

export default Collections