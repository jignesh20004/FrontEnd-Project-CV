import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import ManageEmployeeBody from "./ManageEmployeeBody";


const ManageEmployeeHeader = () => {
  return (
    <div className="absolute left-60 right-0 top-1 h-screen p-3">

      <div className="flex justify-end gap-3  ">
        <IoPersonSharp  size={25} className=" text-white rounded-full  bg-blue-500  " />
        <h1 className="text-blue-900 font-bold" >Admin</h1>
      </div>

      <div className="flex justify-end gap-3">
        <h5 className="text-slate-500" >Administrator</h5>
      </div>

      <ManageEmployeeBody/>
      

    </div>
  );
};

export default ManageEmployeeHeader;