import React, { useMemo, useState } from "react";
import classNames from "classnames";
const Button = ({
  className = "",
  loading = false,
  style = {},
  outline = false,
  disabled = false,
  dashed = false,
  block = false,
  close = false,
  children,
  variant = "primary",
  size = "",
  ...rest
}) => {
  //! State
  const LoadingIcon = (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="loading"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
    </svg>
  );
  //! Function
  const typeButton = useMemo(() => {
    if (close) {
      return {
        [`close`]: true,
      };
    }
    return {
      [`${`btn-${variant}`}${size !== "" ? ` button-size-${size}` : ""}${
        outline ? " outline" : ""
      }${dashed ? " dashed" : ""}${block ? " block" : ""}`]: true,
    };
  }, [outline, dashed, block, variant, close, loading, size]);

  //! Render
  return (
    <button
      className={classNames(className, typeButton)}
      style={style}
      {...rest}
      disabled={disabled}
    >
      {loading ? <span className="loading">{LoadingIcon}</span> : ""}
      {children}
    </button>
  );
};

export default Button;
