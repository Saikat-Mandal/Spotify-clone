import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from '../utils/serverHelpers'
import axios from 'axios'

function Navbar() {
  const user = getUser()
  const navigate = useNavigate()

  const onLogout = async () => {
    try {
      await axios.get("http://localhost:4000/auth/logout", { withCredentials: true, })
      window.localStorage.clear();
      alert("successfully logged out")
      navigate("/")
    } catch (error) {
      alert(error.response.data.message);
    }
  }



  return (
    <header className='flex justify-end p-4 bg-[#242424] opacity-2'>
      <div className='flex items-center'>
        {
          user !== null ? (
            <>
              <button onClick={onLogout} className=' ml-4 font-semibold  py-2 px-3 text-white rounded-full'>Logout</button>
              <Link to="/uploadsong" className=' ml-4 font-semibold  py-2 px-3 text-white rounded-full'>Upload song</Link>
              <div onClick={onLogout} className=' ml-4 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer text-black bg-white'>SM</div>

            </>) : (
            <>
              <Link className=' ml-4 font-semibold  py-2 px-3 text-white rounded-full' to="/register">Sign up</Link>
              <Link className='ml-4 font-semibold  bg-white py-2 px-3 text-black rounded-full' to="/login">Log in</Link>
            </>
          )
        }

      </div>
    </header>
  )
}

export default Navbar