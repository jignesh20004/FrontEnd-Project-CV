// import React, {  useState } from 'react'
// import LoginPage from './context/LoginPage'
// import EmployeesPage from './context/EmployeesPage'
// import AdminPage from './context/AdminPage'
 

// // import { getlocalStorage, setlocalStorage } from './Util/LocalStorage'

// const App = () => {

//   const [user, setuser] = useState(null)

//   const handlelogin  = (email,password) =>{
//     if(email == 'admin@gmail.com' && password == '123'){
//       // console.log("This is Admin Page")
//       setuser('admin')
//     }else if(email == 'user@gmail.com' && password == '123'){
//       // console.log("This is Employee Page")
//       setuser('Employee')
//     } 
    
//     else{
//       alert("Invaiid Mail ID")
//     }
      
//   }

//    console.log("APP:", handlelogin)
  
//   return (
//     <div>
//       {!user && (<LoginPage handlelogin={handlelogin}/>)}
//       {user === 'admin' && (<AdminPage/>)}
//       {user === 'Employee' && (<EmployeesPage/>)}
//       {/* <EmployeesPage/> */}
//       {/* <AdminPage/> */}
//       {/* <AssignTask/> */}
//       {/* <ManageEmployee/> */}
//     </div>
//   )
// }

// export default App

//===============================================================================================================

// import React, { useContext, useEffect, useState } from 'react'
// import LoginPage from './context/LoginPage'
// import EmployeesPage from './context/EmployeesPage'
// import AdminPage from './context/AdminPage'
// import { AuthProvider } from './AuthCover/AuthContext'
// import { setlocalStorage } from './Util/LocalStorage'
// const App = () => {


//   const [user, setuser] = useState(null)
//   const [loggedInUserData, setloggedInUserData] = useState(null)
  
//   const authdata = useContext(AuthProvider)
//   console.log("Auth Data:",authdata)
 
// // useEffect(() => {
// //   if(authdata){
// //     const loggedInUser = localStorage.getItem("LoggedInUser")
// //     if(loggedInUser){
// //       const userData = JSON.parse(loggedInUser)
// //       setuser(userData.role)
// //       setloggedInUserData(userData)
// //     }
// //   }
// // }, [])

// useEffect(() => {
//   const loggedInUser = localStorage.getItem("LoggedInUser");

//   if (loggedInUser) {
//     const userData = JSON.parse(loggedInUser);

//     setloggedInUserData(userData);

//     if (userData.role === "user") {
//       setuser("Employee");
//     } 
//     else if (userData.role === "Admin") {
//       setuser("admin");
//     }
//   }
// }, []);

// useEffect(() => {
//   setlocalStorage()
// }, [])

// console.log(user)

//   localStorage.removeItem("LoggedInUser");

//   setuser(null);
//   setloggedInUserData(null);

//   const handlelogin = (email, password) =>{

//     if(!authdata) return


//     const {employees , admins} = authdata
    

//     //Check Admin

//     const admin = admins.find((e)=> e.email === email && e.password === password
//   )

//   if(admin){
//     setuser("admin")

//     localStorage.setItem("LoggedInUser",JSON.stringify({role:'Admin'})
//   )
//   return
//   }


//    if(!authdata) return

  
//     const employee = employees.find((e)=> e.email === email && e.password === password
    
//   )
//   //Employee Check
//   if(employee){
//     setuser("Employee")
//     setloggedInUserData(employee)

//     localStorage.setItem("LoggedInUser",JSON.stringify(employee)
    
//   )
//   return
//   }
//   alert("Invalid Mail Id or Password")
//   }

  
//   return (
//     <div>

//       {!user && (
//         <LoginPage handlelogin={handlelogin} />
//       )}

//       {user === 'admin' && (
//         <AdminPage/>
//       )}

//       {user === 'Employee' && (
//         <EmployeesPage data={loggedInUserData}  handleLogout={handleLogout} /> 
//       )}

//       {/* <AssignTask/> */}
//       {/* <ManageEmployee/> */}

//     </div>
//   )
// }

// export default App
//=======================================================================================================================
import React, {  useContext,  useEffect,  useState,} from "react";

import {  BrowserRouter,  Routes,  Route,  Navigate,} from "react-router-dom";

import LoginPage from "./context/LoginPage";
import EmployeesPage from "./context/EmployeesPage";
import AdminPage from "./context/AdminPage";
import AssignTask from "./context/AssignTask";
import ManageEmployee from "./context/ManageEmployee";

import { AuthProvider } from "./AuthCover/AuthContext";


