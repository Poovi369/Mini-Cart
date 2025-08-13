import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand as={Link} to="/">MiniCart</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  )
}

export default Header