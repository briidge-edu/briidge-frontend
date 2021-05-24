import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from "../components/NaviBar";
import './AboutUs.css';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#ffdf00",
    },

    row: {
        display: "flex",
        justifyContent: "space-between",
        padding: 0,
        '@media (max-width: 1100px)': {
            flexDirection: "column",
        }
    },

    column: {
        flex: "100%",
        textAlign: "center",
    },

    input: {
        fontFamily:"LeagueSpartan"
    },

    button: {
        fontFamily: 'LeagueSpartan',
        margin: '20px',
        borderRadius: '30px'
    },

    header: {
        fontFamily:"LeagueSpartan",
        fontSize:30,
        color: "#0051FF",
        paddingTop: 83,
        paddingLeft: "5%",
        paddingRight: "5%"
    },

    box: {
        float: "left",
        width: '30%',
        backgroundColor: "#FFFFFF",
        borderRadius: 60,
        fontFamily:"LeagueSpartan",
        padding: "3%",
        margin: "3%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width: 1100px)': {
            width: '80vw',
            marginTop: '10%'
        },
    },

    content : {
        marginTop: 40,
        marginBottom: 40,
        fontFamily: "Montserrat-Light",
        fontWeight: "bold",
        float: "left",
        textAlign: "left",
        flex: 2
    },

    btn: {
        color: "#ffdf00",
        backgroundColor: "#0051FF",
        fontSize: 18,
        borderRadius: "20px",
        fontFamily: "Quicksand-Bold",
        padding: "5px 19px 5px 19px",
    }
}));

const PlansPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NaviBar/>
            <div className={classes.column}>
                <div>
                    <p className={classes.header}>
                    Join the Briidge Community and Kickstart Your Learning Journey!
                    </p>
                </div>

                <div className={classes.row}>
                    <div className={classes.box}>
                        <h4> Free Trial </h4>
                        <ul className={classes.content}>                        
                            <li>
                                Complete Personalisation feature
                            </li>
                            <li>
                                Full Access to Social Networking
                            </li>
                            <li>
                                Get matched with 1 tutor
                            </li>
                        </ul>
                        <Button type="button" className={`${classes.btn} ${"btn-primary"}`}
                            component={Link} to={"/signup"}>Start Now!</Button>
                    </div>
                    <div className={classes.box}> 
                        <h4> BriidgePro </h4>
                        <ul className={classes.content}>                        
                            <li>
                                Complete Personalisation feature
                            </li>
                            <li>
                                Full Access to Social Networking
                            </li>
                            <li>
                                Get matched to unlimited tutors
                            </li>
                        </ul>
                        <Button type="button" className={`${classes.btn} ${"btn-primary"}`}
                            component={Link} to={"/signup"}>$20/month</Button>
                    </div>
                    <div className={classes.box}>
                        <h4> BriidgeAssist </h4>
                        <ul className={classes.content}>                        
                            <li>
                                Complete Personalisation feature
                            </li>
                            <li>
                                Social Networking Access
                            </li>
                            <li>
                                Get matched to unlimited tutors
                            </li>
                        </ul>
                        <Button type="button" className={`${classes.btn} ${"btn-primary"}`}
                            component={Link} to={"/signup"}>Membership Fee Waived</Button>
                    </div>                    
                </div>

            </div>
        </div>
    );
};


export default PlansPage;