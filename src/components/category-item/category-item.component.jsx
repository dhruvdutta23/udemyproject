import './category-item.styles.scss'

import React from 'react'

function categoryItem ({dhruba}) {
  console.log(dhruba)
  const {title,imageUrl}=dhruba
  return (
    <div  className='category-container'>
    <div className='background-image' style={
      {  backgroundImage: `url(${imageUrl})` }
    }  />
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}

export default categoryItem