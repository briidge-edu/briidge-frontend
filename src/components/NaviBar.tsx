import React from "react";
import {Navbar, Nav, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../Shared/BriidgeIconTransparent.png";
import { Button } from "@material-ui/core";
import { BRIIDGE_BLUE, BRIIDGE_YELLOW } from "../themes";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: BRIIDGE_BLUE,
    padding: theme.spacing(1),
  },

  fontNav: {
    color: "rgb(255, 223, 0) !important",
    fontFamily: "Quicksand-Bold",
  },

  btn: {
    color: "black",
    backgroundColor: BRIIDGE_YELLOW,
    borderRadius: "20px",
    fontFamily: "Quicksand-Bold",
    padding: "5px 19px 5px 19px",
    margin: theme.spacing(1),
  },
}));

const NaviBar = () => {
  const classes = useStyles();

  return (
    <Navbar className={`${classes.nav} ${"fixed-top"}`} expand="md">
      <Link to="/">
        <img
          src={logo}
          alt="Briidge Logo"
          width="50"
          height="35"
          style={{ marginRight: 15 }}
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={classes.fontNav} as={Link} to="./planspage">
            Our Plans
          </Nav.Link>
          <Nav.Link className={classes.fontNav} as={Link} to="./aboutus">
            About Us
          </Nav.Link>
          <Nav.Link className={classes.fontNav} as={Link} to="./tutors">
            Our Tutors
          </Nav.Link>
          <Nav.Link
            className={classes.fontNav}
            as={Link}
            to="./SocialNetworkPage"
          >
            Social Network
          </Nav.Link>
          <Nav.Link className={classes.fontNav} as={Link} to="#href">
            FAQs
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            type="button"
            className={`${classes.btn} ${"btn-primary"}`}
            component={Link}
            to={"/login"}
          >
            Login
          </Button>
          <Button
            type="button"
            className={`${classes.btn} ${"btn-primary"}`}
            component={Link}
            to={"/signup"}
          >
            Sign up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default NaviBar;