export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BASE_URL;
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nqj5p7gd";

export const organization = "Mosibello";

export const paginatedItemsPerPage = 3;

export const generateBlogHeroData = (activePage) => {
  return {
    heading: activePage
      ? `Resource Library - Page ${activePage}`
      : `Resource Library`,
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
};

export const generateBlogMetaData = (activePage) => {
  return {
    _id: null,
    _type: `Blog`,
    meta_title: activePage
      ? `Latest Posts | Page ${activePage} | Mosibello`
      : `Latest Posts | Mosibello`,
    slug: `blog`,
    meta_description: `Your single source for expert insights within the digital space`,
    featured_image: null,
    seo_no_index: false,
  };
};
