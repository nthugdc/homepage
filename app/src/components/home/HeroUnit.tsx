import React, { PropsWithoutRef } from "react";
// class HeroUnitProps implements PropsWithoutRef<HeroUnitProps> {
//     public imgSrc : string = "";
// }
export default function HeroUnit() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-gradient-to-b from-white to-transparent">
            

            <img className="h-1/3" src="images/6.gif" alt="logo">
            </img>
            <article className="prose lg:prose-xl">
                <h1 className="text-center text-white">歡迎來到清大遊創社！TODO</h1>

            </article>
        </div>
    );
}