import React, { ChangeEventHandler, useState } from 'react';
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
        fontFamily: "LeagueSpartan"
    },
}));

interface LoginFormProps {
    handleChange: ChangeEventHandler;
    state: {
        email: string;
        password: string;
        password_confirmation: string;
    };
}

export default function LoginForm(props: LoginFormProps) {
    const classes = useStyles();

    // const [loginErrors, setLoginErrors] = useState();

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmationShown, setPasswordConfirmationShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
    }

    const togglePasswordConfirmationVisibility = () => {
        setPasswordConfirmationShown(passwordConfirmationShown ? false : true)
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel className={classes.input}>Email</InputLabel>
                    <OutlinedInput className={classes.input} id="email" aria-describedby="Email field" label="Email"
                        onChange={props.handleChange}
                        value={props.state.email}
                    />
                </FormControl> <br />
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
                                    {passwordShown ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>}
                        onChange={props.handleChange}
                        value={props.state.password}
                    />
                </FormControl> <br />
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
                        onChange={props.handleChange}
                        value={props.state.password_confirmation}
                    />
                </FormControl> <br />
            </form>
        </div>
    )
}