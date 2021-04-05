import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthHeader from '../components/AuthHeader'
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import NaviBar from '../components/NaviBar';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },

    formControl: {
        marginTop: '2%',
        minWidth: 240
    },

    upload: {
        marginTop: '5%',
        marginBottom: '5%'
    },

    input: {
        display: 'none'
    },

    button: {
        borderRadius: '30px'
    }

}));

export default function StudentSignup() {
    const classes = useStyles();

    const [educationLevel, setEducationLevel] = useState("")

    const handleChange = (event:any) => {
        setEducationLevel(event.target.value);
    };

    return (
        <div className={classes.root}>
            <NaviBar />
            <AuthHeader text="Student Sign-Up" />
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
                  
            <Button variant="contained" color="primary" className={classes.button} type="submit">
                Next
            </Button>
        </div>
    )
}