import React from 'react'
import Dashboard from './Component/Dashboard'
import Roomes from './Component/Roomes'
import BookingInfo from './Component/BookingInfo'
import BookingDetail from './Component/BookingDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}  />
      <Route path='/room' element={<Roomes/>} />
      <Route path='/bookininfo' element={<BookingInfo/>} />
      <Route path='/bookingDetail' element={<BookingDetail/>} />
      
    </Routes>
</BrowserRouter>
  )
}

export default App