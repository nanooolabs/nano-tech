import TemplateArchiveVariant01 from "@/components/templates/archive/TemplateArchiveVariant01";
import { paginatedItemsPerPage } from "@/lib/constants";
import {
  getTotalNumberOfPaginatedPages,
  isLastPaginatedPage,
} from "@/lib/helpers";
import { getMetaData } from "@/lib/seo";
import { getPosts, getPostsCount } from "@/sanity/utils/queries";
import { notFound } from "next/navigation";
import { generateBlogHeroData, generateBlogMetaData } from "@/lib/constants";

const totalNumberOfPosts = await getPostsCount();
const totalNumberOfPaginatedPages = getTotalNumberOfPaginatedPages(
  totalNumberOfPosts,
  paginatedItemsPerPage
);
const lastPaginatedPage = isLastPaginatedPage(totalNumberOfPaginatedPages, 1);

export default async function BlogArchive() {
  const data = await getPosts(0, paginatedItemsPerPage);
  if (!data) {
    return notFound();
  }
  const heroData = generateBlogHeroData();

  return (
    <TemplateArchiveVariant01
      heroData={heroData}
      bodyData={data}
      nextPageDestination={lastPaginatedPage ? null : `/blog/page/2`}
    />
  );
}

export const generateMetadata = async () => {
  const staticMetaData = generateBlogMetaData();
  const data = await getPosts(0, paginatedItemsPerPage);

  if (!data) return {};
  return getMetaData(
    staticMetaData,
    `blog`,
    null,
    lastPaginatedPage ? null : `blog/page/2`
  );
};
