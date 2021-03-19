import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from "../components/NaviBar";
import wordLogo from "../Shared/BriidgeWordLogo.png";
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

    whoWeAre: {
        marginTop: 180, 
    },

    multiline: {
        marginTop: 100, 
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
                        <p className={classes.textColumnTopMargin}> 
                            We aim to personalize learning by connecting students to tutors based on their personal academic needs supporting them towards their educational goals.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.textColumn}>
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
                        <p className={classes.textColumnTopMargin}> 
                            We aim to personalize learning by connecting students to tutors We aim to be the catalyst of change in the tuition industry worldwide through our convenient and affordable online tutor matchmaking service. We strive to provide access to quality education to students worldwide, especially the underprivileged.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                        <h2 className={classes.multiline}>Affordability</h2>
                        <h2 className={classes.multiline}>Flexibility</h2>
                        <h2 className={classes.multiline}>Convenience</h2>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                    <div className={classes.textColumn}>
                        <h2 className={classes.whoWeAre}>Our Vision</h2>
                        <p className={classes.textColumnTopMargin}> 
                            For every one student that becomes a premium subscriber, one other underprivileged student is granted free access to our platform and can begin maximizing their education journey.
                        </p>
                    </div>
                </div>

                <div className={classes.column}>
                        <h2 className={classes.whoWeAre}>Our Social Impact</h2>
                        <p className={classes.textColumnTopMargin}> 
                            We strive to support the underprivileged student community through our platform. Every student using our services will help provide better access to quality education for those students in need, starting from Singapore.
                        </p>
                </div>
            </div>
        </div>
    );
};


export default Homepage;