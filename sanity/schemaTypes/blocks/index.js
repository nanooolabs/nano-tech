import * as AllHeroes from "./hero";
import * as AllFeatures from "./feature";

const heroBlocks = [...Object.values(AllHeroes)];
const FeatureBlocks = [...Object.values(AllFeatures)];
const pageBuilderBlocks = [...heroBlocks, ...FeatureBlocks];

export default pageBuilderBlocks;
