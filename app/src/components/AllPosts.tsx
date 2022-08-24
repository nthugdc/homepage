import { SanityDocument } from "@sanity/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import {Card, Button} from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { isConstructorDeclaration } from "typescript";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source : SanityImageSource) {
  return builder.image(source);
}

interface AllPostsProps {
  category: string;
}


export default function AllPosts(props:AllPostsProps = {category: ""}) {

  const [allPostsData, setAllPosts] = useState<any>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [page, setPage] = useState<number>(0);
  const pagePerPost = 5;

  // preview content function
  const previewContent = (body: any) => {
    let content = body[0].children[0].text;
    for(let i = 1; i < body.length; i++) {
      
      if(body[i].children){
        if(body[i].children[0].text){

          let newContent = content + body[i].children[0].text;
          if(newContent.length > 500){
            break;
          }else{
            content = newContent.substring(0, 150);

          }
        }
        
      }
      
    }
    return content;
  
  };

  const prevPage = () => {
    if(page > 0){
      setPage(page-1);
    }
  };

  const nextPage = () =>{
    if((page+1) * pagePerPost < allPostsData.length){ // 1*5 9
      setPage(page+1);
    }
  }

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "article"]{...}`).then((data) => setAllPosts(data));

  }, []);

  useEffect(() => {
    
    //https://www.sanity.io/docs/query-cheat-sheet
    let categoryQuery = " in categories[]->title";
    if(props.category === ""){
      categoryQuery = "true";
    }
    console.log(props.category);
    console.log(props.category + categoryQuery);
    sanityClient
      .fetch(
         `*[_type == "article" && ${props.category + categoryQuery}][${(page*pagePerPost).toString() + "..." + (page*pagePerPost+pagePerPost).toString()}] | order(_createdAt desc){
            title,
            slug,
            author,
            body,
            _createdAt,
            categories[] -> {
              title,
              slug
            },
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
      .then((data) => setPageData(data))
      .catch(console.error);

      
  }, [page, props.category]);

  return (
    <div className="py-6 grid min-h-[800px] h-max justify-items-center items-start">

      {/* 
          Note:
          Use flex-col + md:flex-row to apply the flex-row utility at only medium screen sizes and above. 
          https://tailwindcss.com/docs/responsive-design

          Design from :
          https://jamstackthemes.dev/demo/theme/hugo-atlantic/

      flex flex-col md:flex-row w-9/12 place-content-center  max-w-3xl
      */}
     
        {pageData &&
          pageData.map((post : SanityDocument, index : number) => (
            
                <Link className="flex flex-col md:flex-row w-full  border-stone-100 my-3 "  to={"/articles/" + post.slug.current} key={post.slug.current}>

                    <div className="md:mr-4 mb-2 md:mb-0 md:w-4/12  h-full"> {/*  Left Part */}
                              <img className="object-cover h-56 border border-black  w-96 rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" src={post.mainImage ? post.mainImage.asset.url : ""} 
                
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null; // prevents looping
                                  currentTarget.src="https://i.imgur.com/PINChNm.png";
                                }}
                                
                                
                                
                                alt="https://i.imgur.com/PINChNm.png" />

                    </div>

                    <div className="preview flex-1 text-ellipsis  overflow-hidden"> {/*  Right Part */}
                                
                                  
                                <div> {/*  Title */}
                                  <h2 className="text-2xl font-bold my-1 ">{post.title}</h2>
                                  
                                </div>

                                <div className="place-self-end flex item-center place-items-center  my-2 "> {/*  Author */}

                                  <img className="border-white border-2 rounded-full object-cover mr-2 w-9 "
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
                                <p className="preview text-base font-light text-gray-600 mb-4">
                                  {previewContent(post.body)}
                                  
                                  </p>
                                </div>
                                        
                                
                    </div>
            
                </Link>



            
                
          ))}

          <div className="btn-group grid grid-cols-3 my-5"> {/*  Pagination */}
            <button className="btn btn-outline" onClick={prevPage}>Prev</button>
            <button className="btn btn-outline">{page + 1}</button>
            <button className="btn btn-outline" onClick={nextPage}>Next</button>
          </div>
    </div>
  );
}
