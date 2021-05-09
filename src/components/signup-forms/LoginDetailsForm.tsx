import { ChangeEventHandler, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IStudentSignup from '../../interfaces/IStudentSignup';

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
    state: IStudentSignup;
}

export default function LoginForm(props: LoginFormProps) {
    const classes = useStyles();

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
            <FormControl className={classes.field} variant="outlined">
                <InputLabel className={classes.input}>Email</InputLabel>
                <OutlinedInput className={classes.input} id="email" aria-describedby="Email field" label="Email"
                    onChange={props.handleChange}
                    value={props.state.email}
                    required
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
        </div>
    )
}