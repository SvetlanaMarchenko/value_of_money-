import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="custom_navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/" className="nav_part">Home</Nav.Link>
          <Nav.Link as={Link} to="/Resource" className="nav_part">Resource</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav_part">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
