import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../components/TopBar";
import { Typography, Button } from "@material-ui/core";
import image from "../Shared/tutor.jpeg";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "2%",
    textAlign: "center",
    fontFamily: "Quicksand-Bold",
    color: "#0051ff",
    fontSize: 28,
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
      <TopBar />
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
