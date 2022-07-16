import React from 'react'
import cart from './photos/cart.png'
import bread from './photos/bread-header.png'
import Menu from './Menu';
import Categories from './Categories';
import { useGlobalContext } from './context';


const MarketHome = () => {

  const {showCartPage} = useGlobalContext()
  return (
    <div>
      <div className='Market'>
       
      <div className='Market-div'>
         <div>
            <img onClick={showCartPage} className='cart-image' src={cart} alt='cart'/>
        </div>
  <h1>Fresh Baked Everyday</h1>
  <img className='bread-image' src={bread} alt='bread'/>
      </div>
      <div className='input-to-btn'>
      <div className='search-div'>
      <input className='search-input' placeholder='search birthday cake'/>
      </div>
       <button className='search-btn'></button>
       </div>
      
     <Categories/>
      <Menu/>
    
    </div>
    </div>
  )
}

export default MarketHome
