import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NaviBar.css';
import logo from "./BriidgeIcon.png";

const NaviBar = () => {

    return (
        <Navbar className="color-nav" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <img src={logo} alt="Briidge Logo" width="50" height="50" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="font-nav mr-auto">
                <Nav.Link className="font-nav" href="#home">Home</Nav.Link>
                <Nav.Link className="font-nav" href="#link">Our Plans</Nav.Link>
                <Nav.Link className="font-nav" href="#link">About Us</Nav.Link>
                <Nav.Link className="font-nav" href="#link">Our Tutors</Nav.Link>
                <Nav.Link className="font-nav" href="#link">Social Network</Nav.Link>
                <Nav.Link className="font-nav" href="#link">FAQs</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>

    );
};


export default NaviBar;