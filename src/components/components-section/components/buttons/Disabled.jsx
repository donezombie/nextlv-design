import React from "react";
import Button from "../../../button/Button";
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
            <Button variant="primary">Primary Button</Button>
          </div>

          <div className="col-6 py-10">
            <Button variant="primary" disabled>
              Primary Button(disabled)
            </Button>
          </div>
          <div className="col-6 py-10">
            <Button variant="text">Text Button</Button>
          </div>

          <div className="col-6 py-10">
            <Button variant="text" disabled>
              Text Button(disbled)
            </Button>
          </div>
          {/*  */}
          <div className="col-6 py-10">
            <Button variant="link">Link Button</Button>
          </div>

          <div className="col-6 py-10">
            <Button variant="link" disabled>
              Link Button(disbled)
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Disabled;
