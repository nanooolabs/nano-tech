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

const BlogTemplate01 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__post__variant01 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container">
          <div className="b__post__variant01__header">
            <div className="b__post__variant01__heading-wrapper u__mw-700 mx-auto mb-4 pb-2 text-center">
              <Link
                href="#"
                className="u__subtitle mb-2 u__f-500 u__text-branding-primary u__font-family-heading u__text-decoration-none"
              >
                Personal Finance
              </Link>
              <Heading>The Differences Between Rich and Wealthy People</Heading>
            </div>
            <div className="b__post__variant01__image-wrapper position-relative mb-4 pb-2">
              <Image
                className="b__post__variant01__image"
                fill
                // placeholder="blur"
                // blurDataURL={data.image.asset.metadata.lqip}
                src={`https://ik.imagekit.io/h7jkr1dmtk/tr:w-2000/priscilla-du-preez-XkKCui44iM0-unsplash.jpg`}
                alt={``}
                sizes="100%"
              />
            </div>
            <div className="b__post__variant01__body u__mw-800 mx-auto">
              <div className="b__post__variant01__date-wrapper mb-4">
                <span className="u__small" style={{ color: `#686868` }}>
                  <time datetime="2022-02-06">
                    Published on 6 February 2022
                  </time>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default BlogTemplate01;
