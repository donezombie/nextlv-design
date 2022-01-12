import React from "react";

const Card = ({ label, version = "Version 1.0 - 12/1/2022", children }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="card">
      <div className="row">
        <div className="col-6 heading">{label}</div>
        <div className="col-6 version">{version}</div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Card;
