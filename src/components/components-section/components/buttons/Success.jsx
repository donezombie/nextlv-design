import React from "react";
import Button from "../../../button/Button";
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
            <Button variant="success">Success Button</Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="success" outline>
              Outline Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="success" dashed>
              Dashed Button
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Success;
