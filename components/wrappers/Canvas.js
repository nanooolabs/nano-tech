import React from "react";
import { HeroVariant01, HeroVariant02 } from "../blocks/hero";

const Canvas = ({ data }) => {
  const { _type } = data;
  return (
    <>
      {_type == "HeroVariant01" ? (
        <HeroVariant01 data={data} />
      ) : _type == "HeroVariant02" ? (
        <HeroVariant02 data={data} />
      ) : (
        <pre>Invalid component selected</pre>
      )}
    </>
  );
};

export default Canvas;
