import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-blue rounded-4"
      style={{ position: "sticky", top: "0", zIndex: "3" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="logo192.png"
            alt="logo"
            style={{ width: "30px" }}
            className="rounded-4"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
