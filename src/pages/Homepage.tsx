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
                    <img src={wordLogo} alt="Briidge Word Logo" width="700" height="700" style={{"margin":"auto", "display":"block"}}/>
                </div>
                <div className={classes.column}>
                    <h2 style={{"marginTop": 180, "marginBottom": 40}}>Who We Are</h2>
                    <p>Briidge is a revolutionary matchmaking platform that aims to bridge students and tutors together through the use of our personalised smart algorithm.</p>
                    <p>We also aim to ease information sharing between students by connecting them through our social networking platform.</p>
                    <p>
                    At briidge, we strongly believe that everyone has an equal right to high-quality education, regardless of any barrier.
                    </p>
                </div>

            </div>
        </div>
    );
};


export default Homepage;