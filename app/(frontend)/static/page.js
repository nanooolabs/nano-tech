"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import Heading from "@/components/modules/Heading";
import Link from "next/link";
import { HeroVariant03 } from "@/components/blocks/hero";
import ArchiveVariant01 from "@/components/blocks/archive/ArchiveVariant01";

const Wrapper = styled.article`
  .b__post__variant01 {
    &__image-wrapper {
      width: 100%;
      height: 300px;
      @media (min-width: 768px) {
        height: 450px;
      }
      @media (min-width: 992px) {
        height: 600px;
      }
      img {
        border-radius: var(--t-global-image-border-radius);
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
      }
    }
  }
`;

const heroData = {
  heading: "Resource Library",
  heading_tag: `h1`,
  heading_size: `h1`,
  description_size: `subtitle`,
  background_theme: `secondary`,
  scoped_css: {
    code: `padding: 32px 0;`,
  },
  description:
    "Your single source for expert insights within the digital space.",
};

const TemplateArchiveVariant01 = ({ data }) => {
  return (
    <>
      <HeroVariant03 data={heroData} />
      <ArchiveVariant01 />
    </>
  );
};

export default TemplateArchiveVariant01;
