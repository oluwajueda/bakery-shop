import React from 'react'
import { useGlobalContext } from './context'

const CheckoutBtn = () => {
    const {goToCart} =  useGlobalContext()
  return (
    <div>
       <button onClick={goToCart} className='checkout-btn'>Checkout</button>
    </div>
  )
}

export default CheckoutBtn
