import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from '../components/SignupForm';
import AuthHeader from '../components/AuthHeader';
import NaviBar from '../components/NaviBar';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'LeagueSpartan'
    }
}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NaviBar />
            <AuthHeader text="Join the Briidge Community"/>
            <SignupForm />
        </div>
    )
}