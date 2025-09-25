import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({children}) => {
    const [bookings, setBookings] = useState([]);

    const addBooking = (doctor) => {
        setBookings(prev => (
            prev.find(d => d.regNo === doctor.regNo) ? prev : [...prev, doctor]
        ))
    }
    return (
        <BookingContext.Provider value={{bookings, addBooking}}>
            {children}
        </BookingContext.Provider>
    )
}


