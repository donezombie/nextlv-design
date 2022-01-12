import React from "react";
import Button from "../../button/Button";
import Card from "./Card";

const Size = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Size">
      <div className="button-components__size">
        {/* SMALL */}
        <div className="row">
          <div className="col-4 py-10">
            <Button variant="primary" size="small">
              Small Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="success" size="small">
              Small Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="danger" size="small">
              Small Button
            </Button>
          </div>
        </div>
        {/* DEFAULT */}
        <div className="row">
          <div className="col-4 py-10">
            <Button variant="primary" size="default">
              Default Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="success" size="default">
              Default Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="danger" size="default">
              Default Button
            </Button>
          </div>
        </div>
        {/* LARGE */}
        <div className="row">
          <div className="col-4 py-10">
            <Button variant="primary" size="large">
              Large Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="success" size="large">
              Large Button
            </Button>
          </div>

          <div className="col-4 py-10">
            <Button variant="danger" size="large">
              Large Button
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Size;
