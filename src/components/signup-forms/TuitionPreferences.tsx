import React, { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Chip, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import IStudentSignup from '../../interfaces/IStudentSignup';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        minWidth: '100px'
    },

    subjectsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    tertiaryContainer: {
        display: 'flex',
        flexDirection: 'column'
    },

    autocomplete: {
        width: '400px'
    },

    priceRange: {
        minWidth: '300px',
        textAlign: 'center',
        marginTop: '1%'
    }

}));

const levels = ['Primary', 'Secondary', 'Junior College']
const subjects = [['Insert primary subject1', 'Insert primary subject2', 'Insert primary subject3', 'Insert primary subject4',],
['Insert secondary subject1', 'Insert secondary subject2', 'Insert secondary subject3', 'Insert secondary subject4'],
['Insert JC subject1', 'Insert JC subject2', 'Insert JC subject3', 'Insert JC subject4']]
const priceRanges = ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", "90-100", "100-110", "110-120"]

interface PreferencesProps {
    handleRadio: ChangeEventHandler;
    handleSubjectChange: ChangeEventHandler;
    handleModuleChange: any;
    handleChange: ChangeEventHandler;
    handlePriceChange: any;
    state: IStudentSignup;
}

export default function TuitionPreferences(props: PreferencesProps) {
    const classes = useStyles();

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Preferred Mode of Teaching</FormLabel>
                <RadioGroup aria-label="lessonMode" name="lessonMode" value={props.state.lessonMode} onChange={props.handleRadio}>
                    <FormControlLabel value="f2f" control={<Radio />} label="Face-to-Face" />
                    <FormControlLabel value="online" control={<Radio />} label="Online" />
                </RadioGroup>
            </FormControl>
            <div className={classes.subjectsContainer}>
                {subjects.map(group =>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">{levels[subjects.indexOf(group)]}</FormLabel>
                        <FormGroup>
                            {subjects[subjects.indexOf(group)].map(sub =>
                                <FormControlLabel
                                    control={<Checkbox checked={props.state.subjects.includes(sub)}
                                        disabled={props.state.education !== levels[subjects.indexOf(group)]}
                                        onChange={props.handleSubjectChange}
                                        key={sub}
                                        name={sub} />}
                                    label={sub.replaceAll('_', ' ')}
                                />)}
                        </FormGroup>
                    </FormControl>
                )}
            </div>

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">For Polytechnics, ITE and Universities</FormLabel>
                <Autocomplete
                    className={classes.autocomplete}
                    multiple
                    disabled={levels.includes(props.state.education)}
                    id="tags-filled"
                    options={[]}
                    defaultValue={[]}
                    freeSolo
                    renderTags={(value: string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} variant="filled" label="Module Codes" placeholder="Type a module code, then press Enter" />
                    )}
                    onChange={props.handleModuleChange}
                />
            </FormControl> <br />
            <FormControl variant="outlined" className={classes.priceRange}>
                <InputLabel>Price Range / h</InputLabel>
                <Select
                    name="priceRange"
                    value={props.state.priceRange}
                    onChange={(props.handlePriceChange)}
                    label="Price Range / h"
                >
                    {priceRanges.map(range => <MenuItem value={range}>{range}</MenuItem>)}
                </Select>
            </FormControl> <br />
        </div>
    )
}