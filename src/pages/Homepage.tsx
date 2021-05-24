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
import book from "../Shared/book.png";
import earth from "../Shared/earth.png";
import heart from "../Shared/heart.png";
import StuNet from "../Shared/StuNet.png";
import avatar from "../Shared/avatar.png";
import Schedule from "../Shared/Schedule.png";
import Tutor2 from "../Shared/Tutor2.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffdf00",
  },

  row: {
    // display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 70,
    // '@media (max-width: 1100px)': {
    //     flexDirection: "column",
    // }
  },

  column: {
    flex: "100%",
    textAlign: "center",
  },

  img: {
    maxHeight: 150,
    maxWidth: 150,
    margin: 15,
  },

  bridgeMainImg: {
    maxWidth: 400,
    maxHeight: 400,
  },

  header: {
    textAlign: "center",
    margin: "20px 0 20px 0",
  },

  finalheader: {
    fontFamily: "Quicksand-Bold",
    color: "#0051FF",
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
    width: "100%",
    textAlign: "center",
    margin: "40px 0 20px 0",
    color: "#ffdf00",
  },

  subtitle: {
    marginTop: 70,
    marginBottom: -30,
    width: "100%",
    textAlign: "center",
    color: "#ffdf00",
    fontFamily: "Quicksand-Bold",
  },

  howFlex: {
    display: "flex",
  },

  howFlex2: {
    display: "flex",
    marginLeft: 60,
    marginRight: 60,
    marginTop: 40,
    marginBottom: 40,
  },

  flexContainer: {
    flex: 1,
    textAlign: "center",
  },

  flexContainer2: {
    flex: 1,
    textAlign: "center",
  },

  // For page 2
  blueTitle: {
    fontFamily: "Montserrat-Regular",
    margin: "10px 0 10px 0",
    color: "#0051FF",
  },

  bigblueTitle: {
    fontFamily: "Montserrat-Regular",
    margin: "10px 0 10px 0",
    color: "#0051FF",
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
    color: "#ffdf00",
    fontSize: 30,
  },

  blueLine: {
    border: "2px solid #0051FF",
    width: "100px",
    margin: "auto",
    maginTop: 35,
    marginBottom: 25,
  },

  btn: {
    color: "#ffdf00",
    backgroundColor: "#0051FF",
    fontSize: 18,
    borderRadius: "20px",
    fontFamily: "Quicksand-Bold",
    padding: "5px 19px 5px 19px",
  },

  btn2: {
    color: "#0051FF",
    backgroundColor: "#ffdf00",
    fontSize: 18,
    borderRadius: "20px",
    fontFamily: "Quicksand-Bold",
    padding: "5px 19px 5px 19px",
    marginTop: 5,
  },

  btn3: {
    color: "#ffdf00",
    backgroundColor: "#0051FF",
    fontSize: 14,
    fontFamily: "Quicksand-Bold",
    padding: "5px 35px 5px 35px",
  },

  slider: {
    backgroundColor: "#fdc84b",
    flexDirection: "row",
    height: 400,
    width: 1100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  slidertext: {
    flex: 1,
    width: 800,
    marginTop: "-13%",
  },
  testimonialimg: {
    margin: 40,
    height: 300,
    width: 280,
    marginLeft: 60,
  },
  name: {
    fontSize: 40,
    fontFamily: "Quicksand-Bold",
    color: "#0051FF",
    textAlign: "left",
  },
  identity: {
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
    textAlign: "left",
  },
  textbody: {
    fontSize: 20,
    fontFamily: "Quicksand",
    textAlign: "left",
    marginTop: 15,
    marginRight: 55,
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
    height: 80,
    width: 450,
    backgroundColor: "#0051FF",
    fontSize: 35,
    fontFamily: "Montserrat-Regular",
    paddingLeft: 45,
    paddingTop: 15,
    color: "#ffdf00",
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
    right: -190,
    height: 200,
    width: 390,
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
    right: -20,
    height: 100,
    width: 200,
  },

  homepageimg: {
    height: 60,
    width: 130,
    marginTop: 50,
    marginBottom: -60,
  },
}));

