    import React from 'react'
    import { RxHome } from "react-icons/rx";
    import { FaTasks } from "react-icons/fa";
    import { IoPersonSharp } from "react-icons/io5";
    import { FiLogOut } from "react-icons/fi";
    import { FaClipboardList } from "react-icons/fa";

    import AdminHeader from './AdminHeader';
import { useNavigate } from 'react-router-dom';

    const AdminPanel = ({ data , handleLogout}) => {

        const navigate = useNavigate();
    return (
        <div className='w-60 h-screen bg-blue-900 p-5 ' >
            
            <AdminHeader data={data} />

            <div className='text-white text-2xl flex items-center gap-3  font-semibold ' >
                <FaClipboardList size={25} />
                <h1>Task Manager</h1>
            </div>

            <div >
                <ul className='flex flex-col gap-6 mt-5 ' >
                
                <li onClick={()=> navigate("/")} className='flex items-center gap-3 text-white cursor-pointer bg-blue-400 h-9 w-50 p-2 rounded-xl  ' >

                        <RxHome size={22} />   
                        <span  >Dashboard</span>
                </li>
                
                    
                    <li onClick={()=> navigate("/assign-task")} className='flex items-center gap-3 text-white cursor-pointer p-2 ' >
                    <FaTasks size={22} />
                    <span>Assign Task</span>
                    </li>
                    
                    
                    <li   onClick={()=> navigate("/manage-employee")} className='flex items-center gap-3 text-white cursor-pointer  p-2 ' >
                           
                        <IoPersonSharp size={22} />
                        <span>Manage Employees</span>
                    </li>     
                    
                    <li onClick={handleLogout}  className='flex items-center gap-3 text-white cursor-pointer p-2 ' >
                        
                    <FiLogOut size={22} />
                    <span>Logout</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
    }

    export default AdminPanel