"use client";
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Section = styled.section`
  ${(props) => props.scopedcss || `padding: 64px 0;`}
`;

const Bounded = ({ type, className, scopedCss, children, ...restProps }) => {
  return (
    <Section
      scopedcss={parse(scopedCss)}
      data-block-type={parse(type)}
      className={className}
      {...restProps}
    >
      {children}
    </Section>
  );
};

export default Bounded;
