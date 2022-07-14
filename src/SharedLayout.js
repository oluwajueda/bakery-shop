import React from 'react'
import {Outlet} from 'react-router-dom'
import Bottombar from './Bottombar'

const SharedLayout = () => {
  return <>
    
    <Bottombar/>

    <Outlet/>
  
  </>
}

export default SharedLayout
