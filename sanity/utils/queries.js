import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/clientConfig";
import { dev } from "./helpers";
import { draftMode } from "next/headers";
import { fetchSanity } from "./fetch";

export async function getPageBySlug(slug) {
  return fetchSanity(
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
    // { tags: ["page"] }
  );
}
