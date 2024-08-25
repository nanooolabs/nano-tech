export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const getTotalNumberOfPaginatedPages = (
  totalNumberOfPosts,
  paginatedItemsPerPage
) => totalNumberOfPosts / paginatedItemsPerPage;

export const isLastPaginatedPage = (totalNumberOfPaginatedPages, activePage) =>
  totalNumberOfPaginatedPages === activePage;
