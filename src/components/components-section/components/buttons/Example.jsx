import React from "react";
import Button from "../../../button/Button";
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
            <Button variant="primary">Primary Button</Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="primary" outline>
              Outline Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="primary" dashed>
              Dashed Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="text">Text Button</Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="link">Link Button</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Example;
