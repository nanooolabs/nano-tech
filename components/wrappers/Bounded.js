"use client";
import React from "react";
import styled from "styled-components";

const Bounded = ({
  type,
  variation,
  className,
  scopedCss,
  children,
  ...restProps
}) => {
  const Section = styled.section`
    ${scopedCss || `padding: 64px 0;`}
  `;
  return (
    <Section
      data-block-type={type}
      data-block-variation={variation}
      className={className}
      {...restProps}
    >
      {children}
    </Section>
  );
};

export default Bounded;
