import React from "react";
import hero from "../../assets/banner-img-1.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center w-[55%] mx-auto">
        <h1 className="text-5xl font-bold text-center mb-3 mt-20">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="text-lg text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Search Doctor"
          className="bg-white w-1/2 py-2 px-3 rounded-3xl border-2 border-gray-300 my-4"
        />
        <button className="bg-blue-500 text-white px-5 py-2 text-lg rounded-3xl font-semibold">
          Search Now
        </button>
      </div>
      <div className="flex gap-5 items-center justify-center my-6 mb-15">
        <div>
          <img src={hero} alt="" />
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
