import React, { useEffect, useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import {
  getTasks,
  setTasks
} from "../Utiles/LocalStorage";


const MyTask = ({
  setPage,
  setEditTask
}) => {

  const [tasks, setTasksData] = useState([]);


  // =========================
  // LOAD TASKS
  // =========================

  useEffect(() => {

    const savedTasks = getTasks();

    setTasksData(savedTasks);

  }, []);


  // =========================
  // DELETE TASK
  // =========================

  const handleDelete = (id) => {

    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );


    setTasksData(updatedTasks);

    setTasks(updatedTasks);

  };


  // =========================
  // COMPLETE TASK
  // =========================

  const handleComplete = (id) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {
          ...task,

          status:
            task.status === "Completed"
              ? "Not Completed"
              : "Completed"
        };

      }

      return task;

    });


    setTasksData(updatedTasks);

    setTasks(updatedTasks);

  };


  // =========================
  // EDIT TASK
  // =========================

  const handleEdit = (task) => {

    setEditTask(task);

    setPage("addtask");

  };


  // =========================
  // ADD NEW TASK
  // =========================

  const handleAddTask = () => {

    // EDIT MODE CLEAR
    setEditTask(null);

    // ADD TASK PAGE
    setPage("addtask");

  };


  return (

    <div className="flex justify-center items-center">

      <div className="mt-20 bg-slate-200 w-130 h-160 p-3 rounded-2xl">

        <div className="bg-white h-150 rounded-3xl p-3 shadow-2xl   ">


          {/* MAIN HEADING */}

          <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">

            TO-DO Task

          </h1>


          {/* SUB HEADING */}

          <h1 className="text-3xl">

            My Every Day Task

          </h1>


          {/* DATE */}

          <div className="mt-3">

            <input
              type="date"
              className="border border-blue-500 p-2 rounded-xl"
            />

          </div>


          {/* TASK LIST */}

          <div className="mt-4 overflow-y-auto h-85">

            {tasks.length === 0 ? (

              <p className="text-center text-slate-500 mt-10">

                No Tasks Available

              </p>

            ) : (

              tasks.map((task) => (

                <div
                  key={task.id}
                  className="mb-4"
                >


                  {/* TITLE + CHECK BUTTON */}

                  <div className="flex justify-between mt-4">

                    <h1
                      className={`text-xl ${
                        task.status === "Completed"
                          ? "line-through text-slate-400"
                          : ""
                      }`}
                    >

                      {task.title}

                    </h1>


                    {/* COMPLETE BUTTON */}

                    <button
                      onClick={() =>
                        handleComplete(task.id)
                      }
                      className={`rounded-full border w-10 h-9 p-5 text-2xl flex justify-center items-center cursor-pointer active:scale-95 ${
                        task.status === "Completed"
                          ? "bg-green-400"
                          : "bg-green-200"
                      }`}
                    >

                      {task.status === "Completed" && (

                        <IoMdCheckmark />

                      )}

                    </button>

                  </div>


                  {/* WEEK + EDIT + DELETE */}

                  <div className="flex justify-between gap-4 mt-4">

                    <div>

                      <span className="text-slate-500">

                        {task.week}

                      </span>


                      <span
                        className={`ml-2 ${
                          task.status === "Completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >

                        ({task.status})

                      </span>

                    </div>


                    {/* ICONS */}

                    <div className="flex gap-3">


                      {/* EDIT */}

                      <FaRegEdit
                        size={22}
                        onClick={() =>
                          handleEdit(task)
                        }
                        className="text-blue-500 active:scale-110 cursor-pointer"
                      />


                      {/* DELETE */}

                      <MdDelete
                        size={25}
                        onClick={() =>
                          handleDelete(task.id)
                        }
                        className="text-red-500 active:scale-110 cursor-pointer"
                      />

                    </div>

                  </div>


                  {/* DESCRIPTION */}

                  <p className="text-slate-500 mt-2">

                    {task.description}

                  </p>


                  {/* DATE */}

                  <p className="text-sm text-slate-400 mt-1">

                    Date: {task.date}

                  </p>


                  {/* LINE */}

                  <hr className="text-slate-400 mt-3" />

                </div>

              ))

            )}

          </div>


          {/* ADD TASK BUTTON */}

          <div
            onClick={handleAddTask}
            className="flex justify-center items-center shadow-2xl w-full h-15 bg-blue-200 rounded-2xl cursor-pointer active:scale-95"
          >

            <button className="text-2xl cursor-pointer active:scale-95">

              + Add Task

            </button>

          </div>


        </div>

      </div>

    </div>

  );

};

export default MyTask;