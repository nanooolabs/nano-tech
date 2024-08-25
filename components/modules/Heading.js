import React from "react";
import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const Heading = ({ children, className = "u__h1", tag, disableParse }) => {
  const HeadingTag = tag ? stegaClean(tag) : `h2`;
  return (
    <>
      <HeadingTag className={`c__heading ${className} u__font-weight-heading`}>
        {disableParse ? children : parse(children)}
      </HeadingTag>
    </>
  );
};

export default Heading;
