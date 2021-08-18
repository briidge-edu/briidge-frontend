import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NaviBar from "../components/NaviBar";
import wordLogo from "../Shared/BriidgeWordLogo2.png";

import homepage1 from "../Shared/homepage/homepage1.png";
import homepage2 from "../Shared/homepage/homepage2.png";
import homepage3 from "../Shared/homepage/homepage3.png";
import homepage4 from "../Shared/homepage/homepage4.png";
import homepage5 from "../Shared/homepage/homepage5.png";
import contactus from "../Shared/homepage/contactus.png";

import avatar from "../Shared/avatar.png";
import { Button, Grid, Theme, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import { BRIIDGE_BLUE, BRIIDGE_YELLOW } from "../themes";
import TestimonialSlide from "../components/TestimonialSlide";
import {
  AIMS_AND_OBJECTIVES,
  EMAIL_ADDRESS,
  FEATURES,
  HOW_OUR_PLATFORM_WORKS,
  HOW_WE_CAN_HELP_STUDENTS,
  HOW_WE_CAN_HELP_TUTORS,
  INSTAGRAM_USERNAME,
  LINKEDIN_PROFILE,
} from "../util/constants";

const useStyles = makeStyles((theme) => ({
  landing: {
    height: "100vh",
  },

  row: {
    textAlign: "center",
    padding: theme.spacing(5, 0),
  },

  img: {
    height: 150,
    maxWidth: 150,
    margin: 15,
  },

  bridgeMainImg: {
    maxWidth: 350,
    maxHeight: 400,
  },

  header: {
    margin: theme.spacing(3, 1),
  },

  finalheader: {
    fontFamily: "Quicksand-Bold",
    color: BRIIDGE_BLUE,
    margin: "30px 15%",
    fontSize: 25,
  },

  smallText: {
    fontFamily: "Montserrat-Regular",
  },

  supertitle: {
    width: "100%",
    textAlign: "center",
    margin: "60px 0 60px 0",
    color: "#FFF",
    fontSize: 35,
    fontFamily: "Quicksand-Bold",
  },

  featureHeader: {
    margin: theme.spacing(2, 0),
    color: BRIIDGE_YELLOW,
  },

  subtitle: {
    marginTop: 70,
    marginBottom: -30,
    width: "100%",
    textAlign: "center",
    color: BRIIDGE_YELLOW,
    fontFamily: "Quicksand-Bold",
  },

  // For page 2
  blueTitle: {
    fontFamily: "Montserrat-Regular",
    margin: "10px 0 10px 0",
    color: BRIIDGE_BLUE,
  },

  bigblueTitle: {
    fontFamily: "Montserrat-Regular",
    margin: "10px 0 10px 0",
    color: BRIIDGE_BLUE,
    fontSize: 25,
    fontWeight: "bold",
  },

  whiteTitle: {
    fontFamily: "Montserrat-Regular",
    margin: theme.spacing(2, 0),
    color: "white",
  },

  belowBlueTitle: {
    fontFamily: "Montserrat-Light",
    padding: theme.spacing(0, 8),
  },

  // For page 3 & 4
  blackTitle: {
    fontFamily: "LeagueSpartan",
    fontSize: 25,
    margin: "10px 0 10px 0",
  },

  yellowNumbers: {
    color: BRIIDGE_YELLOW,
    fontSize: 30,
  },

  blueLine: {
    border: "2px solid #0051FF",
    width: "100px",
    margin: "auto",
    marginBottom: theme.spacing(3),
  },

  btn: {
    color: BRIIDGE_YELLOW,
    backgroundColor: BRIIDGE_BLUE,
    fontSize: 18,
    borderRadius: "20px",
    fontFamily: "Quicksand-Bold",
    padding: "5px 19px 5px 19px",
  },

  btn2: {
    color: BRIIDGE_BLUE,
    backgroundColor: BRIIDGE_YELLOW,
    fontSize: 18,
    borderRadius: "20px",
    fontFamily: "Quicksand-Bold",
    padding: "5px 19px 5px 19px",
    marginTop: 5,
  },

  btn3: {
    color: BRIIDGE_YELLOW,
    backgroundColor: BRIIDGE_BLUE,
    fontSize: 14,
    fontFamily: "Quicksand-Bold",
    padding: theme.spacing(1, 3),
  },
  lastimg: {
    height: 410,
    width: "100%",
    margin: 0,
    padding: 0,
  },
  contacttitle: {
    textAlign: "left",
    position: "absolute",
    padding: theme.spacing(1, 3),
    height: "100",
    minWidth: "280px",
    maxWidth: "90vw",
    fontSize: 35,
    fontFamily: "Montserrat-Regular",
    backgroundColor: BRIIDGE_BLUE,
    color: BRIIDGE_YELLOW,
  },
  homepageimgleft: {
    position: "absolute",
    align: "left",
    top: 130,
    left: -160,
    height: 200,
    width: 390,
  },
  homepageimgright: {
    position: "absolute",
    align: "right",
    top: 330,
    right: 0,
    height: 200,
    width: 100.78,
  },
  homepageimgleftcurly: {
    position: "absolute",
    align: "left",
    left: -20,
    height: 100,
    width: 200,
  },
  homepageimgrightcurly: {
    position: "absolute",
    align: "right",
    top: 130,
    right: 0,
    height: 100,
    width: 200,
  },

  homepageimg: {
    height: 60,
    width: 130,
    marginTop: theme.spacing(15),
  },

  contactInformation: {
    padding: theme.spacing(5, 0),
  },
}));

type HomepageRowProps = {
  rowColor?: string;
  header?: string;
  children: React.ReactNode;
};

const HomepageRow: React.FC<HomepageRowProps> = ({
  rowColor = undefined,
  header,
  children,
}: HomepageRowProps) => {
  const classes = useStyles();
  return (
    <div
      className={classes.row}
      style={rowColor ? { backgroundColor: rowColor } : {}}
    >
      {header && <h2 className={classes.header}>{header}</h2>}
      {children}
    </div>
  );
};

export type HowWeCanHelp = { title: string; description: string };

type HowWeCanHelpProps = {
  items: HowWeCanHelp[];
};

const HowWeCanHelp: React.FC<HowWeCanHelpProps> = ({
  items,
}: HowWeCanHelpProps) => {
  const classes = useStyles();
  return (
    <Grid container xs={12} spacing={3}>
      {items.map((item, idx) => (
        <Grid item container xs={12} md={6} direction="column">
          <Grid item>
            <h1 className={classes.yellowNumbers}> {`0${idx + 1}`} </h1>
          </Grid>
          <Grid item>
            <h3 className={classes.blackTitle}>{item.title}</h3>
          </Grid>
          <Grid item>
            <div className={classes.blueLine} />
          </Grid>
          <Grid item>
            <div className={classes.belowBlueTitle}>{item.description}</div>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export type HomepageCard = {
  image: string;
  title: string;
  description: string;
};

const slides = [
  <TestimonialSlide
    avatar={avatar}
    name={"Mariah Turner"}
    identity={"Student"}
    text={
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
    }
  />,
  <TestimonialSlide
    avatar={avatar}
    name={"Mariah Turner"}
    identity={"Student"}
    text={
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
    }
  />,
  <TestimonialSlide
    avatar={avatar}
    name={"Mariah Turner"}
    identity={"Student"}
    text={
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
    }
  />,
];

const Homepage = () => {
  const classes = useStyles();
  const isDesktopView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <div>
      <NaviBar />

      {/* Main landing view*/}
      <div
        className={`${classes.row} ${classes.landing}`}
        style={{ backgroundColor: BRIIDGE_BLUE }}
      >
        <div className={classes.supertitle}>
          {"Learn from the tutor of your choice today!"}
        </div>

        <img
          src={wordLogo}
          alt="Briidge Word Logo"
          className={classes.bridgeMainImg}
        />

        {/* Only render extra shapes on large screen sizes */}
        {isDesktopView && (
          <div>
            <img src={homepage1} className={classes.homepageimgleft} />
            <img src={homepage5} className={classes.homepageimgrightcurly} />
            <img src={homepage4} className={classes.homepageimgright} />
            <img src={homepage2} className={classes.homepageimgleftcurly} />
          </div>
        )}

        <h4 className={classes.subtitle}>
          {"Learn your way! Meet your goals!"}
        </h4>

        <img src={homepage3} className={classes.homepageimg} />
      </div>

      {/* How Our Platform Works */}
      <HomepageRow header="How Our Platform Works">
        <div className={classes.smallText}>
          {
            "With just 3 simple steps you will be on your way towards achieving your very own academic goals"
          }
        </div>

        <Grid container direction="column" xs={12} spacing={3}>
          <Grid item container xs={12}>
            {HOW_OUR_PLATFORM_WORKS.map((item) => (
              <Grid item container xs={12} md={4} direction="column">
                <Grid item>
                  <img src={item.image} className={classes.img} />
                </Grid>
                <Grid item className={classes.blueTitle}>
                  {item.title}
                </Grid>
                <Grid item className={classes.belowBlueTitle}>
                  {item.description}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to={"/signup"}
              className={`${classes.btn} ${"btn-primary"}`}
            >
              {"Join The Briidge Community Now!"}
            </Button>
          </Grid>
        </Grid>
      </HomepageRow>

      {/* How We Can Help You As A Student */}
      <HomepageRow header="How We Can Help You As A Student">
        <HowWeCanHelp items={HOW_WE_CAN_HELP_STUDENTS} />
      </HomepageRow>

      {/* How We Can Help You As A Tutor  */}
      <HomepageRow header="How We Can Help You As A Tutor">
        <HowWeCanHelp items={HOW_WE_CAN_HELP_TUTORS} />
      </HomepageRow>

      {/* Our Features */}
      <HomepageRow rowColor={BRIIDGE_BLUE}>
        <h2 className={classes.featureHeader}>{"Our Features"}</h2>
        <Grid container xs={12} spacing={3}>
          <Grid item container justifyContent="space-between" xs={12}>
            {FEATURES.map((item) => (
              <Grid item xs={12} md={4} container direction="column">
                <Grid item>
                  <img src={item.image} className={classes.img} />
                </Grid>
                <Grid item className={classes.whiteTitle}>
                  {item.title}
                </Grid>
                <Grid
                  item
                  className={classes.belowBlueTitle}
                  style={{ color: "white" }}
                >
                  {item.description}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
              {"Learn more >>"}
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={Link}
              to={"/signup"}
              className={`${classes.btn2} ${"btn-primary"}`}
            >
              {"Start your free trial now!"}
            </Button>
          </Grid>
        </Grid>
      </HomepageRow>

      {/* Mission, Vision and Social Impact */}
      <HomepageRow>
        <h5 className={classes.finalheader}>
          {
            "Briidge strives for a world where everyone has equal rights and access to quality education regardless of their background."
          }
        </h5>
        <Grid container direction="column" xs={12} spacing={3}>
          <Grid item container>
            {AIMS_AND_OBJECTIVES.map((item) => (
              <Grid item container xs={12} md={4} direction="column">
                <Grid item className={classes.bigblueTitle}>
                  {item.title}
                </Grid>
                <Grid item>
                  <img src={item.image} className={classes.img} />
                </Grid>
                <Grid item className={classes.belowBlueTitle}>
                  {item.description}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Link to="/" style={{ color: "black", fontWeight: "bold" }}>
              {"Learn more >>"}
            </Link>
          </Grid>
        </Grid>
      </HomepageRow>

      {/* Testimonials */}
      <HomepageRow header="What Our Briidge Community Says...">
        <Carousel
          slides={slides}
          autoplay={true}
          interval={7000}
          arrows={false}
          arrowBorders={false}
        />
      </HomepageRow>

      {/* Contact Information Banner */}
      <div className={classes.contacttitle}>{"Contact Information"}</div>
      <img src={contactus} className={classes.lastimg} />

      {/* Contact Details */}
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        className={classes.contactInformation}
        xs={12}
        spacing={3}
      >
        {[
          { method: "EMAIL ADDRESS", value: EMAIL_ADDRESS },
          { method: "LINKEDIN", value: LINKEDIN_PROFILE },
          { method: "INSTAGRAM", value: INSTAGRAM_USERNAME },
        ].map((item) => (
          <Grid
            item
            container
            xs={12}
            md={3}
            direction="column"
            alignItems="center"
          >
            <Grid item>{item.method}</Grid>
            <Grid item>{item.value}</Grid>
          </Grid>
        ))}
        <Grid item>
          <Button type="button" className={`${classes.btn3} ${"btn-primary"}`}>
            {"Drop us an enquiry!"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
