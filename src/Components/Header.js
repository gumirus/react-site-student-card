import React, { Component } from "react";
import Home from "../Pages/Home";
import CardStudent from "../Pages/CardStudent";
import Contact from "../Pages/Contact";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand hraf="/">
              <img
                src={Logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/cardStudent">Карточка студента</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/cardStudent" exact component={CardStudent} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
