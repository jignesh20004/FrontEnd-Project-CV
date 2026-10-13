import React, { createContext, useEffect, useState } from "react";
import {  getlocalstorage,  setlocalstorage,} from "../Storage/Localstorage";

export const Authcontext = createContext([]);

const AuthproviderContainer = ({ children }) => {
  const [data, setdata] = useState([]);


useEffect(() => {
  const savedBookings = JSON.parse(
    localStorage.getItem("bookings") || "[]"
  );

  if (savedBookings.length === 0) {
    setlocalstorage();
    setdata(getlocalstorage());
  } else {
    setdata(savedBookings);
  }
}, []);


  // Existing components ko array hi milega.
  // setdata property booking update karne ke liye hai.
  const contextValue = [...data];
  contextValue.setdata = setdata;

  return (
    <Authcontext.Provider value={contextValue}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthproviderContainer;