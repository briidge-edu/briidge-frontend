import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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

import './AboutUs.css';
import { findByLabelText } from "@testing-library/dom";

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        height: '100vh',
        '@media (max-width: 1100px)': {
            flexDirection: "column",
            height: '100%'
        }
    },

    column: {
        flex: 1,
        textAlign: "center",
        '@media (max-width: 1100px)': {
        }
    },

    img: {
        maxWidth: "100%",
        maxHeight: "100%",
        '@media (max-width: 1100px)': {
            height: '20vh'
        }
    },

    icon: {
        maxWidth: "30%",
        margin: "10% auto",
        marginTop: '10%',
        height: "20%",
    },

    textColumn: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: '100%',
    },

    marginForLastPage: {
        marginBottom: "170px",
    },

    whoWeAre: {
        marginTop: '20%',
        '@media (max-width: 1100px)': {
            marginTop: '10%'
        }
    },

    multilineColumn: {
        marginTop: '-10%',
        '@media (max-width: 1100px)': {
            marginTop: '0'
        },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },

    multiline: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    multilineIcon: {
        height: '100%',
        width: '10%',
        alignSelf: 'flex-start'
    },

    checkmark: {
        height: '60%',
        width: '8%',
    },

    premiumSubscriberText: {
        color: "blue",
    },

    header: {
        textAlign: "center",
        margin: "40px 0 0 0",
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
        color: "#0051FF"
    },

    p: {
        fontFamily: "Montserrat-Light",
    },

    input: {
        fontFamily: "LeagueSpartan"
    },

    button: {
        fontFamily: 'LeagueSpartan',

    }
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <div>
            <NaviBar />
            <div className={classes.row}>
                <div className={classes.column} style={{ "backgroundColor": "#0051FF" }}>
                    <img src={wordLogo} alt="Briidge Word Logo" className={classes.img} />
                </div>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <h2 className={classes.whoWeAre}>Who We Are</h2>
                        <div className={classes.yellowLine} />
                        <p>Briidge is a revolutionary matchmaking platform that aims to bridge students and tutors together through the use of our personalised smart algorithm.</p>
                        <p>We also aim to ease information sharing between students by connecting them through our social networking platform.</p>
                        <p>
                            At briidge, we strongly believe that everyone has an equal right to high-quality education, regardless of any barrier.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className={classes.header}>
                Our Mission
            </h2>
            <div className={classes.row}>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <img className={classes.icon} src={mission1} alt="mission1" />
                        <p>
                            We aim to personalize learning by connecting students to tutors based on their personal academic needs supporting them towards their educational goals.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <img className={classes.icon} src={mission2} alt="mission2" />
                        <p>
                            We strive to create opportunities for underprivileged students to receive high-quality tuition in an environment best suited for them.
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <h2 className={classes.whoWeAre} style={{ marginBottom: '15%' }}>Our Vision</h2>
                        <p>
                            We aim to be the catalyst of change in the tuition industry worldwide through our convenient and affordable online tutor matchmaking service. We strive to provide access to quality education to students worldwide, especially the underprivileged.
                        </p>
                    </div>
                </div>

                <div className={classes.multilineColumn}>
                    <h2 className={classes.multiline}>
                        <img className={classes.multilineIcon} src={vision1} alt="vision1" />
                        <span>Affordability</span>
                        <img className={classes.checkmark} src={checkmark} alt="checkmark" />
                    </h2>
                    <h2 className={classes.multiline}>
                        <img className={classes.multilineIcon} src={vision2} alt="vision2" />
                        <span >Flexibility</span>
                        <img className={classes.checkmark} src={checkmark} alt="checkmark" />
                    </h2>
                    <h2 className={classes.multiline}>
                        <img className={classes.multilineIcon} src={vision3} alt="vision3" />
                        <span>Convenience</span>
                        <img className={classes.checkmark} src={checkmark} alt="checkmark" />
                    </h2>
                </div>
            </div>
            <h2 className={classes.header}>
                Our Social Impact
            </h2>
            <div className={classes.row}>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <img className={classes.icon} src={charity} alt="charity" />
                        <p className={classes.premiumSubscriberText}>
                            For every one student that becomes a premium subscriber, one other underprivileged student is granted free access to our platform and can begin maximizing their education journey.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <img className={classes.icon} src={read} alt="read" />
                        <p>
                            We strive to support the underprivileged student community through our platform. Every student using our services will help provide better access to quality education for those students in need, starting from Singapore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutUs;