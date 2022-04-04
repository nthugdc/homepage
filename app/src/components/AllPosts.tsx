import { SanityDocument } from "@sanity/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState<SanityDocument | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post : SanityDocument, index : number) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage ? post.mainImage.asset.url : ""} alt="" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}