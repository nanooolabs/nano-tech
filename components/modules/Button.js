import Link from "next/link";
import React from "react";
import { stegaClean } from "@sanity/client/stega";

const Button = ({
  title,
  destination,
  className,
  theme = `primary`,
  size = `default`,
}) => {
  return (
    <>
      {title && (
        <Link className="c__button__anchor-element" href={destination || "#"}>
          <span
            className={`c__button c__button--${stegaClean(theme)} ${
              className ? className : ``
            } c__button__size--${size}`}
          >
            <div className="c__button__content">
              <span>{title}</span>
            </div>
          </span>
        </Link>
      )}
    </>
  );
};

export default Button;
