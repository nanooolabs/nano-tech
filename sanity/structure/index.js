import { StructureResolver } from "sanity/structure";
import { VscMultipleWindows, VscServerProcess } from "react-icons/vsc";
import { MdArticle } from "react-icons/md";

export const structure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.documentTypeListItem("page").title("Pages").icon(VscMultipleWindows),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("post_category").title("Post Categories"),
      S.divider(),
      S.documentTypeListItem("form").title("Forms"),
      S.documentTypeListItem("navigation").title("Navigation"),
      //   S.divider(),
      //   S.documentTypeListItems(),
    ]);
