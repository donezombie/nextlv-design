import React from "react";
import Form from "../../../form/Form";
import FormGroup from "../../../form/FormGroup";
import Input from "../../../input/Input";
import Label from "../../../label/Label";
import Card from "./Card";

const CheckBoxPage = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Card label="Checkbox">
      <Form>
        <FormGroup checked disabled>
          <Input type="checkbox" name="checkbox" value="checkbox1" disabled/>
          <Label check>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde quaerat distinctio nulla magni tempora, corporis dicta rerum! In, quis a sequi molestiae culpa laborum dolores eaque consectetur sunt atque.</Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="checkbox" name="checkbox" value="checkbox2" />
          <Label check>Checked Box</Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="checkbox" name="checkbox" value="checkbox3" />
          <Label check>Checked Box</Label>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default CheckBoxPage;
