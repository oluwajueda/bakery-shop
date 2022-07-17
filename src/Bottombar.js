import React from 'react'
import {HiOutlineInboxIn} from 'react-icons/hi'
import {AiOutlineShopping} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { useGlobalContext } from './context'

const Bottombar = () => {
  const{showProfile, showHome, showOrder, showInbox} = useGlobalContext()
  return   <div>
    <div className='bottom-bar'>
    <button className='bottom-btn' onClick={showHome}><AiOutlineHome/></button>
    <button  className='bottom-btn' onClick={showOrder}><AiOutlineShopping/></button>
    <button  className='bottom-btn' onClick={showInbox}><HiOutlineInboxIn/></button>
    <button  className='bottom-btn' onClick={showProfile}><CgProfile/></button>
    </div>
   
   
   
    <div className='desktop-bottom-bar'>

      <h1>Sano Bakery</h1>

      <div className='whole-button'>
      <div className='btn-name'>

 <button className='desktop-bottom-btn' onClick={showHome}><AiOutlineHome/></button>
    <h4 className='bottom-name' onClick={showHome}>Home</h4>
    
      </div>
   <div className='btn-name'>
    <button  className='desktop-bottom-btn' onClick={showOrder}><AiOutlineShopping/><span className='bar-span'>Order</span></button>
      <h4 className='bottom-name' onClick={showOrder} >Order</h4>
   </div>
   <div className='btn-name'>
     <button  className='desktop-bottom-btn' onClick={showInbox}><HiOutlineInboxIn/><span className='bar-span'>Inbox</span></button>
        <h4 className='bottom-name' onClick={showInbox}>Inbox</h4>
   </div>
   <div className='btn-name'>
  <button  className='desktop-bottom-btn' onClick={showProfile}><CgProfile/><span className='bar-span'>Profile</span></button>
   <h4 className='bottom-name' onClick={showProfile}>Profile</h4>
   </div>
  </div>
   
   
    </div>
    </div>
  
}

export default Bottombar
