import React from "react";
// import logotip from "./Logotip/logo192.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand hraf="/">
            <img
              src={logotip}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="logotip"
            />
            <Nav>
              <Nav.Link href="/home">React site</Nav.Link>
            </Nav>
          </Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/student">Карточка студента</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
