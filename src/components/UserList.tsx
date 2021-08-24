import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { removeUser } from "../context/action";
import { GlobalContext } from "../context/GlobalContext";

const UserList: React.FC = () => {
  const {
    state: { users },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <ListGroup>
      {users.length > 0 ? (
        users.map((user: any) => (
          <ListGroupItem key={user.id} className='d-flex align-items-center'>
            <strong>{user.name}</strong>
            <div style={{ marginLeft: "auto" }}>
              <Link className='btn btn-warning m-1' to={`/edit/${user.id}`}>
                Edit
              </Link>
              <Button
                color='danger'
                onClick={() => dispatch(removeUser(user.id))}>
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))
      ) : (
        <h2>No users</h2>
      )}
    </ListGroup>
  );
};

export default UserList;
