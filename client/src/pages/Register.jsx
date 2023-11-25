import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputfield from '../components/Inputfield'
import NavbarO from '../components/NavbarO'
// import {makeUnauthenticatedPostRequest , makeUnauthenticatedPostRequestAxios} from "../utils/serverHelpers"
import axios from 'axios'
function Register() {

  const [email , setEmail] = useState("")
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [firstname , setFirstname] = useState("")
  const [lastname , setLastname] = useState("")


  const navigate = useNavigate()
  const onSignUp = async(e) =>{
    e.preventDefault()
    const data = {
      email : email,
      username : username,
      password : password,
      firstName : firstname,
      lastName : lastname
    }
   try {
    const response = await axios.post("http://localhost:4000/auth/register" , data )
    alert("Successfully registered !")
    navigate("/login")
   } catch (error) {
      alert(error.response.data.message);
   }
  }

  return (
    <div className='text-white min-h-screen bg-[#242424]'>
        <NavbarO/>
        <form onSubmit={onSignUp} className='p-10 md:w-1/2 m-auto mt-8 flex flex-col items-center bg-[#000000] rounded-md'>
            <h1 className='text-2xl md:text-base text-center pb-10 font-extrabold'>Register in MeloTunes</h1>
            
            <Inputfield  setValue={setEmail} value={email} label="What's your email" placeholder="Enter your email"/>
            <Inputfield  setValue={setUsername} value={username} label="What's your username" placeholder="Enter your username"/>
            <Inputfield  setValue={setPassword} value={password} label="Create a password" placeholder="Create a password"/>
            <div className=' md:flex md:w-1/2 md:gap-x-2'>
            <Inputfield  setValue={setFirstname} value={firstname} label="What's your firstname" placeholder="Firstname"/>
            <Inputfield  setValue={setLastname} value={lastname} label="What's your lastname" placeholder="Lastname"/>
         
            </div>
              
            <button type='submit' className='py-3 rounded-full text-black bg-green-500 w-1/2'>Sign up</button>
            <hr className=' border border-gray-400 w-3/4 my-14 ' />
            <p className=' text-sm py-4'>Already have an account? <Link to="/Login" className=' underline hover:text-green-500' >Sign in to Melotunes</Link></p>
       
        
        </form>
    </div>
  )
}

export default Register