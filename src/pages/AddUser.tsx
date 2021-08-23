import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser } from "../context/action";
import { GlobalContext } from "../context/GlobalState";


interface AddUserProps {}

const AddUser: React.FC<AddUserProps> = ({}) => {
  const history = useHistory();
  const { dispatch } = useContext(GlobalContext);
  const [name, setName] = useState("");

  const onSubmitHandler = () => {
    const newUser = {
      id: ,
      name: name,
    };
    dispatch(addUser(newUser));
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type='text'
          placeholder='Name...'
          value={name}
          onChange={(e) => setName(e.target.value)}></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
