"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Pill from "@/components/modules/Pill";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import Heading from "@/components/modules/Heading";

const Wrapper = styled.div`
  .b__hero__variant04 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 3rem;
      @media (min-width: 992px) {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
      }
      @media (min-width: 1200px) {
        --bs-gutter-x: 5rem;
      }
    }
    &__col {
      &--image {
        @media (max-width: 992px) {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      &-wrapper {
        height: 400px;
        position: relative;
        @media (min-width: 768px) {
          height: 600px;
        }
        @media (min-width: 992px) {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
        }
      }
    }
  }
`;

const HeroVariant04 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__hero__variant04 overflow-hidden position-relative"
    >
      {data?.enable_blobs && (
        <>
          <BlurryBlob top="-20rem" left="-20rem" />
          <BlurryBlob
            bottom="-20rem"
            right="0rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <Wrapper>
        <div className="container">
          <div className="row b__hero__variant04__row">
            <div className="col-lg-6 b__hero__variant04__col--content">
              <div className="b__hero__variant04__content-wrapper">
                {/* {data.label && <Pill title={data.label} />} */}
                <Pill title="Section Label" />
                <div className="c__heading-wrapper">
                  <Heading tag={`h1`} className="u__d2">
                    Data to enrich your online business
                  </Heading>
                </div>
                <div className="c__description-wrapper">
                  <p>
                    Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr.
                  </p>
                </div>
                <div className="c__button-wrapper mt-4 pt-3">
                  <Button
                    destination={data?.button_destination}
                    title={
                      data?.button_title ? data.button_title : `Learn More`
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 b__hero__variant04__col--image">
              <div className="b__hero__variant04__image-wrapper">
                <Image
                  className="b__hero__variant04__image"
                  fill={true}
                  // placeholder="blur"
                  // blurDataURL={data.image.asset.metadata.lqip}
                  src={`https://ik.imagekit.io/h7jkr1dmtk/tr:w-2000/joel-filipe-k8apfKm-Md4-unsplash.jpg`}
                  alt={``}
                  sizes="100%"
                />
                {/* <Image
                    className="b__hero__variant02__image"
                    fill={true}
                    placeholder="blur"
                    blurDataURL={data.image.asset.metadata.lqip}
                    src={urlFor(data.image).url()}
                    alt={data.image.alt ?? ""}
                    sizes="100%"
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariant04;
