// import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} Devi Pavithra R. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
