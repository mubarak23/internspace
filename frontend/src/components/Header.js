import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="bg" collapseOnSelect>
        <Container>
          <Navbar.Brand>ProShop</Navbar.Brand>
          <Navbar.Toggle arial-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>cart
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-user"></i>SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
