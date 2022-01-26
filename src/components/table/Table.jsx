import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  reponsive: PropTypes.bool,
  striped: PropTypes.bool,
};
const Table = ({
  children,
  className,
  bordered = false,
  borderless = false,
  dark = false,
  hover = false,
  reponsive = false,
  striped = false,
}) => {
  //! State

  //! Function
  const typeTable = useMemo(() => {
    if (bordered) {
      return {
        [`table-bordered${hover ? " hover" : ""}`]: true,
      };
    }
    if (borderless) {
      return {
        [`table-borderless${hover ? " hover" : ""}`]: true,
      };
    }
    if (dark) {
      return {
        [`table-dark${hover ? " hover" : ""}`]: true,
      };
    }
    if (striped) {
      return {
        [`table-striped${hover ? " hover" : ""}`]: true,
      };
    }
    return {
      [`table${hover ? " hover" : ""}`]: true,
    };
  }, [bordered, borderless, hover, striped]);
  //! Render
  if (reponsive) {
    return (
      <div className="table-reponsive">
        <table className={classNames(className, typeTable)}>{children}</table>
      </div>
    );
  }
  return <table className={classNames(className, typeTable)}>{children}</table>;
};

Table.propTypes = propTypes;
export default Table;
