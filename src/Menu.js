import React from 'react'
import { useGlobalContext } from './context'
import addto from './photos/add-to-btn.png'

const Menu = () => {

    const {menuItems, completeDetails} = useGlobalContext()
  return <div className='products'>
      {
        menuItems.map((menuItem)=>{
          const {id, name, image, price, text} = menuItem;
          return <article onClick={(e)=>completeDetails(id,image,text,name,price)} className='section-center' key={id}>
           <div className='single-product'>
            <img src={image} alt={name} className='photo'/>
            <div className='food-background'>
              <div>
            <h3 className='food-name'>{name}</h3>
            <h4 className='food-price'>{price}</h4>
            </div>
            <div>
              <img src={addto} alt='name' className='addto-btn'/>
            </div>
            </div>
            </div>
        
          </article>  
        })
      }
    </div>
  
}

export default Menu
