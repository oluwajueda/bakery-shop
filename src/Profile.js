import React from 'react'
import Bottombar from './Bottombar'
import { useGlobalContext } from './context'
import edit from './photos/edit.png'
import profile from './photos/png-image.jpg'
const Profile = () => {

   const {isProfile} = useGlobalContext()
    if(isProfile){
  return <div>
  
      <div className='Market-div'>
        <div className='edit'>
        <img src={edit} alt={edit} className='edit'/>
        </div>
        <p className='location'>columbus, Ohio</p>
        <div className='name-date'>
        <h2 className='my-name'>Olamide Osuolale</h2>
        <p className='date'>13 September 2022</p>
         </div>
      </div>
   <img className='profile-image' src={profile} alt={profile}/>


   <h4 className='profile-h4'>Account</h4>

<div>
    <div className='input'>
     <select className='form-select'>
        <option>24/7 Customer Support</option>
     </select>
    </div>
    <div className='input'>
     <select className='form-select'>
        <option>Privacy Policy</option>
     </select>
    </div>
    <div className='input'>
     <select className='form-select'>
        <option>Payment Methods</option>
     </select>
    </div>
    <div className='input'>
     <select className='form-select'>
        <option>Points and Gifts</option>
     </select>
    </div>
    <div className='input'>
     <select className='form-select'>
        <option>Order History</option>
     </select>
    </div>
    <div className='input'>
     <select className='form-select'>
        <option>Language</option>
     </select>
    </div>
</div>


<p className='copyright'>2022 © Copyright Sano All Rights Reserved</p>
    </div>
  
}}

export default Profile
