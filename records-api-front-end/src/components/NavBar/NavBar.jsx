import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
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
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                <Nav.Link>
                  <AddItem />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