const Homepage = () => {
  const classes = useStyles();
  let slides = [
    <div className={classes.slider}>
      <img src={avatar} alt="how1" className={classes.testimonialimg} />
      <div className={classes.slidertext}>
        <div className={classes.name}>Mariah Turner</div>
        <div className={classes.identity}>Student</div>
        <div className={classes.textbody}>
          Testimonials are short quotes from people who love your brand. It's a
          great way to convince customers to try your services.
        </div>
      </div>
    </div>,
    <div className={classes.slider}>
      <img src={avatar} alt="how1" className={classes.testimonialimg} />
      <div className={classes.slidertext}>
        <div className={classes.name}>Mariah Turner</div>
        <div className={classes.identity}>Student</div>
        <div className={classes.textbody}>
          Testimonials are short quotes from people who love your brand. It's a
          great way to convince customers to try your services.
        </div>
      </div>
    </div>,
    <div className={classes.slider}>
      <img src={avatar} alt="how1" className={classes.testimonialimg} />
      <div className={classes.slidertext}>
        <div className={classes.name}>Mariah Turner</div>
        <div className={classes.identity}>Student</div>
        <div className={classes.textbody}>
          Testimonials are short quotes from people who love your brand. It's a
          great way to convince customers to try your services.
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <NaviBar />
      <div className={classes.row} style={{ backgroundColor: "#0051FF" }}>
        <div className={classes.supertitle}>
          Learn from the tutor of your choice today!
        </div>

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

        <img
          src={wordLogo}
          alt="Briidge Word Logo"
          className={classes.bridgeMainImg}
        />

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

        <h4 className={classes.subtitle}>Learn your way! Meet your goals!</h4>
        <img src={homepage3} alt="design3" className={classes.homepageimg} />
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>How Our Platform Works</h2>

        <div className={classes.smallText}>
          With just 3 simple steps you will be on your way towards achieving
          your very own academic goals
        </div>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <img src={how1} alt="how1" className={classes.img} />
            <div className={classes.blueTitle}>
              Let Us Know What You Seek For In A Tutor
            </div>
            <div className={classes.belowBlueTitle}>
              You will be asked to answer a few questions so that we can better
              understand your academic needs. Our smart student-tutor matching
              system will then recommend the most suitable tutors to you.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <img src={how2} alt="how2" className={classes.img} />
            <div className={classes.blueTitle}>
              Connect With The Tutor Of Your Choice
            </div>
            <div className={classes.belowBlueTitle}>
              Based on the recommended group of tutors, you choose the preferred
              tutor that you believe will best suit your academic needs.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <img src={how3} alt="how3" className={classes.img} />
            <div className={classes.blueTitle}>Arrange Your Lessons</div>
            <div className={classes.belowBlueTitle}>
              After connecting with your preferred tutor, you may then proceed
              to book and schedule your lessons through our convenient booking
              system.
            </div>
          </div>
        </div>

        <Button
          type="button"
          className={`${classes.btn} ${"btn-primary"}`}
          component={Link}
          to={"/signup"}
        >
          Join The Briidge Community Now!
        </Button>
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>How We Can Help You As A Student</h2>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 01 </h1>
            <h3 className={classes.blackTitle}>Personalised Learning</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Ability to find tutors based on the individual's personal academic
              needs and educational goals.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 02 </h1>
            <h3 className={classes.blackTitle}>All Education Levels</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Our platform caters to all educational levels.
            </div>
          </div>
        </div>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 03 </h1>
            <h3 className={classes.blackTitle}>Friendly Review System</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Opportunity to compare different tutors through a reliable review
              system before making a decision.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 04 </h1>
            <h3 className={classes.blackTitle}>Peer to Peer Learning</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Our social networking platform promotes connectivity and
              networking between students, easing sharing of educational
              resources with one another.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>How We Can Help You As A Tutor</h2>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 01 </h1>
            <h3 className={classes.blackTitle}>Great Exposure</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Our platform connects you to a wide pool of students from various
              education levels, eliminating difficulties in sourcing for
              students.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 02 </h1>
            <h3 className={classes.blackTitle}>Build Credibility</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Our ratings and review system help you build credibility
              throughout your journey with us.
            </div>
          </div>
        </div>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 03 </h1>
            <h3 className={classes.blackTitle}>Track Lessons &amp; Payments</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Our platform allows you to conveniently plan and keep track of
              your lessons and payments with no hassle.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <h1 className={classes.yellowNumbers}> 04 </h1>
            <h3 className={classes.blackTitle}>Freedom to Choose</h3>
            <div className={classes.blueLine} />
            <div className={classes.belowBlueTitle}>
              Our platform gives you the freedom to choose your students,
              ranging from education levels, specific subjects and specific
              teaching style.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.row} style={{ backgroundColor: "#0051FF" }}>
        <h2 className={classes.featuretitle}>Our Features</h2>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <img
              src={Tutor2}
              alt="how1"
              className={classes.img}
              style={{ margin: 30 }}
            />
            <div className={classes.whiteTitle}>
              Personalised Tutor Matchmaking
            </div>
            <div className={classes.belowBlueTitle} style={{ color: "#FFF" }}>
              Our platform connects you with the tutor of your choice based on
              your personal academic goals or needs.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <img src={Schedule} alt="how2" className={classes.img} />
            <div className={classes.whiteTitle}>Convenient Scheduling</div>
            <div className={classes.belowBlueTitle} style={{ color: "#FFF" }}>
              Our platform eases lesson booking and scheduling with your tutor.
              Constant reminders of upcoming lessons and payment deadlines
              provides you with a seamless tuition experience.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <img src={StuNet} alt="how3" className={classes.img} />
            <div className={classes.whiteTitle}>Student Network</div>
            <div className={classes.belowBlueTitle} style={{ color: "#FFF" }}>
              Our student social networking feature connects you with a large
              group of students from various education levels. We provide the
              opportunity for you to exchange academic resources with anyone
              from any education level.
            </div>
          </div>
        </div>
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
              Learn More &gt;&gt;
            </a>
          </div>

          <Button
            type="button"
            className={`${classes.btn2} ${"btn-primary"}`}
            component={Link}
            to={"/signup"}
          >
            Start your free trial now!
          </Button>
        </div>
      </div>

      <div className={classes.row}>
        <h5 className={classes.finalheader}>
          Briidge strives for a world where everyone has equal rights and access
          to quality education regardless of their background.
        </h5>

        <div className={classes.howFlex}>
          <div className={classes.flexContainer}>
            <div className={classes.bigblueTitle}>Our Mission</div>
            <img src={book} alt="how1" className={classes.img} />

            <div className={classes.belowBlueTitle}>
              Our platform connects students to their preferred tutors based on
              their personal academic needs supporting them towards reaching
              their educational goals.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <div className={classes.bigblueTitle}>Our Vision</div>
            <img src={earth} alt="how2" className={classes.img} />

            <div className={classes.belowBlueTitle}>
              We aim to be the catalyst of change in the tuition industry
              worldwide through our convenient and affordable online tutor
              matchmaking service. We strive to provide access to quality
              education to students worldwide, especially the underprivileged.
            </div>
          </div>

          <div className={classes.flexContainer}>
            <div className={classes.bigblueTitle}>Our Social Impact</div>
            <img src={heart} alt="how3" className={classes.img} />

            <div className={classes.belowBlueTitle}>
              We strive to support the underprivileged student community through
              our platform. Every student using our services will help provide
              better access to quality education for those students in need,
              starting from Singapore.
            </div>
          </div>
        </div>
        <a
          href=""
          style={{
            color: "#000",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Learn More &gt;&gt;
        </a>
      </div>

      <div className={classes.row}>
        <h2 className={classes.header}>What Our Briidge Community Says...</h2>
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
          <div className={classes.contacttitle}>Contact Information</div>

          <img src={avatar} alt="how1" className={classes.lastimg} />
        </div>
        <div className={classes.howFlex2}>
          <div className={classes.flexContainer2}>
            <div>EMAIL ADDRESS</div>
            <div>briidge.edu@gmail.com</div>
          </div>

          <div className={classes.flexContainer2}>
            <div>LINKEDIN</div>
            <div>www.linkedin.com/company/briidge-edu</div>
          </div>

          <div className={classes.flexContainer2}>
            <div>INSTAGRAM</div>
            <div>@briidge.ed</div>
          </div>

          <Button
            type="button"
            className={`${classes.btn3} ${"btn-primary"}`}
            // component={Link}
            // to={"/signup"}
          >
            Drop us an enquiry!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
