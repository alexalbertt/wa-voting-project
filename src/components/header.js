import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" >
            <Navbar.Brand href="#home">WA Voting Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="mr-auto">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Explore</Nav.Link>
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="#home">Donate</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}