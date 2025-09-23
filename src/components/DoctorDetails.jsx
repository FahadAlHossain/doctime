import React from "react";
import { useLoaderData } from "react-router";
import doctorImg from '../assets/doctor-sample.png'

const DoctorDetails = () => {
  const doctor = useLoaderData();
  return (
    <div className="text-black">
      <div className="card card-side bg-white shadow-sm container mx-auto rounded-3xl">
        <figure className="p-8">
          <img
            src={doctorImg}
            alt="Movie"
          />
        </figure>
        <div className="card-body py-10">
          <h2 className="card-title text-4xl font-bold">{doctor.name}</h2>
          <p className="text-lg">{doctor.qualification[0]}</p>
          <p className="text-lg">{doctor.qualification[1]}</p>
          <p className="text-lg">Working at</p>
          <h3 className="text-xl font-bold">{doctor.hospital}</h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
