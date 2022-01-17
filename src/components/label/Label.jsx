import classNames from "classnames";
import React from "react";

const Label = ({ children, className = "", check = false }) => {
  //! State

  //! Function
  const typeLabel =
    (() => {
      return {
        [`form-label`]: true,
      };
    },
    []);
  //! Render
  return <label className={classNames(className, typeLabel)}>{children}</label>;
};

export default Label;
