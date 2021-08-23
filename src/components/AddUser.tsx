import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

interface AddUserProps {}

const AddUser: React.FC<AddUserProps> = ({}) => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Name...'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
