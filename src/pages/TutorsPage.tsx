import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from '../components/NaviBar';
import AuthHeader from '../components/AuthHeader';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },

    container: {
        backgroundColor: '#0051ff',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cta: {
        color: '#0051ff',
        fontSize: '125%',
        textTransform: 'none',
        borderRadius: '25px/75px',
    }
}));

export default function TutorsPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NaviBar />     
            <AuthHeader text={"Our Tutor Network"} />
            <div className={classes.container}>
                <Button className={classes.cta} component={Link} to="/signup" 
                    variant="contained" color="secondary" size="large">
                    Join the Briidge Tutor Community Now!
                </Button>
            </div>
            
        </div>
    )
}