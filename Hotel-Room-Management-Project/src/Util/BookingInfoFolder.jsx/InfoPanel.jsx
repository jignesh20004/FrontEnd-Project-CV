
import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineBedroomChild } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMessageSquareDetail, BiSolidBed } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const InfoPanel = () => {
  const Navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 shrink-0 rounded-r-2xl bg-purple-900 p-5 text-white">
      <h1 className="flex items-center gap-3 text-3xl">
        <BiSolidBed size={45} />
        Hotel Stay
      </h1>

      <span className="ml-14 text-purple-200">
        Manage Your Stay
      </span>

      <ul className="mt-8 flex flex-col gap-5 cursor-pointer ">
        <li  onClick={()=>Navigate("/")} className="flex h-13 items-center gap-4 rounded-2xl px-3 py-2 text-2xl text-white">
          <IoHome size={26} />
          Dashboard
        </li>

        <li  onClick={()=>Navigate("/room")} className="flex items-center gap-4 px-3 py-2 text-2xl  ">
          <MdOutlineBedroomChild size={26} />
          Rooms
        </li>

        <li onClick={()=>Navigate("/bookininfo")} className="flex items-center gap-4 px-3 py-2 text-2xl bg-purple-300 rounded-2xl ">
          <AiOutlineInfoCircle size={26} />
          Booking info
        </li>

        <li onClick={()=>Navigate("/bookingDetail")} className="flex items-center gap-4 px-3 py-2 text-2xl">
          <BiMessageSquareDetail size={26} />
          Booking Detail
        </li>
      </ul>
    </aside>
  );
};

export default InfoPanel;

