import React from "react";
import classNames from "classnames";

const FormGroup = ({ children, className = "", checked = false }) => {
  //! State
  console.log(checked, "checked");
  //! Function
  const typeFormGroup =
    (() => {
      if (checked) {
        return {
          [`form-check`]: true,
        };
      }
      return {
        [`form-group`]: true,
      };
    },
    [checked]);
  //! Render
  return <div className={classNames(className, typeFormGroup)}>{children}</div>;
};

export default FormGroup;
