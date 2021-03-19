import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from "../components/NaviBar";
import './Homepage.css';
import { Button, ButtonBase } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        justifyContent: "space-between",
        margin: 30,
        padding: 30,
        paddingBottom: 100
    },

    column: {
        flex: "100%",
        textAlign: "center",
        backgroundColor:"#ffdf00"
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
        paddingTop: 50
    },

    box: {
        float: "left",
        width: '400px',
        backgroundColor: "#FFFFFF",
        borderRadius:60,
        fontFamily:"LeagueSpartan",
        padding: 40,
        margin: 30

    },

    content : {
        marginTop: 40,
        marginBottom: 40,
        fontFamily: "Montserrat-Light",
        fontWeight: "bold",
        float: "left",
        textAlign: "left"
    },

    btn: {
        color: "#ffdf00",
        backgroundColor: "#0051FF",
        fontSize: 18,
        borderRadius: "20px",
        fontFamily: "Quicksand-Bold",
        padding: "5px 19px 5px 19px",
        margin: 20
    }
}));

const PlansPage = () => {
    const classes = useStyles();

    return (
        <div>
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