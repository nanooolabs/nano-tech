import Page from "@/sanity/schemaTypes/documents/Page";
import Post from "@/sanity/schemaTypes/documents/Post";
import PostCategory from "@/sanity/schemaTypes/documents/PostCategory";
import pageBuilderBlocks from "./blocks";

const documents = [Page, Post, PostCategory];
const blocks = [...pageBuilderBlocks];

const schemaTypes = [...documents, ...blocks];

export default schemaTypes;
