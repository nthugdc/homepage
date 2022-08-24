import React from "react";
import AboutText from "./AboutText";
import AnimatedText from "../AnimatedText";
export default function AboutPage(){
    // TODO
    return (
        <div className = "container mx-auto px-12 md:px-6 lg:px-32 xl:px-96 bg-white ">
            
            <AnimatedText title="About"></AnimatedText>
            <AboutText></AboutText>
        </div>
    );
}