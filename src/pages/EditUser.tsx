import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

interface EditUserProps {}

const EditUser: React.FC<EditUserProps> = ({}) => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Name...'></Input>
      </FormGroup>
      <Button type='submit'>Save</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};

export default EditUser;
