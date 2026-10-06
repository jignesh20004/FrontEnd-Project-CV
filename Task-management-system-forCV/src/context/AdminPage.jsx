import React from 'react'
import EmployeePanel from '../Component/EmployeePanel'
import AdminPanel from '../Component/AdminPanel'

const AdminPage = ({data , handleLogout}) => {
  return (
    <div>
        <AdminPanel handleLogout={handleLogout} data={data} />
    </div>
  )
}

export default AdminPage