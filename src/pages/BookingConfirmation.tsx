import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Shared/BriidgeIconTransparent.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Typography, Button } from "@material-ui/core";
import image from "../Shared/tutor.jpeg";

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
  image: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  button: {
    margin: "10px",
    fontFamily: "LeagueSpartan",
  },
}));

export default function BookingConfirmation() {
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
      <div>
        <h3>Booking Confirmation</h3>
        <div>
          <div>Booking Confirmation</div>
          <div>
            <div>Your Tutor</div>
            <img src={image} className={classes.image} alt="" />
            <Typography>Alberto Connelli</Typography>
            <div>&#11088; &#11088; &#11088; &#11088; &#11088;</div>
            <Typography>Preferred Locations: Bukit Batok, Yew Tee</Typography>
          </div>
          <div>
            <div>Secondary School</div>
            <div>SGD 35 / hr</div>
            <div>Subjects:</div>
            <div>A Math</div>
            <div>Secondary 3 Physics</div>
            <div>Literature</div>
          </div>
          <div>
            <div>Lesson Schedule</div>
            <div>Monday, 10 January 2021</div>
            <div>11:00 AM - 12:00 PM</div>
          </div>
        </div>
        <div>
          <div>Tutor Contact Information</div>
          <div>Whatsapp: +65 8159 7523</div>
          <div>Email: jacobstrootman@gmail.com</div>
          <div>Telegram: @jacobstrootman</div>
          <div>
            We have also sent all of your tutor's contact information to your
            email!
          </div>
        </div>
      </div>
    </div>
  );
}
