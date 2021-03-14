import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from '../components/SignupForm';
import AuthHeader from '../components/AuthHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    }
}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AuthHeader text="Join the Briidge Community"/>
            <SignupForm />
        </div>
    )
}