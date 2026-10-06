import React, { useState } from "react";
import { FaCarSide } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { RiTimerFlashFill } from "react-icons/ri";
import { MdOutlinePermIdentity } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";

const Booking_Detail = () => {
  const [nextPage, setnextPage] = useState("booking-detail");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  
  // All_Cars se selected car
  const car = location.state?.car;

  // ================= TRIP DETAILS =================

  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  // ================= CUSTOMER DETAILS =================

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");

  // ================= NO CAR =================

  if (!car) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">

        <h1 className="text-4xl font-bold">
          No Car Selected
        </h1>

        <p className="text-xl mt-3">
          Please select a car first.
        </p>

        <button
          onClick={() => navigate("/cars")}
          className="bg-amber-400 px-6 py-3 mt-5 rounded-xl text-xl cursor-pointer"
        >
          Back To Cars
        </button>

      </div>
    );
  }

  // ================= CAR PRICE =================

  // Price ko number mein convert kar rahe hain
  const carPrice = Number(car.price) || 0;

  // ================= TOTAL DAYS =================

  let totalDays = 1;

  if (pickupDate && returnDate) {

    const startDate = new Date(pickupDate);
    const endDate = new Date(returnDate);

    const difference =
      endDate.getTime() - startDate.getTime();

    totalDays = Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );

    // Minimum 1 day
    if (totalDays < 1) {
      totalDays = 1;
    }
  }

  // ================= PRICE CALCULATION =================

  const rentalAmount = carPrice * totalDays;

  // 18% tax
  const taxes = Math.round(rentalAmount * 0.18);

  // Security Deposit
  const securityDeposit = 5000;

  // Final Total
  const totalAmount =
    rentalAmount +
    taxes +
    securityDeposit;

  return (
    <div className="outline-none border-none caret-transparent">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="bg-black w-full flex items-center h-25 px-5">

        <FaCarSide
          className="text-amber-400 w-20 mb-8 h-9"
        />

        <div className="w-50">

          <h1 className="text-amber-400 text-2xl">
            Drive{" "}
            <span className="text-white">
              Easy
            </span>
          </h1>

          <h2 className="text-white text-xl">
            Rent{" "}
            <span className="text-amber-400">
              Cars
            </span>
          </h2>

        </div>

        {/* NAVIGATION */}

        <div className="absolute left-1/2 -translate-x-1/2">

          <ul className="text-white flex gap-25 text-3xl">

            <li
              onClick={() => setnextPage("home")}
            >
              <Link to="/home">
                Home
              </Link>

              {nextPage === "home" && (
                <hr />
              )}
            </li>

            <li
              onClick={() => setnextPage("cars")}
            >
              <Link to="/cars">
                Cars
              </Link>

              {nextPage === "cars" && (
                <hr className="text-amber-400 border-3" />
              )}
            </li>

            <li
              onClick={() =>
                setnextPage("booking-detail")
              }
            >
              <Link to="/booking-detail">
                Booking Detail
              </Link>

              {nextPage === "booking-detail" && (
                <hr className="text-amber-400 border-3" />
              )}
            </li>

              {/* <li
                onClick={() =>
                  setnextPage("about-us")
                }
              >
                <Link to="/about-us">
                  About Us
                </Link>

                {nextPage === "about-us" && (
                  <hr />
                )}
              </li> */}

          </ul>

        </div>

      </div>

      {/* ================================================= */}
      {/* BACK TO CARS */}
      {/* ================================================= */}

      <div
        className="
          flex gap-3 px-5
          justify-start items-center
          text-2xl w-60 h-15
          bg-gray-300
          hover:scale-110
          mt-2 rounded-2xl ml-5
        "
      >

        <FaLongArrowAltLeft className="text-4xl" />

        <button
          onClick={() => navigate("/cars")}
          className="cursor-pointer"
        >
          Back To Cars
        </button>

      </div>

      {/* ================================================= */}
      {/* PAGE TITLE */}
      {/* ================================================= */}

      <div className="px-5 mt-5">

        <h1 className="text-4xl">
          Booking Details
        </h1>

        <p className="text-2xl mt-2">
          Please fill the detail to continue your booking.
        </p>

      </div>

      {/* ================================================= */}
      {/* TRIP DETAIL */}
      {/* ================================================= */}

      <div className="w-260 px-5 mt-5 border-2 ml-5 rounded-xl">

        <h2 className="text-4xl">
          💡 Trip Detail
        </h2>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 mb-5">

          {/* PICKUP LOCATION */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              
              Pick-Up Location <IoLocationSharp />
            </h1>

            <input
              type="text"
              placeholder="Enter Location"
              value={pickupLocation}
              onChange={(e) =>
                setPickupLocation(e.target.value)
              }
              className="border text-xl border-black p-2 rounded"
            />

          </div>

          {/* DROP LOCATION */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Drop-Off Location <IoLocationSharp />
            </h1>

            <input
              type="text"
              placeholder="Enter Location"
              value={dropoffLocation}
              onChange={(e) =>
                setDropoffLocation(e.target.value)
              }
              className="border border-black text-xl p-2 rounded"
            />

          </div>

          {/* PICKUP DATE */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Pick-Up Date <HiMiniCalendarDateRange />
            </h1>

            <input
              type="date"
              value={pickupDate}
              onChange={(e) =>
                setPickupDate(e.target.value)
              }
              className="border border-black text-xl p-2 rounded"
            />

          </div>

          {/* PICKUP TIME */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Pick-Up Time <RiTimerFlashFill />
            </h1>

            <input
              type="time"
              value={pickupTime}
              onChange={(e) =>
                setPickupTime(e.target.value)
              }
              className="border border-black text-xl p-2 rounded"
            />

          </div>

          {/* RETURN DATE */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Return Date <HiMiniCalendarDateRange />
            </h1>

            <input
              type="date"
              value={returnDate}
              min={pickupDate}
              onChange={(e) =>
                setReturnDate(e.target.value)
              }
              className="border border-black text-xl p-2 rounded"
            />

          </div>

          {/* RETURN TIME */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Return Time <RiTimerFlashFill />
            </h1>

            <input
              type="time"
              value={returnTime}
              onChange={(e) =>
                setReturnTime(e.target.value)
              }
              className="border border-black text-xl p-2 rounded"
            />

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* CUSTOMER DETAIL */}
      {/* ================================================= */}

      <div className="w-260 ml-5 border-2 mt-2 px-5 rounded-xl">

        <h1 className="text-4xl">
          🧑🏻 Customer Detail
        </h1>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 mb-5">

          {/* NAME */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Full Name <MdOutlinePermIdentity />
            </h1>

            <input
              type="text"
              placeholder="Enter Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              className="border-2 p-2 text-xl"
            />

          </div>

          {/* EMAIL */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Email Address <HiOutlineIdentification />
            </h1>

            <input
              type="email"
              placeholder="Enter Mail ID"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className=" border-2 p-2 text-xl"
            />

          </div>

          {/* PHONE */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Phone Number <FiPhone />
            </h1>

            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className=" border-2 p-2 text-xl"
            />

          </div>

          {/* LICENSE */}

          <div className="flex flex-col">

            <h1 className="text-2xl flex items-center gap-2">
              Driving License Number <HiOutlineIdentification />
            </h1>

            <input
              type="text"
              placeholder="Enter License Number"
              value={license}
              onChange={(e) =>
                setLicense(e.target.value)
              }
              className="border-2 p-2 text-xl"
            />

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* BOOKED CAR / PRICE */}
      {/* ================================================= */}

      <div
        className="
          absolute left-430
          -translate-157
          h-157 w-230
          border-2 px-5
          rounded-xl
        "
      >

        <h1 className="text-4xl font-semibold">
          Booked Car
        </h1>

        {/* CAR */}

        <div className="flex items-center gap-5 mt-5">

          <div>

            <img
              src={car.image}
              alt={car.name}
              className="
                w-60 h-50
                object-contain
                rounded-2xl
              "
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              {car.name}
            </h1>

            <p className="text-xl text-gray-700 mt-2">
              {car.category}
              &nbsp; • &nbsp;
              {car.vehicleType}
              &nbsp; • &nbsp;
              {car.fuelType}
            </p>

            <p className="text-xl mt-3">
              ⭐ {car.rating}
              &nbsp; ({car.reviews})
            </p>

          </div>

        </div>

        <hr className="border-t-2 border-gray-400 my-5" />

        {/* ================================================= */}
        {/* RENTAL PRICE */}
        {/* ================================================= */}

        <div className="flex justify-between text-xl">

          <span>
            ₹{carPrice.toLocaleString("en-IN")}
            {" × "}
            {totalDays}{" "}
            {totalDays === 1 ? "Day" : "Days"}
          </span>

          <span>
            ₹{rentalAmount.toLocaleString("en-IN")}
          </span>

        </div>

        {/* ================================================= */}
        {/* TAX */}
        {/* ================================================= */}

        <div className="flex justify-between text-xl mt-5">

          <span>
            Taxes & Fees (18%)
          </span>

          <span>
            ₹{taxes.toLocaleString("en-IN")}
          </span>

        </div>

        {/* ================================================= */}
        {/* SECURITY DEPOSIT */}
        {/* ================================================= */}

        <div className="flex justify-between text-xl mt-5">

          <span>
            Security Deposit (Refundable)
          </span>

          <span>
            ₹{securityDeposit.toLocaleString("en-IN")}
          </span>

        </div>

        <hr className="border-t-2 border-gray-400 my-5" />

        {/* ================================================= */}
        {/* TOTAL */}
        {/* ================================================= */}

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Total Amount
          </h2>

          <h2 className="text-3xl font-bold">
            ₹{totalAmount.toLocaleString("en-IN")}
          </h2>

        </div>

        {/* ================================================= */}
        {/* BOOK BUTTON */}
        {/* ================================================= */}

   <div
  onClick={() => setBookingSuccess(true)}
  className="
    flex justify-center items-center
    w-full h-20 mt-10
    bg-green-500
    text-4xl
    rounded-2xl
    active:scale-95
    cursor-pointer
  "
>
  <button className="cursor-pointer">
    Car Booked
  </button>
</div>
{bookingSuccess && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

    <div className="bg-white w-150 rounded-3xl shadow-2xl p-8 text-center">

      {/* Success Icon */}

      <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex justify-center items-center">

        <div className="w-16 h-16 bg-green-500 rounded-full flex justify-center items-center text-white text-5xl">
          ✓
        </div>

      </div>

      {/* Heading */}

      <h1 className="text-4xl font-bold text-green-600 mt-5">
        Booking Confirmed!
      </h1>

      <p className="text-xl text-gray-600 mt-2">
        Your car has been successfully booked 🎉
      </p>

      {/* Car Name */}

      <div className="bg-gray-100 rounded-2xl p-5 mt-6">

        <h2 className="text-3xl font-bold">
          🚗 {car.name}
        </h2>

        <p className="text-xl mt-3">
          ₹{carPrice.toLocaleString("en-IN")} × {totalDays}{" "}
          {totalDays === 1 ? "Day" : "Days"}
        </p>

        <p className="text-xl mt-2">
          Total Amount:
          <span className="font-bold text-green-600 ml-2">
            ₹{totalAmount.toLocaleString("en-IN")}
          </span>
        </p>

      </div>

      {/* Booking Message */}

      <p className="text-lg text-gray-500 mt-5">
        Thank you for choosing Drive Easy.
        <br />
        Have a safe and happy journey! ❤️
      </p>

      {/* Buttons */}

      <div className="flex gap-4 justify-center mt-7">

        <button
          onClick={() => setBookingSuccess(false)}
          className="
            px-7 py-3
            bg-gray-200
            rounded-xl
            text-xl
            font-semibold
            cursor-pointer
            hover:bg-gray-300
          "
        >
          Close
        </button>

        <button
          onClick={() => navigate("/home")}
          className="
            px-7 py-3
            bg-amber-400
            rounded-xl
            text-xl
            font-semibold
            cursor-pointer
            hover:bg-amber-500
          "
        >
          Back To Home
        </button>

      </div>

    </div>

  </div>
)}

      </div>

    </div>
  );
};

export default Booking_Detail;