import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const ManageEmployeeBody = () => {

  const [employees, setEmployees] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState("Active");


  // =====================================
  // LOAD EMPLOYEES
  // =====================================

  useEffect(() => {

    const employeeData =
      JSON.parse(localStorage.getItem("Employee")) || [];

    setEmployees(employeeData);

  }, []);


  // =====================================
  // OPEN ADD FORM
  // =====================================

  const handleAddEmployee = () => {

    setEditingEmployee(null);

    setName("");
    setEmail("");
    setRole("user");
    setStatus("Active");

    setShowForm(true);
  };


  // =====================================
  // OPEN EDIT FORM
  // =====================================

  const handleEdit = (employee) => {

    setEditingEmployee(employee);

    setName(employee.name || "");
    setEmail(employee.email || "");
    setRole(employee.role || "user");
    setStatus(employee.status || "Active");

    setShowForm(true);
  };


  // =====================================
  // DELETE EMPLOYEE
  // =====================================

  const handleDelete = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this employee?"
      );

    if (!confirmDelete) return;


    const updatedEmployees =
      employees.filter(
        (employee) => employee.id !== id
      );


    setEmployees(updatedEmployees);


    localStorage.setItem(
      "Employee",
      JSON.stringify(updatedEmployees)
    );

  };


  // =====================================
  // SAVE EMPLOYEE
  // =====================================

  const handleSubmit = (e) => {

    e.preventDefault();


    if (!name || !email) {

      alert("Please enter Name and Email");

      return;
    }


    // =================================
    // EDIT EMPLOYEE
    // =================================

    if (editingEmployee) {

      const updatedEmployees =
        employees.map((employee) => {

          if (employee.id === editingEmployee.id) {

            return {
              ...employee,
              name: name,
              email: email,
              role: role,
              status: status,
            };

          }

          return employee;

        });


      setEmployees(updatedEmployees);


      localStorage.setItem(
        "Employee",
        JSON.stringify(updatedEmployees)
      );


      setShowForm(false);

      return;
    }


    // =================================
    // ADD NEW EMPLOYEE
    // =================================

    const newEmployee = {

      id: Date.now(),

      name: name,

      email: email,

      password: "1234",

      role: role,

      status: status,

      tasks: [],

    };


    const updatedEmployees = [
      ...employees,
      newEmployee
    ];


    setEmployees(updatedEmployees);


    localStorage.setItem(
      "Employee",
      JSON.stringify(updatedEmployees)
    );


    setShowForm(false);

  };


  // =====================================
  // CANCEL FORM
  // =====================================

  const handleCancel = () => {

    setShowForm(false);

    setEditingEmployee(null);

    setName("");
    setEmail("");
    setRole("user");
    setStatus("Active");

  };


  return (

    <div className="bg-slate-100 min-h-screen p-5 mt-3 ">

      {/* =================================
          HEADER
      ================================= */}

      <div className="flex justify-between items-center">

        <h1 className="text-3xl text-blue-900 font-semibold">
          Manage Employees
        </h1>


        <button
          onClick={handleAddEmployee}
          className="w-50 bg-blue-500 h-10 text-white rounded-2xl cursor-pointer active:scale-95"
        >
          + Add Employee
        </button>

      </div>


      {/* =================================
          ADD / EDIT FORM
      ================================= */}

      {showForm && (

        <div className="bg-white mt-5 p-5 rounded-xl shadow">

          <h2 className="text-xl font-semibold text-blue-900 mb-5">

            {editingEmployee
              ? "Edit Employee"
              : "Add Employee"}

          </h2>


          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4"
          >

            {/* NAME */}

            <input
              type="text"
              placeholder="Employee Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="border border-slate-300 p-3 rounded-lg outline-none"
            />


            {/* EMAIL */}

            <input
              type="email"
              placeholder="Employee Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="border border-slate-300 p-3 rounded-lg outline-none"
            />


            {/* ROLE */}

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="border border-slate-300 p-3 rounded-lg"
            >

              <option value="user">
                User
              </option>

            </select>


            {/* STATUS */}

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="border border-slate-300 p-3 rounded-lg"
            >

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

            </select>


            {/* BUTTONS */}

            <div className="col-span-2 flex gap-3">

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer"
              >

                {editingEmployee
                  ? "Update Employee"
                  : "Add Employee"}

              </button>


              <button
                type="button"
                onClick={handleCancel}
                className="bg-slate-300 px-6 py-2 rounded-lg cursor-pointer"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      )}


      {/* =================================
          EMPLOYEE TABLE
      ================================= */}

      <div className="w-full mt-5 bg-white overflow-hidden">

        {/* HEADER */}

        <ul className="flex justify-between items-center bg-slate-200 p-5 h-15">

          <li className="w-12">ID</li>

          <li className="w-40">Name</li>

          <li className="w-60">Email</li>

          <li className="w-20">Role</li>

          <li className="w-20">Status</li>

          <li className="w-25">Action</li>

        </ul>


        {/* EMPLOYEES */}

        <div className="max-h-110 overflow-y-auto">

          {employees.map((employee, index) => (

            <ul
              key={employee.id}
              className="flex justify-between items-center p-5 border-b border-slate-200"
            >

              {/* ID */}

              <li className="w-12">
                {index + 1}
              </li>


              {/* NAME */}

              <li className="w-40">
                {employee.name}
              </li>


              {/* EMAIL */}

              <li className="w-60">
                {employee.email}
              </li>


              {/* ROLE */}

              <li
                className="w-20 h-8 text-center text-blue-700 font-bold rounded-full bg-blue-200"
              >
                User
              </li>


              {/* STATUS */}

              <li
                className={`w-20 h-8 text-center font-bold rounded-full ${
                  employee.status === "Inactive"
                    ? "text-red-700 bg-red-200"
                    : "text-green-700 bg-green-200"
                }`}
              >
                {employee.status || "Active"}
              </li>


              {/* ACTION */}

              <li className="flex gap-2 w-25">

                {/* EDIT */}

                <button
                  onClick={() =>
                    handleEdit(employee)
                  }
                  className="cursor-pointer"
                >

                  <FaRegEdit
                    className="w-10 h-5 text-blue-800 rounded-full bg-blue-200 active:scale-110"
                  />

                </button>


                {/* DELETE */}

                <button
                  onClick={() =>
                    handleDelete(employee.id)
                  }
                  className="cursor-pointer"
                >

                  <MdOutlineDelete
                    className="w-10 h-6 text-red-800 rounded-full bg-red-200 active:scale-110"
                  />

                </button>

              </li>

            </ul>

          ))}

        </div>

      </div>

    </div>

  );

};

export default ManageEmployeeBody;