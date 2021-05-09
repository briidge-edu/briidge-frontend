import { makeStyles } from '@material-ui/core/styles';
import ITutorSignup from '../../interfaces/ITutorSignup';
import { FormControl, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2%',
    },

    field: {
        marginLeft: '2%',
    }
}));

interface TutorConfirmationProps {
    state: ITutorSignup;
}

export default function TutorConfirmation(props: TutorConfirmationProps) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.row}>
                <FormControl className={classes.field} style={{ width: '350px' }}>
                    <InputLabel>Email</InputLabel>
                    <Input fullWidth defaultValue={props.state.email} disabled />
                </FormControl>
            </div>
            <div className={classes.row}>
                <FormControl className={classes.field}>
                    <InputLabel>Full Name</InputLabel>
                    <Input defaultValue={props.state.name} disabled />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Gender</InputLabel>
                    <Input defaultValue={props.state.gender} disabled />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Education</InputLabel>
                    <Input defaultValue={props.state.education} disabled />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Preferred Languages</InputLabel>
                    <Input defaultValue={props.state.languages} disabled />
                </FormControl>
            </div>
            <div className={classes.row}>
                <FormControl className={classes.field} style={{ width: '350px' }}>
                    <InputLabel>Bio</InputLabel>
                    <Input fullWidth defaultValue={props.state.bio} disabled multiline />
                </FormControl>
            </div>
            <div className={classes.row}>
                <FormControl className={classes.field} style={{ width: '350px' }}>
                    <InputLabel>Preferred Locations</InputLabel>
                    <Input fullWidth defaultValue={props.state.locations} disabled />
                </FormControl>
            </div>
            <div className={classes.row}>
                <FormControl className={classes.field}>
                    <InputLabel>Preferred Mode</InputLabel>
                    <Input defaultValue={props.state.lessonMode} disabled />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Subjects / Modules</InputLabel>
                    <Input defaultValue={props.state.subjects} disabled multiline />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Price Range</InputLabel>
                    <Input defaultValue={props.state.priceRange} disabled />
                </FormControl>
            </div>
        </div>
    )
}