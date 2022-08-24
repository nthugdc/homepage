import React from "react";
import AllPosts from "../AllPosts";
import OnePost from "../OnePost";
import AnimatedText from "../AnimatedText";

export default function ArticlesPage(){

    return (
        <div className = "container mx-auto px-6 md:px-6 lg:px-32 xl:px-48 bg-white ">
            
            <AnimatedText title="Articles"></AnimatedText>
       
            <AllPosts category=""></AllPosts>

        </div>
            
    );
}