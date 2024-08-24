import { groq } from "next-sanity";
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
    { slug },
    { tags: ["page"] }
  );
}

export async function getPostBySlug(slug) {
  return fetchSanity(
    groq`*[_type == "post" && slug.current == $slug][0]{
      ...,
      content[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      featured_image {
        ... {
          asset->
        }
      }
    }`,
    { slug },
    { tags: ["post"] }
  );
}
