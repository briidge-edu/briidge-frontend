import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '15px',
        marginBottom: '30px'
    },

    h3: {
        color: '#0051FF',
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
        textDecorationColor: '#FFDF00',
    }

}));

export default function AuthHeader(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h3" className={classes.h3}>
                {props.text}
            </Typography>
        </div>
        
    )
}