import React from 'react'
import cart from './photos/cart.png'
import bread from './photos/bread-header.png'
import { useGlobalContext } from './context'
import Bottombar from './Bottombar'

const Inbox = () => {
    
    const {isInbox}= useGlobalContext()

    if(isInbox){
  return (
   <div className='Market'>
       
      <div className='Market-div'>
         <div>
            <img className='cart-image' src={cart} alt='cart'/>
        </div>
  <h1>Fresh Baked <br/> Everyday</h1>
  <img className='bread-image' src={bread} alt='bread'/>
      </div>
      <div className='input-to-btn'>
      <div className='search-div'>
      <input className='search-input' placeholder='search birthday cake'/>
      </div>
       <button className='search-btn'></button>
       </div>
       <h4 className='inbox-h4'>My Inbox</h4>
      
  
    </div>
  )
}}

export default Inbox
