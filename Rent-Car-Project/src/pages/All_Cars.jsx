import React, { useState } from "react";
import carImage12 from "../assets/carImage12.jpg";
import carsData from "../assets/Car_Data";
import { Link, useLocation } from "react-router-dom";
import { FaCarSide } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const All_Cars = () => {
const location = useLocation();
const [nextPage, setnextPage] = useState("cars")

const car = location?.car;
const navigate = useNavigate();
  // Home page se category aayegi
  const [selectCategory, setselectCategory] = useState(
    location.state?.category || ""
  );

  // Vehicle filter
  const [selectVehicle, setselectVehicle] = useState("");

  // Fuel filter
  const [selectFuel, setselectFuel] = useState("");

  const [selectPrice, setselectPrice] = useState(15000)

  // Cars filter
  const filterCar = carsData.filter((item) => {

    
    // Category
    if (selectCategory && item.category !== selectCategory) {
      return false;
    }

    // Vehicle Type
    if (selectVehicle && item.vehicleType !== selectVehicle) {
      return false;
    }

    // Fuel Type
    if (selectFuel && item.fuelType !== selectFuel) {
      return false;
    }

    if(item.price > selectPrice)
    {
      return false; 
    }

    return true;
  });

  return (

    //============================ Header ============================

      <div className="outline-none border-none caret-transparent">
        <div className="bg-black w-full flex items-center h-25 px-5">
          <FaCarSide className="text-amber-400 w-20 mb-8 h-9" /> 
          <div className="w-50  ">
           
           <h1  className="text-amber-400 text-2xl  "> Drive <span className="text-white text-2xl">Easy</span>  </h1> 
           
          <h2 className="text-white text-xl ">Rent <span className="text-amber-400 text-xl"> Cars</span></h2> 
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
          <ul   className="text-white flex  gap-25 text-3xl" >
            <li onClick={()=> setnextPage("home")}> <Link to="/home">Home</Link> {nextPage === "home" ? <hr/>:null} </li>
            <li onClick={()=> setnextPage("cars")}> <Link to="/cars">Cars</Link> {nextPage === "cars" ? <hr className="text-amber-400 border-3"/>:null}</li> 
            <li onClick={()=> setnextPage("booking-detail")}> <Link to="/booking-detail">Booking Detail</Link> {nextPage === "booking-detail" ? <hr/>:null}</li>
            {/* <li onClick={()=> setnextPage("about-us")}> <Link to="/about-us">About Us</Link> {nextPage === "about-us" ? <hr/>:null}</li> */}
          </ul>
          </div>

        </div>
    <div className="flex items-start py-3 ">

      {/* ================= FILTER PANEL ================= */}
      
      <div className="flex flex-col w-[375px] shrink-0 bg-amber-400 p-5 sticky top-0 h-screen  rounded-2xl">

        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-semibold">
            Filter
          </h1>

          <span
            onClick={() => {
              setselectCategory("");
              setselectVehicle("");
              setselectFuel("");
            }}
            className="active:scale-95 text-2xl  cursor-pointer bg-black text-white w-30 h-15 flex justify-center items-center text-center rounded-full"
          >
            Clear All
          </span>
        </div>


        {/* ================= CATEGORY ================= */}

        <div className="text-xl flex flex-col mb-10">

          <h1 className="text-2xl font-semibold py-5">
            Category
          </h1>

          <ul>

            <li>
              <input
              
                type="checkbox"
                className="cursor-pointer "
                checked={selectCategory === "Family Car"}
                onChange={() => setselectCategory("Family Car")}
              />{" "}
              Family Car
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectCategory === "Luxury"}
                onChange={() => setselectCategory("Luxury")}
              />{" "}
              Luxury
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectCategory === "Electric"}
                onChange={() => setselectCategory("Electric")}
              />{" "}
              Electric
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectCategory === "Off Road"}
                onChange={() => setselectCategory("Off Road")}
              />{" "}
              Off Road
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectCategory === "Long Tour"}
                onChange={() => setselectCategory("Long Tour")}
              />{" "}
              Long Tour
            </li>

          </ul>
        </div>


        {/* ================= PRICE ================= */}

        <div className="flex flex-col mb-10">

          <h1 className="text-2xl font-semibold">
            Price
          </h1>

          <input
            type="range"
            min="1700"
            max="15000"
            value={selectPrice}
            onChange={(e)=> setselectPrice(Number(e.target.value))}
            className="w-full mt-4 cursor-pointer"
          />

          <div className="flex justify-between">
            <span>₹17,00</span>
            <span>₹{selectPrice.toLocaleString("en-IN")}</span>
          </div>

        </div>


        {/* ================= VEHICLE TYPE ================= */}

        <div className="text-xl">

          <h1 className="text-2xl font-semibold">
            Vehicle Type
          </h1>

          <ul className="py-5">

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectVehicle === "Automatic"}
                onChange={() =>
                  setselectVehicle(
                    selectVehicle === "Automatic"
                      ? ""
                      : "Automatic"
                  )
                }
              />{" "}
              Automatic
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectVehicle === "Manual"}
                onChange={() =>
                  setselectVehicle(
                    selectVehicle === "Manual"
                      ? ""
                      : "Manual"
                  )
                }
              />{" "}
              Manual
            </li>

          </ul>
        </div>


        {/* ================= FUEL TYPE ================= */}

        <div>

          <h1 className="text-2xl font-semibold">
            Fuel Type
          </h1>

          <ul className="py-5 text-xl">

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectFuel === "Petrol"}
                onChange={() =>
                  setselectFuel(
                    selectFuel === "Petrol"
                      ? ""
                      : "Petrol"
                  )
                }
              />{" "}
              Petrol
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectFuel === "Diesel"}
                onChange={() =>
                  setselectFuel(
                    selectFuel === "Diesel"
                      ? ""
                      : "Diesel"
                  )
                }
              />{" "}
              Diesel
            </li>

            <li>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={selectFuel === "Electric"}
                onChange={() =>
                  setselectFuel(
                    selectFuel === "Electric"
                      ? ""
                      : "Electric"
                  )
                }
              />{" "}
              Electric
            </li>

          </ul>
        </div>

      </div>


      {/* ================= CARS ================= */}

      <div className="flex-1 grid grid-cols-4 gap-5 px-5  ">

        

        {filterCar.map((item, id) => {

          return (
            <div
              key={id}
              className="w-96 h-160 bg-slate-300 flex flex-col overflow-hidden rounded-2xl cursor-pointer hover:scale-110 transition duration-600 border-3 border-black"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-90 mb-8 object-cover rounded-2xl"
              />

              <div className="p-2 font-semibold">

                <h1 className="text-2xl">
                  {item.name}
                </h1>

                <h2 className="text-xl">
                  {item.category}
                </h2>

                <h2 className="text-xl">
                  Fuel Type : {item.fuelType}
                </h2>

                <h2 className="text-xl">
                  Vehicle Type : {item.vehicleType}
                </h2>

              </div>

              <div className="flex justify-between text-xl p-2 font-semibold">

                <span>
                  ⭐{item.rating} ({item.reviews})
                </span>

                <span>
                  {item.price}/Day
                </span>

              </div>
              <div className="flex justify-center items-center">
                <button onClick={()=> navigate("/booking-detail",{state:{car:item}})} className="bg-red-500 active:bg-green-500 font-semibold text-black  cursor-pointer w-70 h-15 rounded-2xl text-3xl shadow-2xl ">Rent Now</button>
              </div>

            </div>
          );
        })}

      </div>
      

    </div>
</div>    
  );
};


export default All_Cars;