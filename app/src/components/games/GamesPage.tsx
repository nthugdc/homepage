import React from "react";
import AnimatedText from "../AnimatedText";
import AllPosts from "../AllPosts";

export default function GamesPage(){

    return (
        <div className = "container mx-auto px-6 md:px-6 lg:px-32 xl:px-48 bg-white">
            
            <AnimatedText title="Games"></AnimatedText>
            <AllPosts category='"NTHUGDC-Games"'></AllPosts>

        </div>
    );
}