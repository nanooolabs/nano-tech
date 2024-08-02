import { getPage } from "@/sanity/sanity-utils";

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  );
}
