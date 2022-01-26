import React, { useState } from "react";
import Button from "../../../button/Button";
import Form from "../../../form/Form";
import FormGroup from "../../../form/FormGroup";
import SelectOptions from "../../../form/SelectOptions";
import Input from "../../../input/Input";
import Label from "../../../label/Label";
import Modal from "../../../modal/Modal";
import ModalBody from "../../../modal/ModalBody";
import ModalFooter from "../../../modal/ModalFooter";
import ModalHeader from "../../../modal/ModalHeader";
import Table from "../../../table/Table";
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

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

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
          <Input type="textarea" rows="10" id="textarea" />
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

        {/* TABLE */}
        <Label>Table</Label>
        <Table reponsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <Label>Modal</Label>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Modal
        </Button>

        <Modal open={open} toggle={toggle}>
          <>
            <ModalHeader closeTag onClick={toggle}>
              <span>Header Title</span>
            </ModalHeader>
            <ModalBody>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur hic, quisquam maiores, aliquam id facere omnis et
                atque, maxime aperiam labore minima magnam nostrum earum dolore
                ad pariatur temporibus provident.
              </span>
            </ModalBody>
            <ModalFooter>
              <>
                <Button>Submit</Button>
                <Button variant="default" onClick={toggle}>
                  Close
                </Button>
              </>
            </ModalFooter>
          </>
        </Modal>
        <Label></Label>
        <Button>Submit</Button>
      </Form>
    </Card>
  );
};

export default FormSection;
