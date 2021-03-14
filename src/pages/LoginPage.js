import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../components/LoginForm';
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
            <AuthHeader text={"Welcome Back!"}/>
            <LoginForm />
        </div>
    )
}