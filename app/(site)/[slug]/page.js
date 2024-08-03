import Canvas from "@/components/wrappers/Canvas";
import { getPage } from "@/sanity/utils/Queries";

export default async function Page({ params }) {
  const data = await getPage(params.slug);
  return (
    <>
      {data?.page_builder?.map((elem) => {
        return <Canvas data={elem} />;
      })}
    </>
  );
}
