import Page from "@/sanity/schemaTypes/documents/Page";
import Post from "@/sanity/schemaTypes/documents/Post";
import pageBuilderBlocks from "./blocks";

const documents = [Page, Post];
const blocks = [...pageBuilderBlocks];

const schemaTypes = [...documents, ...blocks];

export default schemaTypes;
