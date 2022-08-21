import { SanityDocument } from "@sanity/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import {Card, Button} from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source : SanityImageSource) {
  return builder.image(source);
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState<any>(null);

  // preview content function
  const previewContent = (body: any) => {
    let content = body[0].children[0].text;
    for(let i = 1; i < body.length; i++) {
      
      if(body[i].children){
        if(body[i].children[0].text){

          let newContent = content + body[i].children[0].text;
          if(newContent.length > 150){
            break;
          }else{
            content = newContent;
          }
        }
        
      }
      
    }
    return content;
  
  }


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
            "name": author->name,
            "authorImage": author->image,
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
    <div className="py-6 grid h-screen place-items-center ">

      {/* 
          Note:
          Use flex-col + md:flex-row to apply the flex-row utility at only medium screen sizes and above. 
          https://tailwindcss.com/docs/responsive-design

          Design from :
          https://jamstackthemes.dev/demo/theme/hugo-atlantic/

      flex flex-col md:flex-row w-9/12 place-content-center  max-w-3xl
      */}
     
        {allPostsData &&
          allPostsData.map((post : SanityDocument, index : number) => (
            
                <Link className="flex flex-col md:flex-row w-full lg:w-10/12 border-stone-100 my-3"  to={"/articles/" + post.slug.current} key={post.slug.current}>



                    <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12"> {/*  Left Part */}
                              <img className="w-{640} h-{360} object-cover rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" src={post.mainImage ? post.mainImage.asset.url : ""} 
                
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null; // prevents looping
                                  currentTarget.src="https://i.imgur.com/PINChNm.png";
                                }}
                                
                                
                                
                                alt="https://i.imgur.com/PINChNm.png" />

                    </div>

                    <div className="preview flex-1 "> {/*  Right Part */}
                                
                                  
                                <div> {/*  Title */}
                                  <h2 className="text-2xl font-bold my-1 ">{post.title}</h2>
                                </div>
                                <div className="place-self-end flex item-center place-items-center w-9  my-2 "> {/*  Author */}

                                  <img className="border-white border-2 rounded-full object-cover mr-2 "
                                      src={post.authorImage ? urlFor(post.authorImage).width(100).url() : ""}
                                      alt=""
                                      onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src="https://i.imgur.com/PINChNm.png";
                                      }}

                                    />
                                    
                                    <h5 className="font-semibold">{post.name}</h5>
                                  </div>


                                <div> {/*  Content Preview */}
                                <p className="preview text-base font-light text-gray-600 mb-4 ">
                                  {previewContent(post.body)}
                                  
                                  </p>
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