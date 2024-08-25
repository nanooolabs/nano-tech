import TemplateArchiveVariant01 from "@/components/templates/archive/TemplateArchiveVariant01";
import PostVariant01 from "@/components/templates/post/PostVariant01";
import { paginatedItemsPerPage } from "@/lib/constants";
import { getMetaData } from "@/lib/seo";
import { getPosts } from "@/sanity/utils/queries";
import { notFound } from "next/navigation";

const heroData = {
  heading: "Resource Library",
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

export default async function BlogArchive() {
  const data = await getPosts(0, paginatedItemsPerPage);
  if (!data) {
    return notFound();
  }

  return <TemplateArchiveVariant01 heroData={heroData} bodyData={data} />;
}

export const generateMetadata = async () => {
  const staticMetaData = {
    _id: null,
    _type: `Blog`,
    meta_title: `Latest Posts | Mosibello`,
    slug: `blog`,
    meta_description: `Your single source for expert insights within the digital space`,
    featured_image: null,
    seo_no_index: false,
  };
  const data = await getPosts(0, paginatedItemsPerPage);
  if (!data) return {};
  return getMetaData(staticMetaData, `blog`, null, `blog/page/2`);
};
