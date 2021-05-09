import { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Chip, FormControl, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ITutorSignup from '../../interfaces/ITutorSignup';

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
        width: '400px',
        marginRight: '20px'
    },

    priceRange: {
        minWidth: '300px',
        textAlign: 'center',
        marginTop: '1%'
    }

}));

const levels = ['Primary', 'Secondary', 'Junior College']
const subjects = [['Primary: Subject 1', 'Primary: Subject 2', 'Primary: Subject 3', 'Primary: Subject 4',],
['Secondary: Subject 1', 'Secondary: Subject 2', 'Secondary: Subject 3', 'Secondary: Subject 4'],
['Junior College: Subject 1', 'Junior College: Subject 2', 'Junior College: Subject 3', 'Junior College: Subject 4']]

interface PreferencesProps {
    handleRadio: ChangeEventHandler;
    handleSubjectChange: ChangeEventHandler;
    handleModuleChange: any;
    handleChange: ChangeEventHandler;
    handlePriceChange: any;
    state: ITutorSignup;
}

export default function TuitionPreferences(props: PreferencesProps) {
    const classes = useStyles();

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Preferred Mode of Teaching</FormLabel>
                <RadioGroup name="lessonMode" value={props.state.lessonMode} onChange={props.handleRadio}>
                    <FormControlLabel value="Face-to-Face" control={<Radio />} label="Face-to-Face" />
                    <FormControlLabel value="Online" control={<Radio />} label="Online" />
                </RadioGroup>
            </FormControl>
            <div className={classes.subjectsContainer}>
                {subjects.map(group =>
                    <FormControl key={subjects.indexOf(group)} component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">{levels[subjects.indexOf(group)]}</FormLabel>
                        <FormGroup>
                            {subjects[subjects.indexOf(group)].map(sub =>
                                <FormControlLabel
                                    control={<Checkbox checked={props.state.subjects.includes(sub)}
                                        onChange={props.handleSubjectChange}
                                        key={sub}
                                        name={sub} />}
                                    label={sub}
                                />)}
                            {/* <FormControl>
                                <InputLabel>Hourly Rate</InputLabel>
                                <Input disabled={props.state.subjects.filter(s => s.includes(levels[subjects.indexOf(group)])).length === 0}/>
                            </FormControl> */}
                        </FormGroup>
                    </FormControl>
                )}
            </div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">For Polytechnics, ITE and Universities</FormLabel>
                <div style={{ display: 'flex' }}>
                    <Autocomplete
                        className={classes.autocomplete}
                        multiple
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
                </div>
            </FormControl> <br />
            <FormControl>
                <InputLabel>Hourly Rate</InputLabel>
                <Input type="number" id="priceRange" onChange={props.handleChange} />
            </FormControl>
        </div>
    )
}