import React from 'react'
import { useGlobalContext } from './context'
import Inbox from './Inbox'
import ItemDetails from './ItemDetails'
import MarketHome from './MarketHome'
import Order from './Order'
import Profile from './Profile'


const CompletePage = () => {

    const {home,isInbox,isProfile,isOrder,showDetails} = useGlobalContext()
 
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
  
}

export default CompletePage
