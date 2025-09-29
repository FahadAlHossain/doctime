import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import doctorImg from "../../assets/doctor-sample.png";
import { BookingContext } from "../../context/BookingContext";

const DoctorDetails = () => {
  const doctor = useLoaderData();
  const { addBooking } = useContext(BookingContext);
  // console.log(addBooking)

  const handleBooking = () => {
    addBooking(doctor);
    alert(`${doctor.name} added`);
  };
  return (
    <div className="text-black">
      <div className="w-[90%] mx-auto h-64 bg-white rounded-3xl my-8 flex items-center justify-center shadow-sm">
        <div className="text-center w-[70%]">
          <h1 className="lg:text-5xl md:text-4xl text-3xl  font-bold mb-3">
            Doctor’s Profile Details
          </h1>
          <p className="lg:text-lg md:text-lg text-sm">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>
      </div>
      <div className="card md:card-side bg-white shadow-sm w-[90%] mx-auto rounded-3xl">
        <figure className="p-8">
          <img className="rounded-3xl" src={doctorImg} alt={doctor.name} />
        </figure>
        <div className="flex flex-col items-start justify-center gap-2 lg:p-0 md:py-4 lg:pl-0 md:pl-0 pl-4">
          <h2 className="card-title lg:text-4xl md:text-3xl text-xl font-bold">
            {doctor.name}
          </h2>
          <p className="md:text-lg text-sm">{doctor.qualification[0]}</p>
          <p className="md:text-lg text-sm">{doctor.qualification[1]}</p>
          <p className="md:text-lg text-sm">Working at</p>
          <h3 className="lg:text-xl sm:text-lg text-sm font-semibold">
            {doctor.hospital}
          </h3>
          <div className="border-b-2 my-2 border-dashed border-slate-300 w-[85%]" />
          <p className="md:text-lg text-sm">Reg No: {doctor.regNo}</p>
          <div className="border-b-2 my-2 border-dashed border-slate-300 w-[85%]" />
          <div className="md:flex lg:gap-4 md:gap-3 grid grid-cols-3 md:pr-3">
            <p className="font-bold lg:mb-0 mb-5">Availability </p>
            {doctor.availability.map((e, id) => (
              <div
                key={id}
                className="badge badge-soft md:mx-0 mx-2 p-3 bg-amber-100 border-amber-300 font-semibold text-amber-500 badge-warning"
              >
                {e}
              </div>
            ))}
          </div>
          <div className="lg:flex md:grid items-center grid justify-center mt-4">
            <p className="font-bold lg:pr-4 pr-0">Consultation Fee: </p>
            <div className="flex justify-center items-center gap-2 md:pb-0 pb-3">
              <span className="text-blue-500 font-bold">
                Taka: {doctor.fee}
              </span>
              <span className="text-sm text-slate-500">incl. Vat</span>
              <span className="text-blue-500 font-semibold">
                Per consultation
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-fit py-6 my-10 w-[90%] mx-auto rounded-3xl shadow-sm flex items-center justify-center mb-25">
        <div className="w-[80%]">
          <div>
            <h1 className="text-center font-bold lg:text-3xl md:text-3xl text-2xl">
              Book an Appointment
            </h1>
            <div className="border-b-2 my-5 border-dashed border-slate-300"></div>
            <div className="flex justify-between">
              <p className="font-bold lg:text-lg md:text-lg">Availability</p>
              <div className="badge badge-soft bg-green-200 font-bold border-green-400 p-3 badge-success lg:text-sm md:text-sm text-[10px]">
                Doctor Available Today
              </div>
            </div>
            <div className="border-b-2 my-5 border-slate-300"></div>
            <div className="badge badge-soft bg-amber-100 border-amber-300 font-semibold text-amber-500 badge-warning lg:text-lg md:text-sm h-fit text-[6px]">
              <div className="border-2 rounded-xl px-2 text-sm">!</div> Due to
              high patient volume, we are currently accepting appointments for
              today only. We appreciate your understanding and cooperation.
            </div>
            <div>
              <button
                onClick={handleBooking}
                className="w-full bg-blue-500 text-white font-bold p-3 rounded-3xl lg:text-xl md:text-xl mt-8 cursor-pointer"
              >
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
