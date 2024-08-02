import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import BlurryBlob from "@/components/modules/BlurryBlob";

const HeroVariation01 = ({
  type,
  variation,
  scopedCss,
  enableBlobs,
  alignLeft,
  heading,
  description,
  content,
  buttonDestination,
  buttonTitle,
}) => {
  return (
    <Bounded
      type={type}
      variation={variation}
      scopedCss={scopedCss}
      className="b__hero__variation01 overflow-hidden position-relative"
    >
      {enableBlobs && (
        <>
          <BlurryBlob top="-10rem" left="-10rem" />
          <BlurryBlob
            bottom="-10rem"
            right="-10rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <div className="container position-relative u__z-index-1">
        <div className={`${alignLeft ? `text-start` : `text-center`}`}>
          {heading && (
            <div className="c__heading-wrapper mb-4">
              <h1 className="c__heading u__d1">{parse(heading)}</h1>
            </div>
          )}
          {description && (
            <div className="c__subtitle-wrapper mb-4">
              <h2 className="c__heading u__h5  mb-2">{parse(description)}</h2>
            </div>
          )}
          {content && (
            <div
              className={`c__description-wrapper ${alignLeft ? `` : `mx-auto`}`}
              style={alignLeft ? null : { maxWidth: 900 }}
            >
              <p className="c__description u__subtitle">{parse(content)}</p>
            </div>
          )}
          {buttonTitle && (
            <div className="c__button-wrapper mt-4 pt-3">
              <Button destination={buttonDestination} title={buttonTitle} />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default HeroVariation01;
