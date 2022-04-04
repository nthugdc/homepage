import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "@sanity/client";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source : SanityImageSource) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState<SanityDocument | null>(null);
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
    <div>
      <div>
        <h2>{postData.title}</h2>
        <div>
          <img
            src={postData.authorImage ? urlFor(postData.authorImage).width(100).url() : ""}
            alt="Author is Kap"
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