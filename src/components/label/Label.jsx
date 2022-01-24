import classNames from "classnames";
import React, { useMemo } from "react";

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
  return <label className={classNames(className, typeLabel)} for={rest.for}>{children}</label>;
};

export default Label;
