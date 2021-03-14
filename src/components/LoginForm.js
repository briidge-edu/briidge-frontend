import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    field: {
        margin: '10px',
        width: '30%'
    },

    personIcon: {
        padding: '12px'
    }

}));

export default function LoginForm() {
    const classes = useStyles();
    const [passwordShown, setPasswordShown] = useState(true);
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.field}>
                <InputLabel>Email/Username</InputLabel>
                <Input id="email" aria-describedby="Email field" fullWidth 
                    endAdornment={
                        <InputAdornment position="end">
                            <PersonIcon className={classes.personIcon}/>
                        </InputAdornment>}
                />
            </FormControl> <br/>
            <FormControl className={classes.field}>
                <InputLabel>Password</InputLabel>
                <Input id="password" aria-describedby="Password field" type={passwordShown ? "text" : "password"} endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                >
                  {passwordShown ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>}/>
                
            </FormControl>
        </form>
    )
}