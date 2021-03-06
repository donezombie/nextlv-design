import React from "react";
import CheckBoxPage from "./components/buttons/CheckBox";
import Close from "./components/buttons/Close";
import Danger from "./components/buttons/Danger";
import Disabled from "./components/buttons/Disabled";
import Example from "./components/buttons/Example";
import Group from "./components/buttons/Group";
import Loading from "./components/buttons/Loading";
import Radio from "./components/buttons/Radio";
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
          <Group />
          <CheckBoxPage />
        </div>
        <div className="col-6">
          <Danger />
          <Warning />
          <Success />
          <Close />
          <Loading />
          <Radio />
        </div>
      </div>
    </div>
  );
};

export default ButtonComponents;
