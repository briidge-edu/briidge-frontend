import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Shared/BriidgeIconTransparent.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Typography, Button } from "@material-ui/core";
import image from "../Shared/tutor.jpeg";
import tick from "../Shared/tick.png";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 170,
    paddingRight: 170,
    paddingTop: 10,
    paddingBottom: 15,
  },
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
    fontSize: 35,
  },
  icon: {
    marginRight: "20px",
  },
  image: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  tick: {
    borderRadius: "50%",
    height: "40px",
    width: "80px",
    marginLeft: -15,
    marginTop: 10,
    marginBottom: 10
  },
  schedulebutton: {
    margin: "10px",
    fontFamily: "LeagueSpartan",
    color: "#0051FF",
    height: 40,
    width: 160,
    position: "absolute",
    bottom: 50,
    left: 590,
  },
  paymentbutton: {
    margin: 5,
    fontFamily: "Quicksand-Bold",
    fontSize: 25,
    color: "#ffdf00",
    height: 60,
    width: 300,
  },
  leftdiv: {
    backgroundColor: "#ededed",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 50,
    display: "flex",
    flexDirection: "row",
  },
  rightdiv: {
    backgroundColor: "#ededed",
    marginTop: 5,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 50,
    fontWeight: "bold",
    color: "#696969",
  },
  headerx: {
    fontFamily: "LeagueSpartan",
    color: "#0051FF",
    fontSize: 23,
    margin: 10,
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
  headers: {
    color: "#0051ff",
    fontWeight: "bold",
    fontSize: 20,
  },
  borderline: {
    backgroundColor: "#C0C0C0",
    width: 280,
    height: 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: -10,
    display: "flex",
    justifyContent: "center",
  },
  rightmoney: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: -25,
    marginBottom: 20,
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  greensign: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: 'center'
  },
  greenwords: {
    color: "#32CD32",
    fontWeight: "bold",
    fontSize: 28,
  }
}));

export default function BookingConfirmation() {
  const classes = useStyles();

  return (
    <div className={classes.maincontainer}>
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
      <div className={classes.container}>
        <div>
          <h3 className={classes.headerx}>Booking Summary</h3>
          <div className={classes.leftdiv}>
            <div className={classes.row}>
              <div>
                <div>
                  <div className = {classes.greensign}>
                  <img src={tick} className={classes.tick} alt="" />
                    <div className = {classes.greenwords}>Booking Confirmed!</div>
                  </div>
                  <div className={classes.headers}>Your Tutor</div>
                  <div className={classes.tutordetails}>
                    <img src={image} className={classes.image} alt="" />
                    <div className={classes.tutor}>
                      <Typography
                        style={{
                          fontFamily: "Montserrat-Regular",
                          fontSize: 18,
                        }}
                      >
                        Alberto Connelli
                      </Typography>
                      <div>&#11088; &#11088; &#11088; &#11088; &#11088;</div>
                      <Typography style={{ fontSize: 13 }}>
                        Preferred Locations: Bukit Batok, Yew Tee
                      </Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={classes.headers}>Lesson Schedule</div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "#696969",
                      fontSize: 14,
                    }}
                  >
                    Monday, 10 January 2021
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "#696969",
                      fontSize: 14,
                    }}
                  >
                    11:00 AM - 12:00 PM
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 90, marginLeft: 20 }}>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  Secondary School
                </div>
                <div className={classes.headers}>SGD 35/hr</div>
                <div
                  style={{ fontWeight: "bold", color: "#696969", fontSize: 14 }}
                >
                  Subjects:
                </div>
                <div
                  style={{ fontWeight: "bold", color: "#696969", fontSize: 14 }}
                >
                  A Math
                </div>
                <div
                  style={{ fontWeight: "bold", color: "#696969", fontSize: 14 }}
                >
                  Secondary 3 Physics
                </div>
                <div
                  style={{ fontWeight: "bold", color: "#696969", fontSize: 14 }}
                >
                  Literature
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.rightdiv}>
            <div className={classes.headers} style={{ marginBottom: 5 }}>
              Tutor Contact Information
            </div>
            <div style={{ fontWeight: "bold", color: "#696969", fontSize: 12 }}>
              Whatsapp: +65 8156 7523
            </div>
            <div style={{ fontWeight: "bold", color: "#696969", fontSize: 12 }}>
              Email: jacobstrootman@gmail.com
            </div>
            <div style={{ fontWeight: "bold", color: "#696969", fontSize: 12 }}>
              Telegram: @jacobstrootman
            </div>
            <div
              style={{
                fontWeight: "bold",
                color: "#696969",
                marginTop: 5,
                fontSize: 15,
              }}
            >
              We have also sent all of your tutor's contact information to your
              email!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
