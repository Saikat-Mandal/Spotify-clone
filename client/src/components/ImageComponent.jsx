import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
function ImageComponent() {
  return (
    <Link to="/" className=' flex text-white items-center'>
    <img className=' h-14' src={logo} alt="logo" />
    <p className=' text-xl'>MeloTunes</p>
    </Link>
  )
}

export default ImageComponent