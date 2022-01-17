import classNames from "classnames";
import React, { useMemo } from "react";
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

export default Form;
