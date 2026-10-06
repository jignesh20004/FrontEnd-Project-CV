  import React from "react";
  import { IoPersonSharp } from "react-icons/io5";
  import EmployeeBody from "./EmployeeBody";

  const EmployeeHeader = ({data}) => {
    
    return (
      <div className="absolute left-60 right-0 top-1 h-screen p-3">

        <div className="flex justify-end gap-3">
          <IoPersonSharp size={22} className=" text-white rounded-full  bg-blue-500  " />
          <h1 className="text-blue-900 font-bold" >{data?.name}</h1>
        </div>

        <div className="flex justify-end gap-3">
          <h5 className="text-slate-500" >User</h5>
        </div>

        <EmployeeBody data={data} />

      </div>
    );
  };

  export default EmployeeHeader;