import React from "react";

export default function Feature(){
    return(
        <div className="h-screen w-full bg-[hsla(44,100%,50%,1)] px-10 py-14 scroll-auto ">
            <div>
        <p className="font-btk text-[64px] tracking-tighter leading-tighter text-[#000]"> Visual Collaboration made easy </p>
        <p className="text-[20px] leading-7 text-[#000] py-8">Work with your team in a shared and dynamic visual environment</p>
            </div>
            <div className="rounded-md shadow-lg">
            <img src="https://assets-global.website-files.com/62e11362da2667ac3d0e6ed5/6358a1295b21e975903991ea_features-hero-min.svg"
             loading="eager"  alt="" className="w-[200px]"  />
            </div>
            <div className="bg-white">
                <p className="font-btk text-[40px]">
                Work together in a flexible, inclusive collaboration space
                </p>
                <div className="flex flex-row">
                <div className="">
                    <div>
                        <p className="font-btk text-xl">Infinite & resizable canvas options</p>
                        <p>Choose the right canvas for your</p>
                        <p>collaboration goals — flexibility</p>
                        <p>without limits.</p>
                    </div>
                    <div>
                        <p className="font-btk text-xl">Icons, GIFs & images</p>
                        <p>Express ideas visually or lead an</p>
                        <p>engaging team-building activity</p>
                        <p>with Noun Project, GIPHY, &</p>
                        <p>Unsplash integrations.</p>
                    </div>
                    <div>
                        <p className="font-btk text-xl">Sticky notes & text</p>
                        <p>Add ideas, action items, & more</p>
                        <p>as a sticky note or text box —</p>
                        <p>then change colors and cluster</p>
                        <p>to identify patterns or solutions.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="font-btk text-xl">Flexible permissions</p>
                        <p>Control access to collaboration</p>
                        <p>features with view-only, edit, and</p>
                        <p>facilitator settings.</p>
                    </div>
                    <div>
                        <p className="font-btk text-xl">Mapping & diagramming</p>
                        <p>Build quick and easy</p>
                        <p>visualizations of flows, maps,</p>
                        <p>processes, hierarchies, journeys,</p>
                        <p>and more.</p>
                    </div>
                    <div>
                        <p className="font-btk text-xl">Create & publish custom templates</p>
                        <p>Save time and scale methods</p>
                        <p>across your organization by</p>
                        <p>publishing templates to your</p>
                        <p>workspace.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}