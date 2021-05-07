import React, { ChangeEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },

    formControl: {
        margin: theme.spacing(3),
    },


}));

const areas = ['Central', 'East', 'West', 'North', 'North-East']
const locations = [['Bishan', 'Bukit_Merah', 'Bukit_Timah', 'Geylang', 'Kallang', 'Marine_Parade', 'Novena', 'Queenstown', 'Southern_Islands', 'Tanglin', 'Toa_Payoh'], ['Bedok', 'Changi', 'Pasir_Ris', 'Tampines', 'Paya_Lebar'], ['Boon_Lay', 'Bukit_Batok', 'Bukit_Panjang', 'Choa_Chu_Kang', 'Clementi', 'Jurong_East', 'Jurong_West', 'Pioneer', 'Tengah', 'Tuas', 'Western_Islands'], ['Lim_Chu_Kang', 'Mandai', 'Sembawang', 'Simpang', 'Sungei_Kadut', 'Woodlands', 'Yishun'], ['Ang_Mo_Kio', 'Hougang', 'North_Eastern_Islands', 'Punggol', 'Seletar', 'Sengkang', 'Serangoon']]

interface LocationProps {
    handleLocationChange: ChangeEventHandler;
    state: any;
}

export default function LocationForm(props: LocationProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {locations.map(group => <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{areas[locations.indexOf(group)]}</FormLabel>
                    <FormGroup>
                        {locations[locations.indexOf(group)].map(loc =>
                            <FormControlLabel
                                control={<Checkbox checked={props.state[loc]} onChange={props.handleLocationChange} name={loc} />}
                                label={loc.replaceAll('_', ' ')}
                            />)}
                    </FormGroup>
                </FormControl>
            </div>)}
            
           

        </div>
    )
}