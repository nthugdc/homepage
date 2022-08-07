import { SanityDocument } from "@sanity/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import {Card, Button} from "react-bootstrap";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "article"]{...}`)
    .then((data) => console.log(data))
 

    sanityClient
      .fetch(
         `*[_type == "article"]{
            title,
            slug,
            author,
            body,
            mainImage{
                asset->{
                _id,
                url
                }
            }
        }`
        // `*[_type == "article"]{
        //     title,
        //     slug,
            
        //     mainImage{
        //         asset->{
        //         _id,
        //         url
        //         }
        //     }
        // }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="py-6 justify-center">

      {/* 
          Note:
          Use flex-col + md:flex-row to apply the flex-row utility at only medium screen sizes and above. 
          https://tailwindcss.com/docs/responsive-design


      flex flex-col md:flex-row w-9/12 place-content-center  max-w-3xl
      */}
     
        {allPostsData &&
          allPostsData.map((post : SanityDocument, index : number) => (
            <div className="mb-12" key={index}>
                <Link className="flex flex-col md:flex-row w-full lg:w-10/12 border-stone-100" to={"/articles/" + post.slug.current} key={post.slug.current}>



                    <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12"> {/*  Left Part */}
                              <img className="w-{640} h-{360} rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" src={post.mainImage ? post.mainImage.asset.url : ""} 
                
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null; // prevents looping
                                  currentTarget.src="https://i.imgur.com/PINChNm.png";
                                }}
                                
                                
                                
                                alt="https://i.imgur.com/PINChNm.png" />

                    </div>

                    <div className="flex-1"> {/*  Right Part */}
                                <div> {/*  Author */}

                                </div>

                                <div> {/*  Title */}
                                  <h2 className="text-2xl font-semibold mb-1">Writing With Markdown</h2>
                                </div>
                                <div> {/*  Content Preview */}
                                <p className="text-base font-light text-gray-600 mb-4">Learn how to use Markdown to write blog posts. Understand front-matter and how it is used in templates.</p>
                                </div>
                                <div> {/*  Tags */}
                                </div>
                    </div>
            
           
                {/* <figure><img className="flex flex-col " src={post.mainImage ? post.mainImage.asset.url : ""} 
                
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null; // prevents looping
                                  currentTarget.src="https://i.imgur.com/PINChNm.png";
                                }}
                                
                                
                                
                                alt="https://i.imgur.com/PINChNm.png" /></figure> */}
                </Link>
            </div>




//                 <Link className="mb-12 rounded-md border-red-600" to={"/articles/" + post.slug.current} key={post.slug.current}>

// {/* object-cover max-w-[400px] h-[300px] */}
//                 <figure><img className="flex flex-col " src={post.mainImage ? post.mainImage.asset.url : ""} 
                
//                 onError={({ currentTarget }) => {
//                   currentTarget.onerror = null; // prevents looping
//                   currentTarget.src="https://i.imgur.com/PINChNm.png";
//                 }}
                
                
                
//                 alt="https://i.imgur.com/PINChNm.png" /></figure>
//                 <div className="card-body">
//                   <h2 className="card-title">{post.title}</h2>
//                   <p>If a dog chews shoes whose shoes does he choose?</p>
                  
//                 </div>
                              
                
                
                
//               </Link>
            
                
          ))}
    </div>
  );
}


/*                 
                <span key={index}>
                  <img src={post.mainImage ? post.mainImage.asset.url : ""} alt="" />
                  <span>
                    <h2>{post.title}</h2>
                  </span>
                </span> */