import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (doctor) => {
    setBookings((prev) => {
      const exists = prev.find((d) => d.regNo === doctor.regNo);

      if (exists) {
        if (!toast.isActive(doctor.regNo)) {
          toast.error(`${doctor.name} is already booked`, {
            toastId: doctor.regNo,
            position: "top-right",
          });
        }
        return prev;
      }

      if (!toast.isActive(doctor.regNo)) {
        toast.success(`${doctor.name} booked successfully`, {
          toastId: doctor.regNo,
          position: "top-right",
        });
      }
      return [...prev, doctor];
    });
  };

  const cancelBooking = (regNo) => {
    const removedDoctor = bookings.find((d) => d.regNo === regNo);

    setBookings((prev) => prev.filter((d) => d.regNo !== regNo));

    if (removedDoctor) {
      toast.error(`${removedDoctor.name}'s appointment canceled`, {
        position: "top-right",
      });
    }
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
