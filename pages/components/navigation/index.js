import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-scroll";


export default function index(props) {

    return (
        <Navbar variant="light" expand="lg">
          <Container fluid>
          <Navbar.Brand className="text-blue" href="#home">
            <Image width={298} src="./images/logo.png" alt="Hermides Medina" />  
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="end-0 justify-content-end">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <li><Link className="nav-link nav-link--cursor"  to="aboutMe" spy={true} smooth={true}>About me</Link></li>
                <li><Link className="nav-link nav-link--cursor"  to="projects" spy={true} smooth={true}>Projects</Link></li>
                <li><Link className="nav-link nav-link--cursor"  to="contactMe" spy={true} smooth={true}>Contact me</Link></li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )

}
