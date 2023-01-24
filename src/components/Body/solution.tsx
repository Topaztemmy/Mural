import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineClose, AiOutlineRight} from "react-icons/ai"

export default function Solution(){
    const icon = {color: "white", font: '1.5em'};
        const navigation = useNavigate()

    return(
        <div className="h-screen w-full flex flex-col">
        <div className=" py-20 px-28">
            
            <div className="flex flex-row justify-between w-full">
                 <p className="font-btk text-6xl pb-6 text-[#000000] ">Solutions</p>
                  <p className='flex flex-row gap-5 p-6'><AiOutlineClose className='bg-black rounded-md hover:bg-red-400'
                   style={icon} onClick={() => navigation("/")}/></p>
                 </div>
                 <div className="flex flex-row justify-between text-sm font-semibold">
            <p>BY TEAMS</p>
            <div className="border-b-2 border-slate-900 "><p></p></div>
            </div>
                
                 <div>
                  <div className="flex flex-row justify-between items-center py-10">
                    <Link to="">
                      <p className="font-bold">Products, design and engineering</p>
                      <p className="text-sm text-[#757575] leading-5">Deepen alignment from roadmap to retro</p>

                    </Link>
                    <Link to="">
                      <p className="font-bold">Consulting</p>
                      <p className="text-sm text-[#757575] leading-5">Design high-impact solutions with more engaging</p>
                      <p className="text-sm text-[#757575] leading-5">client sessions</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold">Executives</p>
                      <p className="text-sm text-[#757575] leading-5">Activate imagination and innovation accross all your</p>
                      <p className="text-sm text-[#757575] leading-5">teams.</p>
                    </Link>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <Link to="">
                      <p className="font-bold">Sales and customer success</p>
                      <p className="text-sm text-[#757575] leading-5">Win more deals and build stronger partnership </p>
                  
                    </Link>
                    <Link to="">
                      <p className="font-bold">Information Technology</p>
                      <p className="text-sm text-[#757575] leading-5">Empower hybrid, remote, or distributed teams to</p>
                      <p className="text-sm text-[#757575] leading-5">work better together</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold flex flex-row items-center gap-2">All teams <AiOutlineRight /> </p>
                      <p className="text-sm text-[#757575] leading-5">Teams work better together with Mural</p>
     
                    </Link>
                  </div>
                 </div>

              </div>
              <div className="bg-[#4bca84]">
              <div className="">
           <p>BY USE CASE</p>
            <div className="border-b border-slate-900 border-2"><p></p></div>
            </div>
                
                 <div>
                  <div className="flex flex-row justify-between items-
                  center py-10">
                    <Link to="">
                      <p className="font-bold">Alignment and cordination</p>
                      <p className="text-sm text-[#757575] leading-5">Deepen alignment from roadmap to retro</p>

                    </Link>
                    <Link to="">
                      <p className="font-bold">Strategy and Planning</p>
                      <p className="text-sm text-[#757575] leading-5">Design high-impact solutions with more engaging</p>
                      <p className="text-sm text-[#757575] leading-5">client sessions</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold">Team building</p>
                      <p className="text-sm text-[#757575] leading-5">Activate imagination and innovation accross all your</p>
                      <p className="text-sm text-[#757575] leading-5">teams.</p>
                    </Link>
                  </div>
                  <div className="flex flex-row justify-between items-center py-4">
                    <Link to="">
                      <p className="font-bold">Brainstorming and Ideation</p>
                      <p className="text-sm text-[#757575] leading-5">Win more deals and build stronger partnership </p>
                  
                    </Link>
                    <Link to="">
                      <p className="font-bold">Ice breaker</p>
                      <p className="text-sm text-[#757575] leading-5">Work together more effectively with better</p>
                      <p className="text-sm text-[#757575] leading-5">connection</p>
                    </Link>
                    <Link to="">
                      <p className="font-bold flex flex-row items-center gap-2">All use cases <AiOutlineRight /> </p>
                      <p className="text-sm text-[#757575] leading-5">Empower hybrid, remote, or distributed teams to</p>
                      <p className="text-sm text-[#757575] leading-5">work better together</p>

     
                    </Link>
                  </div>
           </div>      
           </div>
 
        </div>
    )
}