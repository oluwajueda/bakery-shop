import React, {useState} from 'react'
import { useGlobalContext } from './context'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Registration = () => {

const {setUser} = useGlobalContext()
  const navigate = useNavigate()

    const Login = () =>{
        navigate('/login')
    }
  const {setEmail, setPassword, setPhoneNumber, email,phoneNumber} = useGlobalContext()
  
  const [confirmPassword,setConfirmPassword] = useState('')
  
//   const validate = values => {
//     const errors = {};
//     if(!values.email){
//       errors.email = 'Required';
//  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }

//   //  if(!values.tel){
//   //   errors.phoneNumber = 'Required'
//   //  }else if(values.tel.length < 10){
//   //   errors.phoneNumber = 'please make sure your number is equal or more than 10'
//   //  }

//    if(!values.password){
//     errors.password = 'Required'
//    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
//     errors.password = 'Password must contain Minimum eight characters, at least one letter, one number and one special character'
//    }





//    if(!values.password){
//     errors.confirmPassword= 'Required'
//    }
//    else if(values.password !== values.confirmPassword){
//         errors.confirmPassword = 'Password not matched'
//    }


// return errors;
 
//   }

  


  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      passwordConfirmation:'',
    },
    validationSchema: Yup.object({
       email:Yup.string().email('Invalide email address').required('Required'),
      password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
     passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),




    onSubmit: values =>{
      setUser({...values})
      navigate('/dashboard')
      console.log('hello')
    }
  })

  



  return (
  
      <div className='registrationpage'>
      <h1 className='register-sano'>Sano Bakery</h1>
    
      
      <div className='form-area'>
        <form onSubmit={formik.handleSubmit}  >
            <div className='column-center'>
            <div className='label-input'>
            <label  className='form-label'>Email</label>
            <input type='email' className='form-input' name='email' id='name' placeholder='Enter your email here'  onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}  />
             {formik.touched.email && formik.errors.email ? <div className='email-error'>{formik.errors.email}</div> : null}
            </div>
            {/* <div className='label-input'>
            <label  className='form-label'>Phone Number</label>
            <input type="tel" id="phone" name="phone"
       className='form-input'  placeholder='Enter your phone number here' required/>
            
            </div> */}
            <div className='label-input'>
            <label  className='form-label'>Password</label>
            <input type='password' className='form-input' id='password' placeholder='Enter your password here' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}  />
                {formik.touched.password && formik.errors.password ? <div className='password-error'>{formik.errors.password}</div> : null}
            </div>
            <div className='label-input'>
            <label className='form-label'>Comfirm Password</label>
            <input type='password' id='password' name='passwordConfirmation'  className='form-input'  placeholder='Enter your password here' onBlur={formik.handleBlur}  value={formik.values.passwordConfirmation}   onChange={formik.handleChange} />
           {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? <div className='password-error'>{formik.errors.passwordConfirmation}</div> : null}
            </div>
            
  
            <button type='submit' className='registration-btn'>Register</button>
            </div>
        </form>
       
         </div>
          <div className='registration-last-p'>
        <p >Already a member? </p>
        <p onClick={Login} className='log-btn'> Login </p>
        </div>
         </div>
   
  )
}

export default Registration
