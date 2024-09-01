import React from "react";
import banner from "../../public/Banner.png";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom"
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Search here to read any thing
            </p>
            <label className="input rounded-full flex items-center gap-2 bg-gray-500 text-gray-100">
              <input type="text" className="grow" placeholder="Search..." />
              <Link to={"/books"} ><IoSearchSharp className="h-8 w-8 text-gray-100 cursor-pointer" /></Link>
            </label>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img src={banner} className="md:w-[550px] md:h-[460px] md:ml-12" alt="bannar" />
        </div>
      </div>
    </>
  );
}

export default Banner;
