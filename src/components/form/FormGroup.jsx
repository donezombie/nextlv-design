import React, { useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

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

FormGroup.propTypes = propTypes;
export default FormGroup;
