import React from 'react'
import signUpImg from '../assets/signup.jpg'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Join the millions learning to code with study notion"
    desc1="Building skills for today , tomorrow and beyond"
    desc2="Education to future-proof your career"
    image={signUpImg}
    formType='signup'
    setIsLoggedIn={setIsLoggedIn}
    
    
    
    
    />
  )
}

export default Signup