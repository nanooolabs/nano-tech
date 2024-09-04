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
      S.divider(),
      // Our singleton type has a list item with a custom child
      S.listItem().title("Settings").id("settings").child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType("settings").documentId("settings")
      ),
      //   S.documentTypeListItems(),
    ]);
