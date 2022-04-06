import React from "react";
import sanityClient from "../../client";
import heroImage from "./heroUnit.png";
import HeroUnit from "./HeroUnit";

export default function Home() {
    return (
        <div>
            <HeroUnit imgSrc={heroImage}></HeroUnit>
            <div className={"container text-center"}>Under construction...</div>
            
            {/* <article className="prose lg:prose-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula ut mi ultricies sodales. Morbi blandit pharetra interdum. Aliquam sollicitudin a lacus quis fringilla. Proin vel consequat ante, nec dictum lacus. Morbi suscipit augue sed blandit faucibus. Pellentesque sit amet erat ut nibh venenatis fringilla quis at sem. Nam et lacinia nunc. Curabitur molestie nulla orci, ac egestas nunc viverra quis. Nam sed aliquam quam, eget finibus diam. Nullam felis odio, porta a auctor ac, aliquam pretium nulla. Vivamus commodo mauris purus, vel vestibulum erat placerat et.

                Phasellus ultrices auctor nibh id suscipit. Curabitur tincidunt sapien nec felis eleifend, quis efficitur leo dictum. Sed tincidunt lacinia risus, vel ullamcorper mauris pretium vel. Sed luctus, nunc vulputate tincidunt ornare, dui orci molestie enim, quis dignissim nisl ex dictum velit. Donec accumsan pellentesque eros. Pellentesque tempus lacus ac orci feugiat malesuada. Quisque sit amet tempus mauris. Sed consequat vitae enim at vulputate. Ut et imperdiet velit.

                Integer id malesuada ligula, nec rutrum elit. Vestibulum aliquam erat quis orci sagittis fermentum. Nunc malesuada dictum lorem a rhoncus. Donec luctus turpis id lacus sagittis, ut venenatis velit sollicitudin. Suspendisse consectetur porttitor lorem in scelerisque. Aliquam laoreet egestas neque. Curabitur imperdiet aliquet facilisis. Sed dictum euismod eros, in blandit tellus interdum in. Vestibulum commodo justo in ipsum efficitur porttitor vitae et eros. Aenean commodo odio et magna dapibus molestie. Vivamus ut commodo sem, non tempor elit. Cras fringilla cursus eros in auctor. Praesent pulvinar tortor sed sollicitudin sollicitudin. Duis blandit aliquet tincidunt. Quisque sit amet luctus metus.

                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tellus nulla, tristique sit amet aliquet sed, ultrices id enim. Duis est neque, consectetur ac iaculis ut, tristique eleifend nisi. Nam pulvinar lacinia tempor. Phasellus luctus facilisis lacus a tempor. Suspendisse nec odio congue ipsum condimentum luctus. Integer dictum eleifend massa sed lacinia.

                Aliquam a est lacus. Ut semper ipsum tempor, pharetra est eget, luctus ante. Nunc tincidunt ac elit blandit vulputate. Phasellus ut ligula mi. Aliquam at dolor tincidunt, dignissim felis a, dapibus mi. Proin quis ornare ipsum. Sed vitae laoreet purus. Cras lobortis elit at massa molestie, nec venenatis tellus rutrum. Vivamus finibus justo et scelerisque facilisis. Fusce erat ex, dignissim sit amet vulputate id, ultrices posuere elit. Etiam sagittis diam quis finibus euismod. Integer consectetur neque vel nunc dignissim, in ultricies ex sagittis. Donec dignissim at mi et porttitor. Morbi luctus et ex at ultricies.
            </article> */}
        </div>
    );
}