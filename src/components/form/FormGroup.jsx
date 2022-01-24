import React, { useMemo } from "react";
import classNames from "classnames";

const FormGroup = ({
  children,
  className = "",
  checked = false,
  disabled = false,
}) => {
  //! State
  //! Function
  const typeFormGroup = useMemo(() => {
    if (checked) {
      return {
        [`form-check${disabled ? " form-check-disabled" : ""}`]: true,
      };
    }
    return {
      [`form-group`]: true,
    };
  }, [checked]);
  //! Render
  return <div className={classNames(className, typeFormGroup)}>{children}</div>;
};

export default FormGroup;
