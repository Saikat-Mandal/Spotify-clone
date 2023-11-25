import React from 'react'

function Inputfield(props) {
  return (
    <div className=' flex flex-col md:w-1/2 pb-10'>
                <label htmlFor="" className='pb-1 font-medium text-sm'>{props.label}</label>
                <input onChange={(e)=>props.setValue(e.target.value)} value={props.value} className=' py-2 px-2 rounded-md bg-transparent border-white border' type={props.type} placeholder={props.placeholder}/>
    </div> 
  )
}
Inputfield.defaultProps ={
    label : "Email",
    placeholder : "Email",
    type : "text"
}

export default Inputfield