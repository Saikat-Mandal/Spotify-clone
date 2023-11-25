import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
function SidebarComponent(props) {
  return (
    <Link onClick={props.onClick} to={props.path} className='flex w-full items-center gap-x-3 p-4 rounded-md cursor-pointer text-gray-400 hover:text-white'>
      <span className='flex items-center text-xl'>{props.icon}</span>
      <p className='text-md'>{props.text}</p>
    </Link>
  )
}
SidebarComponent.defaultProps = {
  icon: <AiFillHome />,
  text: "Home",
  path: "/"
}

export default SidebarComponent