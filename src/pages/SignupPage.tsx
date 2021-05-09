import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthHeader from '../components/AuthHeader';
import NaviBar from '../components/NaviBar';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'LeagueSpartan'
    },

    button: {
        fontFamily: 'LeagueSpartan',
        margin: '20px',
        borderRadius: '30px'
    }
}));

export default function SignupPage() {
    const classes = useStyles();

    const [redirect, setRedirect] = useState(false);
    const [student, setStudent] = useState(false);

    const studentRedirect = () => {
        setStudent(true);
        setRedirect(true);
    }

    const tutorRedirect = () => {
        setStudent(false);
        setRedirect(true);
    }

    if (redirect) {
        if (student) {
            return <Redirect to='/studentsignup' />
        } else {
            return <Redirect to='/tutorsignup' />
        }
    }

    return (
        <div className={classes.root}>
            <NaviBar />
            <AuthHeader text="Join the Briidge Community" />
            <div style={{ marginTop: '5px' }}>Are you a</div>
            <Button variant="contained" color="primary" className={classes.button} onClick={studentRedirect}>
                Student
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={tutorRedirect}>
                Tutor
            </Button>
        </div>
    )
}