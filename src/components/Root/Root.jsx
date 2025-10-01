import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import { DNA } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-screen">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
