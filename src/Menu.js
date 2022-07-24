import React from 'react'
import { useGlobalContext } from './context'
import addto from './photos/add-to-btn.png'

const Menu = () => {

    const {menuItems, completeDetails} = useGlobalContext()
  return <div className='products'>

    
      {
        menuItems.map((menuItem)=>{
          const {id, name, image, price, text} = menuItem;
          return <article onClick={(e)=>completeDetails(id,image,text,name,price)}  key={id}>
           <div className='single-product'>
            <img src={image} alt={name} className='photo'/>
            <div className='food-background'>
              <div  className='name-price'>
            <h3 className='food-name'>{name}</h3>
            <h4 className='food-price'>${price}</h4>
            </div>
            <div>
            <h4 className='product-details'>see details...</h4>
            <img className='addto-btn' src={addto} alt='name'/>
            </div>
            </div>
            </div>
        
          </article>  
        })
      }
    </div>
  
}

export default Menu
