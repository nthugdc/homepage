import React from "react";
import sanityClient from "../../client";
import heroImage from "./heroUnit.png";
import HeroUnit from "./HeroUnit";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
// home.css
import "./home.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default function HomePage() {


    // Safari fix 
    // https://stackoverflow.com/questions/27245673/svg-image-element-not-displaying-in-safari

    // "SyntaxError: unknown: Namespace tags (xmlns:xlink)" in React
    // https://stackoverflow.com/a/61167146/10242733

    let pathStyle = {"stroke":"none","fill":"#000"};//        
   
    // y length variables

    useEffect(() => {




        let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        gsap.set('.mainscroll', {position:'fixed', background:'#fff', width:'100%', height:'100%', top:0, left:'50%', x:'-50%'})
        gsap.set('.scrollDist', {width:'100%', height:'100%'})
        gsap.timeline({stagger: 0.5,scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:5}})
        .fromTo('.aqua', {x:110},{x:200}, 0)
        .fromTo('.aqua', {y:120},{y:-250}, 0)
        .fromTo('.mask', {y:400},{y:-800}, 0)
        .fromTo('.irys', {x:-100},{x:0}, 0)
        .fromTo('.irys', {y:300},{y:-220}, 0)
        // if(isSafari){
            

        //     gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:5}})
        //     .fromTo('.aqua', {x:120},{x:120}, 0)
        //     .fromTo('.aqua', {y:120},{y:120}, 0)
        //     .fromTo('.cloudmask', {y:345},{y:345}, 0)
        //     .fromTo('.mask', {y:100},{y:100}, 0)
        //     .fromTo('.irys', {x:0},{x:0}, 0)
        //     .fromTo('.irys', {y:300},{y:300}, 0)
        //     // gsap.globalTimeline.pause();
        // }

        // let mm = gsap.matchMedia();
        

        // mm.add("(min-width: 768px)", () => {

        //     gsap.globalTimeline.play();
        //         return () => { // make sure to clean up event listeners in the cleanup function!
        //             gsap.matchMediaRefresh();
        //           }
        // });

        // mm.add("(max-width: 767px", () => {
        //     // mobile setup code here...
        //     gsap.globalTimeline.pause();
        //     // kill gsap
        //     // gsap.set('.mainscroll', {position:'fixed', background:'#fff', width:'100%', height:'100%', top:0, left:'50%', x:'-50%'})
        //     // gsap.set('.scrollDist', {width:'100%', height:'200%'})
        //     // gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:5}})
        //         // .fromTo('.aqua', {x:100},{x:140}, 0)
        //         return () => { // make sure to clean up event listeners in the cleanup function!
        //             gsap.matchMediaRefresh();
        //           }
        // });

      
       
        // gsap animation https://codepen.io/creativeocean/pen/qBbBLyB
        
    }, []);

    return (
     <div id="viewport" className="h-[1200px]">
                <div className="scrollDist"></div>
                <div className="mainscroll">
                <svg height="100%" width="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="bg-black" >
                  
                        <clipPath id="m" className="mask">
                            <rect fill="#000" width="100%" height="1201" y="799" />
                             <path style={pathStyle} d="M648.7383 420.3242c-3.1992 2.004-7.2031 2.8047-9.004 1.6016-1.8046-1-3.203 1.8047-3.203 6.207 0 9.414 6.4023 14.6211 9.4062 7.4102 1.2031-3.2032 2.004-2.4024 2.2031 1.8047.1992 4.4023-2.4023 6.4062-7.6054 6.207-4.4063-.4024-8.0079-2.8047-8.0079-5.6094 0-6.8086-16.414-11.414-20.0156-5.4062-1.6015 2.6054-4.4062 4.0078-6.0078 3.4062-1.8008-.8008-5.2031 4.4063-7.6055 11.414-4.8047 13.6173-12.4101 24.2305-8.207 11.0118 2.2031-6.8086 1.4023-6.8086-5.6055 1.4023-4.6015 5.0079-7.203 11.8164-6.0039 15.0196 1.1993 3.203.1993 5.8086-2.4023 5.8086s-3.6016-1.8047-2.2031-4.0079c1.4023-2.203.6015-4.0039-1.8008-4.0039-2.1992 0-4.2031 2.6016-4.2031 6.0079 0 3.203-1.8008 6.0078-4.004 6.0078-2.1992 0-4.0039-1.8008-4.0039-4.004 0-2.0038-5.203-2.8046-12.0078-1.4023-9.8086 2-12.4101.8008-15.6132-7.211-8.4063-21.625-54.2461-46.2577-69.0586-37.0468-3 1.8047-9.6055 4.0078-14.8125 4.6055-22.0157 3.0039-51.043 36.246-55.4454 63.2812-2.203 14.0156-6.4062 17.4219-11.4101 9.4102-3.2031-5.207-27.8203 17.4219-36.0274 32.8437-4.207 8.207-4.4062 11.6133-.6015 15.6172 3.8008 3.8047 3.6015 5.4063-.1992 6.8086-3.4063 1.4024-2.004 4.4063 4.6015 9.6133 11.0117 8.6094 24.8203 10.0117 27.8242 2.6016 1.4024-3.4024 2-3.004 2.2032 1.0039.5976 10.6132-15.414 33.039-21.8203 30.4375-3.2032-1.2032-5.8047 0-5.8047 2.4023 0 2.6016-4.2032.6016-9.207-4.207-5.2032-4.6055-10.8087-8.6094-12.4102-8.6094-6.004 0-18.2149-18.0234-18.2149-27.0352-.1992-12.8164-16.6132-21.625-43.2382-23.2265-14.211-1.004-31.4258-5.6094-44.836-12.0156-24.0195-11.6133-72.2617-11.6133-72.2617 0 0 3.0039-3.8008 6.207-8.4063 7.4101-9.6054 2.6016-28.4218-4.8086-25.2187-9.8125 1.1992-1.8047-1.4023-3.4062-5.4063-3.4062-4.203 0-8.8085-1.1993-10.4101-2.6016-1.3984-1.6016-8.2031-3.4063-15.0117-4.004-6.6055-.8046-16.211-4.207-20.8164-7.41-11.0078-7.6094-27.0235-7.6094-37.0313-.2032-4.4023 3.4063-12.8086 6.0078-18.8164 6.0078L0 524.6563V801h1201v-25.6328c0-32.2383-4.4023-36.4453-39.6328-36.6445-30.4258-.4024-36.4297 1-36.4297 8.4101 0 10.6133-18.418 7.6094-43.0352-7.211-13.6132-8.207-26.4218-15.0155-28.4257-15.0155-2 0-6.8047-4.6055-10.4063-10.4141-3.8047-5.6055-9.211-9.4102-12.211-8.211-2.8046 1.2032-8.4062-1.4023-12.2109-5.6054-3.8047-4.207-17.2148-9.6133-30.8242-12.418-13.0117-2.4023-25.4219-6.6055-27.4258-9.0117-23.2187-27.832-49.4414-44.254-60.6484-37.8438-4.004 2.1993-12.8125-.4023-25.621-7.2109-16.6134-8.8125-21.418-9.8125-34.0313-6.6094-23.2188 6.211-36.629-3.8047-32.625-24.2304 1.8007-8.4102 1.1992-11.0118-2.2032-9.0078-5.8047 3.6015-28.4218-18.2227-29.2226-28.2383-.4024-4.2032-1-9.211-1.6016-11.414-.4023-2.2032-1-7.8087-1.4023-12.215-.1993-4.6054-3.8008-12.0156-8.207-16.621-4.2032-4.6055-6.6055-9.6094-5.004-11.0118 1.4024-1.4023-.6015-1.4023-4.4023 0-4.6055 1.8008-6.8047.6016-6.8047-3.8046 0-3.6055 2.1992-6.4102 5.004-6.6094 2.8007 0 1.6015-2.6016-2.8048-5.8086-4.2031-3.2031-6.4062-7.0078-5.0039-8.6094 1.4024-1.4023 5.2031-.4023 8.207 2.004 4.4024 3.8046 5.2032 2.8007 3.6016-5.4063-1-5.4102-3.4023-9.0117-5.0039-8.0117-1.8008 1-5.4023-.8008-8.004-4.004-2.8046-3.4062-8.0077-6.0078-11.6093-6.0078-3.6055 0-10.6094-2.8046-15.6133-6.207-4.8047-3.4062-8.8086-4.8086-8.8086-3.0039 0 1.8008-2.6015-1.8047-5.8046-8.0117-3.2032-6.0078-4.8047-13.8164-3.6016-17.0195 5.6016-14.6211-32.629-25.4336-50.4453-14.0196Zm0 0"/>
                        </clipPath>  
                        
                        <image className="aqua" href="images/aqua_smaller.png"  width="1300" />
                        <text className="HomeTitle text-7xl md:text-8xl lg:text-[99px] text-center" fill="#fff" x="50%" y="400">NTHUGDC</text>
                        <text className="HomeTitle text-2xl md:text-3xl lg:text-4xl text-center" fill="#fff" x="50%" y="460">清大遊創社</text>
                 
                        <g clipPath="url(#m)">
                               
                                <image className="irys" href="images/16.jpg" width="1300"/> 
                                <a href="https://discord.gg/pw5kc5jWFa" target="_blank" rel="noreferrer">
                                    <text className="HomeTitle text-7xl md:text-8xl lg:text-[99px] text-center"  x="600" y="400" fill="#fff" href="https://discord.gg/pw5kc5jWFa">JOIN US ❤️</text>
                                </a>

                        </g>
                    
                </svg>
            </div>
            </div>
    );
}