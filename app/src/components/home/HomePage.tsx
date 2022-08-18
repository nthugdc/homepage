import React from "react";
import sanityClient from "../../client";
import heroImage from "./heroUnit.png";
import HeroUnit from "./HeroUnit";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default function HomePage() {


    // y length variables
    let textY = 400;


    useEffect(() => {
        // gsap animation

        gsap.set('.mainscroll', {position:'fixed', background:'#fff', width:'100%', height:'100%', top:0, left:'50%', x:'-50%'})
        gsap.set('.scrollDist', {width:'100%', height:'200%'})
        gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:5}})
            .fromTo('.aqua', {x:100},{x:200}, 0)
            .fromTo('.aqua', {y:120},{y:-500}, 0)
            .fromTo('.cloudmask', {y:345},{y:120}, 0)
            .fromTo('.mask', {y:100},{y:-800}, 0)
            .fromTo('.irys', {x:-100},{x:0}, 0)
            .fromTo('.irys', {y:700},{y:-220}, 0)
    }, []);

    return (
        
     <>
                <div className="scrollDist"></div>
                <div className="mainscroll">
                <svg height="100%" width="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid
 slice" xmlns="http://www.w3.org/2000/svg" className="bg-black">
                    <mask id="m">


                        <g className="mask">
                            <rect fill="#fff" width="100%" height="801" y="799" />
                            <image className="cloudmask" href="images/20mask.jpg" width="1200" height="800" />
                        </g>
                        </mask>
                        <rect fill="#526" width="100%" height="801" y="799" />
                        <image className="aqua" href="images/00.png"  width="1300" />
                        <text className="HomeTitle text-7xl md:text-8xl lg:text-[99px] text-center" fill="#fff" x="50%" y={textY}>NTHUGDC</text>
                 
                        <g mask="url(#m)">
                        
                            <rect fill="#fff" width="100%" height="100%" />     
                                <image className="irys" href="images/16.jpg"  width="1300"  /> 
                                <a href="https://discord.gg/pw5kc5jWFa" target="_blank" rel="noreferrer">

                                    <text className="HomeTitle text-7xl md:text-8xl lg:text-[99px] text-center"  x="50%" y={textY} fill="#fff" href="https://discord.gg/pw5kc5jWFa">JOIN US ❤</text>
                                </a>
                                
                            
                        </g>
                    
                </svg>
            </div>
            </>
    );
}