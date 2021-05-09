import React, { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Input, InputLabel, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import ITutorSignup from '../../interfaces/ITutorSignup';

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
const eduLevels = ['O Level', 'A Level', 'Diploma', 'NITEC / Higher NITEC', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctoral Degree']

interface TutorPDProps {
    handleChange: ChangeEventHandler;
    handleEducationChange: any;
    handleLanguageChange: any;
    handleRadio: ChangeEventHandler;
    state: ITutorSignup;
}

export default function TutorPDForm(props: TutorPDProps) {
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
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="gender" value={props.state.gender} onChange={props.handleRadio}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl> <br />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Highest Qualification Obtained</InputLabel>
                <Select
                    name="education"
                    value={props.state.education}
                    onChange={(props.handleEducationChange)}
                    label="Highest Qualification Obtained"
                >
                    {eduLevels.map(lvl => <MenuItem value={lvl} key={lvl}>{lvl}</MenuItem>)}
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
                    name="languages"
                    value={props.state.languages}
                    onChange={props.handleLanguageChange}
                    input={<Input />}
                    renderValue={(selected) => (selected as string[]).join(', ')}
                    MenuProps={MenuProps}
                >
                    {languages.map((lang) => (
                        <MenuItem key={lang} value={lang}>
                            <Checkbox checked={props.state.languages.indexOf(lang) > -1} />
                            <ListItemText primary={lang} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> <br />
            <FormControl className={classes.field}>
                <TextField id="bio" label="Short Bio" multiline rows={5} placeholder={"Some helper text here..."}
                    onChange={props.handleChange}/>
            </FormControl> <br />

        </div>
    )
}