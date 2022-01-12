import React from "react";
import Card from "./Card";

const Success = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Success">
    <div className="button-components__success">
      <div className="row">
        <div className="col-4 py-10">
          <button className="btn-primary btn-success">Primary Button</button>
        </div>

        <div className="col-4 py-10">
          <button className="btn-default btn-success">Default Button</button>
        </div>

        <div className="col-4 py-10">
          <button className="btn-dashed btn-success">Dashed Button</button>
        </div>

        <div className="col-4 py-10">
          <button className="btn-text btn-success">Text Button</button>
        </div>

        <div className="col-4 py-10">
          <button className="btn-link btn-success">Link Button</button>
        </div>
      </div>
    </div>
  </Card>
  )
}

export default Success;