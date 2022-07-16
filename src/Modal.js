import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import confirmed from './photos/confirmed.png'

const Modal = () => {
  return (
    <div>
     <div className='arrow-btn-div'>
    <button className='checkout-arrow-btn'><AiOutlineArrowLeft/></button>
   </div>
      
       <button className='final-btn-checkout'>Order Status</button>
       <div>
         <div className='order-div'>

            <div className='order-serial'>
            <p>Track Order</p>
            <p>SN-3836</p>
            </div>

            <div className='confirm-order'>
            <img src={confirmed} alt=""/>
            <p className='confirm-p'>Order placed and confirmed</p>
            </div>
            <p className='message-p'>Please send a message to 08082223243 on whatsapp for fast delivery</p>
         </div>

       </div>
 
    </div>
  )
}

export default Modal
