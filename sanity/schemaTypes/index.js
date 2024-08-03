import Page from "@/sanity/schemaTypes/documents/Page";
import { HeroVariant01, HeroVariant02 } from "@/sanity/schemaTypes/blocks/Hero";

const documents = [Page];
const blocks = [HeroVariant01, HeroVariant02];

const schemaTypes = [...documents, ...blocks];

export default schemaTypes;
