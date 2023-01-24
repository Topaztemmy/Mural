import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineClose, AiOutlineDown} from "react-icons/ai"

export default function Resource(){
    const icon = {color: "white", font: '1.5em'};
    const navigation = useNavigate()
    return(
        <div>
        <div className=' px-28 py-12'>
              
                 <div className="flex flex-row justify-between w-full">
                 <p className="font-btk text-6xl text-[#000000] ">Resources</p>
                  <p className='flex flex-row gap-5 p-6'><AiOutlineClose className='bg-black rounded-md hover:bg-red-400'
                   style={icon} onClick={() => navigation("/")}/></p>
                 </div>
                
                 <div>
                  <div className="flex flex-row justify-between items-center py-10">
                    <Link to="">
                      <p className="font-bold">Blog</p>
                      <p className="text-sm text-[#757575] leading-5">Mural's intuitive features makes collaboration</p>
                      <p className="text-sm text-[#757575] leading-5">creative, engaging, and productive</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold">Webinar and events</p>
                      <p className="text-sm text-[#757575] leading-5">Save time with hundred of ready-to-use templates</p>
                      <p className="text-sm text-[#757575] leading-5">for common use cases and proven methods</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold">Mural community</p>
                      <p className="text-sm text-[#757575] leading-5">Global enterprises trust Mural to transform the way</p>
                      <p className="text-sm text-[#757575] leading-5">they collaborate at scale</p>
                    </Link>
                  </div>
                  <div className="flex flex-row justify-between items-center py-4">
                    <Link to="">
                      <p className="font-bold">Consultation and network</p>
                      <p className="text-sm text-[#757575] leading-5">Improve your work flow by connecting to the </p>
                      <p className="text-sm text-[#757575] leading-5">app you love.</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold">Help center</p>
                      <p className="text-sm text-[#757575] leading-5">Rigorous compliance and safety standard, plus</p>
                      <p className="text-sm text-[#757575] leading-5">scalable enterprise-grade security toold</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold">Case study</p>
                      <p className="text-sm text-[#757575] leading-5 ">Global enterprises trust Mural to transform the way</p>
                      <p className="text-sm text-[#757575] leading-5">they collaborate at scale</p>
                    </Link>
                  </div>
                  <div className="flex flex-row justify-between items-center bg-blue-200 px-8 py-6 my-6 rounded-lg">
                    <div>
                        <p className="text-2xl font-btk text-[#000000]">Decode disengagement and boost performance</p>
                        <p className="text-sm text-[#000000]">The 4 ps of highly effective Product, Design, and Engineering teams</p>
                    </div>
                    <div><p className="border-b-2 border-slate-500">Get the guide</p></div>
                  </div>
                 </div>

                
            </div>
            <div className='bg-blue-400 '>
                <div>
                <div className='py-8 flex flex-row justify-between items-center px-28'>
                        <p className='font-bold'>From the blog </p>
                       <p><p className='border-b-2 border-gray-900 mt-2 w-full'>Browse all article</p></p> 
                    </div>

                </div>
                    <div className='flex flex-row'>
                        <div>
                        <img src='https://assets-global.website-files.com/
                        62e11362da2667ac3d0e6ed5/6387e08d3e2c0244761ff13a_Property%201%3DDefault%20(1)-p-1600.png' alt='' />
                        <p>Workflow</p>
                        </div>
                        <div>
                        <img src='https://assets-global.website-files.com/
                         62e11362da2667ac3d0e6ed5/6387e0641a4fa5290712c40c_Property%201%3DDefault-p-1600.png' alt='' />
                            <p>Process Flowchart</p>
                        </div>
                        <div>
                        <img src='https://assets-global.website-files.com/
                          62e11362da2667ac3d0e6ed5/6387e0b441191e79bf3a662e_Property%201%3DDefault%20(2)-p-1600.png' alt='' />
                            <p>Mind Map brainstorm</p>
                        </div>
                          
                    </div>
                 </div>
            </div>
 
    )
}