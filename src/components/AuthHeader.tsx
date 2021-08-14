import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { BRIIDGE_BLUE, BRIIDGE_YELLOW } from '../themes';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '10%',
        marginBottom: '30px',
        '@media (max-width: 1100px)': {
            marginTop: '30%',
            paddingLeft: '5%',
            paddingRight: '5%'
        }
    },

    h3: {
        fontFamily: 'LeagueSpartan',
        color: BRIIDGE_BLUE,
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
        textDecorationColor: BRIIDGE_YELLOW,
    }
}));

interface Text {
    text: string;
}

export default function AuthHeader(props:Text) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h3" className={classes.h3}>
                {props.text}
            </Typography>
        </div>
        
    )
}