import { getPage } from "@/sanity/utils/Queries";

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  );
}
