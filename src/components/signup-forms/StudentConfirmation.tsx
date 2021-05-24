import { makeStyles } from '@material-ui/core/styles';
import IStudentSignup from '../../interfaces/IStudentSignup';
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

interface StudentConfirmationProps {
    state: IStudentSignup;
}

export default function StudentConfirmation(props: StudentConfirmationProps) {
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
                    <InputLabel>Preferred Locations</InputLabel>
                    <Input fullWidth defaultValue={props.state.locations} disabled />
                </FormControl>
            </div>
            <div className={classes.row}>
                <FormControl className={classes.field}>
                    <InputLabel>Preferred Mode</InputLabel>
                    <Input defaultValue={props.state.lessonMode === 'f2f' ? 'Face-to-face' : 'Online'} disabled />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Subjects / Modules</InputLabel>
                    <Input defaultValue={props.state.subjects} disabled multiline />
                </FormControl>
                <FormControl className={classes.field}>
                    <InputLabel>Price Range (S$)</InputLabel>
                    <Input defaultValue={props.state.priceRange} disabled />
                </FormControl>
            </div>
        </div>
    )
}