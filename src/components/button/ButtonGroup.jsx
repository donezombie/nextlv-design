import classNames from "classnames";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "default", "small"]),
};

const ButtonGroup = ({ children, className = "", size = "" }) => {
  //! State

  //! Function
  const typeButton = useMemo(() => {
    return {
      [`btn-group${size !== "" ? ` button-size-${size}` : ""}`]: true,
    };
  }, [size]);
  //! Render
  return <div className={classNames(className, typeButton)}>{children}</div>;
};

ButtonGroup.propTypes = propTypes;
export default ButtonGroup;
