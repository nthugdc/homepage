import React from "react";


interface AnimatedText {
    title: string;
}


export default function AnimatedText(props:AnimatedText){
    // props: title


    return (

            <p className="anip ">
                
                <span className="anispan text-7xl md:text-[90px] lg:text-[100px] xl:text-[130px]">
                    {props.title}
                </span>
                &mdash; NTHUGDC &mdash;
            </p>


       
    );
}