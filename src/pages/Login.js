import React from 'react'
import Template from '../components/Template'
import logInImg from '../assets/login.jpg'
const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Building skills for today , tomorrow and beyond"
    desc2="Education to future-proof your career"
    image={logInImg}
    formType='login'
    setIsLoggedIn={setIsLoggedIn}
    
    
    
    
    />
  )
}

export default Login