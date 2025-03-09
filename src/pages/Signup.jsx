import React from 'react'
import { Link } from 'react-router-dom'
import { TbLockPassword } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Signup = () => {
  return (
    <div className='  bg-slate-500 w-[25%] ml-[40%] p-4 '>
     <h1 className='font-bold ml-[40%]'>SIGN UP</h1>

     <div >
          <div className='flex flex-col '>
          <label htmlFor='name'> enter name</label>
          <div className='flex flex-row gap-3' >
          <input type="text" 
     
          className='w-[50%] flex flex-row rounded-3xl'
     
          placeholder='mercy' />
          <FaUser className='absolute top-[10%] left-1/2 ' />
          
          <input type="text" 
     className='w-[50%] rounded-3xl'
          
     placeholder='korir' />
     <FaUser />
      </div>
          </div>
     </div>
     
     <div className='py-4 flex flex-col'>
          <label htmlFor='email'> Enter Email</label>
          <input type="text"
          className='rounded-3xl'
          placeholder='example@gmail.com' />
          <MdMarkEmailUnread className='absolute top-[21%] left-1/2 '/>
     </div>
     <div className='py-4 flex flex-col'>
          <label htmlFor='name'> Enter Password</label>
          <input type="text"
          className='rounded-3xl'
          placeholder='1234@' />
          <TbLockPassword className='absolute top-[33%] left-1/2'/>
     </div>
     <div className='py-4 flex flex-col'>
          <label htmlFor='name'>Confirm Password</label>
          <input type="text"
          className='rounded-3xl'
          placeholder='' />
          <TbLockPassword className='absolute top-[46%] left-1/2'/>
     </div>
     <button className='bg-blue-700 rounded-[20%] ml-[40%]'>SIGN UP</button>
     <p>Already have an account?<Link to="/"><p className='text-green-950 ml-[70%]'>Login</p></Link></p>
    </div>
    

  )
} 

export default Signup