import React from 'react'
import { useGlobalContext } from './context'
import star from './photos/star.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const ItemDetails = () => {

    const {itemDetails, number,decrease,increase, backDetails} = useGlobalContext()
    const {id,image,text,name} = itemDetails
  return<div>
  <div className='details-first-div'>
    <div className='arrow-btn-div'>
   <button onClick={backDetails} className='arrow-btn'><AiOutlineArrowLeft/></button>
   </div>
    <div className='details-btn-div'>
    <button className='details-btn'>Details</button>
    </div>
  </div>
  
  <div key={id}>
   
        <img className='image-details' src={image} alt={name}/>
        <h2 className='details-h2'>{name}</h2>
        <div className='star-p'>
            <img className='star' src={star} alt='name' />
            <p className='point'>4.8/5</p>
        </div>
        <div className='number'>
            <button className='num-btn' onClick={decrease}>-</button>
            <p className='number-p'>{number}</p>
            <button className='num-btn' onClick={increase}>+</button>
        </div>
        <button className='addtocart-btn'>Add To Cart</button>
        <p className='detail-text'>{text}</p>
        </div>
      
    
  </div> 
}

export default ItemDetails
