import React from "react";
import Close from "./components/buttons/Close";
import Danger from "./components/buttons/Danger";
import Disabled from "./components/buttons/Disabled";
import Example from "./components/buttons/Example";
import Group from "./components/buttons/Group";
import Loading from "./components/buttons/Loading";
import Size from "./components/buttons/Size";
import Success from "./components/buttons/Success";
import Warning from "./components/buttons/Warning";

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
          <Disabled />
          <Size />
          <Group/>
        </div>
        <div className="col-6">
          <Danger />
          <Warning />
          <Success />
          <Close />
          <Loading />
        </div>
      </div>
    </div>
  );
};

export default ButtonComponents;
