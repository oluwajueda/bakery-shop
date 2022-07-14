import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bottombar from './Bottombar';
import Inbox from './Inbox';
import './index.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import Market from './Market';
import Order from './Order';
import Profile from './Profile';
import Registration from './Registration';

function App() {
 
  return (
   <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
     <Route path='login' element={<LoginPage/>}/>
     <Route path='dashboard' element={<Market />}/>
     
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;