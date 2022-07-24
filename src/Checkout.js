import React from 'react'
import { useGlobalContext } from './context'
import back from './photos/back.png'
const Checkout = () => {

     const {payButton, total,amount} = useGlobalContext()

  return (

   
    <div className='checkoutpage' >
        <div className='arrow-btn-div'>
   <img src={back} className='back-image' alt=''/>
   </div>
      
       <button className='btn-checkout'>Checkout</button>

         <div className='form-area'>
        <form >
             <div className='label-input'>
             <label  className='form-label'>Courier</label>
            <div >
     <select className='checkout-input-select' >
        <option>Go Send Sameday</option>
        <option>Call Our Delivey Team</option>
        <option>Self Service</option>
     </select>
    </div>
    </div>
      <div className='label-input'>
    <label  className='form-label'>Payment Method</label>
    <div >
     <select className='checkout-input-select'>
        <option>GoPay</option>
        <option>Master Card</option>
        <option>Visa card</option>
     </select>
    </div>
    </div>
     <div className='label-input'>
     <label  className='form-label'>Telephone Number</label>
            <input type='tel' className='checkout-input' id='phone' placeholder='081-4000-4000'  />
            
            </div>
     <div className='label-input'>
     <label  className='form-label'>Promo Code</label>
            <input type='text' className='checkout-input' id='text' placeholder='freetoday00'  />
            
            </div>

            <hr className='horizonatal-line'/>

            <div className='class-total'>
              <h4 className='total'>Total</h4>

              <h4 className='total'>${total}</h4>
            </div>

            <div className='class-total'>
              <h4 className='total'>quantity</h4>

              <h4 className='total'>{amount}</h4>
            </div>
   
    
            <button onClick={payButton} className='checkout-btn'>Checkout</button>
           
        </form>
         </div>
       
    </div>
  )
}

export default Checkout
