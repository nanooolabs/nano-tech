import { groq } from "next-sanity";
import { fetchSanity } from "./fetch";
import { QUERY_omitDrafts } from "./constants";

export async function getPageBySlug(slug) {
  return fetchSanity(
    groq`*[_type == "page" && ${QUERY_omitDrafts} && slug.current == $slug][0]{
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
    groq`*[_type == "post" && ${QUERY_omitDrafts} && slug.current == $slug][0]{
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

export async function getPosts(start, end) {
  return fetchSanity(
    groq`*[_type == "post" && ${QUERY_omitDrafts}] | order(publish_date desc)[${start}...${end}] {
      ...,
      featured_image {
        ... {
          asset->
        }
      },
      "excerpt": array::join(string::split((pt::text(content)), "")[0..100], "") + "..."
    }`,
    { start, end },
    { tags: ["post"] }
  );
}

export async function getPostsCount() {
  return fetchSanity(groq`count(*[_type == "post" && ${QUERY_omitDrafts}])`);
}
