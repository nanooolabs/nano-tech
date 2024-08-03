import { createClient, groq } from "next-sanity";
import ClientConfig from "@/sanity/config/ClientConfig";

export async function getPages() {
  return createClient(ClientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
    }`
  );
}

export async function getPage(slug) {
  return createClient(ClientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
        ...,
        page_builder[] {
          ...,
          cards[] {
            ...,
            image {
              ... {
                asset->
              }
            },
          },
          image {
            ... {
              asset->
            }
          },
        }
    }`,
    { slug }
  );
}
