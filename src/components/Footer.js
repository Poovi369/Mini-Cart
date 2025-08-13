import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <p className="mb-1">
          📍 <strong>Branch:</strong> Chennai - Main Office
        </p>
        <p className="mb-1">
          🤝 <strong>Collaboration:</strong> AJIO, ZUDIO
        </p>
        <p className="mb-0">
          © {new Date().getFullYear()} Minicart Project — Built with ❤️ using React & Bootstrap
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
