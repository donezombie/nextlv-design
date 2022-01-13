import React from "react";
import Button from "../../../button/Button";
import ButtonGroup from "../../../button/ButtonGroup";
import Card from "./Card";

const Group = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Group">
      <div className="button-group-checkbox-radio">
        <div className="row">
          <div className="col">
            <ButtonGroup>
              <Button>One</Button>
              <Button>Two</Button>
              <Button> Three</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Group;
