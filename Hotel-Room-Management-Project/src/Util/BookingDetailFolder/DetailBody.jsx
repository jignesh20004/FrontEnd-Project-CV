
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

const DetailBody = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All Status");
  const [editBooking, setEditBooking] = useState(null);


useEffect(() => {
  const savedBookings = JSON.parse(
    localStorage.getItem("hotelBookings") || "[]"
  );

  setBookings(savedBookings);
}, []);


  const saveBookings = (updatedBookings) => {
    setBookings(updatedBookings);
    localStorage.setItem("hotelBookings", JSON.stringify(updatedBookings));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    saveBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleEdit = (booking) => {
    setEditBooking({ ...booking });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (editBooking.checkOut <= editBooking.checkIn) {
      alert("Check-Out date must be after Check-In date.");
      return;
    }

    const updatedBookings = bookings.map((booking) =>
      booking.id === editBooking.id ? editBooking : booking
    );

    saveBookings(updatedBookings);
    setEditBooking(null);
    alert("Booking updated successfully!");
  };

  const filteredBookings = bookings.filter((booking) => {
    const customerName = booking.customer || booking.customerName || "";

    const matchesSearch = customerName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All Status" ||
      (booking.status || "Pending") === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const formatDate = (date) => {
    if (!date) return "-";

    // Already formatted dates, e.g. "10 Oct 2026"
    if (/[a-zA-Z]/.test(date)) return date;

    const parsedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) return date;

    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="ml-80 min-h-screen overflow-x-auto bg-purple-50 p-6">
      {/* Header */}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Bookings
          </h1>
          <p className="mt-2 text-lg text-slate-500">
            View and manage all customer bookings
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <IoIosSearch
              size={25}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer name..."
              className="h-12 w-full rounded-xl border border-purple-200 bg-white pl-11 pr-4 outline-none focus:border-purple-500 sm:w-72"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="h-12 rounded-xl border border-purple-200 bg-white px-4 outline-none focus:border-purple-500"
          >
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      {/* Booking Table */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-purple-100 bg-white shadow-sm">
        <div className="min-w-[850px]">
          <div className="grid grid-cols-[2fr_1fr_1.3fr_1.3fr_1.2fr_0.8fr] items-center gap-3 bg-purple-200 px-5 py-5 font-semibold text-slate-700">
            <p>Customer</p>
            <p>Room</p>
            <p>Check-In</p>
            <p>Check-Out</p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="grid grid-cols-[2fr_1fr_1.3fr_1.3fr_1.2fr_0.8fr] items-center gap-3 border-t border-slate-100 px-5 py-5 text-sm text-slate-700 transition hover:bg-purple-50"
              >
                <div>
                  <p className="font-semibold text-slate-800">
                    {booking.customer || booking.customerName || "Guest"}
                  </p>
                  {booking.email && (
                    <p className="mt-1 text-xs text-slate-500">
                      {booking.email}
                    </p>
                  )}
                </div>

                <p>
                  {booking.roomType || booking.room || "-"}
                </p>

                <p>{formatDate(booking.checkIn)}</p>

                <p>{formatDate(booking.checkOut)}</p>

                <span
                  className={`w-fit rounded-full px-3 py-2 text-xs font-bold ${getStatusStyle(
                    booking.status || "Pending"
                  )}`}
                >
                  {booking.status || "Pending"}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    title="Edit booking"
                    onClick={() => handleEdit(booking)}
                    className="text-purple-600 transition hover:scale-110 hover:text-purple-800"
                  >
                    <FaUserEdit size={21} />
                  </button>

                  <button
                    type="button"
                    title="Delete booking"
                    onClick={() => handleDelete(booking.id)}
                    className="text-red-500 transition hover:scale-110 hover:text-red-700"
                  >
                    <MdAutoDelete size={23} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="px-5 py-12 text-center">
              <p className="text-lg font-semibold text-slate-600">
                No bookings found
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Create a booking or change your search/filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Edit Booking Modal */}
      {editBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleUpdate}
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl"
          >
            <h2 className="mb-6 text-2xl font-bold text-slate-800">
              Edit Booking
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  Customer Name
                </label>
                <input
                  name="customer"
                  value={editBooking.customer || editBooking.customerName || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEditBooking((prev) => ({
                      ...prev,
                      customer: value,
                      customerName: value,
                    }));
                  }}
                  className="w-full rounded-lg border p-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Room Type / Number
                </label>
                <input
                  name="room"
                  value={editBooking.room || ""}
                  onChange={handleEditChange}
                  className="w-full rounded-lg border p-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Check-In
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={editBooking.checkIn || ""}
                  onChange={handleEditChange}
                  className="w-full rounded-lg border p-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Check-Out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={editBooking.checkOut || ""}
                  onChange={handleEditChange}
                  min={editBooking.checkIn || undefined}
                  className="w-full rounded-lg border p-3"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-medium">
                  Booking Status
                </label>
                <select
                  name="status"
                  value={editBooking.status || "Pending"}
                  onChange={handleEditChange}
                  className="w-full rounded-lg border bg-white p-3"
                >
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => setEditBooking(null)}
                className="flex-1 rounded-xl bg-slate-100 py-3 font-semibold text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DetailBody;


