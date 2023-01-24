import React from "react";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "./Body/Product/product";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { HiOutlineChevronUp } from "react-icons/hi";
import Solution from "./Body/solution";
import Resource from "./Body/resource";

export default function NavBar() {
  const [nav, setNav] = useState(true);
  const [sol, setSol] = useState(false);
  const [read, setRead] = useState(false);
  const [res, setRes] = useState(false)

  function handleSol(){
    setSol(!sol)
  };

  function handleRead() {
    setRead(!read);
  };
  function handleMenu() {
    setNav(!nav);
  };
  function handleRes(){
    setRes(!res)
  }

  return (
    <header className="bg-white fixed top-0 w-full">
      <div className="xs:hidden lg:flex flex-row justify-between items-center pt-4 mx-6 ">
        <div className="flex items-center gap-6">
        <Link to="">
        <img
            className="w-28"
            src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/6310bb11874afdba54b2cbf7_mural-logo-color.svg"
            loading="lazy"
            alt="Mural Logo in Color"
          />
        </Link>
          <Link
            className="flex flex-row items-center gap-2 text-[#222] text-[16px] hover:text-[#195ad7] "
            to="products"
            onClick={handleRead}
            
          >
          Products <HiOutlineChevronUp className={read ? "" : "rotate-180"} size={20}/>
           
          </Link>
          <Link
            className="flex flex-row items-center gap-2 text-[#222] hover:text-[#195ad7]"
            to="/solutions"
            onClick={handleSol}
          >
            Solutions <HiOutlineChevronUp className={sol ? "" : "rotate-180"} size={20}/>
          </Link>
          <Link
            className="flex flex-row items-center gap-2 text-[#222] hover:text-[#195ad7]"
            to="/resources"
            onClick={handleRes}
          >
            Resources <HiOutlineChevronUp className={res ? "" : "rotate-180"} size={20}/>
          </Link>
          <Link className="text-[#222] hover:text-[#195ad7]" to="pricing">Pricing </Link>
        </div>

        <div className="flex gap-4 items-center text-[#222]">
          <Link to="sign in">Sign in</Link>
          <Link
            className=" bg-[#312c2e] text-white lg:p-4 rounded-md"
            to="sign up"
          >
            Sign up, free forever
          </Link>
        </div>
      </div>

      <nav className="p-3 flex top-0 justify-between">
        <Link className="" to="/">
          <img
            className="w-28 lg:hidden"
            src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/6310bb11874afdba54b2cbf7_mural-logo-color.svg"
            loading="lazy"
            alt="Mural Logo in Color"
          />
        </Link>

          {nav ? (
            <BiMenu className="lg:hidden flex-row justify-end " size={40} onClick={handleMenu} />
          ) : (
            <div className="flex flex-col  bg-white h-screen">
              <div className="flex flex-row justify-end"><AiOutlineClose className={nav ? "rotate-180, lg:hidden" : ""} size={30} onClick={handleMenu} /></div>
              <div className="flex flex-col justify-start mt-10 ">
              <p>
                <Link
                  className=" "
                  to="products"
                  
                  
                >
                   
                 {read ? <div>
                  <Link className="flex flex-row items-center gap-2 text-3xl  text-[#222]" to="products" onClick={handleRead}> Products <HiOutlineChevronUp 
                 className={read ? "" : "rotate-180"} size={20}/></Link>
                 <div className="h-screen w-full flex flex-col gap-4"> <Link className="text-[18px]" to="features">Features</Link>
            <Link className="text-[18px]" to="templates">Templates</Link>
            <Link className="text-[18px]" to="">Enterprise</Link>
            <Link className="text-[18px]" to="">Integrations</Link>
            <Link className="text-[18px]" to="">Security</Link>
            <Link className="text-[18px]" to="">Why Mural</Link>
</div>
 </div> : <div> <div className="flex flex-row items-center gap-2 text-3xl  text-[#222]" onClick={handleRead}> Products <HiOutlineChevronUp 
                 className= "rotate-180" size={20}/></div></div>}
                </Link>
                </p> 
                <p>
                <Link
                  className=""
                  to="solutions"
                  
                >
                   {sol ? <div>
                  <div className="flex flex-row items-center gap-2 text-3xl   text-[#222]" onClick={handleSol}> Solutions <HiOutlineChevronUp 
                 className={sol ? "" : "rotate-180"} size={20}/></div>
                 <div className="h-screen w-full flex flex-col gap-4"><div className="text-sm font-semibold">
            <p>BY TEAMS</p>
            <div className="border-b border-b-slate-900"></div>
            </div>
            <Link className="text-[18px]" to="">Products, design & engineering</Link>
            <Link className="text-[18px]" to="">Consulting</Link>
            <Link className="text-[18px]" to="">Executives</Link>
            <Link className="text-[18px]" to="">Sales & customer success</Link>
</div>
 </div> : <div> <div className="flex flex-row items-center gap-2 text-3xl mt-8  text-[#222]" onClick={handleSol}> Solutions <HiOutlineChevronUp 
                 className= "rotate-180" size={20}/></div></div>}            </Link>
                </p>
                <Link
                  className="flex flex-row items-center gap-2 text-3xl mt-8 text-[#222]"
                  to="resources"
                  
                >
                  {res ? <div>
                  <div className="flex flex-row items-center gap-2 text-3xl  text-[#222]" onClick={handleRes}> Resources <HiOutlineChevronUp 
                 className={res ? "" : "rotate-180"} size={20}/></div>
                   <div className="h-screen w-full flex flex-col gap-4 top-0">
            <Link className="text-[18px]" to="">Blogs</Link>
            <Link className="text-[18px]" to="">Webinars and events</Link>
            <Link className="text-[18px]" to="">Mural community</Link>
        </div>
 </div> : <div> <div className="flex flex-row items-center gap-2 text-3xl  text-[#222]" onClick={handleRes}> Resources <HiOutlineChevronUp 
                 className= "rotate-180" size={20}/></div></div>}    
           </Link>
                <Link
                  className="items-center gap-2 text-3xl mt-8 text-[#222]"
                  to="pricing"
                >
                  Pricing{" "}
                </Link>
              </div>
              <div className=" flex  m-20 gap-8 justify-center items-center">
                <Link className="text-[#222] text-3xl" to="sign in">
                  Sign in
                </Link>
                <Link
                  className="bg-[#444344] text-white p-3 px-8 rounded-md"
                  to="sign up"
                >
                  Sign up, free forever
                </Link>
              </div>
            </div>
          )}

      </nav>
      <Outlet />
    </header>
  );
}
