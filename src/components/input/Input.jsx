import classNames from "classnames";
import React, { useMemo } from "react";
import Datetime from "react-datetime";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.element,
  type: PropTypes.oneOf([
    "text",
    "number",
    "radio",
    "checkbox",
    "textarea",
    "submit",
    "datetime",
    "date",
    "time",
  ]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.string,
};

const Input = ({
  className = "",
  id,
  children,
  type = "text",
  name,
  value,
  rows = "3",
  disabled = false,
  valid = false,
  invalid = false,
  onChange,
  placeholder,
  dateFormat = "DD/MM/YYYY",
  timeFormat,
}) => {
  //! State

  //! Function
  const typeInput = useMemo(() => {
    if (type === "radio") {
      return {
        [`form-check-radio`]: true,
      };
    }
    if (type === "checkbox") {
      return { [`form-check-checkbox`]: true };
    }
    if (type === "textarea") {
      return { [`form-check-textarea`]: true };
    }
    if (type === "datetime" || type === "date" || type === "time") {
      return { [`form-date-time`]: true };
    }
    return {
      [`form-control${
        valid ? " form-control--valid" : invalid ? " form-control--invalid" : ""
      }`]: true,
    };
  }, [type]);

  //! Render
  if (type === "textarea") {
    return (
      <textarea
        className={classNames(className, typeInput)}
        id={id}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        rows={rows}
      >
        {children}
      </textarea>
    );
  }
  if (type === "datetime") {
    return (
      <Datetime
        value={value}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        onChange={onChange}
        className={classNames(className, typeInput)}
      />
    );
  }
  if (type === "date") {
    return (
      <Datetime
        value={value}
        dateFormat={dateFormat}
        timeFormat={false}
        onChange={onChange}
        className={classNames(className, typeInput)}
      />
    );
  }
  if (type === "time") {
    return (
      <Datetime
        value={value}
        dateFormat={false}
        timeFormat={timeFormat}
        onChange={onChange}
        className={classNames(className, typeInput)}
      />
    );
  }
  return (
    <input
      className={classNames(className, typeInput)}
      id={id}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};

Input.propTypes = propTypes;
export default Input;
