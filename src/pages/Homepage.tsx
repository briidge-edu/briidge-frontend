import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NaviBar from "../components/NaviBar";
import wordLogo from "../Shared/BriidgeWordLogo2.png";
import how1 from "../Shared/Tutor.png";
import how2 from "../Shared/Match.png";
import how3 from "../Shared/Date.png";
import homepage1 from "../Shared/homepage/homepage1.png";
import homepage2 from "../Shared/homepage/homepage2.png";
import homepage3 from "../Shared/homepage/homepage3.png";
import homepage4 from "../Shared/homepage/homepage4.png";
import homepage5 from "../Shared/homepage/homepage5.png";
import contactus from "../Shared/homepage/contactus.png";
import book from "../Shared/book.png";
import earth from "../Shared/earth.png";
import heart from "../Shared/heart.png";
import StuNet from "../Shared/StuNet.png";
import avatar from "../Shared/avatar.png";
import Schedule from "../Shared/Schedule.png";
import Tutor2 from "../Shared/Tutor2.png";
import { Button, Grid, Theme, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import { BRIIDGE_BLUE, BRIIDGE_YELLOW } from "../themes";
import TestimonialSlide from "../components/TestimonialSlide";
import {
  EMAIL_ADDRESS,
  INSTAGRAM_USERNAME,
  LINKEDIN_PROFILE,
} from "../util/constants";

const useStyles = makeStyles((theme) => ({
  landing: {
    height: "100vh",
  },

  row: {
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 70,
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
    textAlign: "center",
    margin: "20px 0 20px 0",
  },

  finalheader: {
    fontFamily: "Quicksand-Bold",
    color: BRIIDGE_BLUE,
    textAlign: "center",
    margin: "40px 15% 30px 15%",
    fontSize: 25,
  },

  smallText: {
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    margin: "0 0 20px 0",
  },

  supertitle: {
    width: "100%",
    textAlign: "center",
    margin: "60px 0 60px 0",
    color: "#FFF",
    fontSize: 35,
    fontFamily: "Quicksand-Bold",
  },

  featuretitle: {
    margin: theme.spacing(2),
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
    margin: "10px 0 10px 0",
    color: "#FFF",
  },

  belowBlueTitle: {
    fontFamily: "Montserrat-Light",
    paddingLeft: "12%",
    paddingRight: "12%",
    paddingBottom: "3%",
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

type HowWeCanHelpProps = {
  items: { title: string; description: string }[];
};

const HowWeCanHelp = ({ items }: HowWeCanHelpProps) => {
  const classes = useStyles();
  return (
    <Grid container>
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

const Homepage = () => {
  const classes = useStyles();
  const isDesktopView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );
  let slides = [
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

  return (
    <div>
      <NaviBar />
      <div
        className={`${classes.row} ${classes.landing}`}
        style={{ backgroundColor: BRIIDGE_BLUE }}
      >
        <div className={classes.supertitle}>
          {"Learn from the tutor of your choice today!"}
        </div>

        {isDesktopView && (
          <div>
            <img
              src={homepage1}
              alt="design1"
              className={classes.homepageimgleft}
            />
            <img
              src={homepage5}
              alt="design5"
              className={classes.homepageimgrightcurly}
            />
          </div>
        )}

        <img
          src={wordLogo}
          alt="Briidge Word Logo"
          className={classes.bridgeMainImg}
        />

        {isDesktopView && (
          <div>
            <img
              src={homepage4}
              alt="design4"
              className={classes.homepageimgright}
            />
            <img
              src={homepage2}
              alt="design2"
              className={classes.homepageimgleftcurly}
            />
          </div>
        )}

        <h4 className={classes.subtitle}>
          {"Learn your way! Meet your goals!"}
        </h4>
        <img src={homepage3} alt="design3" className={classes.homepageimg} />
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>{"How Our Platform Works"}</h2>

        <div className={classes.smallText}>
          {
            "With just 3 simple steps you will be on your way towards achieving your very own academic goals"
          }
        </div>

        <Grid container>
          <Grid item container xs={12} md={4} direction="column">
            <Grid item>
              <img src={how1} alt="how1" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.blueTitle}>
                {"Let Us Know What You Seek For In A Tutor"}
              </div>
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle}>
                {"You will be asked to answer a few questions so that we can better understand your academic needs. " +
                  "Our smart student-tutor matching system will then recommend the most suitable tutors to you."}
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4} direction="column">
            <Grid item>
              <img src={how2} alt="how2" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.blueTitle}>
                {"Connect With The Tutor Of Your Choice"}
              </div>
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle}>
                {
                  "Based on the recommended group of tutors, you choose the preferred tutor that you believe will best suit your academic needs."
                }
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4} direction="column">
            <Grid item>
              <img src={how3} alt="how3" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.blueTitle}>{"Arrange Your Lessons"}</div>
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle}>
                {"After connecting with your preferred tutor, you may then proceed to book and schedule your lessons " +
                  "through our convenient booking system."}
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Button
          type="button"
          className={`${classes.btn} ${"btn-primary"}`}
          component={Link}
          to={"/signup"}
        >
          {"Join The Briidge Community Now!"}
        </Button>
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>{"How We Can Help You As A Student"}</h2>
        <HowWeCanHelp
          items={[
            {
              title: "Personalised Learning",
              description:
                "Ability to find tutors based on the individual's personal academic needs and educational goals.",
            },
            {
              title: "All Education Levels",
              description: "Our platform caters to all educational levels.",
            },
            {
              title: "Friendly Review System",
              description:
                "Opportunity to compare different tutors through a reliable review system before making a decision.",
            },
            {
              title: "Peer to Peer Learning",
              description:
                "Our social networking platform promotes connectivity and networking between students, easing sharing" +
                "of educational resources with one another.",
            },
          ]}
        />
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>{"How We Can Help You As A Tutor"}</h2>
        <HowWeCanHelp
          items={[
            {
              title: "Great Exposure",
              description:
                "Our platform connects you to a wide pool of students from various education levels, " +
                "eliminating difficulties in sourcing for students.",
            },
            {
              title: "Build Credibility",
              description:
                "Our ratings and review system help you build credibility throughout your journey with us.",
            },
            {
              title: "Track Lessons & Payments",
              description:
                "Our platform allows you to conveniently plan and keep track of your lessons and payments with no hassle.",
            },
            {
              title: "Freedom to Choose",
              description:
                "Our platform gives you the freedom to choose your students, ranging from education levels, " +
                "specific subjects and specific teaching style.",
            },
          ]}
        />
      </div>

      <div className={classes.row} style={{ backgroundColor: BRIIDGE_BLUE }}>
        <h2 className={classes.featuretitle}>{"Our Features"}</h2>

        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4} container direction="column">
            <Grid item>
              <img src={Tutor2} alt="how1" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.whiteTitle}>
                {"Personalised Tutor Matchmaking"}
              </div>
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle} style={{ color: "#FFF" }}>
                {
                  "Our platform connects you with the tutor of your choice based on your personal academic goals or needs."
                }
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} container direction="column">
            <Grid item>
              <img src={Schedule} alt="how2" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.whiteTitle}>
                {"Convenient Scheduling"}
              </div>
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle} style={{ color: "#FFF" }}>
                {"Our platform eases lesson booking and scheduling with your tutor. " +
                  "Constant reminders of upcoming lessons and payment deadlines provides you with a seamless tuition experience."}
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} container direction="column">
            <Grid item>
              <img src={StuNet} alt="how3" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.whiteTitle}>{"Student Network"}</div>
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle} style={{ color: "#FFF" }}>
                {"Our student social networking feature connects you with a large group of students from various education levels. " +
                  "We provide the opportunity for you to exchange academic resources with anyone from any education level."}
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 30 }}>
            <a
              href=""
              style={{
                color: "#FFF",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              {"Learn more >>"}
            </a>
          </div>

          <Button
            type="button"
            className={`${classes.btn2} ${"btn-primary"}`}
            component={Link}
            to={"/signup"}
          >
            {"Start your free trial now!"}
          </Button>
        </div>
      </div>

      <div className={classes.row}>
        <h5 className={classes.finalheader}>
          {
            "Briidge strives for a world where everyone has equal rights and access to quality education regardless of their background."
          }
        </h5>
        <Grid container>
          <Grid item container xs={12} md={4} direction="column">
            <Grid item>
              <div className={classes.bigblueTitle}>{"Our Mission"}</div>
            </Grid>
            <Grid item>
              <img src={book} alt="how1" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle}>
                {"Our platform connects students to their preferred tutors based on their personal academic needs " +
                  "supporting them towards reaching their educational goals."}
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4} direction="column">
            <Grid item>
              <div className={classes.bigblueTitle}>{"Our Vision"}</div>
            </Grid>
            <Grid item>
              <img src={earth} alt="how2" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle}>
                {"We aim to be the catalyst of change in the tuition industry worldwide through our convenient and " +
                  "affordable online tutor matchmaking service. We strive to provide access to quality " +
                  "education to students worldwide, especially the underprivileged."}
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4} direction="column">
            <Grid item>
              <div className={classes.bigblueTitle}>{"Our Social Impact"}</div>
            </Grid>
            <Grid item>
              <img src={heart} alt="how3" className={classes.img} />
            </Grid>
            <Grid item>
              <div className={classes.belowBlueTitle}>
                {"We strive to support the underprivileged student community through our platform. " +
                  "Every student using our services will help provide better access to quality education for those students " +
                  "in need, starting from Singapore."}
              </div>
            </Grid>
          </Grid>
        </Grid>

        <a
          href=""
          style={{
            color: "#000",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          {"Learn more >>"}
        </a>
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>
          {"What Our Briidge Community Says..."}
        </h2>
        <Carousel
          slides={slides}
          autoplay={true}
          interval={7000}
          arrows={false}
          arrowBorders={false}
        />
      </div>

      <div className={classes.row} style={{ padding: 0 }}>
        <div>
          <div className={classes.contacttitle}>{"Contact Information"}</div>
          <img src={contactus} alt="how1" className={classes.lastimg} />
        </div>
      </div>

      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        className={classes.contactInformation}
        xs={12}
        spacing={3}
      >
        <Grid
          item
          container
          xs={12}
          md={3}
          direction="column"
          alignItems="center"
        >
          <Grid item>{"EMAIL ADDRESS"}</Grid>
          <Grid item>{EMAIL_ADDRESS}</Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={3}
          direction="column"
          alignItems="center"
        >
          <Grid item>{"LINKEDIN"}</Grid>
          <Grid item>{LINKEDIN_PROFILE}</Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={3}
          direction="column"
          alignItems="center"
        >
          <Grid item>{"INSTAGRAM"}</Grid>
          <Grid item>{INSTAGRAM_USERNAME}</Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={3}
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Button
              type="button"
              className={`${classes.btn3} ${"btn-primary"}`}
            >
              {"Drop us an enquiry!"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
