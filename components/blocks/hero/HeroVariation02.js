"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Pill from "@/components/modules/Pill";
import Image from "next/image";

const Wrapper = styled.div`
  .b__hero__variation02 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 2rem;
      @media (min-width: 992px) {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
      }
      @media (min-width: 1200px) {
        --bs-gutter-x: 5rem;
      }
    }
    &__image {
      border-radius: var(--t-global-image-border-radius);
      object-fit: cover;
      width: 100%;
      height: 100%;
      &-wrapper {
        height: 350px;
        position: relative;
        @media (min-width: 768px) {
          height: 500px;
        }
        @media (min-width: 992px) {
          width: 100%;
          height: 100%;
          min-height: 450px;
        }
      }
    }
  }
`;

const HeroVariation02 = ({ slice }) => {
  return (
    <Bounded
      type={slice.slice_type}
      variation={slice.variation}
      className="b__hero__variation02 overflow-hidden position-relative"
      scopedCss={slice.primary.scoped_css}
    >
      {slice.primary.enable_blobs && (
        <>
          <BlurryBlob top="-20rem" left="-20rem" />
          <BlurryBlob
            bottom="-20rem"
            right="0rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <Wrapper className="container position-relative u__z-index-1">
        <div
          className={`row b__hero__variation02__row ${slice.primary.align_items_center ? "align-items-center" : ``}`}
        >
          <div className="col-lg-6">
            {slice.primary.label && <Pill title={slice.primary.label} />}
            {slice.primary.heading && (
              <div className="c__heading-wrapper mb-4">
                <h1 className="c__heading u__d2">
                  {parse(slice.primary.heading)}
                </h1>
              </div>
            )}
            {slice.primary.content && (
              <div className="c__description-wrapper">
                <p className="c__description u__h6">
                  {parse(slice.primary.content)}
                </p>
              </div>
            )}

            <div className="c__button-wrapper mt-4 pt-3">
              <Button
                destination={slice.primary.button_destination}
                title={slice.primary.button_title}
              />
            </div>
          </div>
          <div className="col-lg-6">
            {slice.primary.image && (
              <>
                {console.log(
                  `data:image/png;base64,${slice.primary.image.url?.split("?")[0]}?fm=blurhash`
                )}
                <div className="b__hero__variation02__image-wrapper">
                  <figure className="m-0 d-inline">
                    <PrismicNextImage
                      className="b__hero__variation02__image"
                      placeholder="blur"
                      field={slice.primary.image}
                      blurDataURL={`${slice.primary.image.url?.split("?")[0]}?fm=blurhash&w=50`}
                      // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMINGf4/+3at/t7+2viGNQZGKbE69UlOSV5mgEAnuYKmizl818AAAAASUVORK5CYII="
                      fill={true}
                      alt={slice.primary.image.alt}
                    />
                  </figure>
                </div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariation02;
