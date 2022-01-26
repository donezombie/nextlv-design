import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../button/Button";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  closeTag: PropTypes.bool,
  onClick: PropTypes.func,
};

const ModalHeader = ({
  className,
  children,
  closeTag = false,
  onClick = () => {},
}) => {
  //! State

  //! Function
  const typeModalHeader = useMemo(() => {
    return { [`modal__header`]: true };
  }, []);
  //! Render
  return (
    <div className={classNames(className, typeModalHeader)}>
      {children}
      {closeTag ? <Button type="button" onClick={onClick} close></Button> : ""}
    </div>
  );
};

ModalHeader.propTypes = propTypes;
export default ModalHeader;
