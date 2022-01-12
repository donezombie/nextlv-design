import React from "react";
import Card from "./Card";

const Disabled = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Disabled">
      <div className="button-components__disabled">
        <div className="row">
          <div className="col-6 py-10">
            <button className="btn-primary">Primary Button</button>
          </div>

          <div className="col-6 py-10">
            <button className="btn-primary" disabled>Primary Button(disbled)</button>
          </div>
          {/*  */}
          <div className="col-6 py-10">
            <button className="btn-default">Default Button</button>
          </div>

          <div className="col-6 py-10">
            <button className="btn-default" disabled>Default Button(disbled)</button>
          </div>
          {/*  */}
          <div className="col-6 py-10">
            <button className="btn-dashed" >Dashed Button</button>
          </div>

          <div className="col-6 py-10">
            <button className="btn-dashed" disabled>Dashed Button(disbled)</button>
          </div>
          {/*  */}
          <div className="col-6 py-10">
            <button className="btn-text">Text Button</button>
          </div>

          <div className="col-6 py-10">
            <button className="btn-text" disabled>Text Button(disbled)</button>
          </div>
          {/*  */}
          <div className="col-6 py-10">
            <button className="btn-link">Link Button</button>
          </div>

          <div className="col-6 py-10">
            <button className="btn-link" disabled>Link Button(disbled)</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Disabled;
