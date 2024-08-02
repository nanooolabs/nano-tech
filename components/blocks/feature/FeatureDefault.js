"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";

const Wrapper = styled.div`
  .b__feature__default {
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

const FeatureDefault = ({ slice }) => {
  return (
    <Bounded
      type={slice.slice_type}
      variation={slice.variation}
      className="b__feature__default overflow-hidden position-relative"
      scopedCss={slice.primary.scoped_css}
    >
      <Wrapper className="container position-relative u__z-index-1">
        <div
          className={`row b__feature__default__row ${slice.primary.align_items_center ? "align-items-center" : ``}`}
        >
          <div
            className={`col-lg-6 ${slice.primary.invert_order ? `order-lg-2` : `order-lg-1`}`}
          >
            {slice.primary.label && (
              <div>
                <span className="u__subtitle d-block mb-2 u__f-500 u__text-branding-primary">
                  {parse(slice.primary.label)}
                </span>
              </div>
            )}
            {slice.primary.heading && (
              <div className="c__heading-wrapper mb-4">
                <h2 className="c__heading u__h2">
                  {parse(slice.primary.heading)}
                </h2>
              </div>
            )}
            {slice.primary.content && (
              <div className="c__richtext-field">
                <PrismicRichText field={slice.primary.content} />
              </div>
            )}

            <div className="c__button-wrapper mt-4 pt-3">
              <Button
                destination={slice.primary.button_destination}
                title={slice.primary.button_title}
              />
            </div>
          </div>
          <div
            className={`col-lg-6 ${slice.primary.invert_order ? `order-lg-1` : `order-lg-2`}`}
          >
            {slice.primary.image && (
              <>
                <div className="b__feature__default__image-wrapper">
                  <figure className="m-0 d-inline">
                    <PrismicNextImage
                      className="b__feature__default__image"
                      placeholder="blur"
                      field={slice.primary.image}
                      blurDataURL={`${slice.primary.image.url?.split("?")[0]}?w=10&h=10`}
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

export default FeatureDefault;
