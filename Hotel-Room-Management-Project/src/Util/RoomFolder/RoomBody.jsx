
import React, { useContext, useState } from 'react'
import { IoIosSearch } from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../../AuthProvider.jsx/AuthproviderContainer'

const RoomBody = ({onViewDetail}) => {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [roomtype, setRoomtype] = useState("All Type")

  const rooms = useContext(Authcontext) || []

  const filterRoom = rooms.filter((room) => {
    const matchSearch =
      String(room.room).includes(search) ||
      room.type.toLowerCase().includes(search.toLowerCase())

    const matchType =
      roomtype === "All Type" ||
      room.type === roomtype.replace(" Room", "")

    return matchSearch && matchType
  })

  return (
    <div className="ml-80 min-h-screen overflow-x-hidden bg-purple-100 p-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">Rooms</h1>
          <p className="mt-2 text-lg text-slate-500">
            Manage all hotel rooms and their availability.
          </p>
        </div>

        {/* Search */}
        <div className="relative flex items-center">
          <IoIosSearch
            size={25}
            className="absolute left-4 text-slate-500"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search room..."
            className="h-12 w-134 rounded-2xl border border-purple-200 bg-white pl-12 pr-4 outline-none focus:border-purple-500"
          />
        </div>

        {/* Room Type Filter */}
        <select
          value={roomtype}
          onChange={(e) => setRoomtype(e.target.value)}
          className="h-12 rounded-2xl border border-purple-200 bg-white px-4 outline-none overflow-hidden  focus:border-purple-500"
        >
          <option value="All Type">All Type</option>
          <option value="Single Room">Single Room</option>
          <option value="Double Room">Double Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
        </select>
      </div>

      {/* Room Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 pb-6 overflow-y-auto h-140  md:grid-cols-2 xl:grid-cols-3">
        {filterRoom.length > 0 ? (
          filterRoom.map((room) => (
            <div
              key={room.id}
              className=" rounded-2xl  bg-white shadow-md transition hover:shadow-xl"
            >
              {/* Room Image */}
              <div className="relative">
                <img
                  src={room.image}
                  alt={`${room.type} Room`}
                  className="h-56 w-full object-cover"
                />

                <span className="absolute right-3 top-3 rounded-xl bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                  {room.type}
                </span>
              </div>

              {/* Room Details */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800">
                    Room {room.room}
                  </h2>

             <span
  className={`rounded-xl px-3 py-2 text-sm font-semibold ${
    room.status === "Confirmed"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700"
  }`}
>
  {room.status === "Confirmed" ? "Confirmed" : "Available"}
</span>
                </div>

                <p className="mt-3 text-slate-500">
                  {room.type} Room
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xl font-bold text-purple-700">
                    ₹{room.price}
                    <span className="text-sm font-normal text-slate-500">
                      {" "}/ night
                    </span>
                  </p>

               
                </div>

                {/* View Detail Button */}
                <button
                  onClick={()=>onViewDetail(room)}
                  className="mt-5 w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-95"
                >
                  View Detail
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-700">
              No rooms found
            </h2>
            <p className="mt-2 text-slate-500">
              Try another room number or room type.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoomBody
