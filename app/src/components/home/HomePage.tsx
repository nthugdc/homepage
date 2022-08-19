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


    // Safari fix 
    // https://stackoverflow.com/questions/27245673/svg-image-element-not-displaying-in-safari

    // "SyntaxError: unknown: Namespace tags (xmlns:xlink)" in React
    // https://stackoverflow.com/a/61167146/10242733


    // y length variables
    let textY = 400;

    useEffect(() => {
        let mm = gsap.matchMedia();
        gsap.set('.mainscroll', {position:'fixed', background:'#fff', width:'100%', height:'100%', top:0, left:'50%', x:'-50%'})
            gsap.set('.scrollDist', {width:'100%', height:'100%'})
            gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:5}})
                 .fromTo('.aqua', {x:50},{x:140}, 0)
                .fromTo('.aqua', {y:120},{y:-250}, 0)
                .fromTo('.cloudmask', {y:345},{y:120}, 0)
                .fromTo('.mask', {y:100},{y:-800}, 0)
                // .fromTo('.irys', {x:-100},{x:0}, 0)
                .fromTo('.irys', {y:300},{y:-220}, 0)

        mm.add("(min-width: 768px)", () => {

            gsap.globalTimeline.play();
                return () => { // make sure to clean up event listeners in the cleanup function!
                    gsap.matchMediaRefresh();
                  }
        });

        mm.add("(max-width: 767px", () => {
            // mobile setup code here...
            gsap.globalTimeline.pause();
            // kill gsap
            // gsap.set('.mainscroll', {position:'fixed', background:'#fff', width:'100%', height:'100%', top:0, left:'50%', x:'-50%'})
            // gsap.set('.scrollDist', {width:'100%', height:'200%'})
            // gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:5}})
                // .fromTo('.aqua', {x:100},{x:140}, 0)
                return () => { // make sure to clean up event listeners in the cleanup function!
                    gsap.matchMediaRefresh();
                  }
        });

      
       
        // gsap animation https://codepen.io/creativeocean/pen/qBbBLyB
        
    }, []);

    return (
     <div id="viewport" className="h-full md:h-[1200px]">
                <div className="scrollDist"></div>
                <div className="mainscroll">

                {/* 
                    viewBox : 1200 x 800 -> 400 for 1 page
                    preserveAspectRatio for RWD 

                */}
                <svg height="100%" width="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="bg-black" >
                    <mask id="m">


                        <g className="mask">
                            <rect fill="#fff" width="100%" height="801" y="799" />
                            <image className="cloudmask hidden md:block" href="images/20mask.jpg" xlinkHref="images/20mask.jpg" width="1200" height="800" />
                        </g>
                        </mask>
                        <rect fill="#000" width="100%" height="801" y="799" />

                        <image className="aqua" href="images/aqua_smaller.png" xlinkHref="images/aqua_smaller.png"  width="1450" />
                        <text className="HomeTitle text-7xl md:text-8xl lg:text-[99px] text-center" fill="#fff" x="50%" y={textY}>NTHUGDC</text>
                        <text className="HomeTitle text-2xl md:text-3xl lg:text-4xl text-center" fill="#fff" x="50%" y={textY + 60}>清大遊創社</text>
                 
                        <g mask="url(#m)">
                        
                            <rect fill="#fff" width="100%" height="100%" />     
                                <image className="irys " href="images/16.jpg" xlinkHref="images/16.jpg" width="1300"  /> 
                                <a href="https://discord.gg/pw5kc5jWFa" target="_blank" rel="noreferrer">
                                    <text className="HomeTitle text-7xl md:text-8xl lg:text-[99px] text-center"  x="50%" y={textY} fill="#fff" href="https://discord.gg/pw5kc5jWFa">JOIN US ♥</text>
                                </a>
                                
                            
                        </g>
                    
                </svg>
            </div>
            </div>
    );
}