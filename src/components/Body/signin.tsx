import React from 'react';
import { Link } from 'react-router-dom';


export default function SignIn(){
    return (
        <div className='h-screen w-full bg-slate-100 flex flex-col items-center justify-center overflow-visible'>
            <img
            className="w-[130px] flex justify-center items-center mt-10"
            src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/6310bb11874afdba54b2cbf7_mural-logo-color.svg"
            loading="lazy"
            alt="Mural Logo in Color"
          />
            <div className="container mx-[120px] rounded shadow-xl bg-white w-[450px]  flex-1 flex flex-col items-center justify-center px-2">
            
                <div className="  text-black w-full px-4 ">
                    <h1 className="mb-8 text-4xl text-center text-[#2f2f2f]">Sign up</h1>
                    <p className='text-[#2f2f2f] text-sm py-2' >Work email</p>
                    <div className='flex flex-col gap-5'>
                    <input 
                        type="text"
                        className="block border-2 border-gray-800 w-full p-2 rounded-lg mb-4 focus:ring-2"
                        name="fullname"
                        placeholder="Ex: You@company.co" />
                         <button
                        type="submit"
                        className="w-full text-center py-2 rounded-lg bg-red-500 text-white  focus:outline-none "
                       >Continue</button>
                    </div>
                   

                    {/* <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" /> */}

                   
               </div>    
               <div className="text-center text-sm text-grey-dark mt-4 text-[#4c4c4c]">
                        Don't have an account yet?
                        <Link to="" className="no-underline border-b-2 border-grey-dark text-grey-dark font-bold border-black text-[#4c4c4c]">
                            Get started for free
                        </Link> 
                        
                    </div>    
             </div>
             <div className='flex'>
                <p>Terms of Service</p>
                <p>Privacy policy</p>
                </div>       
        </div>
    )
}