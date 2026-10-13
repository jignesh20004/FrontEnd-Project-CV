
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const HeaderDashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  // Load room and booking data
  useEffect(() => {
    const loadBookings = () => {
      const storedRooms = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );

      const hotelBookings = JSON.parse(
        localStorage.getItem("hotelBookings") || "[]"
      );

      setRooms(storedRooms);

      const combinedBookings = [
        ...storedRooms.map((room) => ({
          ...room,
          id: `room-${room.id}`,
          customer:
            room.customer || room.customerName || "Guest",
          status: room.status || "Available",
        })),

        ...hotelBookings.map((booking) => ({
          ...booking,
          id: `hotel-${booking.id}`,
        })),
      ];

      setBookings(combinedBookings);
    };

    loadBookings();

    window.addEventListener("storage", loadBookings);

    return () => {
      window.removeEventListener("storage", loadBookings);
    };
  }, []);

  // Statistics
  const availableRooms = rooms.filter(
    (room) => room.status === "Available"
  ).length;

  const bookedRooms = rooms.filter(
    (room) =>
      room.status === "Pending" ||
      room.status === "Confirmed"
  ).length;

  // Search bookings by customer name
  const filteredBookings = bookings
    .filter((booking) => {
      const customer =
        booking.customer || booking.customerName || "";

      return customer
        .toLowerCase()
        .includes(search.toLowerCase());
    })
    .slice()
    .reverse()
    .slice(0, 10);

  // Status colors
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

  // Format date
  const formatDate = (date) => {
    if (!date) return "-";

    if (/[a-zA-Z]/.test(date)) return date;

    const parsedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Dashboard cards
  const stats = [
    {
      title: "Total Rooms",
      value: rooms.length,
      color: "bg-violet-100",
      text: "text-violet-700",
      icon: "R",
    },
    {
      title: "Available Rooms",
      value: availableRooms,
      color: "bg-green-100",
      text: "text-green-700",
      icon: "A",
    },
    {
      title: "Booked Rooms",
      value: bookedRooms,
      color: "bg-blue-100",
      text: "text-blue-700",
      icon: "B",
    },
    {
      title: "Total Bookings",
      value: bookings.length,
      color: "bg-amber-100",
      text: "text-amber-700",
      icon: "T",
    },
  ];

  return (
    <main className="ml-80 min-h-screen bg-purple-50 p-5 sm:p-8">

      {/* Welcome and Search */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold text-purple-950 sm:text-4xl">
            Welcome back, Manager!
          </h1>

          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Here's what's happening with your hotel today.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-[500px]">
          <IoIosSearch
            size={25}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search customer bookings..."
            className="h-14 w-full rounded-2xl border border-purple-200 bg-white pl-12 pr-4 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
            >
              <span
                className={`text-xl font-bold ${stat.text}`}
              >
                {stat.icon}
              </span>
            </div>

            <p className="text-base font-medium text-slate-500">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <section className="mt-8 h-[300px] overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Recent Bookings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest customer booking activity
            </p>
          </div>

          <span className="w-fit rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            {filteredBookings.length} shown
          </span>
        </div>

        {/* Bookings Table */}
        <div className="h-[340px] overflow-auto">
          <div className="min-w-[700px]">

            {/* Table Head */}
            <div className="sticky top-0 z-10 grid grid-cols-[2fr_1fr_1.5fr_1.2fr] gap-4 bg-purple-100 px-5 py-4 text-sm font-semibold text-slate-700">
              <p>Customer</p>
              <p>Room</p>
              <p>Check-In</p>
              <p>Status</p>
            </div>

            {/* Booking Rows */}
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="grid grid-cols-[2fr_1fr_1.5fr_1.2fr] items-center gap-4 border-t border-slate-100 px-5 py-5 text-sm transition hover:bg-purple-50"
                >
                  {/* Customer */}
                  <div>
                    <p className="font-semibold text-slate-800">
                      {booking.customer ||
                        booking.customerName ||
                        "Guest"}
                    </p>

                    {booking.email && (
                      <p className="mt-1 text-xs text-slate-500">
                        {booking.email}
                      </p>
                    )}
                  </div>

                  {/* Room */}
                  <p className="text-slate-600">
                    {booking.roomType || booking.room || "-"}
                  </p>

                  {/* Check-in */}
                  <p className="text-slate-600">
                    {formatDate(booking.checkIn)}
                  </p>

                  {/* Status */}
                  <span
                    className={`w-fit rounded-full px-3 py-2 text-xs font-bold ${getStatusStyle(
                      booking.status || "Pending"
                    )}`}
                  >
                    {booking.status || "Pending"}
                  </span>
                </div>
              ))
            ) : (
              <div className="px-5 py-12 text-center">
                <h3 className="text-lg font-semibold text-slate-700">
                  No bookings found
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Create a booking or try another customer name.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeaderDashboard;
