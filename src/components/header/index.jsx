import React from "react";
import Button from "../button/Button";

const Header = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="header">
      <h1 className="header__banner">UI - Component of framework!</h1>

      <p className="header__description">Framework Design, enjoy!</p>

      <div className="header__button">
        <a href="#section">
          <Button variant="primary" size="large" outline>
            Docs
          </Button>
        </a>

        <a href="#component">
          <Button variant="success" size="large" outline>
            Compontents
          </Button>
        </a>

        <a href="#section">
          <Button variant="danger" size="large" outline>
            Report
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
