import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import bahan from "../assets/bahan.jpg";

const Jumbotron = () => {

  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleCreateStorageClick= () => {
    if(!isAuthenticated){
    navigate("/login");
    }else{
      navigate("/form");
    }
  };


  return (
    <section
      style={{
        backgroundImage: `url(${bahan})`,
      }}
      className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to La Storage
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          You can create a frozen food storage in here.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
          onClick={handleCreateStorageClick}
            href="/form"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent border border-solid"
          >
            Create Storage
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
