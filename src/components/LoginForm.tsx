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
        email: "",
        password: "",
    });

    const [loginErrors, setLoginErrors] = useState();

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
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
                <FormControl className={classes.field}>
                    <InputLabel>Email/Username</InputLabel>
                    <Input id="email" aria-describedby="Email field" fullWidth 
                        endAdornment={
                            <InputAdornment position="end">
                                <PersonIcon className={classes.personIcon}/>
                            </InputAdornment>}
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
                                >
                                {passwordShown ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>}
                        onChange={handleChange}
                        value={state.password}
                    />
                </FormControl> <br/>
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}