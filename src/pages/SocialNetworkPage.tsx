import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from "../components/NaviBar";
import './AboutUs.css';
// import { Button, ButtonBase } from "@material-ui/core";
// import { Link } from 'react-router-dom';
// import { FullscreenExitTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        margin: "30px 30px 0 30px",
        padding: 30,
        paddingBottom: 100
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

    h4: {
        fontFamily:"LeagueSpartan",
        fontSize: 40,
        color: "#0051FF",
        paddingTop: 60
    },

    box: {
        float: "left",
        width: '300px',
        height: '450px',
        flexDirection: "column",
        backgroundColor: "#0051FF",
        color: "#ffdf00",
        fontFamily:"LeagueSpartan",
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: 0,
        marginTop: 30
    },

    header : {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 15,
        paddingLeft: 20,
        fontFamily: "LeagueSpartan",
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 25
    },

    list : {
        fontFamily: "LeagueSpartan",
        textAlign: "left",
        fontWeight: 100,
        fontSize: 15,
        listStyleType: "none",
        marginLeft: 30
    },

    btn: {
        color: "#ffdf00",
        backgroundColor: "#0051FF",
        fontSize: 18,
        borderRadius: "20px",
        fontFamily: "Quicksand-Bold",
        padding: "5px 19px 5px 19px",
        margin: 20
    },
    rightBox: {
        float: "left",
        display: "flex",
        width: '800px',
        flexDirection: "column",
        fontFamily:"QuickSand-Bold",
        color: "#0051FF",
        marginLeft: 100,
        marginTop: 35
    },

}));

const SocialNetworkPage = () => {
    const classes = useStyles();

    return (
        <div>
            <NaviBar/>
            <div className={classes.column}>
                <div className={classes.row}>
                    <div className={classes.box}>
                        <h3> Categories </h3>
                        <ul className={classes.header}>
                            Primary                      
                            <li className={classes.list}>
                                Subjects
                            </li>
                            <li className={classes.list}>
                                Subjects
                            </li>
                        </ul>
                        <ul className={classes.header}>Secondary                        
                            <li className={classes.list}>
                                Subjects
                            </li>
                            <li className={classes.list}>
                                Subjects
                            </li>
                        </ul>
                        <ul className={classes.header}>Tertiary                       
                            <li className={classes.list}>
                                Subjects
                            </li>
                            <li className={classes.list}>
                                Subjects
                            </li>
                        </ul>
                    </div>
                    <div className={classes.rightBox}> 
                        <h1 style={{fontSize: 80, padding: 10}}> BriidgeSocial </h1>
                        <p style={{fontWeight: "bold"}}> How it works - short explanation of what you can do here </p>
                    </div>
                  
                </div>

            </div>
        </div>
    );
};


export default SocialNetworkPage;