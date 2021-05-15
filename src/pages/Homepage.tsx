import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from "../components/NaviBar";
import wordLogo from "../Shared/BriidgeWordLogo.png";
import how1 from "../Shared/Tutor.png";
import how2 from "../Shared/Match.png";
import how3 from "../Shared/Date.png";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#ffdf00",
    },

    row: {
        // display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
        padding: 30,
        paddingBottom: 100,
        // '@media (max-width: 1100px)': {
        //     flexDirection: "column",
        // }
    },

    column: {
        flex: "100%",
        textAlign: "center",
    },

    img: {
        maxHeight: '50%',
        maxWidth: '50%',
    },

    bridgeMainImg: {
        maxWidth: "40%",
        maxHeight: "40%",
    },

    header: {
        textAlign: "center",
        margin: "40px 0 30px 0",
    },

    smallText: {
        fontFamily: "Montserrat-Regular",
        textAlign: "center",
        margin: "10px 0 30px 0",
    },

    supertitle: {
        width: "100%",
        textAlign: "center",
        margin: "80px 0 0 0",
        color: "#FFF"
    },

    subtitle: {
        width: "100%",
        textAlign: "center",
        margin: "0 0 0 0",
        color: "#ffdf00"
    },

    howFlex: {
        display: "flex",
    },

    flexContainer: {
        flex: 1,
        textAlign: "center",
    },

    // For page 2
    blueTitle: {
        fontFamily: "Montserrat-Regular",
        margin: "10px 0 10px 0",
        color: "#0051FF"
    },
    
    belowBlueTitle: {
        fontFamily: "Montserrat-Light",
        margin: "10px 0 10px 0",
    },
    
    // For page 3 & 4
    blackTitle: {
        fontFamily: "LeagueSpartan",
        fontSize: "25px",
        margin: "10px 0 10px 0",
    },

    yellowNumbers: {
        color: "#ffdf00"
    },

    blueLine: {
        border: "2px solid #0051FF",
        width: "100px",
        margin: "auto",
    },



}));

const Homepage = () => {
    const classes = useStyles();

    return (
        <div>
            <NaviBar/>
            <div className={classes.row} style={{ "backgroundColor": "#0051FF" }}>

                <h2 className={classes.supertitle}>
                    Learn from the tutor of your choice today!
                </h2>
                
                <img src={wordLogo} alt="Briidge Word Logo" className={classes.bridgeMainImg} />

                <h3 className={classes.subtitle}>
                    Learn your way! Meet your goals!
                </h3>
            </div>

            <div className={classes.row}>
                <h2 className={classes.header}>
                    How Our Platform Works
                </h2>

                <div className={classes.smallText}>
                    With just 3 simple steps you will be on your way towards achieving your very own academic goals
                </div>

                <div className={classes.howFlex}>
                    <div className={classes.flexContainer}>
                        <img src={how1} alt="how1" className={classes.img} />
                        <div className={classes.blueTitle}>
                            Let Us Know What You Seek For In A Tutor
                        </div>
                        <div className={classes.belowBlueTitle}>
                            You will be asked to answer a few questions so that we can better understand your academic needs. Our smart student-tutor matching system will then recommend the most suitable tutors to you.
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <img src={how2} alt="how2" className={classes.img} />
                        <div className={classes.blueTitle}>
                            Connect With The Tutor Of Your Choice
                        </div>
                        <div className={classes.belowBlueTitle}>
                            Based on the recommended group of tutors, you choose the preferred tutor that you believe will best suit your academic needs.
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <img src={how3} alt="how3" className={classes.img} />
                        <div className={classes.blueTitle}>
                            Arrange Your Lessons
                        </div>
                        <div className={classes.belowBlueTitle}>
                            After connecting with your preferred tutor, you may then proceed to book and schedule your lessons through our convenient booking system.
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.row}>
                <h2 className={classes.header}>
                    How We Can Help You As A Student
                </h2>

                <div className={classes.howFlex}>
                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 01 </h1>
                        <h3 className={classes.blackTitle}>
                            Personalised Learning
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Ability to find tutors based on the individual's personal academic needs and educational goals.
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 02 </h1>
                        <h3 className={classes.blackTitle}>
                            All Education Levels
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Our platform caters to all educational levels.
                        </div>
                    </div>
                </div>

                <div className={classes.howFlex}>
                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 03 </h1>
                        <h3 className={classes.blackTitle}>
                            Friendly Review System
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Opportunity to compare different tutors through a reliable review system before making a decision.
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 04 </h1>
                        <h3 className={classes.blackTitle}>
                            Peer to Peer Learning
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Our social networking platform promotes connectivity and networking between students, easing sharing of educational resources with one another.
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.row}>
                <h2 className={classes.header}>
                    How We Can Help You As A Tutor
                </h2>

                <div className={classes.howFlex}>
                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 01 </h1>
                        <h3 className={classes.blackTitle}>
                            Great Exposure
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Our platform connects you to a wide pool of students from various education levels, eliminating difficulties in sourcing for students.
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 02 </h1>
                        <h3 className={classes.blackTitle}>
                            Build Credibility
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Our ratings and review system help you build credibility throughout your journey with us.
                        </div>
                    </div>
                </div>

                <div className={classes.howFlex}>
                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 03 </h1>
                        <h3 className={classes.blackTitle}>
                            Track Lessons & Payments
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Our platform allows you to conveniently plan and keep track of your lessons and payments with no hassle.
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <h1 className={classes.yellowNumbers}> 04 </h1>
                        <h3 className={classes.blackTitle}>
                            Freedom to Choose
                        </h3>
                        <div className={classes.blueLine} />
                        <div className={classes.belowBlueTitle}>
                            Our platform gives you the freedom to choose your students, ranging from education levels, specific subjects and specific teaching style.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Homepage;