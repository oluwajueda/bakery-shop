import React from 'react'
import { useGlobalContext } from './context'

const Categories = () => {
    const {filterItems, categories} = useGlobalContext()
  return<div>
    <div className='category-div'>
      {categories.map((category,index)=>{
        return <button className='category-btn' type='button' key={index} onClick={()=> filterItems(category)}>{category}</button>
      })}
      </div>
    </div>
  
}

export default Categories
