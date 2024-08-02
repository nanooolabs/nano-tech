"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import Accordion from "@/components/modules/Accordion";

const Wrapper = styled.div`
  .b__faq__default {
    &__list-wrapper {
      max-width: 800px;
    }
  }
`;

const FaqDefault = ({ slice }) => {
  return (
    <Bounded
      type={slice?.slice_type}
      variation={slice?.variation}
      className="b__size-md b__faq__default overflow-hidden position-relative"
      scopedCss={slice?.primary.scoped_css}
    >
      <Wrapper>
        <div className="container position-relative u__z-index-1">
          <div className="text-center mx-auto">
            {slice.primary.heading && (
              <div className="c__heading-wrapper mb-4">
                <h2 className="u__h2">{slice.primary.heading}</h2>
              </div>
            )}

            {slice.primary.description && (
              <div className="c__description-wrapper mx-auto">
                <p className="c__description u__subtitle">
                  {parse(slice.primary.description)}
                </p>
              </div>
            )}
          </div>
        </div>
        {slice.primary.cards && (
          <div className="container mt-4 pt-4">
            <div className="b__faq__default__list-wrapper mx-auto">
              {slice.primary.cards.map((elem, index) => {
                console.log(index, slice.primary.cards.length - 1);
                return (
                  <Accordion
                    key={index}
                    index={index}
                    heading={elem.heading}
                    content={elem.content}
                    borderBottom={
                      index === slice.primary.cards.length - 1 ? null : true
                    }
                  />
                );
              })}
            </div>
          </div>
        )}
      </Wrapper>
    </Bounded>
  );
};

export default FaqDefault;
