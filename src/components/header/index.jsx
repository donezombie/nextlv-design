import React from "react";

const Header = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="header">
      <h1 className="header__banner">UI - Component of framework!</h1>

      <p className="header__description">
        Framework Design, enjoy!
      </p>

      <div className="header__button">
        <a href="#section">
          <button className="btn-primary"> Docs</button>
        </a>

        <a href="#component">
          <button className="btn-success"> Components</button>
        </a>
          
        <a href="#section">
          <button className="btn-danger"> Report</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
