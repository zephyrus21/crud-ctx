import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Heading: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <NavbarBrand href='/'>Home</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to='/add' className='btn btn-primary'>
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
