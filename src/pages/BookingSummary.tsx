import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../components/TopBar";
import { Typography, Button } from "@material-ui/core";
import image from "../Shared/tutor.jpeg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

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
    fontSize: 35,
  },
  image: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    marginTop: "15px",
    marginBottom: "15px",
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
    width: 600,
    margin: 5,
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  rightdiv: {
    backgroundColor: "#ededed",
    width: 300,
    margin: 5,
    padding: 20,
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
}));

export default function BookingSummary() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.maincontainer}>
      <TopBar />
      <div className={classes.container}>
        <div>
          <h3 className={classes.headerx}>Booking Summary</h3>
          <div className={classes.leftdiv}>
            <div>
              <div>
                <div className={classes.headers}>Your Tutor</div>
                <div className={classes.tutordetails}>
                  <img src={image} className={classes.image} alt="" />
                  <div className={classes.tutor}>
                    <Typography
                      style={{ fontFamily: "Montserrat-Regular", fontSize: 18 }}
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
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  Secondary School
                </div>
                <div className={classes.headers}>SGD 35/hr</div>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  Subjects:
                </div>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  A Math
                </div>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  Secondary 3 Physics
                </div>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  Literature
                </div>
              </div>
              <div>
                <div className={classes.headers} style={{ marginTop: 20 }}>
                  Lesson Schedule
                </div>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  Monday, 10 January 2021
                </div>
                <div style={{ fontWeight: "bold", color: "#696969" }}>
                  11:00 AM - 12:00 PM
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              className={classes.schedulebutton}
              type="reset"
              onClick={() => history.goBack()}
            >
              Re-Schedule
            </Button>
          </div>
        </div>
        <div>
          <h3 className={classes.headerx}>Payment Summary</h3>
          <div className={classes.rightdiv}>
            <div>
              <div style={{ marginBottom: 165 }}>
                <div>Total</div>
                <div className={classes.rightmoney}>SGD 35</div>

                <div>GST (7%)</div>
                <div className={classes.rightmoney}>SGD 2.45</div>
              </div>
              <div>
                <div
                  className={classes.borderline}
                  style={{ marginBottom: 20 }}
                />

                <div style={{ fontSize: 18 }}>Total Amount</div>
                <div
                  className={classes.rightmoney}
                  style={{ color: "#0051FF", fontSize: 20, marginTop: -30 }}
                >
                  SGD 37.45
                </div>
                <div className={classes.borderline} />
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.paymentbutton}
            type="submit"
            component={Link}
            to={"/bookingconfirmation"}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
