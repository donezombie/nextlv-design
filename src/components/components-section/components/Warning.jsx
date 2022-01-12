import React from "react";
import Card from "./Card";

const Warning = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Warning">
      <div className="button-components__warning">
        <div className="row">
          <div className="col-4 py-10">
            <button className="btn-primary btn-warning">Primary Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-default btn-warning">Default Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-dashed btn-warning">Dashed Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-text btn-warning">Text Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-link btn-warning">Link Button</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Warning;
