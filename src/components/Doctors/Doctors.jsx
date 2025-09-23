import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Doctors = () => {
  const doctorsData = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? doctorsData : doctorsData.slice(0, 6);
  return (
    <div className="my-[80px]">
      <div className="w-[55%] mx-auto">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center my-5">
          Our Best Doctors
        </h1>
        <p className="text-sm lg:text-lg md:text-lg text-center mb-6">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:container md:container w-[80%] mx-auto">
        {displayData.map((doc, idx) => (
          <div key={idx} className="card bg-white w-full shadow-sm">
            <figure>
              <img className="w-[80%] mt-7" src={doc.img} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <div className="badge badge-soft badge-primary bg-blue-200 border-blue-200 font-semibold">
                  {doc.experience} years experience
                </div>
              </div>
              <h2 className="card-title lg:text-2xl md:text-2xl text-xl font-bold">
                {doc.name}
                <div className="badge badge-soft badge-success bg-green-100 border-green-100">
                  Available
                </div>
              </h2>
              <p className="lg:text-lg md:text-lg text-sm">
                {doc.qualification}
              </p>
              <hr className="border-t-2 border-dashed border-slate-400" />
              <p className="lg:text-lg md:text-lg text-sm">{doc.regNo}</p>
              <button className="border-2 hover:bg-blue-500 hover:text-white border-blue-500 rounded-2xl p-2 text-blue-500 font-bold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="border-2 border-blue-500 bg-blue-500 rounded-2xl p-2 px-5 text-white font-bold"
          >
            View All Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
