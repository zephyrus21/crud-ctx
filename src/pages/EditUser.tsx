import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { editUser } from "../context/action";
import { GlobalContext } from "../context/GlobalState";

interface EditUserProps {
  match: any;
}

const EditUser: React.FC<EditUserProps> = ({ match }) => {
  const history = useHistory();
  const {
    state: { users },
    dispatch,
  } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const currentUserId = match.params.id;

  useEffect(() => {
    users.map((user: any) => user.id === currentUserId && setName(user.name));
  }, []);

  const onSubmitHandler = () => {
    dispatch(
      editUser({
        id: currentUserId,
        name: name,
      })
    );
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
      <Button type='submit'>Save</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};

export default EditUser;
