import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useGlobalContext } from './context'
import { useFormik } from 'formik'
import Registration from './Registration';

const LoginPage = () => {
   


  const {setUser, email, password,  setEmail,setPassword} = useGlobalContext()
  
const navigate = useNavigate()
  // const loginToPage = (e) =>{
  //   e.preventDefault();
  //   if(!email || !password) return;
  //   setUser({email:email, password:password})
  //   navigate('/dashboard')

  // }

  const register = (e) =>{
    e.preventDefault();
    navigate('/register')
  }

  const validate = values => {
    const errors = {};
    if(!values.email){
      errors.email = 'Required';
 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

   if(!values.password){
    errors.password = 'Required'
   }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
    errors.password = 'Password must contain Minimum eight characters, at least one letter, one number and one special character'
   }
return errors;
 
  }


  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      
    },
    validate,
    onSubmit: values =>{
      setUser({email:email, password:password})
      navigate('/dashboard')
      console.log('hello')
    }
  })

  


return (
    <div className='loginpage'>
      <h1>Sano Bakery</h1>
      <h3 className='login-h3'>Welcome Back!</h3>
      <p className='first-p'>Login to continue</p>
      <div className='form-area'>
        <form onSubmit={formik.handleSubmit} >
            <div className='column-center'>
            <div className='label-input'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-input' id='name' name='email' placeholder='Enter your email here'  onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
            {formik.touched.email && formik.errors.email ? <div className='email-error'>{formik.errors.email}</div> : null}
            </div>
            <div className='label-input'>
            <label htmlFor='email' className='form-label'>Password</label>
            <input type='password' className='form-input' id='password' name='password' placeholder='Enter your password here'  onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}/>
            
             {formik.touched.password && formik.errors.password ? <div className='password-error'>{formik.errors.password}</div> : null}
            </div>
            <div className='checkbox-remember'>
            <input className='checkbox' type='checkbox'/>
            <p>Remember me</p>
            </div>
            <button type='submit' className='loginpage-btn'>Login</button>
            </div>
        </form>
         </div>
       
        
        <div className='login-with'><p>Or Sign Up</p></div>
  
<button className='social-btn' onClick={register}>Register Now</button>


    </div>
  )
}

export default LoginPage
