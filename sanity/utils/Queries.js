import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/clientConfig";

export async function getPageBySlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
        ...,
        page_builder[] {
          ...,
          repeater[] {
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
