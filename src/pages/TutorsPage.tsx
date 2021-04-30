import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from '../components/NaviBar';
import AuthHeader from '../components/AuthHeader';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TutorCard from '../components/TutorCard'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },

    cardContainer: {
        marginBottom: '20px'
    },

    container: {
        backgroundColor: '#0051ff',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    cta: {
        color: '#0051ff',
        fontSize: '125%',
        textTransform: 'none',
        borderRadius: '25px/75px',
        marginTop: '3%',
        marginBottom: '3%'
    }
}));

export default function TutorsPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NaviBar />
            <AuthHeader text={"Our Tutor Network"} />
            <Grid className={classes.cardContainer} container direction="row" justify="space-evenly" alignItems="center" >
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
            </Grid>
            <div className={classes.container}>
                <Button className={classes.cta} component={Link} to="/signup"
                    variant="contained" color="secondary" size="large">
                    Join the Briidge Tutor Community Now!
                </Button>
            </div>

        </div>
    )
}