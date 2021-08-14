import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import RecommendedTutor from "../components/RecommendedTutor";
import IStudentSignup from "../interfaces/IStudentSignup";
import { BRIIDGE_BLUE } from "../themes";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "2%",
    textAlign: "center",
    fontFamily: "Quicksand-Bold",
    color: BRIIDGE_BLUE,
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
}));

type Props = {
  student: IStudentSignup
}

export default function Dashboard(props: Props) {
  const classes = useStyles();

  return (
    <div>
      <TopBar name={props.student.name}/>
      <div className={classes.header}>The Best Suited Tutors For You</div>
      <div className={classes.recommendations}>
        <RecommendedTutor />
        <RecommendedTutor />
        <RecommendedTutor />
      </div>
      <Link to="/studentdashboard" className={classes.link}>
        I'm unable to find the tutor of my choice.
      </Link>
    </div>
  );
}
