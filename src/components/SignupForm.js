import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    createPassword:false,
    confirmPassword:false
  })

  const [accountType , setAccountType] = useState('student')
  function changeHandler(event) {
    setFormData( ({
      ...formData,
      [event.target.name]:event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault()
    if(formData.password !== formData.confirmPassword)
    {
      toast.error("Password do not match")
      return
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    navigate('/dashboard')
  }
  function showPasswordHandler(value){
    setShowPassword({
      
      ...showPassword , [value]:!showPassword[value]
    })
   

  }
  return (
    <div>
      <div className=" flex bg-zinc-900 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button onClick={()=>setAccountType('student')}
        className={`${accountType==="student" ? "bg-zinc-950 text-zinc-200"
      :"bg-transparent text-zinc-500"
    } py-2 px-5 rounded-full transition-all duration-200`}
        >Student</button>
        <button onClick={()=>setAccountType('instructor')}
        className={`${accountType==="instructor" ? "bg-zinc-950 text-zinc-200"
        :"bg-transparent text-zinc-500"
      } py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <div className="flex gap-x-4 mt-4">
          <label className='w-full'>
            <p className='text-[0.875rem] text-zinc-200 mb-1 leading-[1.375rem]'>
              First Name<sup className='text-pink-400'>*</sup>
            </p>
            <input
              required
              onChange={changeHandler}
              type="text"
              value={formData.firstName}
              name="firstName"
              placeholder="Enter First Name"
              className='text-zinc-300 bg-zinc-900 rounded-[0.5rem] w-full p-[12px]'
            />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-zinc-200 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-pink-400'>*</sup>
            </p>
            <input
              required
              onChange={changeHandler}
              type="text"
              value={formData.lastName}
              name="lastName"
              placeholder="Enter Last Name"
              className='text-zinc-300 bg-zinc-900 rounded-[0.5rem] w-full p-[12px]'
            />
          </label>
        </div>

        <label className='w-full mt-4'>
          <p className='text-[0.875rem] text-zinc-200 mb-1 leading-[1.375rem]'>
            Email<sup className='text-pink-400'>*</sup>
          </p>
          <input
            required
            onChange={changeHandler}
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter Email"
            className='bg-zinc-900 text-zinc-300 rounded-[0.5rem] w-full p-[12px]'
          />
        </label>

        <div className="flex gap-x-4 mt-4 ">
          <label className=' relative w-full'>
            <p className='text-[0.875rem] text-zinc-200 mb-1 leading-[1.375rem]'>
             Create Password<sup className='text-pink-400'>*</sup>
            </p>
            <input
              required
              onChange={changeHandler}
              type={showPassword.createPassword ? "text" : "password"}
              value={formData.password}
              name="password"
              placeholder="Create Password"
              className='bg-zinc-900 text-zinc-300 rounded-[0.5rem] w-full p-[12px]'
            />
            <span
              onClick={()=>showPasswordHandler('createPassword')
              
              }
              className='absolute right-3 top-[38px] cursor-pointer'
            >
              {showPassword.createPassword ? (
                <AiOutlineEye fontSize={24} fill='#AFB2BF'/>
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>
              )}
            </span>
          </label>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-zinc-200 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-400'>*</sup>
            </p>
            <input
              required
              onChange={changeHandler}
              type={showPassword.confirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              className='bg-zinc-900 text-zinc-300 rounded-[0.5rem] w-full p-[12px]'
            />
            <span
            onClick={()=>showPasswordHandler('confirmPassword')}
            className='absolute right-3 top-[38px] cursor-pointer'
            >
              {showPassword.confirmPassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF'/> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>}
            </span>
          </label>
        </div>
        <button className='w-full bg-yellow-300 rounded-[6px] font-medium text-zinc-950 py-[6px] px-[12px] mt-6'> 
            Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
