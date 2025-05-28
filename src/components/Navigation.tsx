// import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import '../index.css';

function Navigation() {
  return (
    <Navbar expand="lg" bg="black" variant="dark" fixed="top">
      <Navbar.Brand href="#" className='ms-5 gradient-text'>My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto me-5" style={{gap:"40px"}}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#skill">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
