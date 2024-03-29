import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from '../components/NaviBar';
import AuthHeader from '../components/AuthHeader';
import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TutorTopBar from '../components/TutorTopBar';
import image from "../Shared/tutor.jpeg";
import ITutorSignup from '../interfaces/ITutorSignup';
import { BRIIDGE_BLUE, BRIIDGE_YELLOW } from '../themes';

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
  color: BRIIDGE_BLUE,
  fontSize: 28,
  },
  link: {
  position: "fixed",
  bottom: 20,
  right: 20,
  },
  headerx: {
  fontFamily: "LeagueSpartan",
  color: BRIIDGE_YELLOW,
  fontSize: 23,
  margin: 15,
  marginBottom: 20,
  },
  payment: {
  fontFamily: "LeagueSpartan",
  color: BRIIDGE_YELLOW,
  margin: 10,
  fontSize: 19,
  },
  leftdiv: {
  display: "flex",
  flexDirection: "column",
  backgroundColor: BRIIDGE_BLUE,
  width: 750,
  height: 500,
  margin: 5,
  },
  innerLeftDiv: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  margin: 30,
  },
  rightdiv: {
  backgroundColor: BRIIDGE_BLUE,
  width: 500,
  margin: 5,
  padding: 20,
  fontWeight: "bold",
  color: "#696969",
  },
  image: {
  borderRadius: "20%",
  height: "70px",
  width: "70px",
  marginTop: "5px",
  marginBottom: "15px",
  },
  upcomingLessons: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  },
  box: {
  float: "left",
  height: 150,
  width: 150,
  backgroundColor: "#ededed",
  borderRadius: 40,
  fontFamily: "LeagueSpartan",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 10,
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
  color: BRIIDGE_YELLOW,
  },
  tutorName: {
    fontSize: 13,
    fontFamily: "LeagueSpartan",
  },
  tutorDate: {
    fontSize: 11,
    fontFamily: "Quicksand-Bold",
  },
  tutorTiming: {
  fontSize: 11,
  fontFamily: "Quicksand-Bold",
  },
  mailIcon: {
  marginLeft: 10,
  marginBottom: 10,
  color: BRIIDGE_YELLOW
  }
}));

type Props = {
  tutor: ITutorSignup
}

export default function TutorsDashboard(props: Props) {
  const classes = useStyles();

  return (
  <div className={classes.maincontainer}>
  <TutorTopBar name={props.tutor.name}/>
  <div className={classes.container}>
    <div className={classes.leftdiv}>
    <h3 className={classes.headerx}>Your Upcoming Lessons</h3>
    <div className={classes.innerLeftDiv}>
      <div className={classes.upcomingLessons}>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor1" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor2" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor3" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor4" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor5" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor6" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor7" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
        <div className={classes.box}>
          <img src={image} className={classes.image} alt="tutor7" />
          <div className={classes.tutorName}>Alberto Connelli</div>
          <div className={classes.tutorDate}>Mon, 22/11</div>
          <div className={classes.tutorTiming}>10:00 - 12:00</div>
        </div>
      </div>
    </div>
    </div>

    <div className={classes.rightdiv}>
    <h3 className={classes.headerx}>Payment</h3>
    <div>
      <img src={image} className={classes.image} alt="tutor1" />
      <FormControlLabel
        value="Emily"
        control={<Checkbox color="secondary" />}
        label={<div className={classes.payment}>Emily</div>}
        labelPlacement="start"
      />
    </div>
    <div>
      <img src={image} className={classes.image} alt="tutor1" />
      <FormControlLabel
        value="Jane"
        control={<Checkbox color="secondary" />}
        label={<div className={classes.payment}>Jane</div>}
        labelPlacement="start"
      />
    </div>
    <div>
      <img src={image} className={classes.image} alt="tutor1" />
      <FormControlLabel
        value="Sarah"
        control={<Checkbox color="secondary" />}
        label={<div className={classes.payment}>Sarah</div>}
        labelPlacement="start"
      />
    </div>


    </div>
  </div>
  </div>
  )
}