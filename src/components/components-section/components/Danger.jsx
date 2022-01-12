import React from "react";
import Card from "./Card";

const Danger = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Danger">
      <div className="button-components__danger">
        <div className="row">
          <div className="col-4 py-10">
            <button className="btn-primary btn-danger">Primary Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-default btn-danger">Default Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-dashed btn-danger">Dashed Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-text btn-danger">Text Button</button>
          </div>
          
          <div className="col-4 py-10">
            <button className="btn-link btn-danger">Link Button</button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Danger;