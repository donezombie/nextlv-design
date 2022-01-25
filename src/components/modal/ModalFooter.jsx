import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

const ModalFooter = ({ className, children }) => {
  //! State

  //! Function
  const typeModalFooter = useMemo(() => {
    return { [`modal__footer`]: true };
  }, []);
  //! Render
  return (
    <div className={classNames(className, typeModalFooter)}>{children}</div>
  );
};

ModalFooter.propTypes = propTypes;
export default ModalFooter;
