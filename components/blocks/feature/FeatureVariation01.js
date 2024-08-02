"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import IconCard from "@/components/modules/IconCard";

const Wrapper = styled.div`
  .b__feature__variation01 {
    &__row {
      --bs-gutter-y: 1.5rem;
    }
  }
`;

const cardColumns = {
  2: "col-lg-6",
  3: "col-lg-4",
  4: "col-lg-3",
};

const FeatureVariation01 = ({ slice }) => {
  return (
    <Bounded
      type={slice?.slice_type}
      variation={slice?.variation}
      className="b__feature__variation01 overflow-hidden position-relative"
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
          <div className="container position-relatie u__z-index-1 mt-4 pt-4">
            <div
              className={`row b__feature__variation01__row justify-content-${slice.primary.justify_content}`}
            >
              {slice.primary.cards.map((elem, index) => {
                const {
                  icon,
                  heading,
                  description,
                  button_title,
                  button_destination,
                } = elem;
                return (
                  <div
                    key={index}
                    className={`col-md-6 ${slice.primary.card_columns ? cardColumns[slice.primary.card_columns] : `col-lg-4`}`}
                  >
                    <IconCard
                      style={slice.primary?.card_style}
                      icon={icon}
                      heading={heading}
                      description={description}
                      buttonTitle={button_title}
                      buttonDestination={button_destination}
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

export default FeatureVariation01;
