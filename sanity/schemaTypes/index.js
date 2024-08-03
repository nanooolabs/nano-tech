import Page from "@/sanity/schemaTypes/documents/Page";
import pageBuilderBlocks from "./blocks";

const documents = [Page];
const blocks = [...pageBuilderBlocks];

const schemaTypes = [...documents, ...blocks];

export default schemaTypes;
