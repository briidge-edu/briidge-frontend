import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../components/TopBar";
import RecommenedTutor from "../components/RecommendedTutor";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import TutorTopBar from "../components/TutorTopBar";
import image from "../Shared/tutor.jpeg";
import ChatIcon from '@material-ui/icons/Chat';

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
  headerx: {
    fontFamily: "LeagueSpartan",
    color: "#ffdf00",
    fontSize: 23,
    margin: 10,
    marginBottom: 20,
  },
  channels: {
    fontFamily: "LeagueSpartan",
    color: "#ffdf00",
    margin: 10,
    fontSize: 19,
  },
  leftdiv: {
    backgroundColor: "#0051FF",
    width: 600,
    margin: 5,
    padding: 20,
    flexDirection: "row",
  },
  rightdiv: {
    backgroundColor: "#0051FF",
    width: 300,
    margin: 5,
    padding: 20,
    fontWeight: "bold",
    color: "#696969",
  },
  tutordetails: {
    display: "flex",
    flexDirection: "row",
  },
  tutor: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: 13,
    padding: 20,
  },
  image: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  headers: {
    color: "#0051ff",
    fontWeight: "bold",
    fontSize: 20,
  },
  upcomingSessions: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    "@media (max-width: 1100px)": {
      flexDirection: "column",
    },
  },
  box: {
    float: "left",
    width: "30%",
    backgroundColor: "#ededed",
    borderRadius: 40,
    fontFamily: "LeagueSpartan",
    padding: "3%",
    margin: "1%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1100px)": {
      width: "80vw",
      marginTop: "10%",
    },
    textAlign: "center",
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


}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.maincontainer}>
      <TutorTopBar />
      <div className={classes.container}>
            <div className={classes.leftdiv}>
              <div>
                <h3 className={classes.headerx}>Your upcoming sessions for the week</h3>
                <div className={classes.upcomingSessions}>

                  <div className={classes.box}>
                    <img src={image} className={classes.image} alt="tutor1" />
                    <Typography>Alberto Connelli</Typography>
                    <ChatIcon />
                    <div className={classes.tutorSubjects}>Physics</div>
                    <div className={classes.tutorDate}>Mon, 22/11</div>
                    <div className={classes.tutorTiming}>10:00 - 12:00</div>
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
                    <img src={image} className={classes.image} alt="tutor1" />
                    <Typography>Alberto Connelli</Typography>
                    <ChatIcon />
                    <div className={classes.tutorSubjects}>Physics</div>
                    <div className={classes.tutorDate}>Mon, 22/11</div>
                    <div className={classes.tutorTiming}>10:00 - 12:00</div>
                  </div>
                </div>
             </div>

            </div>
        <div>
          <div className={classes.rightdiv}>
            <div>
              <div style={{ marginBottom: 165 }}>
                <h3 className={classes.headerx}>Channels Subscribed</h3>
                <h4 className={classes.channels}>NUS Matters</h4>

                </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
}
