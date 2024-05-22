import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AddItem } from "../AddItem/AddItem";
import logo from "../../../src/logo-color.png";
import "./styles.css";

export const NavBar = () => {
  // The breakpoint at which the Navbar will collapse
  const expand = "md";

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary-mb-3">
        <Container fluid className="bg-light" id="navbar">
          <Navbar.Brand href="/" className="navbar-brand">
            <img
              id="navbar-logo"
              className="align-baseline"
              src={logo}
              alt="Color APItems Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            id="nav-bar-toggle"
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Options
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link id="nav-link-home" className="me-4" href="/">
                  Home
                </Nav.Link>
                <Nav.Link id="nav-link-add-item" className="me-4">
                  <AddItem />
                </Nav.Link>
                <Nav.Link
                  id="nav-link-portfolio"
                  href="https://dschulte1982.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Portfolio
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
