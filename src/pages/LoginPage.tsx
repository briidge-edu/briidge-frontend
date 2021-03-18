import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../components/LoginForm';
import AuthHeader from '../components/AuthHeader';
import { Link } from 'react-router-dom';
import NaviBar from '../components/NaviBar';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    
    cta: {
        fontFamily: 'Montserrat-Regular'
    }
}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NaviBar />
            <AuthHeader text={"Welcome Back!"}/>
            <LoginForm />
            <div className={classes.cta}>
                New user? <Link to='/signup'>Join Briidge now!</Link>
            </div>
        </div>
    )
}