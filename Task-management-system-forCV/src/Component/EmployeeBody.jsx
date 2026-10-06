import React from "react";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FcProcess } from "react-icons/fc";
import { MdOutlinePending } from "react-icons/md";

const EmployeeBody = ({ data }) => {
  return (
    <div className="bg-slate-100 h-165 p-5">

      {/* ================= HEADER ================= */}

      <div>
        <h1 className="text-3xl font-semibold">
          WelCome, {data?.name}👋🏻
        </h1>

        <h3 className="text-xl mt-3">
          Here Are The Tasks For Today
        </h3>
      </div>


      {/* ================= TASK CARDS ================= */}

      <div className="flex gap-10">

        {/* Total Tasks */}
        <div className="w-60 h-25 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-2xl mt-3">

            <FaTasks
              size={22}
              className="bg-blue-300 h-8 w-10 rounded-full text-blue-700"
            />

            <h1>Total Tasks</h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">
            <span>{data?.totaltask?.Task}</span>
          </div>

        </div>


        {/* Completed Tasks */}
        <div className="w-60 h-25 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-2xl mt-3">

            <MdOutlineTaskAlt
              size={22}
              className="bg-green-300 h-8 w-10 rounded-full text-green-700"
            />

            <h1>Completed Tasks</h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">
            <span>{data?.totaltask?.complete}</span>
          </div>

        </div>


        {/* In Process */}
        <div className="w-60 h-25 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-2xl mt-3">

            <FcProcess
              size={22}
              className="bg-amber-300 h-8 w-10 rounded-full"
            />

            <h1>In Process</h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">
            <span>{data?.totaltask?.inProcess}</span>
          </div>

        </div>


        {/* Pending */}
        <div className="w-60 h-25 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-2xl mt-3">

            <MdOutlinePending
              size={22}
              className="bg-red-300 h-8 w-10 rounded-full text-red-700"
            />

            <h1>Pending</h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">
            <span>{data?.totaltask?.pending}</span>
          </div>

        </div>

      </div>


      {/* ================= MY TASK ================= */}

      <div className="w-full h-80 bg-white mt-10 p-5">

        {/* Fixed Header */}

        <div className="flex justify-between">

          <h1 className="font-bold text-xl text-blue-900">
            My Task
          </h1>

          <h2 className="text-blue-500">
            View All
          </h2>

        </div>


        {/* Fixed Table Header */}

        <div>
          <ul className="grid grid-cols-[3fr_1.5fr_1fr_1.1fr_1fr] items-center bg-slate-200 h-10 p-2 mt-3 rounded-xl">

            <li>Task</li>

            <li>Assigned By</li>

            <li>Priority</li>

            <li>Status</li>

            <li>Due Date</li>

          </ul>
        </div>


        {/* ========================================= */}
        {/* ONLY TASK DATA WILL SCROLL */}
        {/* ========================================= */}

        <div className="h-45 overflow-y-auto">

          {data?.tasks?.map((task) => (

            <div key={task.id}>

              <hr className="text-slate-300" />

              <ul className="grid grid-cols-[3fr_1.5fr_1fr_1.1fr_1fr] items-center p-2">

                {/* Task */}
                <li>
                  {task.description}
                </li>


                {/* Assigned By */}
                <li>
                  Admin
                </li>


                {/* Priority */}
                <li
                  className={`w-20 text-center font-bold rounded-2xl px-2 py-1
                    ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-500"
                        : task.priority === "Medium"
                        ? "bg-amber-100 text-amber-500"
                        : "bg-green-100 text-green-500"
                    }`}
                >
                  {task.priority}
                </li>


                {/* Status */}
                <li
                  className={`w-24 text-center font-bold rounded-2xl px-2 py-1
                    ${
                      task.status === "In Process"
                        ? "bg-amber-100 text-amber-500"
                        : task.status === "Pending"
                        ? "bg-red-100 text-red-500"
                        : "bg-green-100 text-green-500"
                    }`}
                >
                  {task.status}
                </li>


                {/* Due Date */}
                <li>
                  {task.dueDate}
                </li>

              </ul>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default EmployeeBody;