import React from 'react'
import Checkout from './Checkout'
import { useGlobalContext } from './context'
import Inbox from './Inbox'
import ItemDetails from './ItemDetails'
import MarketHome from './MarketHome'
import Modal from './Modal'
import MyCart from './MyCart'
import Order from './Order'
import Profile from './Profile'


const CompletePage = () => {

    const {home,isInbox,isProfile,isOrder,showDetails, cartPage, checkout, modal} = useGlobalContext()
 
    if(home){
        return<MarketHome/>
    }
    if(isInbox){
        return<Inbox/>
    }
    if(isProfile){
        return<Profile/>
    }
    if(isOrder){
        return <Order/>
    }
    if(showDetails){
        return <ItemDetails/>
    }
  if(cartPage){
    return <MyCart/>
  }
  if(checkout){
    return <Checkout/>
  }
  if(modal){
    return <Modal/>
  }
}

export default CompletePage
