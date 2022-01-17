import React from "react";
import Form from "../../../form/Form";
import FormGroup from "../../../form/FormGroup";
import Input from "../../../input/Input";
import Label from "../../../label/Label";
import Card from "./Card";

const Radio = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Radio">
      <Form>
        <FormGroup checked>
          <Input type="radio" name="radio" value="radio1" />
          <Label check> Radio1 </Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="radio" name="radio" value="radio2" />
          <Label check> Radio2 </Label>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default Radio;
