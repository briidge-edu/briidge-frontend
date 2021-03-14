import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({

}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <div>
            <h1>Welcome back!</h1>
            <LoginForm />
        </div>
    )
}