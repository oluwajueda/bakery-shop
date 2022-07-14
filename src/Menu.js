import React from 'react'
import { useGlobalContext } from './context'

const Menu = () => {

    const {menuItems} = useGlobalContext()
  return <div className='products'>
      {
        menuItems.map((menuItem)=>{
          const {id, name, image, price} = menuItem;
          return <article className='section-center' key={id}>
           <div className='single-product'>
            <img src={image} alt={name} className='photo'/>
            <div className='food-background'>
            <h3 className='food-name'>{name}</h3>
            <h4 className='food-price'>{price}</h4>
            </div>
            </div>
        
          </article>  
        })
      }
    </div>
  
}

export default Menu
