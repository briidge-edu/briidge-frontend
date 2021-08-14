import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NaviBar from "../components/NaviBar";
import wordLogo from "../Shared/BriidgeWordLogo.png";
import mission1 from "../Shared/mission1.png";
import mission2 from "../Shared/mission2.png";
import checkmark from "../Shared/checkmark.png";
import vision1 from "../Shared/vision1.png";
import vision2 from "../Shared/vision2.png";
import vision3 from "../Shared/vision3.png";
import charity from "../Shared/charity.png";
import read from "../Shared/read.png";

import "./AboutUs.css";
import { findByLabelText } from "@testing-library/dom";
import { BRIIDGE_BLUE } from "../themes";

const useStyles = makeStyles((theme) => ({
  firstRow: {
    height: "100vh",
  },

  row: {
    display: "flex",
    "@media (max-width: 1100px)": {
      flexDirection: "column",
    },
  },

  column: {
    flex: 1,
    textAlign: "center",
    "@media (max-width: 1100px)": {},
  },

  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    "@media (max-width: 1100px)": {
      height: "20vh",
    },
  },

  icon: {
    width: 220,
    margin: "10% auto",
    marginTop: "10%",
    height: 200,
  },

  textColumn: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    paddingLeft: "10%",
    paddingRight: "10%",
    alignItems: "center",
  },

  introtext: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20
  },

  marginForLastPage: {
    marginBottom: "170px",
  },

  whoWeAre: {
    marginTop: "20%",
    "@media (max-width: 1100px)": {
      marginTop: "10%",
    },
  },

  multilineColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: 120,
  },

  multiline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 30,
    color: "blue",
  },

  multilineIcon: {
    height: 120,
    width: 120,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },

  checkmark: {
    height: 70,
    width: 70,
    marginRight: "5%",
  },

  premiumSubscriberText: {
    color: "blue",
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    width: 460
  },

  header: {
    textAlign: "center",
    margin: "50px 0 0 0",
  },

  yellowLine: {
    border: "2px solid #ffdf00",
    width: "150px",
    margin: "auto",
    marginBottom: 30,
    marginTop: 25,
  },

  h2: {
    fontFamily: "LeagueSpartan",
    color: BRIIDGE_BLUE,
  },

  p: {
    fontFamily: "Montserrat-Light",
  },

  input: {
    fontFamily: "LeagueSpartan",
  },

  button: {
    fontFamily: "LeagueSpartan",
  },

  missiontext: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    width: 460
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div>
      <NaviBar />
      <div className={`${classes.row} ${classes.firstRow}`}>
        <div className={classes.column} style={{ backgroundColor: BRIIDGE_BLUE }}>
          <img src={wordLogo} alt="Briidge Word Logo" className={classes.img} />
        </div>
        <div className={classes.column}>
          <div className={classes.textColumn}>
            <h2 className={classes.whoWeAre}>Who We Are</h2>
            <div className={classes.yellowLine} />
            <div>
              <div className={classes.introtext}>
                Briidge is a revolutionary matchmaking platform that aims to
                bridge students and tutors together through the use of our
                personalised smart algorithm.
              </div>
              <br />
              <div className={classes.introtext}>
                We also aim to ease information sharing between students by
                connecting them through our social networking platform.
              </div>
              <br />
              <div className={classes.introtext}> 
                At briidge, we strongly believe that everyone has an equal right
                to high-quality education, regardless of any barrier.
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className={classes.header}>Our Mission</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.textColumn}>
            <img className={classes.icon} src={mission1} alt="mission1" />
            <div className={classes.missiontext}>
              We aim to personalize learning by connecting students to tutors
              based on their personal academic needs supporting them towards
              their educational goals.
            </div>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.textColumn}>
            <img className={classes.icon} src={mission2} alt="mission2" />
            <div className={classes.missiontext}>
              We strive to create opportunities for underprivileged students to
              receive high-quality tuition in an environment best suited for
              them.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.textColumn}>
            <h2 className={classes.whoWeAre} style={{ marginBottom: "15%" }}>
              Our Vision
            </h2>
            <p>
              We aim to be the catalyst of change in the tuition industry
              worldwide through our convenient and affordable online tutor
              matchmaking service. We strive to provide access to quality
              education to students worldwide, especially the underprivileged.
            </p>
          </div>
        </div>

        <div className={classes.multilineColumn}>
          <h3 className={classes.multiline}>
            <img
              className={classes.multilineIcon}
              src={vision2}
              alt="vision1"
            />
            <span >Affordability</span>
            <img
              className={classes.checkmark}
              src={checkmark}
              alt="checkmark"
            />
          </h3>
          <h3 className={classes.multiline}>
            <img
              className={classes.multilineIcon}
              src={vision1}
              alt="vision2"
            />
            <span>Flexibility</span>
            <img
              className={classes.checkmark}
              src={checkmark}
              alt="checkmark"
            />
          </h3>
          <h3 className={classes.multiline}>
            <img
              className={classes.multilineIcon}
              src={vision3}
              alt="vision3"
            />
            <span>Convenience</span>
            <img
              className={classes.checkmark}
              src={checkmark}
              alt="checkmark"
            />
          </h3>
        </div>
      </div>
      <h2 className={classes.header}>Our Social Impact</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.textColumn}>
            <img className={classes.icon} src={charity} alt="charity" />
            <div className={classes.premiumSubscriberText}>
              For every one student that becomes a premium subscriber, one other
              underprivileged student is granted free access to our platform and
              can begin maximizing their education journey.
            </div>
            <br/>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.textColumn}>
            <img className={classes.icon} src={read} alt="read" />
            <div className={classes.missiontext}>
              We strive to support the underprivileged student community through
              our platform. Every student using our services will help provide
              better access to quality education for those students in need,
              starting from Singapore.
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
