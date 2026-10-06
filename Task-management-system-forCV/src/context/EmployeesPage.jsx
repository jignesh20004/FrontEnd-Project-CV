import React from 'react'
import EmployeePanel from '../Component/EmployeePanel'

const EmployeesPage = ({data , handleLogout}) => {
  return (
    <div>
        <EmployeePanel data={data} handleLogout={handleLogout} />
    </div>
  )
}

export default EmployeesPage