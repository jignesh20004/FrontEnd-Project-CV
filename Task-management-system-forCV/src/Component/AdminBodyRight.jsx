// import React from 'react'
// import { Employee } from '../Util/LocalStorage'

// const AdminBodyRight = ({data}) => {
//   return (
//     <div className='w-104 h-80 bg-white p-5 top-74 absolute left-190 overflow-hidden overflow-y-scroll '>
//               <div className='flex justify-between items-center' >
//             <h1 className='text-blue-900 font-bold text-xl' >Employees</h1>
//             <h3 className='text-blue-500 text-md ' >View All </h3>
//         </div>
//         {data?.map((Employee)=> (
//            <div key={Employee.id} >
            
      
//         <hr className='text-slate-300 mt-4 ' />
//         <div className='flex justify-between items-center mt-2  ' >
//             <h1 className='text-md font-semibold' >{Employee.name}</h1>
//             <h2 className='bg-green-200 w-19 h-7 text-center text-green-600 font-bold rounded-2xl  ' >Active</h2>
//         </div>
//         <span className='text-slate-400' >{Employee.email}</span>
//            </div> 
//         ))}
        

     
        
//     </div>
//   )
// }

// export default AdminBodyRight
import React from "react";

const AdminBodyRight = ({ data }) => {
  return (
    <div className="w-104 h-90 bg-white p-5 top-85 absolute left-210">

      {/* ================= HEADER - FIXED ================= */}
      <div className="flex justify-between items-center">

        <h1 className="text-blue-900 font-bold text-xl">
          Employees
        </h1>

        <h3 className="text-blue-500 text-md">
          View All
        </h3>

      </div>


      {/* ================= EMPLOYEE LIST - ONLY THIS SCROLLS ================= */}
      <div className="h-69 overflow-y-auto">

        {data?.map((employee) => (

          <div key={employee.id}>

            <hr className="text-slate-300 mt-4" />

            <div className="flex justify-between items-center mt-2">

              <h1 className="text-md font-semibold">
                {employee.name}
              </h1>

              <h2 className="bg-green-200 w-19 h-7 text-center text-green-600 font-bold rounded-2xl">
                Active
              </h2>

            </div>

            <span className="text-slate-400">
              {employee.email}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminBodyRight;