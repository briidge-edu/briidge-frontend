import React, { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    field: {
        margin: '10px',
        width: '35%',
        minWidth: '300px'
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
        fontFamily: "LeagueSpartan"
    }
}));

interface StudentPDProps {
    handleChange: ChangeEventHandler;
    state: any;
}

export default function StudentPDForm(props: StudentPDProps) {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.field} variant="outlined">
                <InputLabel className={classes.input}>Name</InputLabel>
                <OutlinedInput className={classes.input} id="name" aria-describedby="Name field" label="Name"
                    onChange={props.handleChange}
                    value={props.state.name}
                />
            </FormControl> <br />
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Level of Education</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.state.educationLevel}
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
        </div>
    )
}