import React from 'react'
import { Link } from 'react-router-dom'
import { MdMarkEmailUnread } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  return (
    <div className='bg-slate-400 w-[25%] p-2 mt-[10%] ml-[40%]'>
     <h1><strong>LOGIN</strong></h1>
     <div className='py-3 flex flex-col'>
          <label htmlFor="email">Enter Email</label>
          <input type=""
          className='rounded-3xl'
          placeholder='email' />
   <MdMarkEmailUnread className='absolute top-[33%] left-1/2 '/>

     </div>
     <div className='py-3 flex flex-col' >
          <label htmlFor="email">Enter password</label>
          <input type=""
          className='rounded-3xl'
          placeholder='password' />
          <TbLockPassword className='absolute top-[44%] left-1/2'/>
     </div>
     <button className='bg-blue-700 p-2 ml-[40%] rounded-xl'>LOG IN</button>
     <p>Don't have an account <Link to="/signup"><p className='text-green-900 ml-[70%]'>signup</p></Link></p>
    </div>
  )
}

export default Login