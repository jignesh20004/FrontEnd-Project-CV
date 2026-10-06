import React, { useState } from "react";
import car2 from "../assets/car2.jpg";
import cars from "../pages/Available_Cars";
import Navbar from "./Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaCarAlt } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import { FaCarSide } from "react-icons/fa6";

const Home = () => {
  const [navigation, setNavigation] = useState("home");
  
  const navigate = useNavigate();

  return (
    <div className="outline-none border-none caret-transparent">
      {/* ================= NAVBAR ================= */}
      <div className="bg-black text-white flex items-center justify-between text-2xl h-25 font-semibold py-3 px-5 ">
        <div className="w-80 flex">
          <FaCarSide className="text-amber-400 w-20 h-9" />

          <h1>
            Drive <span className="text-amber-400 ">Easy</span>
            <br />
            <h7 className="text-xl text-amber-400 ">Rent</h7>{" "}
            <span className="text-xl ">Cars</span>
          </h1>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-3xl">
          <ul className="flex items-center  gap-20 cursor-pointer">
            <li onClick={() => setNavigation("home")}>
              <Link to="/home">Home</Link>
              {navigation === "home" ? <hr className="text-amber-400 border-3 "/> : null}
            </li>
            <li onClick={() => setNavigation("cars")}>
              <Link to="/cars">Cars</Link>
              {navigation === "cars" ? <hr className="text-amber-400" /> : null}
            </li>
            <li onClick={() => setNavigation("booking-detail")}>
              
              <Link to="/booking-detail">Booking Detail</Link>{" "}
              {navigation === "booking-detail" ? <hr className="text-amber-400" /> : null} 
            </li>
            {/* <li onClick={() => setNavigation("about-us")}></li>
            <Link to="about-us">About Us</Link>
            {navigation === "about-us" ? <hr className="text-amber-400" /> : null} */}
          </ul>
        </div>

        {/* <div className="flex justify-end gap-10">
          <h2>Login</h2>

          <span className="bg-amber-400 w-30 text-center rounded-xl h-10">
            Sign Up
          </span>
        </div> */}
      </div>

      {/* ================= HERO ================= */}
      <div>
        <img
          src={car2}
          alt=""
          className="w-full h-200 shadow-2xl object-cover overflow-hidden"
        />

        <div className="absolute top-1/2 left-10 -translate-y-80 text-white">
          <h1 className="text-7xl">Drive Your</h1>

          <span className="text-6xl text-amber-400">Dream Car</span>

          <p className="text-2xl mt-10">
            Premium Car. Easy Booking.
            <br />
            Affordable Prices.
          </p>

          <button className="w-60 h-20 bg-amber-400 text-2xl text-black rounded-3xl mt-10 font-bold flex justify-center items-center gap-5">
            Book Now
            <FaArrowRightLong className="mt-2 w-12 h-8 bg-black text-white rounded-full" />
          </button>
        </div>
      </div>

      <Navbar />

      {/* ================= AVAILABLE CARS ================= */}
      <h1 className="text-5xl mt-10 p-5 font-semibold">Available cars</h1>

      <div className="flex flex-wrap">
        {cars.map((item) => {
          return (
            <div
              key={item.category}
              onClick={() =>
                navigate("/cars", {
                  state: {
                    category: item.category,
                  },
                })
              }
              className="w-90 h-90 bg-gray-200 active:scale-95 cursor-pointer flex flex-col justify-center items-center rounded-2xl ml-10 mt-5"
            >
              <img
                src={item.image}
                alt=""
                className="rounded-2xl w-70 h-50 object-cover"
              />

              <h1 className="text-2xl flex justify-center mt-5 items-center">
                {item.category}
              </h1>

              <h2 className="text-2xl flex justify-center items-center">
                {item.total_available_car}
              </h2>
            </div>
          );
        })}
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="bg-slate-100 w-450 h-100 mt-10 text-center ml-30 rounded-2xl shadow-2xl">
        <h1 className="text-5xl font-semibold">Why Choose Drive Easy?</h1>

        <div className="flex text-center justify-center items-center mt-10 gap-40">
          <div className="border-r border-gray-400 h-60 pr-20">
            <FaCarAlt className="mx-auto mb-5 w-15 h-15 bg-amber-200 rounded-full text-center" />

            <h1 className="text-2xl font-bold">Wide Range Of Cars</h1>

            <p className="mt-3 text-xl">
              Choose from a variety of <br />
              cars that suit your style <br />
              and budget
            </p>
          </div>

          <div className="border-r border-gray-400 h-60 pr-20">
            <MdLocalOffer className="mx-auto mb-5 w-15 h-15 bg-amber-200 rounded-full text-center" />

            <h1 className="text-2xl font-bold">Best Price</h1>

            <p className="mt-3 text-xl">
              We Offer the most competitive <br />
              price with no hidden <br />
              change
            </p>
          </div>

          <div className="border-r border-gray-400 h-60 pr-20">
            <AiTwotoneSafetyCertificate className="mx-auto mb-5 w-15 h-15 bg-amber-200 rounded-full text-center" />

            <h1 className="text-2xl font-bold">Safe & Reliable</h1>

            <p className="mt-3 text-xl">
              All our cars are well <br />
              maintained and regularly <br />
              inspected
            </p>
          </div>

          <div>
            <ImPower className="mx-auto mb-5 w-15 h-15 bg-amber-200 rounded-full text-center" />

            <h1 className="text-2xl font-bold">Eassy Booking</h1>

            <p className="mt-3 text-xl">
              Book your car in just a <br />
              few clicks and hit the road
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
