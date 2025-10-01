import React from "react";
import { useRouteError, Link } from "react-router";
import errorLogo from "../../assets/404.gif"

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const errorMessage =
    error?.statusText ||
    error?.message ||
    (typeof error === "string" ? error : "Page not found");

  return (
    <div className="flex flex-col items-center justify-center text-center py-5">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <img className="md:w-72 w-48" src={errorLogo} alt="" />
      <p className="text-lg text-gray-600 mb-3">{String(errorMessage)}</p>
      <Link
        to="/"
        className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
