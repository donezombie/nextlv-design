import React from "react";
import Button from "../../button/Button";
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
            <Button variant="warning">Warning Button</Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="warning" outline>
              Outline Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="warning" dashed>
              Dashed Button
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Warning;
