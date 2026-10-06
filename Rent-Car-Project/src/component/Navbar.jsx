import React, { useState } from 'react'
import car3 from '../assets/car3.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
const [picupDate, setpicupDate] = useState('')
const [picuplocation, setpicupLocation] = useState('')
const [returnDate, setreturn] = useState('')

const navigate = useNavigate();

let carBook = () =>{
  
  if(!picupDate || !returnDate || !location){
    alert('⚠️Please Fill All The Detail..!⚠️');
    return;
 }
  navigate("/cars",{
    state:{
      picupDate,
      picuplocation,
      returnDate
    }
  })

  setpicupDate('');
  setLocation('');
  setreturn('');
};
  return (
    <div>
      <div className="w-[80%] h-35  ml-50 flex justify-center bg-amber-400 shadow-2xl rounded-2xl -mt-15 relative z-50 ">
        <form className="flex justify-center items-center gap-15  ">
            <div>
            <h1  className="text-2xl text-center font-semibold flex justify-center items-center gap-3">Pic-Up Date <MdDateRange /></h1>
            <input  value={picupDate} onChange={(e)=> setpicupDate(e.target.value)} type="date" placeholder="Select Date" className="w-80 bg-white h-13 px-5 text-xl border-2 rounded-xl " />
            </div>
            <div>
            <h1  className="text-2xl text-center font-semibold flex justify-center items-center gap-3">Pic-UP location <FaLocationDot /></h1>
            <input type='text' value={picuplocation} onChange={(e)=> setpicupLocation(e.target.value)}  placeholder="Enter Location" className="w-80 bg-white h-13 text-center text-xl border-2  rounded-xl" />
            </div>
            <div>
            <h1  className="text-2xl text-center font-semibold flex justify-center items-center gap-3">Return Date <MdDateRange /></h1>
            <input type='date' value={returnDate} onChange={(e)=> setreturn(e.target.value)}  placeholder="Select Date" className="w-80 bg-white h-13 px-5 text-center text-xl border-2  rounded-xl " />
            </div>  
                <button type='button' onClick={carBook} className="bg-black text-white w-60 h-20 rounded-2xl text-2xl cursor-pointer ml-50 font-semibold active:scale-90 active:bg-green-500">Schedule Booked</button>
        </form>
      </div>
     
          <div className="flex justify-between items-center p-5" >
        <h1 className="text-6xl ">Drive Your Dream <br /> <span className="text-amber-400">Car Today</span></h1>
        <img src={car3} alt="" className="w-150 h-50 mt-15" />
      </div>
      <button className="text-4xl ml-5 h-15 w-50 bg-amber-400 rounded-2xl shadow-2xl "> Book Now</button>
    </div>
  )
}

export default Navbar