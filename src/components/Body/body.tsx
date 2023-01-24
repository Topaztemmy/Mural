import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import Second from "./second";
import NavBar from '../nav';

export default function Body() {
  return (
    <div className=" font-sans ">
       <NavBar />
      <div className="flex flex-col m-4 lg:flex lg:flex-row lg:justify-between">
        <div className="mt-16 h-[5%]">
          <p className="text-[#000] text-6xl font-btk font-thin lg:text-8xl lg:leading-big lg:pt-20">
            Taking the guesswork
          </p>
          <p className="text-[#000] text-6xl font-thin lg:text-8xl lg:leading-big font-btk">out of great work</p>
          <p className="text-[#4b4a4a] mt-6 text-lg">
            Level up your teamwork with an intuitive digital whiteboard
          </p>
          <p className="text-[#4b4a4a] text-lg">
            built for teams to do their best work together.
          </p>
          <p className="w-fit p-3 px-8 m-8 flex flex-row items-center">
           <div className="bg-[#ff4b4b] p-4 rounded-l-md"> <AiOutlineRight className="bg-" /></div>
            <Link className="text-[#4b4a4a] p-3 px-6 bg-[#ffcee0] rounded-r-md hover:bg-[#ff4b4b]" to="sign in">
              Start a whiteboard{" "}
            </Link>
          </p>
        </div>
        <div className="">
          <img
            className="shadow-lg lg:w-[700px] lg:mt-24"
            src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/638f65d46b27da7adccf1074_Group%207248.webp"
            alt=""
          />
        </div>
      </div>
      <Second />

      <Outlet />
    </div>
  );
}
