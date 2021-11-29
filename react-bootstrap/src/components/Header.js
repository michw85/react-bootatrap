import React from "react"
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Express</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Button variant="outline-success" className="btn-nav-hiden">Call us</Button>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center" style={{ flex: 1}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#link">About us</Nav.Link>
                        <NavDropdown.Divider />
                        <NavDropdown title="Our services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Lorem ipsum</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lorem ipsum</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lorem ipsum</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Lorem ipsum</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Divider />
                        <Nav.Link eventKey="link-3">Contact us</Nav.Link>
                        <NavDropdown.Divider />
                    </Nav>
                </Navbar.Collapse>
                <Button variant="outline-success" className="btn-nav">Call us</Button>
            </Container>
        </Navbar>
    );
  }
  
  export default Header;