import React from "react";
import Button from "../../../button/Button";
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
            <Button variant="danger">Danger Button</Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="danger" outline>
              Outline Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="danger" dashed>
              Outline Button
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Danger;
