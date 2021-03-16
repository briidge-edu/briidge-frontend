import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    field: {
        margin: '10px',
        width: '30%'
    },

    personIcon: {
        padding: '12px'
    },

    button: {
        margin: '10px'
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

    const handleChange = (event) => {
        setState(prev => ({ 
            ...prev,
            [event.target.id]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // POST REQUEST GOES HERE
        console.log(state)
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormControl className={classes.field}>
                    <InputLabel>Name</InputLabel>
                    <Input id="name" aria-describedby="Name field" fullWidth 
                        onChange={handleChange}
                        value={state.name}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field}>
                    <InputLabel>Email</InputLabel>
                    <Input id="email" aria-describedby="Email field" fullWidth 
                        onChange={handleChange}
                        value={state.email}
                    />
                </FormControl> <br/>
                <FormControl className={classes.field}>
                    <InputLabel>Password</InputLabel>
                    <Input id="password" aria-describedby="Password field" type={passwordShown ? "text" : "password"} 
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
                <FormControl className={classes.field}>
                    <InputLabel>Re-enter Password</InputLabel>
                    <Input id="password_confirmation" aria-describedby="Password confirmation field" 
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
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}