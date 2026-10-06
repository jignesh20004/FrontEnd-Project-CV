import React, { useEffect, useState } from "react";

const TaskAssignBody = () => {
  const [employees, setEmployees] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const employeeData =
      JSON.parse(localStorage.getItem("Employee")) || [];

    setEmployees(employeeData);

    console.log("Employees:", employeeData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !assignedTo ||
      !priority ||
      !dueDate
    ) {
      alert("Please fill all fields");
      return;
    }

    const employeeData =
      JSON.parse(localStorage.getItem("Employee")) || [];

    const employeeIndex = employeeData.findIndex(
      (employee) => employee.id === Number(assignedTo)
    );

    if (employeeIndex === -1) {
      alert("Employee not found");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      priority: priority,
      status: "Pending",
      dueDate: dueDate,
    };

    employeeData[employeeIndex].tasks = [
      ...(employeeData[employeeIndex].tasks || []),
      newTask,
    ];

    localStorage.setItem(
      "Employee",
      JSON.stringify(employeeData)
    );

    alert("Task assigned successfully!");

    setTitle("");
    setDescription("");
    setAssignedTo("");
    setPriority("");
    setDueDate("");
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setAssignedTo("");
    setPriority("");
    setDueDate("");
  };

  return (
    <div className="bg-slate-100 h-166 p-5">

      <div>
        <h1 className="text-3xl text-blue-900 font-semibold">
          Assign Task
        </h1>
      </div>

      <div className="w-full h-130 mt-5 p-5 bg-white">

        <form onSubmit={handleSubmit}>

          {/* Task Title */}
          <div>
            <h1 className="text-xl">
              Task Title
            </h1>

            <input
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-13 mt-2 border-2 text-xl p-2 border-slate-300 rounded-xl"
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <h1 className="text-xl">
              Description
            </h1>

            <textarea
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-25 border-2 text-xl mt-2 p-2 border-slate-300 rounded-xl"
            />
          </div>

          {/* Select Section */}
          <div className="flex justify-between items-center mt-5">

            {/* Assign To */}
            <div>
              <h1 className="text-xl">
                Assign To
              </h1>

              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-70 h-14 px-4 mt-2 bg-white border-2 border-slate-200 rounded-lg text-lg outline-none focus:border-blue-400"
              >
                <option value="">
                  Select Employee
                </option>

                {employees.map((employee) => (
                  <option
                    key={employee.id}
                    value={employee.id}
                  >
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority */}
            <div>
              <h1 className="text-xl">
                Select Priority
              </h1>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-70 h-14 px-4 mt-2 bg-white border-2 border-slate-200 rounded-lg text-lg outline-none focus:border-blue-400"
              >
                <option value="">
                  Select Priority
                </option>

                <option value="High">
                  High
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="Low">
                  Low
                </option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <h1 className="text-xl">
                Due Date
              </h1>

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-70 h-14 px-4 mt-2 border-2 border-slate-200 rounded-lg text-lg outline-none focus:border-blue-400"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-8">

            <button
              type="submit"
              className="w-40 text-white text-xl rounded-2xl h-13 bg-blue-500 cursor-pointer active:scale-95"
            >
              Assign Task
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="w-40 text-slate-500 text-xl rounded-2xl h-13 bg-slate-200 cursor-pointer active:scale-95"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default TaskAssignBody;