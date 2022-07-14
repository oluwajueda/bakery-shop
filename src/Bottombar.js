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
    </div>
  
}

export default Bottombar
