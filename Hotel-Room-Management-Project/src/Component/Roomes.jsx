import React, { useContext, useState } from "react";
import { Authcontext } from "../AuthProvider.jsx/AuthproviderContainer";
import RoomBody from "../Util/RoomFolder/RoomBody";
import RoomPanel from "../Util/RoomFolder/RoomPanel";
import ViewRoom from "../Util/RoomFolder/ViewRoom";

const Roomes = () => {
  const rooms = useContext(Authcontext) || [];
  const setdata = rooms.setdata;

  const [selectedRoom, setSelectedRoom] = useState(null);

  const updateRoomStatus = (room, newStatus) => {
    const updatedRooms = rooms.map((item) =>
      item.id === room.id
        ? { ...item, status: newStatus }
        : item
    );

    localStorage.setItem("bookings", JSON.stringify(updatedRooms));

    if (setdata) {
      setdata(updatedRooms);
    }

    setSelectedRoom({ ...room, status: newStatus });

    if (newStatus === "Pending") {
      alert(`Booking created for Room ${room.room}. Status: Pending`);
    } else if (newStatus === "Confirmed") {
      alert(`Room ${room.room} booking confirmed successfully!`);
    } else if (newStatus === "Cancelled") {
      alert(`Room ${room.room} booking cancelled successfully!`);
    } else {
      alert(`Room ${room.room} is now available.`);
    }
  };

  return (
    <div>
      {selectedRoom ? (
        <ViewRoom
          room={selectedRoom}
          onBack={() => setSelectedRoom(null)}
          onUpdateStatus={updateRoomStatus}
        />
      ) : (
        <>
          <RoomBody onViewDetail={setSelectedRoom} />
          <RoomPanel />
        </>
      )}
    </div>
  );
};

export default Roomes;