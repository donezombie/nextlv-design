import classNames from "classnames";
import React, { useMemo } from "react";

const Input = ({
  className = "",
  children,
  type = "text",
  name = "",
  value = "",
}) => {
  //! State

  //! Function
  const typeInput = useMemo(() => {
    if (type === "radio") {
      return { [`form-check-radio`]: true };
    }
    return {
      [`form-control`]: true,
    };
  }, [type]);
  //! Render
  return (
    <input
      className={classNames(className, typeInput)}
      type={type}
      name={name}
      value={value}
    >
      {children}
    </input>
  );
};

export default Input;
