import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useGlobalContext } from './context'

const LoginPage = () => {
   
  

  const {setUser, email, password, setEmail,setPassword} = useGlobalContext()
  
const navigate = useNavigate()
  const loginToPage = (e) =>{
    e.preventDefault();
    if(!email || !password) return;
    setUser({email:email, password:password})
    navigate('/dashboard')

  }


  return (
    <div className='loginpage'>
      <h1>Sano Bakery</h1>
      <h3 className='login-h3'>Welcome Back!</h3>
      <p className='first-p'>Login to continue</p>
      <div className='form-area'>
        <form >
            <div className='column-center'>
            <div className='label-input'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-input' id='name' placeholder='Enter your email here' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='label-input'>
            <label htmlFor='email' className='form-label'>Password</label>
            <input type='password' className='form-input' id='password' placeholder='Enter your password here' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='checkbox-remember'>
            <input className='checkbox' type='checkbox'/>
            <p>Remember me</p>
            </div>
            <button className='loginpage-btn' onClick={loginToPage}>Login</button>
            </div>
        </form>
         </div>
         <div className='forgot-password'><p >Forgot Password?</p></div>
        
        <div className='login-with'><p>Or Login With</p></div>
  
  
  <div className='btn-div'>
<button className='social-btn'>continue with google</button>
<button  className='social-btn'>continue with facebook</button>
<button  className='social-btn'>continue with Twitter</button>
  </div>

    <p className='last-p'>Don't have an account? Sign Up</p> 
    </div>
  )
}

export default LoginPage
