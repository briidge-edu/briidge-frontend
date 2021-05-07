import React, { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';

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

    priceRange: {
        minWidth: '300px',
        textAlign: 'center',
        marginTop: '1%'
    }

}));

const levels = ['Primary', 'Secondary', 'Junior College']
const tertiaryLevels = ['Polytechnic', 'ITE', 'University']
const subjects = [['Insert primary subject', 'Insert primary subject', 'Insert primary subject', 'Insert primary subject',],
['Insert secondary subject', 'Insert secondary subject', 'Insert secondary subject', 'Insert secondary subject'],
['Insert JC subject', 'Insert JC subject', 'Insert JC subject', 'Insert JC subject']]
const priceRanges = ["20-30","30-40","40-50","50-60","60-70","70-80","80-90","90-100","100-110","110-120"]

interface PreferencesProps {
    handleModeChange: ChangeEventHandler;
    handleSubjectChange: ChangeEventHandler;
    handleChange: ChangeEventHandler;
    handlePriceChange: any;
    state: any;
}

export default function TuitionPreferences(props: PreferencesProps) {
    const classes = useStyles();

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Preferred Mode of Teaching</FormLabel>
                <RadioGroup aria-label="gender" name="lesson-mode" value={props.state.lessonModef2f ? "f2f" : "online"} onChange={props.handleModeChange}>
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
                                    control={<Checkbox checked={props.state[sub]}
                                        disabled={props.state.education !== levels[subjects.indexOf(group)]}
                                        onChange={props.handleSubjectChange}
                                        name={sub} />}
                                    label={sub.replaceAll('_', ' ')}
                                />)}
                        </FormGroup>
                    </FormControl>
                )}

                <div className={classes.tertiaryContainer}>
                    {tertiaryLevels.map(x => <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">{x}</FormLabel>
                        <TextField
                            id={x + 'Module'} value={props.state.module} label="Module Code" variant="outlined"
                            disabled={props.state.education !== x}
                            onChange={props.handleChange} />
                    </FormControl>)}
                </div>
            </div>
            <FormControl variant="outlined" className={classes.priceRange}>
                <InputLabel>Price Range / h</InputLabel>
                <Select
                    value={props.state.unparsedPriceRange}
                    onChange={(props.handlePriceChange)}
                    label="Price Range / h"
                >
                    {priceRanges.map(range => <MenuItem value={range}>{range}</MenuItem>)}
                </Select>
            </FormControl> <br />

        </div>
    )
}