import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, InputAdornment, IconButton, Button, TextField, OutlinedInput } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    field: {
        margin: '10px',
        width: '35%'
    },

    personIcon: {
        padding: '12px'
    },

    button: {
        margin: '10px'
    },

    submit: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}));

export default function LoginForm() {
    const classes = useStyles();

    const [ state, setState ] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const [loginErrors, setLoginErrors] = useState();

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
        }))
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // POST REQUEST GOES HERE
        console.log(state)
    }

    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput id="name" aria-describedby="Name field" label="Name"
                        onChange={handleChange}
                        value={state.name}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput id="email" aria-describedby="Email field" label="Email"
                        onChange={handleChange}
                        value={state.email}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput id="password" aria-describedby="Password field" label="Password"
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
                    <InputLabel>Re-enter Password</InputLabel>
                    <OutlinedInput id="password_confirmation" aria-describedby="Password confirmation field" label="Re-enterPassword"
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
                <div>Are you a</div>
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                    Student
                </Button>
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                    Tutor
                </Button>
                
            </form>
        </div>
    )
}