import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

interface UserListProps {}

const UserList: React.FC<UserListProps> = ({}) => {
  const { users } = useContext(GlobalContext);

  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroupItem key={user.id} className='d-flex align-items-center'>
          <strong>{user.name}</strong>
          <div style={{ marginLeft: "auto" }}>
            <Link className='btn btn-warning m-1' to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button color='danger'>Delete</Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserList;
