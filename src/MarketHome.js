import React from 'react'
import cart from './photos/cart.png'
import bread from './photos/bread-header.png'
import Menu from './Menu';
import Categories from './Categories';
import { useGlobalContext } from './context';
import search from './photos/search.png'


const MarketHome = () => {

  const {showCartPage, amount} = useGlobalContext()
  return (
    <div>
      <div className='Market'>
       
      <div className='Market-div'>
         <div className='h1-and-cart'>
          <div className='cartimage-amount'>
            <img onClick={showCartPage} className='cart-image' src={cart} alt='cart'/>
        <p className='cart-total-amount'>{amount}</p>
        </div>
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
       </div>
      
     <Categories/>

     <div className='menu-div'>
      <Menu/>
      </div>
    
    
    <div className='empty-div'></div>
    </div>
  )
}

export default MarketHome
