import React from "react";
import hero from "../../assets/banner-img-1.png";

const Hero = () => {
  return (
    <div  className='mx-10 border-3 border-white rounded-2xl'>
      <div className="text-center w-[55%] mx-auto">
        <h1 className="lg:text-5xl md:text-4xl font-bold text-3xl text-center mb-3 mt-20">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="lg:text-lg md:text-lg text-sm text-center">
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
          className="bg-white w-1/2 lg:py-2 md:py-2 py-1 px-3 rounded-3xl border-2 border-gray-300 my-4"
        />
        <button className="bg-blue-500 text-white px-5 py-2 lg:text-lg md:text-lg text-sm rounded-3xl font-semibold">
          Search Now
        </button>
      </div>
      <div className="lg:flex md:grid md:grid-cols-2 md:w-[85%] md:mx-auto grid grid-cols-1 w-[65%] mx-auto gap-5 items-center justify-center my-6 mb-15">
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
