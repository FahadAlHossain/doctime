import React from "react";
import { useRouteError, Link} from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const errorMessage =
    error?.statusText ||
    error?.message ||
    (typeof error === "string" ? error : "Page not found");

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-3">
        {String(errorMessage)}
      </p>
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
