import React from "react";
import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const Heading = ({ children, className, tag }) => {
  const HeadingTag = tag ? stegaClean(tag) : `h2`;
  return (
    <>
      <HeadingTag className={`c__heading ${className}`}>
        {parse(children)}
      </HeadingTag>
    </>
  );
};

export default Heading;
