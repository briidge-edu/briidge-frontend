import { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import IStudentSignup from '../../interfaces/IStudentSignup';
import ITutorSignup from '../../interfaces/ITutorSignup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },

    formControl: {
        margin: theme.spacing(3),
    },
}));

interface LocationProps {
    handleLocationChange: ChangeEventHandler;
    state: IStudentSignup | ITutorSignup;
}

export default function LocationForm(props: LocationProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {locations.map(group => <div key={locations.indexOf(group)}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{areas[locations.indexOf(group)]}</FormLabel>
                    <FormGroup>
                        {locations[locations.indexOf(group)].map(loc =>
                            <FormControlLabel
                                control={<Checkbox checked={props.state.locations.includes(loc)} onChange={props.handleLocationChange} name={loc} />}
                                label={loc} key={loc}
                            />)}
                    </FormGroup>
                </FormControl>
            </div>)}
        </div>
    )
}

const areas = ['Central', 'East', 'West', 'North', 'North-East']
const locations = [['Bishan', 'Bukit Merah', 'Bukit Timah', 'Geylang', 'Kallang', 'Marine Parade', 'Novena', 'Queenstown', 'Southern Islands', 'Tanglin', 'Toa Payoh'],
['Bedok', 'Changi', 'Pasir Ris', 'Tampines', 'Paya Lebar'],
['Boon Lay', 'Bukit Batok', 'Bukit Panjang', 'Choa Chu Kang', 'Clementi', 'Jurong East', 'Jurong West', 'Pioneer', 'Tengah', 'Tuas', 'Western Islands'],
['Lim Chu Kang', 'Mandai', 'Sembawang', 'Simpang', 'Sungei Kadut', 'Woodlands', 'Yishun'],
['Ang Mo Kio', 'Hougang', 'North Eastern Islands', 'Punggol', 'Seletar', 'Sengkang', 'Serangoon']]