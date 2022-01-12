import React from "react";
import Danger from "./components/Danger";
import Disabled from "./components/Disabled";
import Example from "./components/Example";
import Size from "./components/Size";
import Success from "./components/Success";
import Warning from "./components/Warning";

const ButtonComponents = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="button-components">
      <h2 className="heading">Buttons</h2>
      <div className="row">
        <div className="col-6">
         <Example />
        </div>
        <div className="col-6">
          <Size />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
         <Disabled />
        </div>
        <div className="col-6">
          <Danger />
          <Warning />
          <Success />
        </div>
      </div>
    </div>
  );
};

export default ButtonComponents;
