import TemplateArchiveVariant01 from "@/components/templates/archive/TemplateArchiveVariant01";
import { organization } from "@/lib/constants";
import { getMetaData } from "@/lib/seo";
import { getPostsByCategory, getCategoryBySlug } from "@/sanity/utils/queries";
import { notFound } from "next/navigation";
import { generateBlogHeroData, generateBlogMetaData } from "@/lib/constants";

export default async function BlogCategoryArchive({ params }) {
  const { slug } = params;
  const data = await getPostsByCategory(0, 1000, slug);
  const category = await getCategoryBySlug(slug);
  if (!data || !data.length || !category) {
    return notFound();
  }
  const heroData = generateBlogHeroData(`Posts in ${category.title}`, null);
  return (
    <TemplateArchiveVariant01
      heroData={heroData}
      bodyData={data}
      nextPageDestination={null}
    />
  );
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const data = await getPostsByCategory(0, 1000, slug);
  const category = await getCategoryBySlug(slug);
  if (!data || !data.length || !category) return {};
  const staticMetaData = generateBlogMetaData(
    `Posts tagged in ${category.title} | ${organization}`
  );

  return getMetaData(staticMetaData, `blog/category/${slug}`, null, null);
};
