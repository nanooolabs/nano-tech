import Page from "@/sanity/schemaTypes/documents/Page";
import Post from "@/sanity/schemaTypes/documents/Post";
import PostCategory from "@/sanity/schemaTypes/documents/PostCategory";
import pageBuilderBlocks from "./blocks";
import Form from "@/sanity/schemaTypes/documents/Form";
import Navigation from "./documents/Navigation";

const documents = [Page, Post, PostCategory, Form, Navigation];
const blocks = [...pageBuilderBlocks];

const schemaTypes = [...documents, ...blocks];

export default schemaTypes;
