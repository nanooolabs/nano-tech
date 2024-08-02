"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import IconListItem from "@/components/modules/IconListItem";
import CardWithSpotlightHeading from "@/components/modules/CardWithSpotlightHeading";

const Wrapper = styled.div`
  .b__feature__variation03 {
    &__grid-row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 3rem;
      @media (min-width: 1200px) {
        --bs-gutter-x: 10.3rem;
      }
    }
  }
`;

const cardColumns = {
  2: "col-lg-6",
  3: "col-lg-4",
};

const FeatureVariation03 = ({ slice }) => {
  return (
    <Bounded
      type={slice?.slice_type}
      variation={slice?.variation}
      className="b__feature__variation03 overflow-hidden position-relative"
      scopedCss={slice?.primary.scoped_css}
    >
      <Wrapper>
        <div className="container position-relative u__z-index-1">
          <div className="text-center mx-auto">
            {slice.primary.heading && (
              <div className="c__heading-wrapper mb-3">
                <h2 className="u__h2">{parse(slice.primary.heading)}</h2>
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
            <div className="row b__feature__variation03__grid-row">
              {slice.primary.cards.map((elem, index) => {
                const { heading, description } = elem;
                return (
                  <div
                    key={index}
                    className={`col-md-6 ${slice.primary.card_columns ? cardColumns[slice.primary.card_columns] : `col-lg-4`}`}
                  >
                    <CardWithSpotlightHeading
                      heading={heading}
                      description={description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Wrapper>
    </Bounded>
  );
};

export default FeatureVariation03;
