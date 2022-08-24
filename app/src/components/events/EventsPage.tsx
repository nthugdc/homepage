import React from "react";
import OnePost from "../OnePost";
import AnimatedText from "../AnimatedText";
import AllPosts from "../AllPosts";

export default function EventsPage(){

    return (
        <div className = "container mx-auto px-6 md:px-6 lg:px-32 xl:px-48 bg-white ">
            
            <AnimatedText title="Events"></AnimatedText>
            <AllPosts category='"NTHUGDC-Events"'></AllPosts>
        

        </div>
    );
}