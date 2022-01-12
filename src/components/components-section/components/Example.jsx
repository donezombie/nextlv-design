import React from "react";
import Card from "./Card";

const Example = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Example">
      <div className="button-components__example">
        <div className="row">
          <div className="col-4 py-10">
            <button className="btn-primary">Primary Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-default">Default Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-dashed">Dashed Button</button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-text">Text Button</button>
          </div>
          
          <div className="col-4 py-10">
            <button className="btn-link">Link Button</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Example;
