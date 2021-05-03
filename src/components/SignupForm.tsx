import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, InputAdornment, IconButton, Button, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
    field: {
        margin: '10px',
        width: '35%',
        minWidth: '300px'
    },

    input: {
        fontFamily:"LeagueSpartan"
    },

    button: {
        fontFamily: 'LeagueSpartan',
        margin: '20px',
        borderRadius: '30px'
    }
}));

export default function LoginForm() {
    const classes = useStyles();

    enum ApplicantType {
        Student,
        Tutor
    }

    const [ state, setState ] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        isTutor: false
    });

    const [redirect, setRedirect] = useState(false);

    // const [loginErrors, setLoginErrors] = useState();

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmationShown, setPasswordConfirmationShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
    }

    const togglePasswordConfirmationVisibility = () => {
        setPasswordConfirmationShown(passwordConfirmationShown ? false : true)
    }

    const handleChange = (event:any) => {
        setState(prev => ({ 
            ...prev,
            [event.target.id]: event.target.value,
            type: ApplicantType.Student
        }))
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // POST REQUEST GOES HERE
        console.log(state)
        setRedirect(true);
    }

    if (redirect && !state.isTutor) {
        return <Redirect to="/studentsignup" />
    }

    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel className={classes.input}>Name</InputLabel>
                    <OutlinedInput className={classes.input} id="name" aria-describedby="Name field" label="Name"
                        onChange={handleChange}
                        value={state.name}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel className={classes.input}>Email</InputLabel>
                    <OutlinedInput className={classes.input} id="email" aria-describedby="Email field" label="Email"
                        onChange={handleChange}
                        value={state.email}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel className={classes.input}>Password</InputLabel>
                    <OutlinedInput className={classes.input} id="password" aria-describedby="Password field" label="Password"
                        type={passwordShown ? "text" : "password"} 
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePasswordVisibility}
                                    name="passwordToggle"
                                >
                                {passwordShown ? <Visibility  /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>}
                        onChange={handleChange}
                        value={state.password}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel className={classes.input}>Re-enter Password</InputLabel>
                    <OutlinedInput className={classes.input} id="password_confirmation" aria-describedby="Password confirmation field" label="Re-enterPassword"
                        type={passwordConfirmationShown ? "text" : "password"} 
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePasswordConfirmationVisibility}
                                    name="passwordConfirmationToggle"
                                >
                                {passwordConfirmationShown ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>}
                        onChange={handleChange}
                        value={state.password_confirmation}
                    />
                </FormControl> <br/>
                <div style={{marginTop: '5px'}}>Are you a</div>
                <Button variant="contained" color="primary" className={classes.button} type="submit"
                    onClick={() => setState(prev => ({...prev, isTutor: false}))}>
                    Student
                </Button>
                <Button variant="contained" color="secondary" className={classes.button} type="submit"
                    onClick={() => setState(prev => ({...prev, isTutor: true}))}> 
                    Tutor
                </Button>
            </form>
        </div>
    )
}