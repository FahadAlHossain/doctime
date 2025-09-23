import React from "react";
import Hero from "../Hero/Hero";
import Doctors from "../Doctors/Doctors";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="text-black">
      <Hero/>
      <Doctors/>
      <Service/>
    </div>
  );
};

export default Home;
