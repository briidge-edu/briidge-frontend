import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../Shared/BriidgeIconTransparent.png";

const useStyles = makeStyles((theme) => ({
    colorNav: {
        backgroundColor: "#0051FF",
    },
    
    fontNav: {
        color: "rgb(255, 223, 0) !important",
        fontFamily: "Quicksand-Bold",
    },
    
    btn: {
        color: "black",
        backgroundColor: "#ffdf00",
        borderRadius: "20px",
        fontFamily: "Quicksand-Bold",
        padding: "5px 19px 5px 19px",
    }

}));
    

const NaviBar = () => {
    const classes = useStyles();

    return (
        <Navbar className={classes.colorNav} expand="md">
        <Link to="/">
            <img src={logo} alt="Briidge Logo" width="50" height="35" style={{"marginRight":15}}/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className={classes.fontNav} href="#link">Our Plans</Nav.Link>
                <Nav.Link className={classes.fontNav} href="#link">About Us</Nav.Link>
                <Nav.Link className={classes.fontNav} href="#link">Our Tutors</Nav.Link>
                <Nav.Link className={classes.fontNav} href="#link">Social Network</Nav.Link>
                <Nav.Link className={classes.fontNav} href="#link">FAQs</Nav.Link>
            </Nav>
            <Form>
                <button type="button" className={`${classes.btn} ${"btn-primary"}`} style={{"marginRight":10}}>Login</button>
                <button type="button" className={`${classes.btn} ${"btn-primary"}`}>Sign up</button>
            </Form>
        </Navbar.Collapse>
        </Navbar>

    );
};


export default NaviBar;