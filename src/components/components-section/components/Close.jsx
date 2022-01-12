import React from "react";
import Button from "../../button/Button";
import Card from "./Card";

const Close = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Close">
      <div className="button-close">
        <div className="row">
          <div className="col">
            <Button close />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Close;
