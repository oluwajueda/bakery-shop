import React, {useState} from 'react'
import { useGlobalContext } from './context'

const Registration = () => {

  const {setEmail, setPassword, setPhoneNumber, email,phoneNumber,password} = useGlobalContext()
  const [values, setValues] = useState([])
  const [confirmPassword,setConfirmPassword] = useState('')
  const [focused, setFocused] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newObj = {email,phoneNumber, password}
    setValues([...values, {...newObj}])
    console.log(newObj)
    
  }

  const handleFocus = (e) =>{
    setFocused(true);
  }


  return (
  
      <div className='loginpage'>
      <h1>Sano Bakery</h1>
      <h3>Welcome Back!</h3>
      <p className='first-p'>Login to continue</p>
      <div className='form-area'>
        <form onSubmit={handleSubmit}>
            <div className='column-center'>
            <div className='label-input'>
            <label  className='form-label'>Email</label>
            <input required type='email' onBlur={(e) =>handleFocus} className='form-input' id='name' placeholder='Enter your email here' value={email} onChange={(e) => setEmail(e.target.value)}  />
            <span>It should be a valid email address</span> 
            </div>
            <div className='label-input'>
            <label  className='form-label'>Phone Number</label>
            <input onBlur={handleFocus} required type='tel' pattern="[1-9]{1}[0-9]{9}" className='form-input' id='phone' placeholder='Enter your phone number here' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}  />
             <span> number should be 10 digits without 0 at the front</span>
            </div>
            <div className='label-input'>
            <label  className='form-label'>Password</label>
            <input required type='password' onBlur={handleFocus} className='form-input' pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" name='password' id='password' placeholder='Enter your password here' value={password} onChange={(e)=> setPassword(e.target.value)}  />
            <span>Password should be a 8-20 characters and include at least 1 letter, 1 number and 1 special character</span>
            </div>
            <div className='label-input'>
            <label className='form-label'>Comfirm Password</label>
            <input required type='password' onBlur={handleFocus} pattern={password} className='form-input' name='confirm' id='pwd' placeholder='Enter your password here' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}  />
            <span>Password did not match</span>
            </div>
           
            <p className='at-least'>At least 8 character</p>
            <div>
            <p className='at-least'>Include unique character</p>
            </div>
            
           <p className='privacy-policy'> By continuing, you agree to our Terms Of Service and Privacy Policy</p>
            <button className='registration-btn'>Register</button>
            </div>
        </form>
       
         </div>
          <div className='registration-last-p'>
        <p >Already a member? Login</p>
        </div>
         </div>
   
  )
}

export default Registration
