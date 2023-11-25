import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputfield from '../components/Inputfield'
import NavbarO from '../components/NavbarO'
import axios from 'axios'

function Login() {

  const[email  , setEmail] = useState("")
  const[password  , setPassword] = useState("")
  const navigate = useNavigate()
  const onLogin = async(e)=>{
    e.preventDefault()
    const data = {
      email : email,
      password : password
    }
    try {
      const response = await axios.post("http://localhost:4000/auth/login" , data , {withCredentials: true})
      alert("successfully logged in")
      console.log(response);
      window.localStorage.setItem("userId" , response.data.id)
      navigate("/")
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
  
    <div className='text-white min-h-screen bg-[#242424]'>
        <NavbarO/>
        <form onSubmit={onLogin} className='p-10 md:w-1/2 m-auto mt-8 flex flex-col items-center bg-[#000000] rounded-md'>
            <h1 className='text-2xl md:text-base text-center pb-10 font-md'>To continue login to MeloTunes</h1>
            
            <Inputfield setValue={setEmail}    value={email} />      
            <Inputfield setValue={setPassword} value={password}  label="Password" placeholder="Password"/>      
          
            <button type='submit' className=' font-semibold py-3 rounded-full text-black bg-green-500 w-1/2'>Login</button>
            
                <hr className=' border border-gray-400 w-3/4 my-14 ' />
            
            <p className='text-sm py-4'>Don't have an account? <Link to="/register" className=' underline hover:text-green-500'>Sign up for Melotunes</Link></p>
        
        </form>
 
    </div>
  )
}

export default Login