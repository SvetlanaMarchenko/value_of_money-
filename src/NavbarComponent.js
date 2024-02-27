import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

const NavbarComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Home');

  const handleToggleOffcanvas = () => setShowOffcanvas((prev) => !prev);

  const handleLinkClick = (itemName) => {
    setSelectedNavItem(itemName);
    handleToggleOffcanvas();
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="custom_navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleOffcanvas} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand>{selectedNavItem}</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav_part">Home</Nav.Link>
            <Nav.Link as={Link} to="/Resources" className="nav_part">Resources</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav_part">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="nav_part" onClick={() => handleLinkClick('Home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Resources" className="nav_part" onClick={() => handleLinkClick('Resources')}>Resources</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav_part" onClick={() => handleLinkClick('Contact')}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;
