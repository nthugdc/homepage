import React, { PropsWithoutRef } from "react";
class HeroUnitProps implements PropsWithoutRef<HeroUnitProps> {
    public imgSrc : string = "";
}
export default function HeroUnit(props : HeroUnitProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-[70vh] bg-gradient-to-b from-cyan-500 to-transparent">
            

            <img className="h-2/3" src={props.imgSrc}>
            </img>
            <article className="prose lg:prose-xl">
                <h1 className="text-center">歡迎來到清大遊創社！</h1>

            </article>
        </div>
    );
}