import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '10px'
    }
}));

export default function LoginButton() {
    const classes = useStyles();

    return (
        <Button variant="contained" color="primary" className={classes.button} type="submit">
            Login
        </Button>
    )
}