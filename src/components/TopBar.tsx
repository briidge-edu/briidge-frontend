import React from "react";
import logo from "../Shared/BriidgeIconTransparent.png";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  topBar: {
    height: "60px",
    backgroundColor: "#0051FF",
    color: "#ffdf00",
    fontFamily: "LeagueSpartan",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 30,
  },
  icon: {
    marginRight: "20px",
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <Link to="/">
        <img
          src={logo}
          alt="Briidge Logo"
          width="50"
          height="35"
          style={{ margin: 15 }}
        />
      </Link>
      <div style={{ margin: "0 auto" }}>Welcome, John Doe!</div>
      <MailOutlineIcon className={classes.icon} fontSize="large" />
      <AccountCircleIcon className={classes.icon} fontSize="large" />
    </div>
  );
}
