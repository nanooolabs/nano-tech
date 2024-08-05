import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/clientConfig";
import { dev } from "./helpers";

export async function getPageBySlug(slug) {
  const preview = dev || draftMode().isEnabled;
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
    { slug },
    preview
      ? {
          stega: true,
          perspective: "previewDrafts",
          useCdn: false,
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
          next: {
            revalidate: 0,
          },
        }
      : {
          perspective: "published",
          useCdn: true,
          next: {
            revalidate: 3600, // every hour
          },
        }
  );
}
