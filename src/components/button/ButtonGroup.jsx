import classNames from "classnames";
import React, { useMemo } from "react";

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

export default ButtonGroup;
