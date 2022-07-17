import React from 'react'
import { useGlobalContext } from './context'
import star from './photos/star.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const ItemDetails = () => {

    const {itemDetails, number,decrease,increase, backDetails, addToCart} = useGlobalContext()
    const {id,image,text,name,price} = itemDetails
  return<div className='whole-div'>




  <div className='details-first-div'>
    <div className='arrow-btn-div'>
   <button onClick={backDetails} className='arrow-btn'><AiOutlineArrowLeft/></button>
   </div>
    <div className='details-btn-div'>
    <button className='details-btn'>Details</button>
    </div>
  </div>
  
  <main className='details-second-div' >
 
   
   <div key={id}>
        <img className='image-details' src={image} alt={name}/>
        <h2 className='details-h2'>{name}</h2>
        <div className='star-p'>
            <img className='star' src={star} alt='name' />
            <p className='point'>4.8/5</p>
        </div>
        <div className='quantity-price'>
        <div className='number'>
            <button className='num-btn' onClick={decrease}>-</button>
            <p className='number-p'>{number}</p>
            <button className='num-btn' onClick={increase}>+</button>
        </div>
        <h3 className='h4-price'>${price}/pcs</h3>
        </div>
       
        <button className='addtocart-btn' onClick={()=>addToCart(id,image,text,name,price,number)}>Add To Cart</button>
        <p className='detail-text'>{text}</p>
        </div>
        
      
      </main>
  
  </div> 
}

export default ItemDetails
