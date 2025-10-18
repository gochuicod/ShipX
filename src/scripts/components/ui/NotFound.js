import React from "react";
import { useNavigate } from "react-router-dom";
import { margin } from "../../utils/constants";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center bg-white text-center ${margin}`}
    >
      <h1 className="md:text-[3vw] text-[7vw] font-extrabold text-[#4F378A]">
        404 — Page Not Found
      </h1>
      <p className="text-gray-[#1A1A1A]/70 md:text-[0.8vw] text-[3vw] md:my-[1vw] my-[3vw]">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="
          bg-gradient-to-r from-[#4F378A] via-[#FF00E5] to-[#FF00E5]
          bg-[length:200%_100%] bg-[position:0%_0%]
          hover:bg-[position:100%_0%]
          transition-[background-position] duration-1000 ease-in-out
          text-white font-semibold rounded-full px-8 py-3
          shadow-md hover:shadow-lg cursor-pointer md:text-[0.8vw] text-[3vw]
        "
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
