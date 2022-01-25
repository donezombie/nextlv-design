import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  open: PropTypes.bool
};

const Modal = ({ className, children, open = false }) => {
  //! State

  //! Function
  const typeModal = useMemo(() => {
    return { [`modal`]: true };
  }, []);
  //! Render
  return open && (
    <div className={classNames(className, typeModal)}>
      <div className="modal__content">{children}</div>
    </div>
  );
};

Modal.propTypes = propTypes;
export default Modal;
