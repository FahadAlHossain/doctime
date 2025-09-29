import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Blog from "./components/Blog/Blog";
import { blogData, doctorDetailsLoader, doctorLoader } from "./utilis/loadData";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import Error from "./components/Error/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Root}>
        <Route index Component={Home} loader={doctorLoader}></Route>
        <Route
          path="doctor/:regNo"
          Component={DoctorDetails}
          loader={doctorDetailsLoader}
          errorElement={<Error />}
        ></Route>
        <Route path="booking" Component={Booking}></Route>
        <Route path="blogs" Component={Blog} loader={blogData}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
