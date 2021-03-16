import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './NaviBar.css';
import logo from "./BriidgeIconTransparent.png";

const NaviBar = () => {

    return (
        <Navbar className="color-nav" expand="md">
        <Link to="/">
            <img src={logo} alt="Briidge Logo" width="50" height="35" style={{"marginRight":15}}/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="font-nav" href="#link">Our Plans</Nav.Link>
                <Nav.Link className="font-nav" href="#link">About Us</Nav.Link>
                <Nav.Link className="font-nav" href="#link">Our Tutors</Nav.Link>
                <Nav.Link className="font-nav" href="#link">Social Network</Nav.Link>
                <Nav.Link className="font-nav" href="#link">FAQs</Nav.Link>
            </Nav>
            <Form>
                <button type="button" className="btn btn-primary" style={{"marginRight":10}}>Login</button>
                <button type="button" className="btn btn-primary">Sign up</button>
            </Form>
        </Navbar.Collapse>
        </Navbar>

    );
};


export default NaviBar;