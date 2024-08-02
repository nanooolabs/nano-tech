import { getPage, getPages } from "@/sanity/utils/Queries";

export default async function Home() {
  const pages = await getPages();
  return (
    <div className="container">
      {pages.map((page) => {
        return (
          <div key={page._id}>
            <h1>{page.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
