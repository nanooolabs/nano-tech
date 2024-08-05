// import { baseUrl, ogImageDimensions, webConfig } from "~/config";

import { baseUrl, organization } from "./constants";

import urlFor from "@/lib/imageUrlBuilder";

export const ogImageDimensions = {
  width: 1200,
  height: 630,
};

export const getPageBySlugUrl = (slug) => `${baseUrl}/${slug ?? ""}`;

const getOgImage = (options) => {
  const { title, type, id } = options ?? {};

  const params = new URLSearchParams({});
  if (id) params.set("id", id);
  if (title) params.set("title", title);
  if (type) params.set("type", type);

  return "api/og?" + params.toString();
};

export const getMetaData = (data) => {
  const {
    _id,
    _type,
    meta_title,
    slug,
    meta_description,
    featured_image,
    seo_no_index,
  } = data;

  const meta = {
    seoTitle: meta_title ?? "",
    seoDescription: meta_description ?? "",
  };

  const ogImage = getOgImage({
    title: meta.seoTitle,
    type: _type,
    id: _id,
  });

  const metadata = {
    title: meta.seoTitle,
    description: meta.seoDescription,
    alternates: {
      canonical:
        slug?.current === "index"
          ? `${baseUrl}/`
          : getPageBySlugUrl(slug?.current),
    },
    creator: organization,
    // authors: {
    //   name: "Mosibello",
    // },
    robots: {
      index: seo_no_index && false,
      follow: seo_no_index && false,
      googleBot: {
        index: seo_no_index && false,
        follow: seo_no_index && false,
      },
    },
    openGraph: {
      type: "website",
      countryName: "USA",
      description: meta.seoDescription,
      title: meta.seoTitle,
      images: [
        {
          url: urlFor(featured_image).url() ?? ogImage,
          width: ogImageDimensions.width,
          height: ogImageDimensions.height,
          alt: meta.seoTitle,
          secureUrl:
            urlFor(featured_image).url() ?? getPageBySlugUrl(`/${ogImage}`),
        },
      ],
      url: getPageBySlugUrl(slug?.current),
    },
  };

  return metadata;
};
