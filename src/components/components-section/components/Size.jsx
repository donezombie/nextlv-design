import React from "react";
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
            <button className="btn-primary button-size-small">
              Small Button
            </button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-default button-size-small">
              Small Button
            </button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-dashed button-size-small">
              Small Button
            </button>
          </div>
        </div>
        {/* DEFAULT */}
        <div className="row">
          <div className="col-4 py-10">
            <button className="btn-primary button-size-default">
              Default Button
            </button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-default button-size-default">
              Default Button
            </button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-dashed button-size-default">
              Default Button
            </button>
          </div>
        </div>
        {/* LARGE */}
        <div className="row">
          <div className="col-4 py-10">
            <button className="btn-primary button-size-large">
              Large Button
            </button>
          </div>

          <div className="col-4 py-10">
            <button className="btn-default button-size-large">
              Large Button
            </button>
          </div>
          
          <div className="col-4 py-10">
            <button className="btn-dashed button-size-large">
              Large Button
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Size;
