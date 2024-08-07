import * as AllHeroes from "./hero";
import * as AllFeatures from "./feature";
import * as AllContents from "./content";
import * as AllFaqs from "./faq";

const heroBlocks = [...Object.values(AllHeroes)];
const featureBlocks = [...Object.values(AllFeatures)];
const contentBlocks = [...Object.values(AllContents)];
const faqBlocks = [...Object.values(AllFaqs)];
const pageBuilderBlocks = [
  ...heroBlocks,
  ...featureBlocks,
  ...contentBlocks,
  ...faqBlocks,
];

export default pageBuilderBlocks;
