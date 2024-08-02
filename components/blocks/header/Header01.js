"use client";

import React, { useState } from "react";
import Link from "next/link";
// Design System
import Button from "@/components/modules/Button";
// Schema
import { SCHEMA__Nav } from "@/lib/Schema";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="b__header__header01">
        <div className="container">
          <div className="b__header__header01__wrapper">
            <Link
              className="u__text-decoration-none u__inherited-anchor"
              href="/"
            >
              <div className="b__header__header01__logo-wrapper u__cursor-pointer">
                <span className="b__header__header01__logo u__f-900 u__heading-color--primary u__h3 u__letter-spacing--tight">
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
                <Button title={`Get a Free Quote`} destination={``} />
              </nav>
            </div>
            <div className="b__header__header01__hamburger-wrapper">
              <button
                onClick={() => {
                  menuOpen ? setMenuOpen(false) : setMenuOpen(true);
                }}
                type="button"
                role="button"
                className={`c__hamburger ${
                  menuOpen ? `c__hamburger-is-active` : ``
                }`}
              >
                <span className="c__hamburger__line c__hamburger__line-top"></span>
                <span className="c__hamburger__line c__hamburger__line-middle"></span>
                <span className="c__hamburger__line c__hamburger__line-bottom"></span>
              </button>
            </div>
            <div
              className={`c__drawer c__drawer-nav ${
                menuOpen ? `c__drawer-is-active` : ``
              }`}
            >
              <div className="c__drawer__header-wrapper">
                <span className="u__f-900 py-2 u__br-4 u__h4 u__heading-color--primary u__letter-spacing--tight">
                  Mosibello
                </span>
              </div>
              <div className="b__header__header01__nav-wrapper b__header__header01__nav-wrapper-small">
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
                    title={`Get a Free Quote`}
                    destination={``}
                  />
                </nav>
              </div>
            </div>
            <div
              onClick={() => {
                setMenuOpen(false);
              }}
              className={`c__drawer-tint ${
                menuOpen ? `c__drawer-tint-is-active` : ``
              }`}
            ></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
