import React from "react";


interface AnimatedTextProps {
    title: string;
}


export default function AnimatedText(props:AnimatedTextProps){
    // props: title


    return (

            <p className="anip py-24">
                
                <span className="anispan text-7xl md:text-[90px] lg:text-[100px] xl:text-[130px]">
                    {props.title}
                </span>
                &mdash; NTHUGDC &mdash;
            </p>


       
    );
}