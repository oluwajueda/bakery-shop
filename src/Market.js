import React from 'react';
import Bottombar from './Bottombar';
import { useGlobalContext } from './context';
import Order from './Order';
import Profile from './Profile';
import Inbox from './Inbox';
import CompletePage from './CompletePage';

const Market = () => {


  
  return (
    <div>
      <CompletePage/>
       <Bottombar/>
    </div>
  )

  }
export default Market
