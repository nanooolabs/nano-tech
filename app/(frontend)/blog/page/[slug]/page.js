import TemplateArchiveVariant01 from "@/components/templates/archive/TemplateArchiveVariant01";
import PostVariant01 from "@/components/templates/post/PostVariant01";
import { paginatedItemsPerPage } from "@/lib/constants";
import { getMetaData } from "@/lib/seo";
import { getPosts } from "@/sanity/utils/queries";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

export default async function BlogArchive({ params }) {
  const { slug } = params;
  if (isNaN(parseFloat(slug))) {
    return notFound();
  }
  if (slug === `1`) {
    redirect(`/blog`);
  }
  const heroData = {
    heading: `Resource Library - Page ${slug}`,
    heading_tag: `h1`,
    heading_size: `h1`,
    description_size: `subtitle`,
    background_theme: `secondary`,
    scoped_css: {
      code: `padding: 32px 0;`,
    },
    description:
      "Your single source for expert insights within the digital space.",
  };

  const start = slug * paginatedItemsPerPage - paginatedItemsPerPage;
  const end = slug * paginatedItemsPerPage;

  const data = await getPosts(start, end);
  if (!data || data.length === 0) {
    return notFound();
  }

  return <TemplateArchiveVariant01 heroData={heroData} bodyData={data} />;
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  if (isNaN(parseFloat(slug))) {
    return {};
  }
  const start = slug * paginatedItemsPerPage - paginatedItemsPerPage;
  const end = slug * paginatedItemsPerPage;

  const staticMetaData = {
    _id: null,
    _type: `Blog`,
    meta_title: `Latest Posts | Page ${slug} | Mosibello`,
    slug: `blog`,
    meta_description: `Your single source for expert insights within the digital space`,
    featured_image: null,
    seo_no_index: false,
  };
  const data = await getPosts(start, end);
  if (!data || data.length === 0) {
    return {};
  }
  return getMetaData(
    staticMetaData,
    `blog/page/${slug}`,
    `${slug == "2" ? `blog` : `blog/page/${parseFloat(slug) - 1}`}`,
    `blog/page/${parseFloat(slug) + 1}`
  );
};
