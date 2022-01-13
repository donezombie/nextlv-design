import React from "react";
import Button from "../../../button/Button";
import Card from "./Card";

const Loading = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Loading">
      <div className="button-loading">
        <div className="row">
          <div className="col-6 py-10">
            <Button loading/>
          </div>
          <div className="col-6 py-10">
            <Button loading>Loading</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Loading;
