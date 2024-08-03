import { HeroVariant01, HeroVariant02 } from "./Hero";

import { FeatureVariant01 } from "./Feature";

const heroBlocks = [HeroVariant01, HeroVariant02];
const FeatureBlocks = [FeatureVariant01];

const pageBuilderBlocks = [...heroBlocks, ...FeatureBlocks];

export default pageBuilderBlocks;
