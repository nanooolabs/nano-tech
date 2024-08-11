import React from "react";
import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const Heading = ({ children, className, tag = `h2` }) => {
  const HeadingTag = stegaClean(tag);
  return (
    <>
      <HeadingTag className={`c__heading ${className}`}>
        {parse(children)}
      </HeadingTag>
    </>
  );
};

export default Heading;
