import React from 'react'
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  const register = (e) =>{
    e.preventDefault();
    navigate('/register')
  }


    const handleLogin = () =>{
        navigate('login')
    }
  return <div className='landing-background'>
      <h2 className='landing-logo'>Sano<br/>
      Bakery
      </h2>
      <p>Good bread makes good day</p>
      <div className='login-btn-div'>
      <button className='login-btn' onClick={handleLogin}>Login</button>
      <button className='signup-btn signup-button' onClick={register}>Sign Up</button>
      </div>
    </div>
  
}

export default LandingPage
