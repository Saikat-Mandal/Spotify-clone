import React from 'react'
import { AiFillHome } from "react-icons/ai";
function Button(props) {
  return (
    <div className=' border border-gray-400 flex items-center justify-evenly py-1  rounded-full w-full cursor-pointer text-gray-300 hover:bg-gray-100 hover:text-black'>
        <span className='flex items-center text-x'>{props.icon}</span>
        <p className='text-md'>{props.text}</p>
    </div>
  )
}
Button.defaultProps ={
    icon : <AiFillHome />,
    text : "Home"
}

export default Button