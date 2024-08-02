"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import IconListItem from "@/components/modules/IconListItem";
import { PrismicRichText } from "@prismicio/react";

const Wrapper = styled.div`
  .b__feature__variation01 {
    &__content-wrapper {
      .c__richtext-field {
        @media (min-width: 992px) {
          padding-right: 7rem;
        }
      }
    }
  }
`;

const FeatureVariation02 = ({ slice }) => {
  return (
    <Bounded
      type={slice?.slice_type}
      variation={slice?.variation}
      className="b__feature__variation02 overflow-hidden position-relative"
      scopedCss={slice?.primary.scoped_css}
    >
      <Wrapper>
        <div className="container">
          <div
            className={`row ${slice.primary.align_items_center ? `align-items-center` : ``}`}
          >
            <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
              <div className="b__feature__variation02__content-wrapper">
                {slice.primary.heading && (
                  <div className="c__heading-wrapper mb-3">
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
              </div>
            </div>
            {slice.primary.cards && (
              <div className="col-lg-6 ps-xl-5">
                <div className="b__feature__variation02__list-wrapper">
                  {slice.primary.cards.map((elem, index) => {
                    return (
                      <IconListItem
                        key={index}
                        className={
                          slice.primary.cards.length - 1 === index
                            ? null
                            : `mb-4 pb-4`
                        }
                        icon={elem.icon}
                        heading={elem.heading}
                        description={elem.description}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default FeatureVariation02;
