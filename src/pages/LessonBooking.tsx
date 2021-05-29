import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({

}));

type Location = {
    state: any
}

export default function LessonBooking(props: any) {
    const classes = useStyles();
    const location = useLocation() as Location;

    return (
        <div>
            
        </div>
    )
}