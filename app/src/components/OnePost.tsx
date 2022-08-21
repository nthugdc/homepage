import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source : SanityImageSource) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         author,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className = "container mx-auto px-6 md:px-6 lg:px-32 xl:px-48 bg-white">
      <div className = "py-6 grid h-screen place-items-center">
        <h1 className="">{postData.title}</h1>
        <div>
          <img
            src={postData.authorImage ? urlFor(postData.authorImage).width(100).url() : ""}
            alt="Author Unknown"
          />
          <h4>{postData.name}</h4>
        </div>
      </div>
      <img src={postData.mainImage ? urlFor(postData.mainImage).width(200).url() : ""} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}