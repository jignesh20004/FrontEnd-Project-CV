const bookings = [
  { id: 1, customer: "Rahul Sharma", image: "/room1.jpg", room: 101, type: "Single", price: 1500, checkIn: "", checkOut: "", status: "Available" },
  { id: 2, customer: "Priya Patel", image: "/room5.jpg", room: 102, type: "Double", price: 2500, checkIn: "", checkOut: "", status: "Available" },
  { id: 3, customer: "Amit Shah", image: "/room8.jpg", room: 103, type: "Deluxe", price: 4000, checkIn: "", checkOut: "", status: "Available" },
  { id: 4, customer: "Neha Joshi", image: "/room3.jpg", room: 104, type: "Single", price: 1500, checkIn: "", checkOut: "", status: "Available" },
  { id: 5, customer: "Karan Mehta", image: "/room7.jpg", room: 105, type: "Double", price: 2500, checkIn: "", checkOut: "", status: "Available" },
  { id: 6, customer: "Pooja Desai", image: "/room10.jpg", room: 106, type: "Deluxe", price: 4000, checkIn: "", checkOut: "", status: "Available" },
  { id: 7, customer: "Vikas Kumar", image: "/room2.jpg", room: 107, type: "Single", price: 1500, checkIn: "", checkOut: "", status: "Available" },
  { id: 8, customer: "Anjali Verma", image: "/room6.jpg", room: 108, type: "Double", price: 2500, checkIn: "", checkOut: "", status: "Available" },
  { id: 9, customer: "Rohit Singh", image: "/room9.jpg", room: 109, type: "Deluxe", price: 4000, checkIn: "", checkOut: "", status: "Available" },
  { id: 10, customer: "Sneha Shah", image: "/room4.jpg", room: 110, type: "Single", price: 1500, checkIn: "", checkOut: "", status: "Available" },
];

export const setlocalstorage = () => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
};

export const getlocalstorage = () => {
  return JSON.parse(localStorage.getItem("bookings")) || [];
};