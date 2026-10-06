import React from 'react'
import LeftSidePage from '../Component/LeftSidePage'

const LoginPage = ({handlelogin}) => {
  // console.log('LoginPage',handlelogin)
  return (
    <div>
    <LeftSidePage handlelogin={handlelogin} />
    </div>
  )
}

export default LoginPage