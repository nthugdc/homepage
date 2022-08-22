import React from "react";
import OnePost from "../OnePost";
import AnimatedText from "../AnimatedText";
import AllPosts from "../AllPosts";

export default function EventsPage(){
    // TODO
    return (
        <div className = "container mx-auto px-6 md:px-6 lg:px-32 xl:px-48 bg-white ">
            
            <AnimatedText title="Events"></AnimatedText>
                {/* <h1 className="heading text-4xl md:text-6xl font-bold font-sans md:leading-tight text-center text-cyan-600">
                    Test
                </h1> */}
            <AllPosts category='"NTHUGDC-Events"'></AllPosts>

        </div>
    );
}