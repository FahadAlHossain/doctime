import React from "react";
import doctor from "../../assets/success-doctor.png";
import patient from "../../assets/success-patients.png";
import review from "../../assets/success-review.png";
import staff from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const Service = () => {
  return (
    <div>
      <div className="text-center w-[50%] mx-auto mb-8">
        <h1 className="lg:text-5xl md:text-4xl font-bold text-3xl">We Provide Best Medical Services</h1>
        <p className="lg:text-lg md:text-lg text-sm">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-[80%] mx-auto mb-15">
        <div className="card bg-white w-full shadow-sm">
          <figure className="mt-8">
            <img src={doctor} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-center text-6xl font-bold">
              <CountUp
                className="CountUp"
                start={0}
                end={199}
                duration={10}
                ref={(countUp) => {
                  this.myCountUp = countUp;
                }}
              />
              <h2>+</h2>
            </div>
            <p className="font-bold text-lg text-center">Total Doctors</p>
          </div>
        </div>
        <div className="card bg-white w-full shadow-sm">
          <figure className="mt-8">
            <img src={patient} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-center text-6xl font-bold">
              <CountUp
                className="CountUp"
                start={0}
                end={1900}
                duration={10}
                ref={(countUp) => {
                  this.myCountUp = countUp;
                }}
              />
              <h2>+</h2>
            </div>
            <p className="font-bold text-lg text-center">Total Patients</p>
          </div>
        </div>
        <div className="card bg-white w-full shadow-sm">
          <figure className="mt-8">
            <img src={review} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-center text-6xl font-bold">
              <CountUp
                className="CountUp"
                start={0}
                end={467}
                duration={10}
                ref={(countUp) => {
                  this.myCountUp = countUp;
                }}
              />
              <h2>+</h2>
            </div>
            <p className="font-bold text-lg text-center">Total Reviews</p>
          </div>
        </div>
        <div className="card bg-white w-full shadow-sm">
          <figure className="mt-8">
            <img src={staff} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-center text-6xl font-bold">
              <CountUp
                className="CountUp"
                start={0}
                end={300}
                duration={10}
                ref={(countUp) => {
                  this.myCountUp = countUp;
                }}
              />
              <h2>+</h2>
            </div>
            <p className="font-bold text-lg text-center">Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
