import React, { useEffect, useState } from "react";

import {
  getTasks,
  setTasks
} from "../Utiles/LocalStorage";

const AddTask = ({
  setPage,
  editTask,
  setEditTask
}) => {

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [week, setWeek] = useState("");
  const [status, setStatus] = useState("");

  // EDIT TASK DATA FORM ME SHOW KARNA
  useEffect(() => {

    if (editTask) {

      setDate(editTask.date);
      setTitle(editTask.title);
      setDescription(editTask.description);
      setWeek(editTask.week);
      setStatus(editTask.status);

    }

  }, [editTask]);


  // CREATE / UPDATE TASK
  const handleCreateTask = () => {

    // VALIDATION
    if (
      !date ||
      !title ||
      !description ||
      !week ||
      !status
    ) {
      alert("Please fill all fields");
      return;
    }


    // =========================
    // UPDATE TASK
    // =========================

    if (editTask) {

      const oldTasks = getTasks();

      const updatedTasks = oldTasks.map((task) => {

        if (task.id === editTask.id) {

          return {
            ...task,
            date: date,
            title: title,
            description: description,
            week: week,
            status: status
          };

        }

        return task;

      });


      setTasks(updatedTasks);

      alert("Task Updated Successfully");


      // FORM CLEAR
      setDate("");
      setTitle("");
      setDescription("");
      setWeek("");
      setStatus("");


      // EDIT MODE REMOVE
      setEditTask(null);


      // MY TASK PAGE
      setPage("mytask");

      return;
    }


    // =========================
    // CREATE NEW TASK
    // =========================

    const newTask = {

      id: Date.now(),

      date: date,

      title: title,

      description: description,

      week: week,

      status: status

    };


    // OLD TASKS
    const oldTasks = getTasks();


    // ADD NEW TASK
    const updatedTasks = [
      ...oldTasks,
      newTask
    ];


    // LOCAL STORAGE
    setTasks(updatedTasks);


    alert("Task Created Successfully");


    // FORM CLEAR
    setDate("");
    setTitle("");
    setDescription("");
    setWeek("");
    setStatus("");


    // MY TASK PAGE
    setPage("mytask");

  };


  // CANCEL BUTTON
  const handleCancel = () => {

    setDate("");
    setTitle("");
    setDescription("");
    setWeek("");
    setStatus("");

    setEditTask(null);

    setPage("mytask");

  };


  return (

    <div className="flex justify-center items-center">

      <div className="mt-20 bg-slate-200 w-130 h-150 p-3 rounded-2xl">

        <div className="bg-white h-130 rounded-3xl p-3 shadow-2xl">


          {/* HEADING */}

          <h1 className="text-3xl">

            {editTask
              ? "Edit Task"
              : "Add New Task"
            }

          </h1>


          {/* DATE */}

          <div className="mt-3">

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="border border-blue-500 p-2 rounded-xl"
            />

          </div>


          {/* TITLE */}

          <div>

            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full h-15 bg-slate-200 p-5 mt-3 rounded-xl"
            />

          </div>


          {/* DESCRIPTION */}

          <div>

            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full bg-slate-200 p-5 mt-3 rounded-xl"
            />

          </div>


          {/* WEEK + STATUS */}

          <div className="flex justify-between">

            {/* WEEK */}

            <select
              value={week}
              onChange={(e) =>
                setWeek(e.target.value)
              }
              className="w-50 h-10 border border-blue-500 rounded-xl"
            >

              <option value="">
                Select Week
              </option>

              <option value="Monday">
                Monday
              </option>

              <option value="Tuesday">
                Tuesday
              </option>

              <option value="Wednesday">
                Wednesday
              </option>

              <option value="Thursday">
                Thursday
              </option>

              <option value="Friday">
                Friday
              </option>

              <option value="Saturday">
                Saturday
              </option>

              <option value="Sunday">
                Sunday
              </option>

            </select>


            {/* STATUS */}

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-50 h-10 border border-blue-500 rounded-xl"
            >

              <option value="">
                Task Status
              </option>

              <option value="Completed">
                Completed
              </option>

              <option value="Not Completed">
                Not Completed
              </option>

              <option value="Working">
                Working
              </option>

            </select>

          </div>


          {/* BUTTONS */}

          <div className="flex justify-between items-center mt-25 p-5">

            {/* CREATE / UPDATE */}

            <button
              onClick={handleCreateTask}
              className="bg-green-200 w-35 h-12 rounded-2xl text-xl cursor-pointer active:scale-95"
            >

              {editTask
                ? "Update Task"
                : "Create Task"
              }

            </button>


            {/* CANCEL */}

            <button
              onClick={handleCancel}
              className="bg-slate-200 w-35 h-12 rounded-2xl text-xl cursor-pointer active:scale-95"
            >

              Cancel

            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default AddTask;