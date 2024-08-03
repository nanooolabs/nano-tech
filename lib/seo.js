// import { baseUrl, ogImageDimensions, webConfig } from "~/config";

import urlFor from "@/lib/imageUrlBuilder";

const baseUrl = "http://localhost:3000/";

export const ogImageDimensions = {
  width: 1200,
  height: 630,
};

export const getPageUrl = (slug) => `${baseUrl}${slug ?? ""}`;

const getOgImage = (options) => {
  const { title, type, id } = options ?? {};

  const params = new URLSearchParams({});
  if (id) params.set("id", id);
  if (title) params.set("title", title);
  if (type) params.set("type", type);

  return "api/og?" + params.toString();
};

export const getMetaData = (data) => {
  const { _id, _type, meta_title, slug, meta_description, featured_image } =
    data;

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
      canonical: getPageUrl(slug?.current),
    },
    // creator: "Roboto Studio Demo",
    // authors: {
    //   name: "Roboto",
    // },
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
          secureUrl: urlFor(featured_image).url() ?? getPageUrl(`/${ogImage}`),
        },
      ],
      url: getPageUrl(slug?.current),
    },
  };

  return metadata;
};
