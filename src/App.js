import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import Bottombar from './Bottombar';
import Inbox from './Inbox';
import './index.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import Market from './Market';
import MyCart from './MyCart';
import Order from './Order';
import Profile from './Profile';
import Registration from './Registration';

import './mobile.css'

function App() {
 
  return (
   <>
  
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
     <Route path='login' element={<LoginPage/>}/>
     <Route path='dashboard' element={<Market />}/>
     <Route path='register' element={<Registration />}/>
     
     
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
