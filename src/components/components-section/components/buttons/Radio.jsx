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
        <FormGroup checked disabled>
          <Input
            id="radio1"
            type="radio"
            name="radio"
            value="radio1"
            disabled
          />
          <Label for="radio1" check>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            recusandae, ab alias et sed animi corporis dolore eaque aperiam
            dolores, nihil culpa harum illum quia commodi quibusdam, quos dolor!
            Dicta (disabled).
          </Label>
        </FormGroup>
        <FormGroup checked>
          <Input id="radio2" type="radio" name="radio" value="radio2" />
          <Label for="radio2" check>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            recusandae, ab alias et sed animi corporis dolore eaque aperiam
            dolores, nihil culpa harum illum quia commodi quibusdam, quos dolor!
            Dicta.
          </Label>
        </FormGroup>
        <FormGroup checked>
          <Input id="radio3" type="radio" name="radio" value="radio3" />
          <Label for="radio3" check>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            recusandae, ab alias et sed animi corporis dolore eaque aperiam
            dolores, nihil culpa harum illum quia commodi quibusdam, quos dolor!
            Dicta.
          </Label>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default Radio;
