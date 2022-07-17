import React from 'react'
import cart from './photos/cart.png'
import bread from './photos/bread-header.png'
import { useGlobalContext } from './context'
import Bottombar from './Bottombar'
import search from './photos/search.png'

const Order = () => {
    const{isOrder,showCartPage} = useGlobalContext()

    if(isOrder){
  return (
   
     <div className='Market'>
       
      <div className='Market-div'>
         <div className='h1-and-cart'>
            <img onClick={showCartPage} className='cart-image' src={cart} alt='cart'/>
        
  <h1 className='mobile-h1'>Fresh Baked <span className='h1-span' >Everyday</span> </h1>
  </div>
  <img className='bread-image' src={bread} alt='bread'/>
      </div>
      <div className='input-to-btn'>
      <div className='search-div'>
      <input className='search-input' placeholder='search birthday cake'/>
      </div>
       <button className='search-btn'><img src={search} alt='search'/></button>
       </div>
       <div className='just-margin'>

          <h4 className='order-h4'>My Order</h4>
       </div>
      
      
  
    </div>
  )
}}

export default Order
