
import React, { useState } from "react";

const initialForm = {customer: "",  room: "",  phone: "",  email: "",  checkIn: "",  checkOut: "",};

const InfoBody = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.customer.trim() ||
      !form.room ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.checkIn ||
      !form.checkOut
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (form.checkOut <= form.checkIn) {
      alert("Check-Out date must be after Check-In date.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      customer: form.customer.trim(),
      room: form.room,
      phone: form.phone.trim(),
      email: form.email.trim(),
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      status: "Pending",
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("hotelBookings") || "[]"
    );

    localStorage.setItem(
      "hotelBookings",
      JSON.stringify([...existingBookings, newBooking])
    );

    alert("Booking Added Successfully!");
    setForm(initialForm);
  };

  return (
    <div className="ml-80 min-h-screen overflow-x-hidden bg-purple-50 p-6">
      <div className="mb-2">
        <h1 className="text-4xl font-bold text-slate-800">
          Add New Booking
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Fill in the details to create a new booking.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm"
      >
        <div className="mb-7 border-b border-slate-200 pb-5">
          <h2 className="text-2xl font-semibold text-slate-800">
            Customer Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Enter the customer's contact details and stay information.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Customer Name
            </label>
            <input
              type="text"
              name="customer"
              value={form.customer}
              onChange={handleChange}
              placeholder="Enter customer name"
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Room Type
            </label>
            <select
              name="room"
              value={form.room}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              required
            >
              <option value="">Select Room</option>
              <option value="Single">Single Room</option>
              <option value="Double">Double Room</option>
              <option value="Deluxe">Deluxe Room</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              maxLength={10}
              inputMode="numeric"
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Check-In Date
            </label>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Check-Out Date
            </label>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              min={form.checkIn || undefined}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <button
            type="submit"
            className="h-14 flex-1 rounded-xl bg-purple-600 font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
          >
            Confirm Booking
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="h-14 flex-1 rounded-xl border border-slate-300 bg-slate-100 font-semibold text-slate-700 transition hover:bg-slate-200 active:scale-[0.98]"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoBody;
