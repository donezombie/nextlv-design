import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useOnClickOutside from "../../hook/useOnClickOutside";
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  open: PropTypes.bool,
};

const Modal = ({ className, children, open = false, toggle }) => {
  //! State
  const ref = useRef();
  //! Effect
  useOnClickOutside(ref, () => {
    toggle();
  });

  //! Function
  const typeModal = useMemo(() => {
    return { [`modal`]: true };
  }, []);

  //! Render
  return (
    open && (
      <div className={classNames(className, typeModal)}>
        <div className="modal__content" ref={ref}>
          {children}
        </div>
      </div>
    )
  );
};

Modal.propTypes = propTypes;
export default Modal;
