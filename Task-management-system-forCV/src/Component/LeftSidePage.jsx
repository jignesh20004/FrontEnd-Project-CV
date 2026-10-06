import React from 'react'
import checklist from '../../public/checklist.png'
import logo from '../../public/logo.png' 
import RightSidePage from './RightSidePage'

const LeftSidePage = ({handlelogin}) => {
    // console.log('LeftSidePage:',handlelogin)
  return (
    <div className='w-160 h-screen bg-slate-100'>
        <div>
        <RightSidePage handlelogin={handlelogin} />
        </div>
        
        <div className='h-40 flex justify-center items-center'>
            <img src={checklist} alt="" className='h-30' />
        </div>
        <div className='flex justify-center items-center  ' >
            
            <h1 className='text-4xl font-semibold text-slate-600 '>Task Manager</h1>
        </div>
        <div>
            <ul  className='flex items-center justify-center gap-4 text-xl mt-5 text-slate-500 '>
                <li>! Organize</li>
                <li>! Assign</li>
                <li>! Get Work Done</li>
            </ul>
            
        </div>
        <div className='flex justify-center items-center'>
            <img src={logo} alt="" className='h-65' />
        </div>
        
    </div>
    
  )
}

export default LeftSidePage