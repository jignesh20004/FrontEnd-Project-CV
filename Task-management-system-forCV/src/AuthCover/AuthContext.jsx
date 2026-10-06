import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../Util/LocalStorage'

export const AuthProvider = createContext()

const AuthContext = ({children}) => {

  const [userData, setuserData] = useState(null)

  useEffect(() => {
    // const {employees , admins} = getlocalStorage()
    // setuserData({employees,admins})
    
    const employees = localStorage.getItem('Employee')
    const admins = localStorage.getItem('Admin')

    if(!employees && ! admins){
        setlocalStorage()
    }

    const {employees: employeeData, admins: adminData } = getlocalStorage()

    setuserData({

      employees: employeeData,
      admins: adminData
    })
    
  }, [])
  
  
  return (
    <div>
      <AuthProvider.Provider value={userData} >
        {children}
      </AuthProvider.Provider>
    </div>
  )
}

export default AuthContext