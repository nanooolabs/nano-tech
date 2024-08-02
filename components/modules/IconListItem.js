"use client";
import styled from "styled-components";
import parse from "html-react-parser";
import { PrismicNextImage } from "@prismicio/next";

const Component = styled.div`
  .c__icon-list-item {
    &__wrapper {
      display: flex;
      flex-wrap: nowrap;
      margin-left: -8px;
      margin-right: -8px;
    }
    &__column {
      padding-left: 8px;
      padding-right: 8px;
      &:first-child {
        min-width: 55px;
      }
    }
    &__figure-wrapper {
      img {
        width: 39px;
        height: 39px;
        object-fit: contain;
        margin-top: -3px;
      }
    }
  }
`;

const IconListItem = ({ className, icon, heading, description }) => {
  return (
    <Component className={`c__icon-list-item ${className ? className : ``}`}>
      <div className="c__icon-list-item__wrapper">
        <div className="c__icon-list-item__column">
          {icon && (
            <div className="c__icon-list-item__figure-wrapper">
              <figure className="m-0">
                <PrismicNextImage field={icon} alt={icon.alt} />
              </figure>
            </div>
          )}
        </div>
        <div className="c__icon-list-item__column">
          {heading && (
            <div className="c__icon-list-item__heading-wrapper">
              <h3 className="c__icon-list-item__heading u__h5">
                {parse(heading)}
              </h3>
            </div>
          )}
          {description && (
            <div className="c__icon-list-item__description-wrapper">
              <p className="c__icon-list-item__description mb-0">
                {parse(description)}
              </p>
            </div>
          )}
        </div>
      </div>
    </Component>
  );
};

export default IconListItem;
