"use client";
import styled from "styled-components";
import parse from "html-react-parser";
import Button from "./Button";
import { PrismicNextImage } from "@prismicio/next";

const Component = styled.div`
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--t-global-card-border-radius);
  .c__icon-card {
    &__wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    &__icon-wrapper {
      margin-bottom: 2.5rem;
      img,
      svg {
        width: 42px;
        height: 42px;
      }
      img {
        object-fit: contain;
      }
    }
  }
  &.c__icon-card {
    &--solid {
      background-color: var(--t-light-background-color);
    }
    &--outlined {
      border: 2px solid var(--t-border-color);
    }
    &--shadow {
      box-shadow: var(--t-box-shadow-lg);
      border: 1px solid var(--t-border-color);
    }
  }
`;

const IconCard = ({
  style = "shadow",
  icon,
  heading,
  description,
  buttonTitle,
  buttonDestination,
  buttonStyle = "link",
}) => {
  return (
    <Component className={`c__icon-card c__icon-card--${style}`}>
      <div className="c__icon-card__wrapper">
        {icon && (
          <div className="c__icon-card__icon-wrapper">
            <figure className="m-0">
              <PrismicNextImage field={icon} alt={icon.alt} />
            </figure>
          </div>
        )}
        {heading && (
          <div className="c__icon-card__heading-wrapper">
            <h3 className="c__icon-card__heading u__h5">{parse(heading)}</h3>
          </div>
        )}
        {description && (
          <div className="c__icon-card__description-wrapper mt-2 mb-3">
            <p className="c__icon-card__description mb-0">
              {parse(description)}
            </p>
          </div>
        )}
        {buttonTitle && (
          <div className="c__icon-card__button-wrapper mt-auto pt-4">
            <Button
              destination={buttonDestination}
              title={buttonTitle}
              style={buttonStyle}
            />
          </div>
        )}
      </div>
    </Component>
  );
};

export default IconCard;
