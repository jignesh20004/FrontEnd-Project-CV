
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaWifi, FaTv, FaSnowflake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ViewRoom = ({ room, onBack, onUpdateStatus }) => {
  const navigate = useNavigate();

  if (!room) return null;

  const status = room.status || "Available";

  const statusStyle = {
    Available: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Confirmed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  const handleCreateBooking = () => {
    onUpdateStatus(room, "Pending");
  };

  const handleConfirmBooking = () => {
    onUpdateStatus(room, "Confirmed");
  };

  const handleCancelBooking = () => {
    const shouldCancel = window.confirm(
      `Are you sure you want to cancel Room ${room.room}?`
    );

    if (shouldCancel) {
      onUpdateStatus(room, "Cancelled");
    }
  };

  const handleMakeAvailable = () => {
    onUpdateStatus(room, "Available");
  };

  return (
    <div className="px-60 min-h-screen bg-purple-100 p-6">
      <button
        onClick={onBack}
        className="mb-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 font-semibold text-purple-700 shadow-sm hover:bg-purple-50"
      >
        <BiArrowBack size={25} />
        Back to Rooms
      </button>

      <div className="">
        <h1 className="text-3xl font-bold text-slate-800">
          Room Details
        </h1>
        <p className="mt-2 text-slate-500">
          View and manage your room booking.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm">
            <div className="relative">
              <img
                src={room.image}
                alt={`${room.type} Room`}
                className="h-80 w-full rounded-2xl object-cover sm:h-96"
              />

              <span className="absolute left-4 top-4 rounded-xl bg-white px-4 py-2 font-semibold text-purple-700 shadow">
                {room.type} Room
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 py-5">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Room {room.room}
                </h2>
                <p className="mt-1 text-slate-500">
                  Comfortable stay with modern facilities
                </p>
              </div>

              <span
                className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                  statusStyle[status] || statusStyle.Available
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">
              Room Amenities
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl bg-purple-50 p-4">
                <FaWifi className="text-purple-600" size={23} />
                <span>Free Wi-Fi</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-purple-50 p-4">
                <FaSnowflake className="text-purple-600" size={23} />
                <span>Air Conditioning</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-purple-50 p-4">
                <FaTv className="text-purple-600" size={23} />
                <span>Television</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">
              Description
            </h2>
            <p className="mt-3 leading-7 text-slate-500">
              Enjoy a comfortable stay in our{" "}
              {room.type.toLowerCase()} room with modern amenities.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800">
            Room Information
          </h2>

          <div className="mt-6 space-y-5">
            <div className="flex justify-between gap-3 border-b border-slate-100 pb-4">
              <span className="text-slate-500">Room Number</span>
              <span className="font-bold">{room.room}</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-slate-100 pb-4">
              <span className="text-slate-500">Room Type</span>
              <span className="font-bold">{room.type}</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-slate-100 pb-4">
              <span className="text-slate-500">Price</span>
              <span className="font-bold text-purple-700">
                ₹{Number(room.price).toLocaleString("en-IN")} / night
              </span>
            </div>

            <div className="flex justify-between gap-3 border-b border-slate-100 pb-4">
              <span className="text-slate-500">Check-in</span>
              <span className="font-semibold">
                {room.checkIn || "Not selected"}
              </span>
            </div>

            <div className="flex justify-between gap-3 border-b border-slate-100 pb-4">
              <span className="text-slate-500">Check-out</span>
              <span className="font-semibold">
                {room.checkOut || "Not selected"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Status</span>
              <span className="font-semibold">{status}</span>
            </div>
          </div>

       
{(status === "Available" || status === "Cancelled") && (
  <button
    onClick={handleCreateBooking}
    className="mt-8 w-full rounded-2xl bg-purple-600 py-4 font-bold text-white transition hover:bg-purple-700"
  >
    Create Booking
  </button>
)}

{status === "Pending" && (
  <>
    <button
      onClick={handleConfirmBooking}
      className="mt-8 w-full rounded-2xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
    >
      Confirm Booking
    </button>

    <button
      onClick={handleCancelBooking}
      className="mt-3 w-full rounded-2xl bg-red-600 py-4 font-bold text-white transition hover:bg-red-700"
    >
      Cancel Booking
    </button>
  </>
)}

{status === "Confirmed" && (
  <>
    <div className="mt-8 rounded-2xl bg-green-50 p-4 text-center font-semibold text-green-700">
      Booking Confirmed Successfully
    </div>

    <button
      onClick={handleCancelBooking}
      className="mt-3 w-full rounded-2xl bg-red-600 py-4 font-bold text-white transition hover:bg-red-700"
    >
      Cancel Booking
    </button>
  </>
)}


          <button
            onClick={() => navigate("/bookininfo")}
            className="mt-3 w-full rounded-2xl border border-purple-200 bg-white py-4 font-bold text-purple-700 transition hover:bg-purple-50"
          >
            Booking Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRoom;
