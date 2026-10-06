import React from 'react'
import Home from './component/Home'
import All_Cars from './pages/All_Cars'
import { Route, Routes } from 'react-router-dom'
import Booking_Detail from './pages/Booking_Detail'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div>

      
      <Routes>
        <Route path='/' element={<Home/>} />     
        <Route path='/home' element={<Home/>} />     
        <Route path='/cars' element={<All_Cars />} />
        <Route path='/booking-detail' element={<Booking_Detail/>} />
        {/* <Route path='/about-us' element={<AboutUs/>} /> */}
      </Routes>
      
    </div>
  )
}

export default App