import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import image from '../Shared/tutor.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: '10px',
        marginRight: '10px'
    },

    image: {
        borderRadius: '50%',
        height: '100px',
        width: '100px'
    }
}));

export default function TutorCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={image} className={classes.image} alt=''/>
            <Typography>Alberto Connelli</Typography>
            <Typography variant="subtitle2" style={{fontFamily: 'Montserrat-Light'}}>
                PART-TIME TUTOR
            </Typography>
            <div>
                &#11088; &#11088; &#11088; &#11088; &#11088;
            </div>
            <Typography variant="subtitle2" style={{fontFamily: 'Montserrat-Light'}}>
                Student at National University of Singapore
            </Typography>
            <Typography variant="subtitle2" style={{fontFamily: 'Montserrat-Light'}}>
                I have been teaching Chemistry and Physics to Upper Secondary students.
            </Typography>
        </div>
    )
}