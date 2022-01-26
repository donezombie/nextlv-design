import classNames from "classnames";
import React, { useMemo } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  check: PropTypes.bool,
};

const Label = ({ children, className = "", check = false, ...rest }) => {
  //! State

  //! Function
  const typeLabel = useMemo(() => {
    if (check) {
      return {
        [`form-label-check`]: true,
      };
    }
    return {
      [`form-label`]: true,
    };
  }, [check]);
  //! Render
  return (
    <label className={classNames(className, typeLabel)} Htmlfor={rest.for}>
      {children}
    </label>
  );
};

Label.propTypes = propTypes;
export default Label;
