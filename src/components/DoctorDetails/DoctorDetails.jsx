import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import doctorImg from "../../assets/doctor-sample.png";
import { BookingContext } from "../../context/BookingContext";

const DoctorDetails = () => {
  const doctor = useLoaderData();
  const {addBooking} = useContext(BookingContext);
  // console.log(addBooking)

  const handleBooking = () =>{
      addBooking(doctor);
      alert(`${doctor.name} added`);
  }
  return (
    <div className="text-black">
      <div className="lg:container md:container w-[90%] mx-auto h-64 bg-white rounded-3xl my-8 flex items-center justify-center shadow-sm">
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
      <div className="card lg:card-side md:card-side bg-white shadow-sm lg:container md:container w-[90%] mx-auto rounded-3xl">
        <figure className="p-8">
          <img src={doctorImg} alt="Movie" />
        </figure>
        <div className="py-5 pt-0 lg:py-0 pl-5">
          <h2 className="card-title lg:text-4xl md:text-3xl text-2xl lg:pt-11 md:pt-0 font-bold mb-5">
            {doctor.name}
          </h2>
          <p className="lg:text-lg md:text-lg text-sm">
            {doctor.qualification[0]}
          </p>
          <p className="text-lg mb-5">{doctor.qualification[1]}</p>
          <p className="text-lg">Working at</p>
          <h3 className="lg:text-xl md:text-lg text-lg font-semibold">
            {doctor.hospital}
          </h3>
          <div className="border-b-2 my-5 border-dashed border-slate-300 w-10/12 lg:w-[1080px]" />
          <p className="text-lg">Reg No: {doctor.regNo}</p>
          <div className="border-b-2 my-5 border-dashed border-slate-300 w-10/12 lg:w-[1080px]" />
          <div className="lg:flex md:flex lg:gap-4 md:gap-3 grid grid-cols-3 md:pr-3">
            <p className="font-bold lg:mb-5 mb-5">Availability </p>
            {doctor.availability.map((e,id) => (
              <div key={id} className="badge badge-soft p-3 bg-amber-100 border-amber-300 font-semibold text-amber-500 badge-warning">
                {e}
              </div>
            ))}
          </div>
          <div className="lg:flex items-center content-center lg:mt-0 mt-4">
            <p className="font-bold pr-4">Consultation Fee: </p>
            <span className="text-blue-500 font-bold">Taka: {doctor.fee}</span>
            <span className="text-sm text-slate-500 px-2">{`(incl. Vat)`}</span>
            <span className="text-blue-500 font-semibold">
              Per consultation
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white h-fit py-6 my-10 lg:container w-[90%] mx-auto rounded-3xl shadow-sm flex items-center justify-center mb-25">
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
              <button onClick={handleBooking} className="w-full bg-blue-500 text-white font-bold p-3 rounded-3xl lg:text-xl md:text-xl mt-8 cursor-pointer">
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