const App = () => {

  const [user, setuser] = useState(null);

  const [loggedInUserData, setloggedInUserData] = useState(null);


  const authdata = useContext(AuthProvider);


  console.log("Auth Data:", authdata);
  console.log("Current User:", user);


  // =====================================
  // CHECK LOGIN AFTER PAGE RELOAD
  // =====================================

  useEffect(() => {

    const loggedInUser =
      localStorage.getItem("LoggedInUser");

    if (loggedInUser) {

      const userData =
        JSON.parse(loggedInUser);

        

      setloggedInUserData(userData);


      if (userData.role === "user") {

        setuser("Employee");

      } else if (userData.role === "Admin") {

        setuser("admin");

      }

    }

  }, []);


  // =====================================
  // LOGIN
  // =====================================

  const handlelogin = (email, password) => {

    if (!authdata) return;


    const { employees, admins } = authdata;


    // =================================
    // ADMIN LOGIN
    // =================================

    const admin = admins.find(
      (e) =>
        e.email === email &&
        e.password === password
    );


    if (admin) {

      const adminData = {

        role: "Admin",

        email: admin.email,

      };


      setuser("admin");

      setloggedInUserData(adminData);


      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify(adminData)
      );


      return;

    }


    // =================================
    // EMPLOYEE LOGIN
    // =================================

    const employee = employees.find(
      (e) =>
        e.email === email &&
        e.password === password
    );


    if (employee) {

      setuser("Employee");

      setloggedInUserData(employee);


      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify(employee)
      );


      return;

    }


    // =================================
    // INVALID LOGIN
    // =================================

    alert("Invalid Mail Id or Password");

  };


  // =====================================
  // LOGOUT
  // =====================================

  const handleLogout = () => {

    localStorage.removeItem("LoggedInUser");

    setuser(null);

    setloggedInUserData(null);

  };


  // =====================================
  // UI
  // =====================================

  return (

    <BrowserRouter>

      {/* ================================
          LOGIN
      ================================= */}

      {!user && (

        <LoginPage
          handlelogin={handlelogin}
        />

      )}


      {/* ================================
          ADMIN
      ================================= */}

      {user === "admin" && (
      <Routes>

          {/* ============================
              ADMIN DASHBOARD
          ============================= */}

          <Route
            path="/"
            element={

              <AdminPage
                data={authdata?.employees}
                handleLogout={handleLogout}
              />

            }
          />


          {/* ============================
              ASSIGN TASK
          ============================= */}

          <Route
            path="/assign-task"
            element={

              <AssignTask
                data={authdata?.employees}
                handleLogout={handleLogout}
              />

            }
          />


          {/* ============================
              MANAGE EMPLOYEE
          ============================= */}

          <Route
            path="/manage-employee"
            element={

              <ManageEmployee
                data={authdata?.employees}
                handleLogout={handleLogout}
              />

            }
          />


          {/* ============================
              WRONG ADMIN URL
          ============================= */}

          <Route
            path="*"
            element={
              <Navigate to="/" replace />
            }
          />

        </Routes>

      )}


      {/* ================================
          EMPLOYEE
      ================================= */}

      {user === "Employee" && (

        <EmployeesPage
          data={loggedInUserData}
          handleLogout={handleLogout}
        />

      )}

    </BrowserRouter>

  );

};


export default App;


//=======================================================================================================================
  // Load employee/admin data into localStorage
  // useEffect(() => {

  //   const employees = localStorage.getItem("Employee")
  //   const admins = localStorage.getItem("Admin")

  //   if (!employees || !admins) {
  //     setlocalStorage()
  //   }

  // }, [])


  // const handlelogin = (email, password) => {

  //   const { employees, admins } = getlocalStorage()

  //   // Check Admin
  //   const admin = admins.find(
  //     (user) =>
  //       user.email === email &&
  //       user.password === password
  //   )

  //   if (admin) {
  //     setuser("admin")

  //     localStorage.setItem(
  //       "loggedInUser",
  //       JSON.stringify(admin)
  //     )

  //     return
  //   }


  //   // Check Employee
  //   const employee = employees.find(
  //     (user) =>
  //       user.email === email &&
  //       user.password === password
  //   )

  //   if (employee) {

  //     setuser("Employee")

  //     localStorage.setItem(
  //       "loggedInUser",
  //       JSON.stringify(employee)
  //     )

  //     return
  //   }


  //   // Wrong login
  //   alert("Invalid Mail ID or Password")
  // }


  // console.log("APP:", handlelogin)
  // console.log("CURRENT USER:", user)


//   return (
//     <div>

//       {!user && (
//         <LoginPage handlelogin={handlelogin} />
//       )}

//       {user === 'admin' && (
//         <AdminPage/>
//       )}

//       {user === 'Employee' && (
//         <EmployeesPage/>
//       )}

//       {/* <EmployeesPage/> */}
//       {/* <AdminPage/> */}
      
//     </div>
//   )
// }

// export default App


