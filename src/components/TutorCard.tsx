import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import image from '../Shared/tutor.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '3%'
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
        <Grid className={classes.root} item xs={6} lg={3} xl={2}>
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
            <Typography variant="subtitle2" style={{fontFamily: 'Montserrat-Light', margin: '0 auto'}}>
                I have been teaching Chemistry and Physics to Upper Secondary students.
            </Typography>
        </Grid>
    )
}