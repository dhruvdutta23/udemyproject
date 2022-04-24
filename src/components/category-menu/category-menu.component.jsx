import './category-menu.style.scss'
import CategoryItem from '../category-item/category-item.component';

import React from 'react'

function categoryMenu({categories}) {
  
  return (
    <div className='categories-container'>
      {
        categories.map((category)=>
(
      <CategoryItem key={category.id} dhruba={category} />
)
        
        )
        }
    </div>
  )
}

export default categoryMenu