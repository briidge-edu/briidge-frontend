import React, { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    field: {
        marginTop: '1%',
        margin: '10px',
        width: '35%',
        minWidth: '300px'
    },

    formControl: {
        marginTop: '1%',
        width: '35%',
        minWidth: '300px',
    },

    upload: {
        marginTop: '5%',
        marginBottom: '5%'
    },

    input: {
        fontFamily: "LeagueSpartan"
    }
}));

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 250,
            width: 250,
        },
    },
};

const languages = ['English', 'Mandarin', 'Malay', 'Tamil']
const eduLevels = ['Primary', 'Secondary', 'Junior College', 'Polytechnic', 'ITE', 'University']

interface StudentPDProps {
    handleChange: ChangeEventHandler;
    handleEducationChange: any;
    handleLanguageChange: any;
    state: {
        name: string;
        education: string,
        language: string[],
    };
}

export default function StudentPDForm(props: StudentPDProps) {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.field} variant="outlined">
                <InputLabel className={classes.input}>Full Name</InputLabel>
                <OutlinedInput className={classes.input} id="name" aria-describedby="Name field" label="Full Name"
                    onChange={props.handleChange}
                    value={props.state.name}
                />
            </FormControl> <br />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Level of Education</InputLabel>
                <Select
                    name="education"
                    value={props.state.education}
                    onChange={(props.handleEducationChange)}
                    label="Level of Education"
                >
                    {eduLevels.map(lvl => <MenuItem value={lvl}>{lvl}</MenuItem>)}
                </Select>
            </FormControl> <br />
            {/* <div className={classes.upload}>
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
                </div> */}

            <FormControl className={classes.formControl}>
                <InputLabel>Preferred Languages</InputLabel>
                <Select
                    multiple
                    name="language"
                    value={props.state.language}
                    onChange={props.handleLanguageChange}
                    input={<Input />}
                    renderValue={(selected) => (selected as string[]).join(', ')}
                    MenuProps={MenuProps}
                >
                    {languages.map((lang) => (
                        <MenuItem key={lang} value={lang}>
                            <Checkbox checked={props.state.language.indexOf(lang) > -1} />
                            <ListItemText primary={lang} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> <br />

        </div>
    )
}