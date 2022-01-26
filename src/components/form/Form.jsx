import classNames from "classnames";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

const Form = ({ className = "", children }) => {
  //! State

  //! Function
  const typeForm = useMemo(() => {
    return {
      [`form`]: true,
    };
  }, []);
  //! Render
  return <form className={classNames(className, typeForm)}>{children}</form>;
};

Form.propTypes = propTypes;
export default Form;
