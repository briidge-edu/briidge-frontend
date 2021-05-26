import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Shared/BriidgeIconTransparent.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TutorCard from "../components/TutorCard";
import RecommenedTutor from "../components/RecommendedTutor";
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
  header: {
    marginTop: "2%",
    textAlign: "center",
    fontFamily: "Quicksand-Bold",
    color: "#0051ff",
    fontSize: 28,
  },
  icon: {
    marginRight: "20px",
  },
  recommendations: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
  },

  link: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.topBar}>
        <img
          src={logo}
          alt="Briidge Logo"
          width="50"
          height="35"
          style={{ margin: 15 }}
        />
        <div style={{ margin: "0 auto" }}>Welcome, John Doe!</div>
        <MailOutlineIcon className={classes.icon} fontSize="large" />
        <AccountCircleIcon className={classes.icon} fontSize="large" />
      </div>
      <div className={classes.header}>The Best Suited Tutors For You</div>
      <div className={classes.recommendations}>
        <RecommenedTutor />
        <RecommenedTutor />
        <RecommenedTutor />
      </div>
      <Link to="/" className={classes.link}>
        I'm unable to find the tutor of my choice.
      </Link>
    </div>
  );
}
