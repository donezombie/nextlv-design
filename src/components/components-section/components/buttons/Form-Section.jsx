import React from "react";
import Button from "../../../button/Button";
import Form from "../../../form/Form";
import FormGroup from "../../../form/FormGroup";
import SelectOptions from "../../../form/SelectOptions";
import Input from "../../../input/Input";
import Label from "../../../label/Label";
import Card from "./Card";

const FormSection = (props) => {
  //! State
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate2", label: "Chocolate2" },
    { value: "strawberry2", label: "Strawberry2" },
    { value: "vanilla2", label: "Vanilla2" },
  ];

  //! Function

  //! Render
  return (
    <Card label="Form">
      <Form>
        <FormGroup>
          <Label for="form1">User Name</Label>
          <Input valid id="form1" placeholder="asdashgdsad" />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input invalid type="password" id="password" />
        </FormGroup>

        <FormGroup>
          <Label for="textarea">Text A rea</Label>
          <Input type="textarea" rows="2" id="textarea" />
        </FormGroup>

        <Label>Radio Form</Label>
        <FormGroup checked disabled>
          <Input type="radio" name="radio" disabled />
          <Label check>Radio (disabled)</Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="radio" name="radio" />
          <Label check>Radio</Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="radio" name="radio" />
          <Label check>Radio</Label>
        </FormGroup>

        <Label>Check Box Form</Label>
        <FormGroup checked disabled>
          <Input type="checkbox" name="checkbox" disabled />
          <Label check>Checkbox (disabled)</Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="checkbox" name="checkbox2" />
          <Label check>Checkbox</Label>
        </FormGroup>
        <FormGroup checked>
          <Input type="checkbox" name="checkbox3" />
          <Label check>Checkbox</Label>
        </FormGroup>
        <Label>Datetime</Label>
        <FormGroup>
          <Input type="datetime" />
        </FormGroup>
        <Label>Date</Label>
        <FormGroup>
          <Input type="date" />
        </FormGroup>
        <Label>Time</Label>
        <FormGroup>
          <Input type="time" />
        </FormGroup>
        <Label>Select</Label>
        <FormGroup>
          <SelectOptions options={options} />
        </FormGroup>
        <FormGroup>
          <SelectOptions options={options} isMulti searchable />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Card>
  );
};

export default FormSection;
