import React from "react";
import * as AllHeroes from "../blocks/hero";
import * as AllFeatures from "../blocks/feature";

const categories = {
  hero: AllHeroes,
  feature: AllFeatures,
};

const BlockNotFound = ({ _type }) => {
  return (
    <div className="grid place-items-center">Block Not Found : {_type}</div>
  );
};

const PageBuilder = ({ data }) => {
  const { _type, block_category } = data;
  const Comp = categories[block_category][_type] ?? BlockNotFound(_type);
  return (
    <>
      <Comp data={data} />
    </>
  );
};

export default PageBuilder;
