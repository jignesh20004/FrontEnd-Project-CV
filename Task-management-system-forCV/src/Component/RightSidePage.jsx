import React, { useState } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const RightSidePage = ({handlelogin}) => {

    // console.log(RightSidePage, handlelogin)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

  const [role, setrole] = useState("")



    const submithandle = (e) =>{
        e.preventDefault()
        
        if(!role){
            alert("Plese Select User Or Admin")
            return
        }
        handlelogin(email , password , role)
        setrole("")
        setemail("")
        setpassword("")
    }
  return (
    <div className='absolute left-160 w-full  h-screen p-10'>
        <div className='flex flex-col   '>
            <h1 className='text-4xl text-slate-600 font-semibold  '>Login</h1>
        </div>
        <div className='mt-2 text-xl text-slate-500 '>
            <h3>Welcome Back! Place Login Your Account</h3>
        </div>
        <div>
            <form  onSubmit={(e)=>{submithandle(e)}} className=' flex flex-col mt-10 gap-5  '>
                <div className='relative w-full'>
               <IoPersonSharp className='absolute left-2 top-2 -translate' size={22} /> 

                <input value={email} onChange={(e)=>{setemail(e.target.value)}}  type="mail" placeholder='Enter Mail ID'   className=' border w-90 h-10 px-10'/>
                </div>

                <div className='relative w-full'>
                    <FaLock className='absolute left-2 top-2 -translate' size={22} />

                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="Password" placeholder='Enter Password'className=' border-1 w-90 h-10 px-10' />
                </div>
  
        
        <div className='flex gap-8 mt-6'>
            <label  >
                <input checked={role === "User"} onChange={(e)=>setrole(e.target.value)}  type="radio" name='role' value="User" className='w-5 h-5 relative top-1 '/>
                <span className='text-xl ml-2' >User</span>
            </label>

            <label>
                <input checked={role === "Admin"} onChange={(e)=>setrole(e.target.value)}  type="radio" name='role' value="Admin" className='w-5 h-5 relative top-1 '/>
                <span className='text-xl ml-2' >Admin</span>
            </label>
        </div>
        <div >
            <button type='submit' className='h-13 text-xl flex justify-center items-center rounded-md  text-white mt-5  w-100 bg-blue-500 cursor-pointer active:scale-95 ' >Login</button>
        </div>
    </form>
        </div>
        <div className='mt-5 flex items-center relative left-10 text-slate-400'>
            <h1>Don't Have An Account? Contact Your Admin</h1>
        </div>
    </div>
  )
}

export default RightSidePage