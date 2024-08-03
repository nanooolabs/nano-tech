import PageBuilder from "@/components/wrappers/PageBuilder";
import { getMetaData } from "@/lib/seo";
import { getPage } from "@/sanity/utils/Queries";

export default async function Page({ params }) {
  const data = await getPage(params.slug);
  return (
    <>
      {data?.page_builder?.map((elem) => {
        return <PageBuilder key={elem._key} data={elem} />;
      })}
    </>
  );
}

export const generateMetadata = async ({ params }) => {
  const data = await getPage(params.slug);
  return getMetaData(data);
};
