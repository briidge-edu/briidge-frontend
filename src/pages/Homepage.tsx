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

import './Homepage.css';

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        marginRight: "0",
        marginLeft: "0"
    },

    column: {
        flex: "30%",
        textAlign: "center"
    },

    textColumn: {
        margin: "20px 30px 0 30px",
    },
    
    textColumnTopMargin: {
        marginTop: "50px", 
    },

    marginForNextPage: {
        marginBottom: "350px", 
    },

    marginForLastPage: {
        marginBottom: "170px", 
    },

    textColumnLong: {
        marginLeft: "70px", 
        marginRight: "70px", 
    },

    whoWeAre: {
        marginTop: 180, 
    },

    multiline: {
        marginTop: 100, 
    },

    multilineVision: {
        marginTop: 100, 
        textAlign: "right"
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
        fontFamily:"LeagueSpartan"
    },

    button: {
        fontFamily: 'LeagueSpartan',
        margin: '20px',
        borderRadius: '30px'
    }
}));

const Homepage = () => {
    const classes = useStyles();

    return (
        <div>
            <NaviBar/>
            <div className={classes.row}>
                <div className={classes.column} style={{"backgroundColor":"#0051FF"}}>
                    <img src={wordLogo} alt="Briidge Word Logo" style={{"marginRight":15, maxWidth:"100%", height:"auto"}}/>
                </div>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <h2 className={classes.whoWeAre}>Who We Are</h2>
                        <div className={classes.yellowLine}/>
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
                        <img src={mission1} alt="mission1" style={{maxWidth:"50%", height:"auto"}}/>
                        <p className={`${classes.textColumnTopMargin} ${classes.marginForNextPage}` }> 
                            We aim to personalize learning by connecting students to tutors based on their personal academic needs supporting them towards their educational goals.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <img src={mission2} alt="mission2" style={{"marginTop":20, "marginBottom":15, maxWidth:"45%", padding:20, height:"auto"}}/>
                        <p className={classes.textColumnTopMargin}>
                            We strive to create opportunities for underprivileged students to receive high-quality tuition in an environment best suited for them.
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <h2 className={classes.whoWeAre}>Our Vision</h2>
                        <p className={`${classes.textColumnTopMargin} ${classes.textColumnLong} ${classes.marginForNextPage}`}>
                            We aim to be the catalyst of change in the tuition industry worldwide through our convenient and affordable online tutor matchmaking service. We strive to provide access to quality education to students worldwide, especially the underprivileged.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                        <h2 className={classes.multiline}>
                            <img src={vision1} alt="vision1" style={{height:100, width: 100, marginRight: 50}}/>
                            Affordability
                            <img src={checkmark} alt="checkmark" style={{height: 50, width: 50, marginLeft: 30}}/>
                        </h2>
                        <h2 className={classes.multiline}>
                            <img src={vision2} alt="vision2" style={{height:100, width: 100, marginRight: 115}}/>
                            Flexibility
                            <img src={checkmark} alt="checkmark" style={{height: 50, width: 50, marginLeft: 23}}/>
                        </h2>
                        <h2 className={classes.multiline}>
                            <img src={vision3} alt="vision3" style={{height:100, width: 100, marginRight: 70}}/>
                            Convenience
                            <img src={checkmark} alt="checkmark" style={{height: 50, width: 50, marginLeft: 14}}/>
                        </h2>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                    <img src={charity} alt="charity" style={{maxWidth:"30%", height:"auto"}}/>
                    <img src={read} alt="read" style={{maxWidth:"30%", height:"auto"}}/>
                    
                        <p className={`${classes.textColumnTopMargin} ${classes.marginForLastPage} ${classes.textColumnLong} ${classes.premiumSubscriberText}`}> 
                            For every one student that becomes a premium subscriber, one other underprivileged student is granted free access to our platform and can begin maximizing their education journey.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                        <h2 className={classes.whoWeAre}>Our Social Impact</h2>
                        <p className={`${classes.textColumnTopMargin} ${classes.textColumnLong}`}> 
                            We strive to support the underprivileged student community through our platform. Every student using our services will help provide better access to quality education for those students in need, starting from Singapore.
                        </p>
                </div>
            </div>
        </div>
    );
};


export default Homepage;