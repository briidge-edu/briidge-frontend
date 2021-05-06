import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthHeader from '../components/AuthHeader'
import { Button, FormControl, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import NaviBar from '../components/NaviBar';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },

    formControl: {
        marginTop: '2%',
        minWidth: 240,
    },

    upload: {
        marginTop: '5%',
        marginBottom: '5%'
    },

    input: {
    },

    button: {
        borderRadius: '30px'
    }

}));

function getSteps() {
    return ['Login Details', 'Personal Details', 'Location Preferences', 'Tutoring Preferences', 'Confirmation'];
  }

export default function StudentSignup() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [educationLevel, setEducationLevel] = useState("");

    const handleChange = (event: any) => {
        setEducationLevel(event.target.value);
    };

    return (
        <div className={classes.root}>
            <NaviBar />
            <AuthHeader text="Student Sign-Up" />
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Level of Education</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={educationLevel}
                        onChange={handleChange}
                        label="Level of Education"
                    >
                        <MenuItem value={"primary"}>Primary</MenuItem>
                        <MenuItem value={"secondary"}>Secondary</MenuItem>
                        <MenuItem value={"jc"}>Junior College</MenuItem>
                    </Select>
                </FormControl>
                <div className={classes.upload}>
                    <Typography variant="h5">Join under "BriidgeAssist"</Typography>
                    <Typography variant="subtitle1">Documentary proof is required for verification purposes.</Typography>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                </div>
            </div>

            <Button 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                >
            Back
            </Button>

            <Button variant="contained" color="primary" className={classes.button} >
                Next
            </Button>
        </div>
    )
}