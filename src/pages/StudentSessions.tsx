import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../components/TopBar";
import RecommenedTutor from "../components/RecommendedTutor";
import { Typography, Button, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import TutorTopBar from "../components/TutorTopBar";
import image from "../Shared/tutor.jpeg";
import ChatIcon from '@material-ui/icons/Chat';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MailIcon from '@material-ui/icons/Mail';

//TODO: Make this page nice for mobile

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
  },
  header: {
    marginTop: "2%",
    textAlign: "center",
    fontFamily: "Quicksand-Bold",
    color: "#0051ff",
    fontSize: 28,
  },
  link: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  headerx: {
    fontFamily: "LeagueSpartan",
    color: "#ffdf00",
    fontSize: 23,
    margin: 15,
    marginBottom: 20,
  },
  channels: {
    fontFamily: "LeagueSpartan",
    color: "#ffdf00",
    margin: 10,
    fontSize: 19,
  },
  leftdiv: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0051FF",
    width: 900,
    height: 500,
    margin: 5,
  },
  innerLeftDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  rightdiv: {
    backgroundColor: "#0051FF",
    width: 500,
    margin: 5,
    padding: 20,
    fontWeight: "bold",
    color: "#696969",
  },
  image: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  upcomingSessions: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    // "@media (max-width: 1100px)": {
    //   flexDirection: "column",
    // },
  },
  box: {
    float: "left",
    width: "30%",
    height: 360,
    backgroundColor: "#ededed",
    borderRadius: 40,
    fontFamily: "LeagueSpartan",
    padding: "3%",
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // "@media (max-width: 1100px)": {
    //   width: "80vw",
    //   marginTop: "10%",
    // },
    textAlign: "center",
  },
  arrowBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // "@media (max-width: 1100px)": {
    //   width: "80vw",
    //   marginTop: "10%",
    // },
    justifyContent: "center",
  },
  arrow: {
    width: 50,
    height: 50,
    color: "#ffdf00",
  },
  tutorSubjects: {
    fontSize: 15,
    fontFamily: "Montserrat-Light",
    marginTop: 7,
    marginBottom: 7,
  },
  tutorDate: {
    fontSize: 13,
    fontFamily: "LeagueSpartan",
  },
  tutorTiming: {
    fontSize: 13,
    fontFamily: "LeagueSpartan",
  },
  mailIcon: {
    marginLeft: 10,
    marginBottom: 10,
    color: "#ffdf00"
  }
}));

export default function StudentSessions() {
  const classes = useStyles();

  return (
    <div className={classes.maincontainer}>
      <TutorTopBar />
      <div className={classes.container}>
        <div className={classes.leftdiv}>
          <h3 className={classes.headerx}>Your upcoming sessions for the week</h3>
          <div className={classes.innerLeftDiv}>
            <div className={classes.upcomingSessions}>
              <div className={classes.arrowBox}>
                <ArrowBackIosIcon className={classes.arrow} />
              </div>
              <div className={classes.box}>
                <img src={image} className={classes.image} alt="tutor1" />
                <Typography>Alberto Connelli</Typography>
                <ChatIcon />
                <div className={classes.tutorSubjects}>Physics</div>
                <div className={classes.tutorDate}>Mon, 22/11</div>
                <div className={classes.tutorTiming}>10:00 - 12:00</div>
              </div>
              <div className={classes.box}>
                <img src={image} className={classes.image} alt="tutor2" />
                <Typography>Alberto Connelli</Typography>
                <ChatIcon />
                <div className={classes.tutorSubjects}>Maths</div>
                <div className={classes.tutorDate}>Mon, 22/11</div>
                <div className={classes.tutorTiming}>12:00 - 14:00</div>
              </div>
              <div className={classes.box}>
                <img src={image} className={classes.image} alt="tutor3" />
                <Typography>Alberto Connelli</Typography>
                <ChatIcon />
                <div className={classes.tutorSubjects}>Science</div>
                <div className={classes.tutorDate}>Mon, 22/11</div>
                <div className={classes.tutorTiming}>14:00 - 16:00</div>
              </div>

              <div className={classes.arrowBox}>
                <ArrowForwardIosIcon className={classes.arrow} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.rightdiv}>
          <div style={{ marginBottom: 165 }}>
            <h3 className={classes.headerx}>Channels Subscribed</h3>
            <div className={classes.channels}>
              NUS Matters
              <Badge badgeContent={2} color="error">
                <MailIcon className={classes.mailIcon} />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
