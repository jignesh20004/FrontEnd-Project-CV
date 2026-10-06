import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import AdminBodyRight from "./AdminBodyRight";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineErrorOutline } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";

const AdminBody = ({ data }) => {

  // ================= SEARCH STATE =================

  const [searchEmployee, setSearchEmployee] = useState("");
  const [searchedEmployee, setSearchedEmployee] = useState("");


  // ================= TOTAL EMPLOYEES =================

  const totalEEmployees = data?.length || 0;


  // ================= ALL TASKS =================

  const allTask =
    data?.flatMap((employee) => employee.tasks || []) || [];


  // ================= TOTAL TASKS =================

  const totalTask = allTask.length;


  // ================= PENDING TASKS =================

  const pendingTask = allTask.filter(
    (task) => task.status === "Pending"
  ).length;


  // ================= COMPLETED TASKS =================

  const completeTask = allTask.filter(
    (task) => task.status === "Complete"
  ).length;


  // ================= SEARCH BUTTON =================

  const handleSearch = () => {
    setSearchedEmployee(searchEmployee.trim());
  };


  // ================= CLEAR SEARCH =================

  const handleClearSearch = () => {
    setSearchEmployee("");
    setSearchedEmployee("");
  };


  // ================= FILTER EMPLOYEES =================

  const filteredEmployees =
    searchedEmployee === ""
      ? data
      : data?.filter((employee) =>
          employee.name
            ?.toLowerCase()
            .includes(searchedEmployee.toLowerCase())
        );


  return (
    <div className="bg-slate-100 h-165 p-5">


      {/* ================================================= */}
      {/* ADMIN HEADER */}
      {/* ================================================= */}

      <div>

        <h1 className="text-3xl font-semibold">
          Admin Dashboard
        </h1>

        <h3 className="text-xl mt-3">
          Manage Employee & Task Efficienctly
        </h3>

      </div>


      {/* ================================================= */}
      {/* DASHBOARD CARDS */}
      {/* ================================================= */}

      <div className="flex gap-10">


        {/* ================= TOTAL EMPLOYEES ================= */}

        <div className="w-60 h-23 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-xl font-semibold mt-2">

            <MdPeopleAlt
              size={35}
              className="bg-blue-300 rounded-full text-blue-700"
            />

            <h1>
              Total Employees
            </h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">

            <span>
              {totalEEmployees}
            </span>

          </div>

        </div>


        {/* ================= TOTAL TASKS ================= */}

        <div className="w-60 h-23 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-xl font-semibold mt-2">

            <FaTasks
              size={35}
              className="bg-green-300 rounded-full text-green-700"
            />

            <h1>
              Total Tasks
            </h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">

            <span>
              {totalTask}
            </span>

          </div>

        </div>


        {/* ================= PENDING TASKS ================= */}

        <div className="w-60 h-23 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center text-xl p-2 font-semibold">

            <MdOutlineErrorOutline
              size={35}
              className="bg-red-300 rounded-full text-red-700"
            />

            <h1>
              Pending Task
            </h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">

            <span>
              {pendingTask}
            </span>

          </div>

        </div>


        {/* ================= COMPLETED TASKS ================= */}

        <div className="w-60 h-23 bg-white mt-5 rounded-xl">

          <div className="flex justify-center gap-4 items-center font-semibold p-2 text-xl">

            <MdOutlineDoneOutline
              size={35}
              className="bg-purple-300 rounded-full text-purple-700"
            />

            <h1>
              Completed Tasks
            </h1>

          </div>

          <div className="flex justify-center text-3xl text-blue-500 font-bold">

            <span>
              {completeTask}
            </span>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* EMPLOYEE SECTION */}
      {/* ================================================= */}

      <AdminBodyRight data={data} />

   <div className="flex items-center gap-2 mt-5 ">

          {/* Search Input */}

          <input
            type="text"
            placeholder="Search Employee..."
            value={searchEmployee}
            onChange={(e) => setSearchEmployee(e.target.value)}
            
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-60 h-9 border border-slate-300 rounded-lg px-3 bg-white outline-none focus:border-blue-500"
          />


          {/* Search Button */}

          <button
            onClick={handleSearch}
            className="h-9 px-5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Search
          </button>


          {/* Clear Button */}

          {searchedEmployee && (

            <button
              onClick={handleClearSearch}
              className="h-9 px-4 bg-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-400"
            >
              Clear
            </button>

          )}

        </div>

      {/* ================================================= */}
      {/* RECENT TASKS */}
      {/* ================================================= */}

      <div className="w-200 h-90 bg-white mt-4 p-5">


        {/* ================================================= */}
        {/* SEARCH SECTION - ABOVE RECENT TASKS */}
        {/* ================================================= */}

     


        {/* ================================================= */}
        {/* RECENT TASK HEADER - FIXED */}
        {/* ================================================= */}

        <div className="flex justify-between items-center">

          <h1 className="font-bold text-blue-900 text-xl">
            Recent Tasks
          </h1>

          <h2 className="text-blue-500">
            View All
          </h2>

        </div>


        {/* ================================================= */}
        {/* TABLE HEADER - FIXED */}
        {/* ================================================= */}

        <div>

          <ul className="grid grid-cols-[3fr_1.5fr_1fr_1.1fr_1fr] items-center bg-slate-200 h-10 p-2 mt-3 rounded-xl">

            <li>
              Task
            </li>

            <li>
              Assigned To
            </li>

            <li>
              Priority
            </li>

            <li>
              Status
            </li>

            <li>
              Due Date
            </li>

          </ul>

        </div>


        {/* ================================================= */}
        {/* ONLY TASK DATA WILL SCROLL */}
        {/* ================================================= */}

        <div className="h-60 overflow-y-auto">


          {/* ================= TASK DATA ================= */}

          {filteredEmployees?.map((employee) =>

            employee.tasks?.map((task) => (

              <div key={`${employee.id}-${task.id}`}>

                <hr className="text-slate-300 mt-4" />


                {/* ================= TASK ROW ================= */}

                <div className="grid grid-cols-[3fr_1.5fr_1fr_1.2fr_1fr] items-center mt-3">


                  {/* TASK */}

                  <h2 className="font-semibold">

                    {task.description}

                  </h2>


                  {/* ASSIGNED TO */}

                  <span>

                    {employee.name}

                  </span>


                  {/* PRIORITY */}

                  <span
                    className={`w-24 text-center font-bold rounded-2xl px-2 py-2
                    ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-500"
                        : task.priority === "Medium"
                        ? "bg-amber-100 text-amber-500"
                        : "bg-green-100 text-green-500"
                    }`}
                  >

                    {task.priority}

                  </span>


                  {/* STATUS */}

                  <span
                    className={`w-24 text-center font-bold rounded-2xl px-2 py-2
                    ${
                      task.status === "Pending"
                        ? "bg-red-100 text-red-500"
                        : task.status === "In Process"
                        ? "bg-amber-100 text-amber-500"
                        : "bg-green-100 text-green-500"
                    }`}
                  >

                    {task.status}

                  </span>


                  {/* DUE DATE */}

                  <span>

                    {task.dueDate}

                  </span>


                </div>

              </div>

            ))

          )}


          {/* ================================================= */}
          {/* EMPLOYEE NOT FOUND */}
          {/* ================================================= */}

          {searchedEmployee &&
            filteredEmployees?.length === 0 && (

              <div className="text-center text-slate-500 mt-10">

                Employee not found

              </div>

            )}


          {/* ================================================= */}
          {/* EMPLOYEE HAS NO TASK */}
          {/* ================================================= */}

          {searchedEmployee &&
            filteredEmployees?.length > 0 &&
            filteredEmployees.every(
              (employee) =>
                !employee.tasks ||
                employee.tasks.length === 0
            ) && (

              <div className="text-center text-slate-500 mt-10">

                This employee has no tasks.

              </div>

            )}

        </div>

      </div>

    </div>
  );
};

export default AdminBody;