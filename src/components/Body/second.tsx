import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useQuery } from "react-query";

const getNames = async ()=> {
  const res= await fetch("https://randomuser.me/api/?results");
  return res.json();
};
export default function Second(){
 

  const {data, error, isLoading} = useQuery('randomName', getNames);
  if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;


  console.log(data);
    return(
      <>
        <div className="bg-[#2898f3]  lg:mt-8 ">
            <div className="bg-black flex flex-col py-12">
            <p className="text-white text-3xl pb-4 px-4 font-extralight font-time lg:text-[46px] lg:p-7 lg:w-[88%]">
            There are lots of places where people can get together and throw
            stickies on the wall.
          </p>
          <p className="text-white text-3xl px-4 font-extralight font-time lg:text-[46px] lg:p-7 lg:w-[90.4%]">
            But if you really want to move the needle, it’s time to change more
            than where your team works.
          </p>
            </div>
            <p className="text-[64px] font-time ml-3 lg:text-8xl lg:my-20">Change your how</p>
        <div className="">
           <div className="lg:flex lg:flex-row lg:justify-between lg:items-center"> 
          <p >
            <img
              className="w-[80%] my-5 mx-5 lg:w-[650px]"
              src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/638f0a05f68db3dfed686119_Mural_HappyWork-p-800.webp"
              loading="lazy"
              alt=""
            />
          </p>
          <div className="font-sans ml-3 lg:w-[37%] lg:mr-10">
            <p className="text-2xl mt-10 font-thin text-[#2b2661]">Give your team the chance to make exceptional work with Mural, the only complete system that offers both a place to collaborate
            and guidance to hone your team’s collaboration skills.</p>
        
          <p className="text-2xl my-5 text-[#2b2661]">With Mural, you’ll see faster progress, better ideas, happier teams, and more consistently excellent results.</p>
          <p className="font-sans font-bold text-xl my-4">That's happy Works.</p>
          <p className="w-fit p-3 px-8 y-8 flex flex-row items-center">
            <div className="bg-[#ff4b4b] p-4 rounded-l-md"><AiOutlineRight className="bg-" /></div>
            <Link className="text-[#4b4a4a] p-3 px-8 bg-[#ffcee0] rounded-r-md hover:bg-[#ff4b4b]" to="sign in">
              Start a whiteboard{" "}
            </Link>
          </p>
        </div>
        </div>
        </div>
             </div>
             <div className="bg-[#4bca84] py-12">
            <p className="font-btk text-2xl ml-3 lg:text-3xl lg:mx-7">Here's how to </p>
            <p className=" mx-4 lg:mx-7 py-6 border-b-[3px] border-solid border-black font-thin"><Link className="font-btk text-[40px] lg:text-[100px] hover:text-white " to="">Come up with ideas</Link></p>
  
            <p className=" mx-4 lg:mx-7 py-6 border-b-[3px] border-solid border-black"> <Link className="font-btk text-[40px] lg:text-[100px] hover:text-white " to="">Connect with teams</Link></p>
            <p className=" mx-4 lg:mx-7 py-6 border-b-[3px] border-solid border-black"> <Link className="font-btk text-[40px] lg:text-[100px] hover:text-white " to="">Make plans</Link></p>
            <p className=" mx-4 lg:mx-7 py-6 "><Link className="font-btk text-[40px] lg:text-[100px] hover:text-white " to="">Connect and align</Link></p>
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:m-7">
            <p className="ml-3 font-sans">Hundreds of options for whatever your team need</p>
            <p className="w-fit ml-3 px-8 mt-8 flex flex-row items-center">
             <div className="bg-[#ffc04b] p-4 rounded-l-md"><AiOutlineRight className="bg-" /></div>
            <Link className="text-[#4b4a4a] p-3 px-6 bg-[#fceb8d] rounded-r-md hover:bg-[#ffc04b]" to="templates">
              Explore all templates{" "}
            </Link>
          </p>
            </div>
            
        </div>
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="bg-white flex flex-row">
            <p className=" py-9 px-12 ">
            <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849adc2a10247641bdca56_ibm-black.svg"
             alt="IBM Logo" className="py-8" />
             </Link>
             <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849d258d4dcb03c70daf4b_jacobs-black.svg"
             alt="Jacobs Logo" className="w-[180px] py-8" />
             </Link>
             <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/638ca00344a03f9c87ada22f_capco-logo.svg"
             alt="Capco Logo" className="py-8" />
             </Link>
             <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849bc4b1250232b2344fb9_github-black.svg"
             alt="GitHub Logo" className="py-8" />
             </Link>
             
            </p>
            <p className="flex flex-col py-9 px-12 ">
            <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849b518fdf2ab14c335477_steelcase_black.svg"
              alt="Steelcase Logo" className="py-9" /></Link>
             <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849b822abcc7680fe19d0c_thoughtworks-black.svg"
              alt="Thoughtworks Logo" className="py-9" /></Link>
               <Link to=""><img width="300" loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849c65aff19c69e2665a3f_Booz-Allen-Hamilton-black.svg"
              alt="Booz Allen Logo" className="py-9" /></Link>
              <Link to=""><img loading="lazy" src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63849ddec8042b6ef1bed630_autodesk-black.svg"
              alt="Autodesk Logo" className="w-[250px] py-9" /></Link>
            </p>    
            </div>
            <div className="lg:w-[50%]" >
              <div className="bg-[#ad4eb1] p-7 ">
            <p className=" text-3xl font-btk">"It’s not often we find tools that can operate in the highly regulated environments in which we work. Mural has allowed our teams to seamlessly collaborate
                 with our clients and engage with them in a whole new way.”</p>
                 <p className="my-4 text-lg"><Link className="border-b-[3px] border-zinc-600 pb-1" to="">View Capco case study</Link></p>
                 </div>
                 {data?.results 
                 .map((each: {
                   picture: any;
                   email: string; name: {
                   last: string; first: string; }; }) => {
                  const name = `${each.name.first} ${each.name.last}`;
                  return(
                    <p className="bg-black flex gap-8 w-full">
                    <img loading="lazy" src={each.picture.medium}
                     alt={each.name.first} className="w-[200px]" />
                     <div className="flex flex-col justify-center items-start">
                     <p className="text-white font-bold">{name}</p>
                    <p className="text-white">{each.email}</p>
                     </div>   
                 </p>
                  )
                 })
                 }
                
            </div>
        </div>
       <div className="bg-neutral-200 p-3">
        <div className="flex justify-center text-start gap-20 pt-8">
            <p className="font-btk text-[40px]">For every kind of team</p>
            <p className="font-sans text-[20px] w-[34%] py-3">Get specialized templates and resources to meet your team’s specific needs.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20 py-10 pr-20 lg:flex-row">
          <div></div>
          <Link to="">
          <img src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a516749a50fecf2a274_HMP_Spotlet_Consulting.png"
           loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 120px" srcSet="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a516749a50fecf2a274_HMP_Spotlet_Consulting-p-500.png 500w,
            https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a516749a50fecf2a274_HMP_Spotlet_Consulting.png 500w"
             alt="An illustrated beamer canvas representing consultants" className="w-[125px]" />
             <p className="font-btk text-[28px] border-b-4 border-sky-500 text-center pt-4">Consulting</p>
          </Link>
          <Link to="">
          <img src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a53f1a3f3bf96449eee_HMP_Spotlet_Executive.png"
           loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 120px" srcSet="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a53f1a3f3bf96449eee_HMP_Spotlet_Executive-p-500.png 500w,
            https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a53f1a3f3bf96449eee_HMP_Spotlet_Executive.png 500w"
             alt="An office chair representing executive teams" className="w-[125px]" />
             <p className="font-btk text-[28px] border-b-4 border-orange-400 text-center pt-4">Executive</p>
          </Link>
          <Link to="">
          <img src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a521effde4aa8533c5e_HMP_Spotlet_Product.png"
           loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 120px" srcSet="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a521effde4aa8533c5e_HMP_Spotlet_Product-p-500.png 500w,
            https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a521effde4aa8533c5e_HMP_Spotlet_Product.png 500w"
             alt="An abstracted and illustrated UI representing product teams" className="w-[125px]" />
             <p className="font-btk text-[28px] border-b-4 border-pink-400 text-center pt-4">Product</p>
          </Link>
          <Link to="">
          <img src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a54e1c09c7ff6c9bc8e_HMP_Spotlet_Sales.png"
           loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 120px" srcSet="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a54e1c09c7ff6c9bc8e_HMP_Spotlet_Sales-p-500.png 500w,
            https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a54e1c09c7ff6c9bc8e_HMP_Spotlet_Sales.png 500w"
             alt="An illustrated shopping bag representing sales teams" className="w-[125px]" />
             <p className="font-btk text-[28px] border-b-4 border-green-300 text-center pt-4">Sales</p>
          </Link>
          <Link to="">
          <img src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a52c0530c70adadd0ed_HMP_Spotlet_IT.png" 
          loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, 120px" srcSet="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a52c0530c70adadd0ed_HMP_Spotlet_IT-p-500.png 500w,
           https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/63875a52c0530c70adadd0ed_HMP_Spotlet_IT.png 500w" 
           alt="An illustrated computer chip representing IT teams" className="w-[125px]" />
           <p className="font-btk text-[28px] border-b-4 border-purple-500 text-center pt-4">Technology</p>
          </Link>
        </div>
        </div> 
          <div>
            <div className="my-16 mx-4 lg:flex lg:flex-row lg:justify-between lg:m-18">
              <div>
            <Link to="">
            <img sizes="(max-width: 479px) 100vw, (max-width: 767px) 320px, (max-width: 991px) 36vw, 37vw" srcSet="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/638a14c4d5c85e42f7237c98_mural-luma-lockup-p-500.png 500w,
             https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/638a14c4d5c85e42f7237c98_mural-luma-lockup.webp 922w"
              src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/638a14c4d5c85e42f7237c98_mural-luma-lockup.webp"
               alt="Mural and Luma Logo combo" className="lg:w-[420px] lg:mt-7" />
        </Link>
        </div>
        <div className="lg:w-[50%]">
        <p className="text-xl font-sans my-10 lg:my-8">
        Mural is the only system that offers both a shared workspace and training on the LUMA System™,
         a practical way to collaborate that anyone can learn and apply.
        </p>
        <p className="my-2"><Link className="border-b-4 border-green-300 " to="">Read our acquisition announcement</Link></p>
        </div>
        
            </div>
            <div className="m-4 lg:m-8 lg:flex lg:flex-row lg:justify-between">
              <div className="border-b-2 border-black lg:w-[30%] lg:border-hidden">
                <p className="font-btk text-[32px] pb-9 lg:text-[42px]">With Mural and the LUMA System™, you’ll be able to:</p>
              </div>
              <div className="">
                <p className="border-b-2 border-black pb-4 lg:flex lg:flex-row lg:justify-between lg:border-t-2 lg:items-center lg:pb-0 ">
                  <p className="font-btk text-[28px] py-3">Innovate </p>
                  <span className="font-sans text-[16px] lg:flex ">Help your team become confident and capable problem solvers</span>
                </p>
                <p className="border-b-2 border-black pb-4 lg:flex lg:flex-row lg:justify-between lg:items-center lg:pb-0">
                  <p className="font-btk text-[28px] py-3">Adapt </p>
                  <span className="font-sans text-[16px] lg:w-[56%] lg:py-6">Equip your team to effectively collaborate, think differently, and achieve business-driving outcomes.</span>
                </p>
                <p className=" lg:flex lg:flex-row lg:justify-between lg:items-center lg:pb-0">
                  <p className="font-btk text-[28px] py-3">Align </p>
                  <span className="font-sans text-[16px] lg:w-[56%] lg:py-6 ">Establish clear processes and structure for collaboration, while leaving room for creativity and innovation.</span>
                </p>
                <p className="w-fit px-8 mt-8 flex flex-row items-center ">
                <div className="bg-[#1fb150cb] p-4 rounded-l-md"><AiOutlineRight className="bg-" /></div>
            <Link className="text-[#4b4a4a] p-3 px-6 bg-[#9df8c6] rounded-r-md hover:bg-[#1fb150cb]" to="sign in">
              Learn more about LUMA System{" "}
            </Link>
          </p>
                <p className="py-5 lg:py-8">This powerful combination helps teams like yours improve how they work together.</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 py-10 px-6 lg:flex lg:flex-row lg:justify-between lg:pt-32 lg:px-12">
            <div>
              <p className="font=btk text-[40px] pt py-2 lg:text-[64px] lg:w-[75%] leading-[72px]">How did <span className=" text-white p-1 font-extrabold" >SAP</span>
               achieve a 400+% ROI?</p>
               <p className="font-sans text-[#000000] text-[20px] pt-2 lg:w-[60%] lg:py-8 leading-8">By changing their how. After getting started with Mural, their workers saw greater flexibility and transparency, so people worked more efficiently
                 and fewer left the company.</p>
                 <p className="w-fit mt-8 flex flex-row items-center ">
                <div className="bg-[#923296ab] p-4 rounded-l-sm"><AiOutlineRight className="bg-" /></div>
            <Link className="text-[#4b4a4a] py-3 px-6 bg-[#f498fcb6] rounded-r-sm hover:bg-[#923296ab]" to="sign in">
              Get the study{" "}
            </Link>
          </p> 
            </div>
            <img loading="lazy"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAMgCAMAAADIvuz2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/
            eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgM
            jAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wP
            SJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZ
            iMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEExNUE2NDc2OEY5MTFFRDkzNzZGNjNEMkE0MEUwMkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5
            kaWQ6NEExNUE2NDg2OEY5MTFFRDkzNzZGNjNEMkE0MEUwMkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTE1QTY0NTY4RjkxMUVEOTM3NkY2M0QyQTQwRTAyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG
            1wLmRpZDo0QTE1QTY0NjY4RjkxMUVEOTM3NkY2M0QyQTQwRTAyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtGJeNQAAAAMUExURbzizUC1dAAAAP///+4ItWoAAAAEdFJOU////
            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" 
            alt="Meghan Byrnes Borderan | Capco" className="mt-20 w-[600px] pl-[50px] lg:w-[400px]" />
              </div>

              <div className="m-4">
                <p className="text-[28px]">Enterprise on Lock</p>
                <p className="text-[40px] font-btk my-10 lg:my-8">
                Leading enterprise collaboration for more than a decade
        </p>
        <div>

        </div>
        <div className="m-4 lg:m-8 lg:flex lg:flex-row lg:justify-between">
             
              <div className="">
                <p className="border-b-2 border-black pb-4 lg:flex lg:flex-row lg:justify-between lg:border-t-2 lg:items-center lg:pb-0 ">
                  <p className="font-btk text-[28px] py-3">Security </p>
                  <span className="font-sans text-[16px] lg:flex ">Enterprise-grade visibility makes it easy to meet information governance and risk-management standards.*</span>
                </p>
                <p className="border-b-2 border-black pb-4 lg:flex lg:flex-row lg:justify-between lg:items-center lg:pb-0">
                  <p className="font-btk text-[28px] py-3">Scalability </p>
                  <span className="font-sans text-[16px] lg:w-[56%] lg:py-6">Centralized control and a flexible pricing model are designed to grow with your company’s needs.</span>
                </p>
                <p className=" lg:flex lg:flex-row lg:justify-between lg:items-center lg:pb-0">
                  <p className="font-btk text-[28px] py-3">Support </p>
                  <span className="font-sans text-[16px] lg:w-[56%] lg:py-6 ">Get on-demand, customized guidance from our in-house customer success team.</span>
                </p>
                <p className="w-fit px-8 mt-5 flex flex-row items-center">
                <div className="bg-[#386dfd] rounded-l-md p-4"><AiOutlineRight className="" /></div>
            <Link className="text-[#4b4a4a] bg-[#92d6fd] rounded-r-md p-3 hover:bg-[#386dfd] " to="templates">
              More about templates{" "}
            </Link>
          </p>
                <p className=" text-[14px] my-12 lg:py-8">*Mural employs rigorous measures in the areas of product security, infrastructure security, security monitoring, reliability, compliance,
                 and privacy to keep your data safe. We maintain active SOC 2 Type 2, ISO 27001, and ISO 9001 certifications, have achieved the FedRAMP “In Process” designation, and
                  comply with GDPR and CCPA regulations.</p>
              </div>
            </div>
              </div>
              <div className="bg-pink-300 p-8 flex flex-col justify-center items-center ">
              <p className="text-[28px] my-6">Work better for better work</p>
              <p className=" w-fit p-28 mt-5 flex flex-row items-center">
              <div className="bg-black py-[135px] lg:py-[168px] px-[10px] lg:px-[20px] rounded-l-3xl"></div>
            <Link className="text-[#080808] rounded-r-3xl py-[110px] lg:py-[120px] lg:px-[150px] px-[100px] flex items-center bg-amber-300 text-5xl lg:text-8xl hover:bg-black hover:text-amber-300" to="sign in">

              Get Started{" "}
            </Link>
          </p>
            </div>
            <footer className="bg-neutral-200 py-10 px-12">
              <div className="flex flex-wrap items-start gap-16 lg:flex-row">
                <div>
                  <p className="font-bold py-6">Product</p>
                  <p>Enterprise Ready</p>
                  <p>Security</p>
                  <p>Features</p>
                  <p>Solutions</p>
                  <p>Use Cases</p>
                  <p>Industries</p>
                  <p>Facilitation Superpowers</p>
                  <p>Templates</p>
                  <p>Integrations</p>
                  <p>Developers</p>
                  <p>Updates</p>
                </div>
                <div>
                  <p className="font-bold py-6">Resources</p>
                  <p>Remote Facilitation Guide</p>
                  <p>Mural Impact Study</p>
                  <p>Webinars</p>
                  <p>Blog</p>
                  <p>Learning</p>
                  <p>Community</p>
                  <p>Resource Hub</p>
                  <p>Case Studies</p>
                  <p>Help Center</p>
                  <p>Facilitation Toolkit</p>
                </div>
                <div>
                  <p className="font-bold py-6"> Membership</p>
                  <p>Pricing</p>
                  <p>Consultation Network</p>
                  <p>Education</p>
                  <p>Nonprofits</p>
                  <p>Contact Sales</p>
                </div>
                <div>
                  <p className="font-bold pb-6 lg:py-6">Company</p>
                  <p> About Us</p>
                  <p>Careers</p>
                  <p>Newsroom</p>
                  <p>Collaborative Intelligence</p>
                  <p>Brand Assests</p>
                  <p>Accessibility</p>
                  <p>Mural Status</p>
                  <p>Contact Us</p>
                </div>
                <div>
                  <p className="font-bold pb-6 lg:py-6"> Our Apps</p>
                  <p>Download our Apps</p>
                  <p>Microsoft Teams</p>
                  <p>Surface Hub</p>
                </div>
                <div>
                  <p className="font-bold pb-6 lg:py-6">Social</p>
                  <p>Instagram</p>
                  <p>Youtube</p>
                  <p>LinkedIn</p>
                  <p>Twitter</p>
                </div>
              </div>
              <div className="flex flex-row justify-between pt-12 pb-8 lg:hidden">
              <div>
              <Link to="">
        <img
            className="w-[160px]"
            src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/6310bb11874afdba54b2cbf7_mural-logo-color.svg"
            loading="lazy"
            alt="Mural Logo in Color"
          />
        </Link>
        </div>
        <div className="w-[50%]">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        
              </div>
              <div className="lg:hidden flex flex-col justify-center w-[50%] ml-[180px]">
                <p>© 2022 Mural. All rights reserved.</p>
                 <p className="text-[12px]">LUMA Institute, LLC is a wholly-owned subsidiary of Tactivos, Inc. d/b/a Mural</p>
              </div>
              <div className="xs:hidden lg:flex lg:flex-row lg:pb-16 lg:justify-between lg:my-16">
              <Link to="">
        <img
            className="w-[170px]"
            src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/6310bb11874afdba54b2cbf7_mural-logo-color.svg"
            loading="lazy"
            alt="Mural Logo in Color"
          />
        </Link>
        <div className="">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="flex flex-col justify-center">
                <p>© 2022 Mural. All rights reserved.</p>
                 <p className="text-[12px]">LUMA Institute, LLC is a wholly-owned subsidiary of Tactivos, Inc. d/b/a Mural</p>
              </div>

              </div>
              
            </footer>
            <Outlet />
      </>
    )
}