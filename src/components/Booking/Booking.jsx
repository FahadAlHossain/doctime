import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

const Booking = () => {
  const { bookings } = useContext(BookingContext);
  // console.log(bookings);

  return (
    <div className="text-black">
      {bookings.length === 0 ? (
        <div className="bg-white lg:container md:w-[90%] w-[90%] mx-auto p-8 rounded-3xl shadow-sm my-5">
          <h1 className="text-5xl font-bold text-center">No bookings yet</h1>
          <p className="text-center font-semibold text-lg text-slate-500 my-3">
            Get Your Appointments now
          </p>
        </div>
      ) : (
        <div>
          <div className="text-center w-[90%] mx-auto">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mt-8">
              My Today Appointments
            </h1>
            <p className="lg:text-lg md:text-lg text-sm my-2">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>
          {bookings.map((doc) => (
            <div className="bg-white h-fit lg:container md:w-[90%] w-[90%] py-6 mx-auto my-10 mb-20 rounded-3xl shadow-sm">
              <div className="flex items-center justify-between w-[80%] mx-auto">
                <div className="mb-2">
                  <h1 className="lg:text-2xl md:text-xl text-lg font-bold">{doc.name}</h1>
                  <p className="lg:text-lg text-sm">{doc.qualification}</p>
                </div>
                <div>
                  <p className="lg:text-lg md:text-sm text-xs text-slate-500">
                    Appointment Fee: {doc.fee} Taka + Vat
                  </p>
                </div>
              </div>
              <div className="border-b-2 border-dashed border-slate-500 w-[85%] mx-auto my-3"></div>
              <div className="w-[85%] mx-auto">
                <button className="border-2 border-red-400 w-full rounded-3xl font-bold text-red-400 lg:text-lg md:text-lg text-sm p-2 my-5">
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
