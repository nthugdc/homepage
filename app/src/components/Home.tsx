import React from "react";
import sanityClient from "../client";
import heroImage from "../heroUnit.png";
import HeroUnit from "./HeroUnit";

export default function Home() {
    return (
        <div className="w-screen h-screen">
            <HeroUnit imgSrc={heroImage}></HeroUnit>
            <div className={"container text-center"}>Under construction...</div>
        </div>
    );
}