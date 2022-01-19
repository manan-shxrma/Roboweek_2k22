import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function navbar(){
    return(
    <>
    <Navbar className="navBar-top" variant="dark" expand="md">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="d-flex justify-content-center me-auto my-2 my-lg-0" navbarScroll>
        <Nav.Link className="navLink" href="#action1">Home</Nav.Link>
        <Nav.Link className="navLink" href="#action2">Link</Nav.Link>
        <Nav.Link className="navLink" href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>)
}

export default navbar