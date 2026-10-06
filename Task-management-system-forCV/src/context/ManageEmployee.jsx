import React from 'react'
import ManageEmployeePanel from '../Component/ManageEmployeePanel'

const ManageEmployee = ({handleLogout}) => {
  return (
    <div>
      <ManageEmployeePanel handleLogout={handleLogout} />
    </div>
  )
}

export default ManageEmployee