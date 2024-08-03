"use client";
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Section = styled.section`
  ${(props) =>
    props.$scopedCss ||
    `padding: 64px 0; background-color: var(--t-cp-base-white);`}
`;

const Bounded = ({ type, className, scopedCss, children, ...restProps }) => {
  return (
    <Section
      $scopedCss={scopedCss}
      data-block-type={parse(type)}
      className={className}
      {...restProps}
    >
      {children}
    </Section>
  );
};

export default Bounded;
