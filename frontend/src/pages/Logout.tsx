import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Logout = (props: Props) => {
  return (
    <div className="pb-40 w-screen flex flex-col items-center justify-center space-y-6">
      <span className="text-xl font-semibold">You have logged out</span>
      <Link
        to="/"
        className="text-white font-semibold bg-gray-700  focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gray-900"
      >
        Back to home
      </Link>
      <Link
        to="/login"
        className="text-gray-700 font-semibold bg-white hover:bg-gray-200 border border-gray-700 focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Login
      </Link>
    </div>
  );
};

export default Logout;
