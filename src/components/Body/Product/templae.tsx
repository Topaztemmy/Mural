import React, { useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Template() {
  const [search, setSearch] = useState(true);
  function handleSearch() {
    setSearch(!search);
  }
  return (
    <div>
      <div className="">
        <div className="bg-[hsla(44,100%,50%,1)] py-16 px-8">
          <p className="text-lg">TEMPLATES</p>
          <p className="text-[64px] text-[#000]">
            Get started quickly with pre-built templates
          </p>
          <p>
            Hundreds of templates to jump-start your next collaboration session
          </p>
        </div>
        <div className="relative bg-yellow-300 justify-center flex w-full gap-4 py-8">
          <input
            type="search"
            id="search-dropdown"
            className="block pr-10 p-3 z-20 text-sm w-[500px] text-gray-900
             bg-gray-50 rounded-md border-l-gray-50 border-l-2 border border-gray-300
               "
            placeholder="Search"
            required
          />
          <div className="absolute inset-y-0 left-60 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          {search ? (
            <div>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4
             text-sm text-center text-gray-900 font-bold bg-white border border-gray-300 rounded-md w-[200px]
             focus:outline-none"
               
                type="button"
                onClick={handleSearch}
              >
                All categories{" "}
                <div className="flex flex-row justify-between gap-10">
                  <AiOutlineDown
                    className={search ? "" : "rotate-180 font-bold"}
                  />{" "}
                  <HiOutlineViewGrid />
                </div>{" "}
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <Link to="">
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </Link>
                <Link to="">
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </Link>
                <Link to="">
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </Link>
                <Link to="">
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4
             text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-md 
             focus:outline-none"
              onClick={handleSearch}
              type="button"
            >
              All categories{" "}
              <div className="flex flex-row justify-between gap-10">
                  <AiOutlineDown
                    className={search ? "" : "rotate-180 font-bold"}
                  />{" "}
                  <HiOutlineViewGrid />
                </div>{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
