import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NaviBar from '../components/NaviBar';
import AuthHeader from '../components/AuthHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    }
}));

export default function TutorsPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NaviBar />     
            <AuthHeader text={"Our Tutor Network"} />
        </div>
    )
}