import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

const ModalBody = ({ className, children }) => {
  //! State

  //! Function
  const typeModalHeader = useMemo(() => {
    return { [`modal__body`]: true };
  }, []);
  //! Render
  return (
    <div className={classNames(className, typeModalHeader)}>{children}</div>
  );
};

ModalBody.propTypes = propTypes;
export default ModalBody;
