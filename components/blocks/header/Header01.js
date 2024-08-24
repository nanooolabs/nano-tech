"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Design System
import Button from "@/components/modules/Button";
// Schema
import { SCHEMA__Nav } from "@/lib/schema";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="b__header__header01 b__header__header01--sticky">
        <div className="container">
          <div className="b__header__header01__wrapper">
            <Link
              className="u__text-decoration-none u__inherited-anchor"
              href="/"
            >
              <div className="b__header__header01__logo-wrapper u__cursor-pointer">
                <span className="b__header__header01__logo u__font-family-heading u__f-900 u__heading-color--primary u__h3 u__letter-spacing--tight">
                  Mosibello
                </span>
              </div>
            </Link>
            <div className="b__header__header01__nav-wrapper b__header__header01__nav-wrapper-large">
              <nav className="b__header__header01__nav">
                <ul>
                  {SCHEMA__Nav.map((elem, index) => {
                    return (
                      <li key={index}>
                        <Link href={elem.url}>{elem.title}</Link>
                      </li>
                    );
                  })}
                </ul>
                <Button title={`Get Started`} destination={``} />
              </nav>
            </div>
            <div className="b__header__header01__hamburger-wrapper">
              <button
                onClick={() => {
                  menuOpen ? setMenuOpen(false) : setMenuOpen(true);
                }}
                type="button"
                role="button"
                aria-label="Hamburger toggler"
                className={`c__hamburger ${
                  menuOpen ? `c__hamburger--active` : ``
                }`}
              >
                <span className="c__hamburger__line c__hamburger__line-top"></span>
                <span className="c__hamburger__line c__hamburger__line-middle"></span>
                <span className="c__hamburger__line c__hamburger__line-bottom"></span>
              </button>
            </div>
            <div
              className={`b__header__header01__nav-wrapper b__header__header01__nav-wrapper-small ${menuOpen ? `b__header__header01__nav-wrapper-small--active` : ``}`}
            >
              <div className={`b__header__header01__navigation-board`}>
                <nav className="b__header__header01__nav">
                  <ul>
                    {SCHEMA__Nav.map((elem, index) => {
                      return (
                        <li key={index}>
                          <Link href={elem.url}>{elem.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    className="text-center mt-3 w-100"
                    title={`Get Started`}
                    destination={``}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => {
          setMenuOpen(false);
        }}
        className={`b__header__header01__navigation-board__tint ${menuOpen ? `b__header__header01__navigation-board__tint--active` : ``}`}
      ></div>
    </>
  );
};

export default Header;
