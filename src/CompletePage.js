import React from 'react'
import { useGlobalContext } from './context'
import Inbox from './Inbox'
import MarketHome from './MarketHome'
import Order from './Order'
import Profile from './Profile'


const CompletePage = () => {

    const {home,isInbox,isProfile,isOrder} = useGlobalContext()
 
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
  
}

export default CompletePage
