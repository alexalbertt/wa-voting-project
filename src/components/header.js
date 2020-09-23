import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import headerStyles from "./header.module.scss";
import "./header.scss";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md">
            <Navbar.Brand href="/"><span class="header-link-text">WA Voting Project</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="mr-auto">
                <Nav className="ml-auto">
                    {/* <Nav.Link href="#home">Explore</Nav.Link> */}
                    <Nav.Link href="/about"><span class="header-link-text">About Us</span></Nav.Link>
                    <Nav.Link href="/donate"><span class="header-link-donate">Donate</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}