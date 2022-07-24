import React from 'react'
import { useGlobalContext } from './context'
import bread from './photos/bread-header.png'
import vector from './photos/Vector.png'
import forward from './photos/forwardreal.png'
import back from './photos/back.png'
import CheckoutBtn from './CheckoutBtn'


const MyCart = () => {

    const {cartItems,number, goToCart, amount} = useGlobalContext()
  return (

    <div className='cartpage'>
    <div className='Market'>
       
      <div className='Market-div'>
         <div className='h1-and-cart'>
            <img className='cart-image' src={vector} alt='cart'/>
  <h1 className='mobile-h1'>Fresh Baked <span className='h1-span' >Everyday</span> </h1>
        </div>
  <img className='bread-image' src={bread} alt='bread'/>
      </div>
      <div className='input-to-btn'>
      <div className='search-div'>
      <input className='search-input' placeholder='search birthday cake'/>
      </div>
       <button className='search-btn'></button>
       </div>
       
        </div>
        <div className='just-margin'>
     <div className='mycart-div'>
      </div>

       <h4 className='mycart-h4'>My Cart</h4>
      
</div>
 
       <div className='cart-section'>
       
        {
          cartItems.map((cartItem)=>{
            const {name,image,price,id} = cartItem

            return<div className='single-item' key={id}>
                <div className='image-name'>
                <img className='cartpage-image' src={image} alt='name'/>
                <div>
                 <h3 >{name}</h3>
                  <p className='checkout-p'>66 left | <span>4.8/5</span></p>
                  </div>
                <div>
                </div>
                

                </div>
                <div className='price-button'>
       <h3 className='price-margin'>${price}</h3>
        <div className='button-number'>
        <img className='vector1' src={back} alt='name'/>
                <h3 className='num-h3'>{number}</h3>
                <img className='vector2' src={forward} alt='name'/>
                </div>
               </div>
                
            </div>
          })
        }

       </div>
  <div className='checkoutbtn-div' >
   <CheckoutBtn/>
   </div>
    </div>
  )
}

export default MyCart
